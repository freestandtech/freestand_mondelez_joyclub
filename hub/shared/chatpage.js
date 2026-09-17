/* Stepped journey page v5 · setup (builder) steps → ad → LINE / web-form journey → delivery (truck, no OTP) → feedback → purchase intent → brand store.
   window.CHAT_CONFIG: { title, brand, campaignId, channelLabel, avatar, pre:[setup steps], ad|googleAd, friend, persona, skus, skuRule, purchase, web,
     groups:[ [ {b|u|img,opts,t} ... ] with .fact .set:{name,phone,address} .panel:"verify"|"delivery"|"gratify"|"sku"|"purchase" .stage(n) .date .web .addFriend ] } */
(function(){
const C=window.CHAT_CONFIG; document.title=C.title; LINE.setAvatar(C.avatar);
const root=document.getElementById("chat-root");
const FRAMED=window.self!==window.top;
const PRE=C.pre||[];
let lastStep=-1,timers=[],curStep=0;
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\n/g,"<br>");}
function msgHtml(m){ if(m.b!==undefined)return LINE.bot(m.b,m.opts,m.t); if(m.u!==undefined)return LINE.user(m.u,m.t); if(m.img)return LINE.img(m.img); return ""; }
function groupHtml(g){ return (g.date?LINE.date(g.date):"")+g.map(msgHtml).join("")+(g.after?(g.afterDate?LINE.date(g.afterDate):"")+g.after.map(msgHtml).join(""):""); }
function state(upto){
  const facts=[],st={name:false,phone:false,address:false}; let panel=null,stage=0;
  C.groups.forEach((g,i)=>{ if(i<=upto){ if(g.fact)facts.push.apply(facts,[].concat(g.fact)); if(g.set)Object.assign(st,g.set); if(i===upto){panel=g.panel||null;stage=g.stage||0;} } });
  return {facts,st,panel,stage};
}
const P=C.persona;
const TAGBG=["#DCE8F2","#FDF3DC","#EDE4F7","#DFF3EA"];
const seen=new Set();
const tag=(t,i,anim)=>'<span class="pf-tag" style="background:'+TAGBG[i%4]+';'+(anim===false||seen.has(t)?'animation:none;':'animation-delay:0.1s;')+'">'+esc(t)+'</span>';
const svg=d=>'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#052762" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>';
const ICO={user:svg('<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>'),chk:svg('<path d="M9 12l2 2 4-4"></path><circle cx="12" cy="12" r="9"></circle>'),truck:svg('<rect x="1" y="6" width="14" height="11" rx="1"></rect><path d="M15 10h4l3 3v4h-7z"></path><circle cx="6" cy="19" r="2"></circle><circle cx="18" cy="19" r="2"></circle>'),cal:svg('<rect x="3" y="4" width="18" height="17" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path>'),cart:svg('<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"></path>')};
const TRUCK='<svg viewBox="0 0 72 40" width="72" height="40"><rect x="2" y="6" width="42" height="22" rx="3" fill="#052762"></rect><path d="M44 12h13l11 9v7H44z" fill="#0A49B7"></path><path d="M48 15h8l6 5H48z" fill="#DCE6F5"></path><rect x="2" y="26" width="66" height="3" fill="#031A44"></rect><text x="23" y="20.5" font-size="6.5" font-weight="700" fill="#fff" text-anchor="middle" font-family="Poppins,sans-serif">FreeStand</text><g class="wh"><circle cx="15" cy="31" r="6" fill="#1F2937"></circle><circle cx="15" cy="31" r="2.5" fill="#CBD5E1"></circle><circle cx="15" cy="26.6" r="1" fill="#94A3B8"></circle></g><g class="wh"><circle cx="55" cy="31" r="6" fill="#1F2937"></circle><circle cx="55" cy="31" r="2.5" fill="#CBD5E1"></circle><circle cx="55" cy="26.6" r="1" fill="#94A3B8"></circle></g></svg>';
const DEPOT='<svg viewBox="0 0 56 44" width="56" height="44"><path d="M4 20 28 6l24 14v24H4z" fill="#DCE6F5" stroke="#052762" stroke-width="2" stroke-linejoin="round"></path><rect x="21" y="26" width="14" height="18" fill="#052762"></rect><rect x="9" y="24" width="7" height="7" fill="#fff" stroke="#052762" stroke-width="1.5"></rect><rect x="40" y="24" width="7" height="7" fill="#fff" stroke="#052762" stroke-width="1.5"></rect><path d="M4 20h48" stroke="#052762" stroke-width="2"></path></svg>';
const HOUSE='<svg viewBox="0 0 56 48" width="56" height="48"><path d="M6 24 28 6l22 18" fill="none" stroke="#052762" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"></path><path d="M11 21v26h34V21" fill="#FFF3E0" stroke="#052762" stroke-width="2"></path><rect x="23" y="31" width="10" height="16" fill="#FA6600"></rect><rect x="35" y="28" width="7" height="7" fill="#fff" stroke="#052762" stroke-width="1.5"></rect><rect x="14" y="28" width="7" height="7" fill="#fff" stroke="#052762" stroke-width="1.5"></rect></svg>';
function frame(icon,title,sub,status,statusColor,body){
  return '<div class="pf"><div class="pf-hd"><div class="pf-ic">'+icon+'</div><div><div class="pf-t">'+title+'</div><div class="pf-s">'+sub+'</div></div><div class="pf-st"><span class="dot" style="background:'+(statusColor||"#6BCB77")+'"></span>'+status+'</div></div>'+body+'</div>';
}
function foot(facts){
  const last=facts.slice(-4);
  return '<div class="pf-foot"><img src="'+P.photo+'" alt="" style="object-position:'+(P.photoPos||"center top")+'"><div><div class="n">'+esc(P.name)+'</div><div class="s">'+esc(P.phone)+' · '+esc(C.source||("LINE · "+C.brand))+'</div></div><div class="tg">'+last.map((t,i)=>tag(t,i,false)).join("")+'</div></div>';
}
function profileFrame(facts,st){
  const row=(lbl,val,on,top,small)=>'<div class="pf-row" style="top:'+top+'px"><div class="l">'+lbl+'</div>'+(on?'<div class="v'+(small?" sm":"")+'">'+esc(val)+'</div>':'<div class="shim"></div>')+'</div>';
  const body='<div class="pf-tabs"><span class="on">Personal details</span><span>Other details</span><span>Relevant cohorts</span></div>'
    +'<div class="pf-photo">'+(st.name?'<img src="'+P.photo+'" alt="'+esc(P.name)+'" style="object-position:'+(P.photoPos||"center top")+'">':'<span>?</span>')+'</div>'
    +row("Name",P.name,st.name,128)+row("Phone",P.phone,st.phone,184)+row("Address",P.address,st.address,240,true)
    +'<div class="pf-lbl" style="left:32px">Self-declared</div><div class="pf-lbl" style="left:420px">Relevant cohorts</div>'
    +'<div class="pf-box" style="left:32px;width:366px">'+(facts.length?facts.map((t,i)=>tag(t,i)).join(""):'<i class="pf-empty">Collected as the customer chats with the bot…</i>')+'</div>'
    +'<div class="pf-box" style="left:420px;width:358px">'+(st.address?(P.cohorts||[]).map((t,i)=>tag(t,i+1)).join(""):(st.phone?tag(C.optinTag||"LINE opt-in",1):'<i class="pf-empty">Assigned once the address is verified…</i>'))+'</div>';
  setTimeout(()=>{ facts.forEach(f=>seen.add(f)); if(st.address)(P.cohorts||[]).forEach(f=>seen.add(f)); if(st.phone)seen.add(C.optinTag||"LINE opt-in"); },50);
  return frame(ICO.user,"User profile",esc(C.source||("LINE · "+C.brand)),"SYNCED","#6BCB77",body);
}
function panelFrame(kind,stage,facts){
  const ft=foot(facts||[]);
  if(kind==="verify"){
    const checks=[["Postal code ↔ address match","〒"+P.postal+" resolves to "+P.area+" · matches the address the customer typed"],["Serviceable area","Inside the active delivery zone for this campaign"],["Geocoding","Building-level pin placed · confidence 98%"],["Duplicate check","No prior claim on this LINE ID, phone number, email or address"]];
    return frame(ICO.chk,"Address verification","Automated · 4 checks · postal code "+P.postal,"VERIFIED","#6BCB77",
      '<div class="pf-body"><div class="vf-addr"><div class="k">Address as typed</div><div class="v">'+esc(P.address)+'</div></div>'
      +checks.map((c,i)=>'<div class="vf-chk" style="animation-delay:'+(0.2+i*0.35)+'s"><span class="ok">✓</span><div><div class="t">'+c[0]+'</div><div class="s">'+c[1]+'</div></div><span class="pass">PASS</span></div>').join("")
      +'<div class="vf-done" style="animation-delay:'+(0.3+checks.length*0.35)+'s"><span class="big">✓</span><div><div class="t">All checks passed · claim approved</div><div class="s">Confirmation sent to the customer · sample reserved at '+esc(P.fc||"the nearest fulfilment centre")+'</div></div></div>'+ft+'</div>');
  }
  if(kind==="delivery"){
    const carrier=P.carrier||"Yamato Transport", steps=["Order created","Packed","Shipped","Out for delivery","Delivered"];
    return frame(ICO.truck,"Delivery tracking",esc(P.trackId||"4123-5567-8901")+" · "+esc(carrier),"IN TRANSIT","#FA6600",
      '<div class="pf-body"><div class="dl-line">'+steps.map((t,i)=>'<div class="dl-step todo"><span class="dot">✓</span>'+t+'</div>'+(i<4?'<div class="dl-bar"></div>':"")).join("")+'</div>'
      +'<div class="dl-scene"><div class="dl-road"></div>'
      +'<div class="dl-stop dep">'+DEPOT+'<span>'+esc(P.fc||"Fulfilment centre")+'</span></div>'
      +'<div class="dl-stop home">'+HOUSE+'<span>'+esc(P.homeLabel||P.address.split(",")[0])+'</span></div>'
      +'<div class="dl-truck full"><div class="dl-tag">'+esc(carrier)+' · '+esc(P.eta||"arrives Sep 14")+'</div>'+TRUCK+'</div>'
      +'<div class="dl-pop dl-late">✓ Delivered 14:32 · left at the door (置き配) · photo proof saved to the profile</div></div>'
      +'<div class="dl-grid">'+[["Recipient",P.name,P.phone],["Deliver to",P.homeLabel||P.address.split(",")[0],P.area],["Carrier",carrier,"Tracking "+(P.trackId||"")]].map(c=>'<div class="dl-card"><div class="k">'+c[0]+'</div><div class="v">'+esc(c[1])+'</div><div class="s">'+esc(c[2])+'</div></div>').join("")+'</div>'+ft+'</div>');
  }
  if(kind==="gratify"){
    return frame(ICO.cal,"Gratification period","7 days · no brand messages in the window","WAITING","#FA6600",
      '<div class="pf-body"><div class="gr-line">'+[["Day 0","Delivered","Sep 14"],["Day 1–6","Trial window","brand stays quiet"],["Day 7","Feedback request","Sep 21 · auto-triggered on LINE"]].map((d,i)=>'<div class="gr-step'+(i===2?" nxt":i===0?" don":"")+'" style="animation-delay:'+(i*0.25)+'s"><div class="d">'+d[0]+'</div><div class="t">'+d[1]+'</div><div class="s">'+d[2]+'</div></div>').join('<span class="gr-bar"></span>')+'</div>'
      +'<div class="gr-note"><b>Why wait?</b> The customer gets time to actually use the sample. FreeStand holds all messaging for the gratification period, then triggers the feedback question automatically · one nudge, at the right moment, on the channel the customer already replied on.</div>'
      +'<div class="gr-facts">'+[["1 nudge","max, in the whole window"],["Day 7","feedback question fires"],["Day 10","reminder only if no reply"]].map(f=>'<div><div class="v">'+f[0]+'</div><div class="k">'+f[1]+'</div></div>').join("")+'</div>'+ft+'</div>');
  }
  if(kind==="sku"){
    const S=C.skus||[], sel=(stage||0);
    return frame(ICO.chk,"SKU allocation","Rule: "+esc(C.skuRule||"answer → sample SKU"),"ALLOCATED","#6BCB77",
      '<div class="pf-body"><div class="vf-addr"><div class="k">Answer received</div><div class="v">'+esc(S[sel]?S[sel].answer:"")+'</div><div class="k" style="margin-left:auto">Qualified ✓</div></div>'
      +'<div class="sk-grid" style="--n:'+S.length+'">'+S.map((k,i)=>'<div class="sk'+(i===sel?" sel":"")+'" style="animation-delay:'+(i*0.15)+'s"><div class="sk-img" style="background:'+k.color+'">'+esc(k.short||k.name.split(" ")[0])+'</div><div class="sk-ans">'+esc(k.answer)+'</div><div class="sk-name">'+esc(k.name)+'</div><div class="sk-pack">'+esc(k.pack)+'</div><div class="sk-why">'+esc(k.why)+'</div><div class="sk-badge">'+(i===sel?"✓ Allocated":"Not selected")+'</div></div>').join("")+'</div>'
      +'<div class="vf-done" style="animation-delay:0.6s"><span class="big">✓</span><div><div class="t">'+esc(S[sel]?S[sel].name:"")+' reserved for this claim</div><div class="s">Inventory held at '+esc(P.fc||"the nearest fulfilment centre")+' · the rest of the journey continues with this SKU</div></div></div>'+ft+'</div>');
  }
  if(kind==="purchase"){
    const U=C.purchase||{};
    const ev=(U.events||[]).map((e,i)=>'<div class="pu-row" style="animation-delay:'+(0.15+i*0.3)+'s"><span class="pu-t">'+esc(e[0])+'</span><span class="pu-dot"></span><div><div class="t">'+esc(e[1])+'</div><div class="s">'+e[2]+'</div></div></div>').join("");
    return frame(ICO.cart,"Purchase intent → e-commerce","Buy-now tap · redirect · attribution","TRACKED","#6BCB77",
      '<div class="pf-body"><div class="vf-addr" style="align-items:flex-start"><div class="k">Destination</div><div class="v pu-url">'+esc(U.dest||"")+'<span class="utm">'+esc(U.utm||"")+'</span></div></div>'
      +'<div class="pu-log">'+ev+'</div>'
      +'<div class="dl-grid">'+[["Attributed to",U.attr[0],U.attr[1]],["Coupon",U.coupon[0],U.coupon[1]],["Pixels fired",U.pixels[0],U.pixels[1]]].map(c=>'<div class="dl-card"><div class="k">'+c[0]+'</div><div class="v">'+esc(c[1])+'</div><div class="s">'+esc(c[2])+'</div></div>').join("")+'</div>'+ft+'</div>');
  }
  return "";
}
function igFrame(img,ig){
  const I=(d,s)=>'<svg width="'+(s||24)+'" height="'+(s||24)+'" viewBox="0 0 24 24" fill="none" stroke="#262626" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>';
  const heart='<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.8 1-1.1a5.5 5.5 0 0 0 0-7.7z"></path>', cmt='<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-4-1L3 20l1.3-4.4A8.4 8.4 0 1 1 21 11.5z"></path>', send='<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"></path>', save='<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>';
  const home='<path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z"></path>', search='<circle cx="11" cy="11" r="7"></circle><path d="M20 20l-4-4"></path>', plus='<rect x="3" y="3" width="18" height="18" rx="5"></rect><path d="M12 8v8M8 12h8"></path>', reels='<rect x="3" y="3" width="18" height="18" rx="4"></rect><path d="M3 9h18M9 3l3 6M15 3l3 6M11 13l4 2.5-4 2.5z"></path>';
  const av=ig.avImg?'<div class="ig-av" style="background:#fff url('+ig.avImg+') center/cover no-repeat"></div>':'<div class="ig-av" style="background:'+(ig.avBg||"#000")+'">'+esc(ig.avText||C.brand.charAt(0))+'</div>';
  const handle=esc(ig.handle||C.brand.toLowerCase()+"_japan");
  return '<div class="ig"><div class="ln-status" style="border-radius:0"><span>9:41</span><span class="sig">●●● ▲ ▮▮▮</span></div>'
  +'<div class="ig-top"><span class="ig-logo">Instagram</span><span class="ig-ic">'+I(heart)+I(send)+'</span></div>'
  +'<div class="ig-ph">'+av+'<div><div class="h">'+handle+' <i class="ig-vf">✓</i></div><div class="s">Sponsored</div></div><span class="dots">⋯</span></div>'
  +'<div class="ig-media"><img class="ig-img" src="'+img+'" alt="ad"></div>'
  +'<div class="ig-cta live" data-go="1"><span>'+esc(ig.cta||"Claim free sample")+'</span><span>›</span></div>'
  +'<div class="ig-acts">'+I(heart)+I(cmt)+I(send)+'<span class="ig-dots"><i class="on"></i><i></i><i></i><i></i></span>'+I(save)+'</div>'
  +'<div class="ig-cap"><b>'+esc(ig.likes||"3,241 likes")+'</b><div><b>'+handle+'</b> '+esc(ig.caption||"")+'</div><div class="ig-url">'+esc(ig.url||"")+'</div></div>'
  +'<div class="ig-nav">'+I(home,26)+I(search,26)+I(plus,26)+I(reels,26)+'<div class="ig-me" style="background:url(../shared/assets/sakura.png) 62% 20%/cover"></div></div></div>';
}
function adBrowser(g){
  return '<div class="ig" style="background:#fff"><div class="ln-status" style="border-radius:0"><span>9:41</span><span class="sig">●●● ▲ ▮▮▮</span></div>'
  +'<div class="wb-bar"><span style="font-size:18px;color:#555;font-family:Roboto">‹</span><div class="wb-url"><span class="lock"></span><span class="txt">'+esc(g.url||"google.co.jp")+'</span></div><span style="font-size:16px;color:#555">⋮</span></div>'
  +'<div class="wb-body">'+webScreen(g)+'</div></div>';
}
const DEFAULT_TYPES=["Instagram / Meta ads → LINE add-friend","Google & Yahoo! JAPAN sponsored search","ChatGPT recommendations","Email newsletter","Vending-machine QR code","Website web form"];
function adScreen(){
  const two=!!C.ad.media2;
  const left=C.ad.ig?'<div class="ad-img" style="background:#fff;overflow:hidden;">'+igFrame(C.ad.img,C.ad.ig)+'</div>':(C.ad.img?'<img class="ad-img" src="'+C.ad.img+'" alt="ad">':'<div class="ad-img ad-mock" id="ad-mock"></div>');
  const second=two?'<div class="ad-img b" style="background:#fff;overflow:hidden;">'+adBrowser(C.ad.media2)+'</div>':"";
  const now=C.ad.now||[0];
  return '<div class="ad-wrap'+(two?" two":"")+'">'+left+second
    +'<div class="ad-side"><div class="ad-kicker">Acquisition · how the journey starts</div><div class="ad-cap">'+C.ad.caption+'</div>'
    +'<div class="ad-types">'+(C.ad.types||DEFAULT_TYPES).map((t,i)=>'<div class="ad-type'+(now.indexOf(i)>=0?" this":"")+'" style="animation-delay:'+(i*0.14)+'s"><span class="b">'+(i+1)+'</span>'+t+(now.indexOf(i)>=0?'<span class="now">this demo</span>':"")+'</div>').join("")+'</div>'
    +'<div class="ad-line"><svg width="22" height="22" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#06C755"></rect><path d="M12 5.5c-3.9 0-7 2.5-7 5.6 0 2.8 2.5 5.1 5.9 5.5.2 0 .5.2.6.4l.1 1.3c0 .3.3.5.6.3 1.6-.9 4.2-2.6 5.6-4.3.8-.9 1.2-2 1.2-3.2 0-3.1-3.1-5.6-7-5.6z" fill="#fff"></path></svg>'+(C.ad.line||"Every entry is UTM-tagged and lands in one place: the brand’s LINE official account.")+'</div>'
    +'<img src="../shared/assets/fs-logo.png" style="height:34px;margin-top:26px;display:block;" alt="FreeStand"></div></div>';
}
function goNext(dir){ if(FRAMED) parent.postMessage({hubGo:dir},"*"); else location.hash="#"+Math.max(0,curStep+dir); }
function wireGo(){ root.querySelectorAll("[data-go]").forEach(b=>{ if(!b.classList.contains("dis")) b.onclick=()=>goNext(1); }); }
function wireButtons(){
  const cards=root.querySelectorAll(".ln-card"); if(!cards.length)return;
  cards[cards.length-1].querySelectorAll(".ln-btn").forEach(b=>{ b.classList.add("live");
    if(C.trackLabel&&b.textContent.trim()===C.trackLabel){ b.onclick=()=>{ b.classList.add("sel"); openTrack(); }; return; }
    b.onclick=()=>{ b.classList.add("sel"); goNext(1); }; });
}
function openTrack(){
  const side=document.getElementById("side"); if(!side)return;
  side.innerHTML='<div class="pf-blur">'+side.innerHTML+'</div>'+MODALS.html("track",C,P);
  side.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>{ lastStep=-99; render(); });
}
function markSel(reply){
  const cards=root.querySelectorAll(".ln-card"); if(!cards.length)return;
  cards[cards.length-1].querySelectorAll(".ln-btn").forEach(b=>{ if(b.textContent.trim()===String(reply).trim()) b.classList.add("sel"); b.classList.remove("live"); b.onclick=null; });
}
const MODAL={geo:1,alloc:1,verify:1,skumap:1,order:1,gratify:1,track:1,screening:1,enrol:1,soldout:1,geowait:1,geoon:1};
function rightHtml(s){ if(s.panel&&MODAL[s.panel]) return '<div class="pf-blur">'+profileFrame(s.facts,s.st)+'</div>'+MODALS.html(s.panel,C,P); return s.panel?panelFrame(s.panel,s.stage,s.facts):profileFrame(s.facts,s.st); }
function afterSide(anim){
  const side=document.getElementById("side"); if(!side)return;
  root.classList.toggle("blur-all",!!side.querySelector(".md-ov.all"));
  side.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>goNext(1));
  if(side.querySelector(".dl-truck.full")){
    const st=side.querySelectorAll(".dl-step"), bars=side.querySelectorAll(".dl-bar");
    st.forEach((s,i)=>timers.push(setTimeout(()=>{ s.classList.remove("todo","cur"); s.classList.add("don"); if(bars[i-1])bars[i-1].classList.add("on"); if(i===st.length-1){ const p=side.querySelector(".pf-st"); if(p)p.innerHTML='<span class="dot" style="background:#6BCB77"></span>DELIVERED'; } },400+i*1000)));
    const g=C.groups[curStep-PRE.length-1];
    if(anim&&g&&g.after){ let d=4700; if(g.afterDate){ timers.push(setTimeout(()=>appendChat(LINE.date(g.afterDate),true),d)); d+=400; } g.after.forEach(m=>{ timers.push(setTimeout(()=>appendChat(LINE.typing()),d)); d+=800; timers.push(setTimeout(()=>{removeTyping();appendChat(msgHtml(m),true);},d)); d+=400; }); }
  }
}
/* Web-form / browser mode */
function webPhone(inner,url){
  return '<div class="ln-phone" style="left:41px;top:43px;--wbc:'+(C.web&&C.web.color||"#C41230")+';"><div class="ln-status"><span>9:41</span><span class="sig">●●● ▲ ▮▮▮</span></div>'
    +'<div class="wb-bar"><span style="font-size:18px;color:#555;font-family:Roboto">‹</span><div class="wb-url"><span class="lock"></span><span class="txt">'+esc(url||(C.web&&C.web.url)||"")+'</span></div><span style="font-size:16px;color:#555">⋮</span></div>'
    +'<div class="wb-body">'+inner+'</div>'
    +'<div class="ln-input" style="justify-content:space-around;"><span class="ln-ico" style="font-size:18px">‹</span><span class="ln-ico" style="font-size:18px">›</span><span class="ln-ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13"></path></svg></span><span class="ln-ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"></path></svg></span><span class="ln-ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg></span></div></div>';
}
function siteNav(o){ const W=o||C.web||{};
  if(W.chrome==="mdlz") return '<div class="mz-tick">NASDAQ: MDLZ $62.36 USD 0.26 (0%)</div>'
   +'<div class="mz-nav">'+(W.navLogo?'<img src="'+W.navLogo+'" alt="Mondelez International">':'<b>Mondelēz</b>')+'<span class="bg">≡</span></div>'
   +(W.crumb?'<div class="mz-crumb">'+esc(W.crumb)+'</div><div class="mz-h1">'+esc(W.title||C.brand)+'</div>':"");
  return '<div class="wb-nav" style="background:#fff;border-bottom:1px solid #ECEEF2;color:#111">'+(W.logo?'<img src="'+W.logo+'" alt="'+esc(W.name||C.brand)+'" style="height:'+(W.logoH||24)+'px;width:auto;max-width:180px;object-fit:contain">':'<span style="color:'+(W.color||"#111")+'">'+esc(W.name||C.brand.toUpperCase())+'</span>')+'<span style="letter-spacing:0;font-weight:400;font-size:18px;color:#333">≡</span></div>'; }
function webScreen(w){
  if(w.kind==="google") return '<div class="gg"><div class="gg-top"><span class="gg-logo"><b>G</b><b>o</b><b>o</b><b>g</b><b>l</b><b>e</b></span></div><div class="gg-q"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" stroke-width="2.2"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>'+esc(w.q)+'</div><div class="gg-tabs"><span class="on">All</span><span>Shopping</span><span>Images</span><span>News</span></div>'
    +w.results.map(r=>'<div class="gg-r'+(r.ad?" ad":"")+'">'+(r.ad?'<div class="sp">Sponsored</div>':'')+'<div class="u">'+(r.ad?'<i></i>':'')+esc(r.url)+'</div><div class="t">'+esc(r.title)+'</div><div class="d">'+esc(r.desc)+'</div>'+(r.ad?'<span class="cta">'+esc(r.cta||"Claim free sample ›")+'</span>':'')+'</div>').join("")+'</div>';
  const prog=w.prog?'<div class="wb-prog"><i style="width:'+w.prog+'%"></i></div>':"";
  if(w.kind==="landing"&&w.photo) return siteNav()+'<div class="mz-hero"><img src="'+w.photo+'" alt=""><div class="ov"><div class="k">'+esc(w.k||"")+'</div><div class="t">'+w.t+'</div></div></div>'
   +'<div class="mz-card"><div class="s">'+esc(w.s||"")+'</div>'
   +(w.pts?'<div class="mz-pts">'+w.pts.map(p=>'<span><i>✓</i>'+esc(p)+'</span>').join("")+'</div>':"")
   +'<div class="wb-btn" data-go="1">'+esc(w.cta||"Continue")+'</div>'
   +'<div class="mz-pw">Form powered by <b>FreeStand</b> · embedded on this page</div></div>';
  if(w.kind==="landing") return siteNav()+'<div class="wb-hero" style="'+(w.bg?'background:'+w.bg+';':'')+'"><div class="k">'+esc(w.k)+'</div><div class="t">'+w.t+'</div><div class="s">'+esc(w.s)+'</div></div>'+(w.fields||[]).map(f=>'<div class="wb-field"><div class="l">'+esc(f[0])+'</div><div class="f'+(f[1]?" ok":" ph")+'">'+esc(f[1]||f[2]||"")+'</div></div>').join("")+'<div class="wb-btn'+(w.dis?" dis":"")+'" data-go="1">'+esc(w.cta||"Continue")+'</div>'+(w.note?'<div class="wb-note">'+w.note+'</div>':'');
  if(w.kind==="form") return siteNav()+prog+'<div class="wb-step">'+esc(w.step||"")+'</div><div class="wb-q">'+esc(w.q)+'</div>'+(w.fields||[]).map(f=>'<div class="wb-field"><div class="l">'+esc(f[0])+'</div><div class="f'+(f[1]?" ok":" ph")+'">'+esc(f[1]||f[2]||"")+'</div></div>').join("")+'<div class="wb-btn" data-go="1">'+esc(w.cta||"Continue")+'</div>'+(w.note?'<div class="wb-note">'+w.note+'</div>':'');
  if(w.kind==="quiz") return siteNav()+prog+'<div class="wb-step">'+esc(w.step||"")+'</div><div class="wb-q">'+esc(w.q)+'</div>'+w.opts.map((o,i)=>'<div class="wb-opt'+(i===w.sel?" sel":"")+' live" data-go="1"><span class="r"></span>'+esc(o)+'</div>').join("")+'<div class="wb-btn'+(w.sel===undefined?" dis":"")+'" data-go="1">'+esc(w.cta||"Next")+'</div>'+(w.note?'<div class="wb-note">'+w.note+'</div>':'');
  if(w.kind==="otp") return siteNav()+prog+'<div class="wb-step">'+esc(w.step||"")+'</div><div class="wb-q">'+esc(w.q)+'</div>'+'<div class="wb-otp">'+(w.code||"4829").split("").map(c=>'<i>'+esc(c)+'</i>').join("")+'</div>'+(w.note?'<div class="wb-note"><span>ℹ</span><span>'+w.note+'</span></div>':"")+'<div class="wb-btn" data-go="1">'+esc(w.cta||"Verify")+'</div>';
  if(w.kind==="check") return siteNav()+prog+'<div class="wb-step">'+esc(w.step||"")+'</div><div class="wb-q">'+esc(w.q)+'</div>'+'<div class="wb-chk">'+(w.rows||[]).map(r=>'<div class="r'+(r[1]?" done":" run")+'"><b>'+(r[1]?"✓":"")+'</b><span>'+esc(r[0])+'</span></div>').join("")+'</div>'+(w.note?'<div class="wb-note"><span>ℹ</span><span>'+w.note+'</span></div>':"")+'<div class="wb-btn'+(w.cta?"":" dis")+'" data-go="1">'+esc(w.cta||"Verifying…")+'</div>';
  if(w.kind==="success") return siteNav()+'<div class="wb-succ'+(w.warn?" warn":"")+'"><div class="e">'+(w.warn?"!":"✓")+'</div><div class="t">'+esc(w.t)+'</div><div class="s">'+w.s+'</div></div>'+(w.sku?'<div class="wb-sku"><div class="im" style="'+(w.sku.color?'background:'+w.sku.color:'')+'">'+esc(w.sku.im)+'</div><div><div class="n">'+esc(w.sku.n)+'</div><div class="p">'+esc(w.sku.p)+'</div></div></div>':'')+(w.cta?'<div class="wb-btn" data-go="1" style="background:#06C755;margin-top:16px;gap:8px"><svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff"></rect><path d="M12 5.5c-3.9 0-7 2.5-7 5.6 0 2.8 2.5 5.1 5.9 5.5.2 0 .5.2.6.4l.1 1.3c0 .3.3.5.6.3 1.6-.9 4.2-2.6 5.6-4.3.8-.9 1.2-2 1.2-3.2 0-3.1-3.1-5.6-7-5.6z" fill="#06C755"></path></svg>'+esc(w.cta)+'</div>':'')+(w.note?'<div class="wb-note" style="justify-content:center">'+w.note+'</div>':'');
  if(w.kind==="shop") return siteNav(w.site)+'<div class="sh-cp">✓ '+esc(w.coupon)+'</div><img class="sh-img" src="'+w.img+'" alt=""><div class="sh-b"><div class="sh-k">'+esc(w.k||"")+'</div><div class="sh-n">'+esc(w.n)+'</div><div class="sh-r">★★★★★ <span>'+esc(w.rating||"4.7 · 2,318 reviews")+'</span></div><div class="sh-p"><s>'+esc(w.was)+'</s>'+esc(w.now)+'<span>tax incl.</span></div><div class="sh-d">'+esc(w.deliv||"Free delivery · arrives tomorrow")+'</div><div class="wb-btn" data-go="1" style="margin:10px 0 0">'+esc(w.cta||"Add to cart")+'</div><div class="sh-alt">'+(w.alts||["Amazon.co.jp","Rakuten"]).map(a=>'<span>Also on '+esc(a)+'</span>').join("")+'</div></div>';
  return "";
}
function leftHtml(step,upto){
  const g=C.groups[step];
  if(g&&g.web) return webPhone(webScreen(g.web),g.web.url||(C.web&&C.web.url));
  if(g&&g.addFriend) return LINE.addFriend(C.brand,C.friend);
  let msgs="",added=false; for(let i=0;i<=upto;i++){ if(C.groups[i].addFriend)added=true; if(!C.groups[i].web&&!C.groups[i].addFriend) msgs+=groupHtml(C.groups[i]); }
  return LINE.phone(C.brand,msgs,{date:C.startDate||"Today",system:added?"You added "+C.brand+" as a friend.":null});
}
function headBar(i,chat){
  let H=(C.heads||[])[i]; if(!H) return "";
  let k=(chat&&C.chatKicker)||C.headKicker||C.channelLabel||C.brand||"";
  if(Array.isArray(H)){ k=H[0]; H=H[1]; }
  return '<div class="jhd"><span class="k">'+esc(String(k))+'</span><span class="t">'+H+'</span></div>';
}
function render(){
  timers.forEach(clearTimeout); timers=[];
  const total=PRE.length+1+C.groups.length;
  const hubStep=Math.min(Math.max(0,parseInt(location.hash.slice(1)||"0",10)||0),total-1);
  const animate=hubStep===lastStep+1&&hubStep>PRE.length;
  lastStep=hubStep; curStep=hubStep;
  if(hubStep<PRE.length){ root.classList.remove("blur-all"); root.innerHTML=headBar(hubStep)+SETUP.render(Object.assign({},PRE[hubStep],{head:(C.heads||[])[hubStep]}),C); wireGo(); return; }
  const adj=hubStep-PRE.length;
  if(adj===0){
    root.classList.remove("blur-all");
    if(C.groups[0]&&C.groups[0].web&&C.googleAd){ root.innerHTML=webPhone(webScreen(C.googleAd),"google.com")+'<div id="side">'+rightHtml(state(-1))+'</div>'; root.querySelectorAll(".gg-r.ad").forEach(b=>b.onclick=()=>goNext(1)); return; }
    root.innerHTML=headBar(hubStep)+adScreen(); if(C.adMock)C.adMock(document.getElementById("ad-mock")); wireGo(); return;
  }
  const step=adj-1;
  const isWeb=!!(C.groups[step]&&(C.groups[step].web||C.groups[step].addFriend));
  const upto=(animate&&!isWeb)?step-1:step;
  const cur=state(animate?upto:step), fin=state(step);
  if(cur.panel&&MODAL[cur.panel]){ cur.panel=null; }
  root.classList.remove("blur-all");
  root.innerHTML=headBar(hubStep,!isWeb)+leftHtml(step,upto)+'<div id="side">'+rightHtml((animate&&!isWeb)?cur:fin)+'</div>';
  if(isWeb){ wireGo(); afterSide(false); return; }
  const chat=root.querySelector(".ln-chat"); if(chat){ chat.style.overflowY="auto"; chat.style.justifyContent="flex-start"; chat.scrollTop=chat.scrollHeight; timers.push(setTimeout(()=>{chat.scrollTop=chat.scrollHeight;},250)); timers.push(setTimeout(()=>{chat.scrollTop=chat.scrollHeight;},800)); }
  if(animate){
    const grp=C.groups[step]; let delay=300;
    if(grp.date){ timers.push(setTimeout(()=>appendChat(LINE.date(grp.date),true),delay)); delay+=400; }
    grp.forEach(m=>{
      const isBot=m.b!==undefined||m.img;
      if(isBot){ timers.push(setTimeout(()=>{appendChat(LINE.typing());},delay)); delay+=850; timers.push(setTimeout(()=>{removeTyping();appendChat(msgHtml(m),true);},delay)); }
      else { timers.push(setTimeout(()=>{markSel(m.u);},delay+150)); delay+=700; timers.push(setTimeout(()=>{appendChat(msgHtml(m),true);},delay)); }
      delay+=350;
    });
    timers.push(setTimeout(()=>{ document.getElementById("side").innerHTML=rightHtml(fin); wireButtons(); afterSide(true); },delay));
  } else { wireButtons(); afterSide(false); }
}
function appendChat(html,anim){
  const chat=root.querySelector(".ln-chat"); if(!chat)return;
  chat.insertAdjacentHTML("beforeend",html);
  if(anim){ const el=chat.lastElementChild; el.style.animation="waIn 0.28s cubic-bezier(0.2,0.8,0.2,1) both"; }
  chat.scrollTop=chat.scrollHeight;
}
function removeTyping(){ const t=root.querySelector(".ln-typing-row"); if(t)t.remove(); }
window.addEventListener("hashchange",render); render();
if(FRAMED) window.addEventListener("keydown",e=>{ if(e.key==="ArrowRight"||e.key===" "){goNext(1);e.preventDefault();} else if(e.key==="ArrowLeft"){goNext(-1);e.preventDefault();} });
})();
