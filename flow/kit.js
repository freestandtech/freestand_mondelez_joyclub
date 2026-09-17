/* Shared renderer + UI helpers for the Acquire flow pages */
const ICO={back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
 vid:'<svg viewBox="0 0 24 24"><rect x="2.5" y="6.5" width="13" height="11" rx="2.5"/><path d="M16 11l5-3v8l-5-3z"/></svg>',
 call:'<svg viewBox="0 0 24 24"><path d="M5 3.5h3l1.5 4-2 1.5a11 11 0 007.5 7.5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A17 17 0 013.5 5.7 2 2 0 015.5 3.5z"/></svg>',
 dots:'<svg viewBox="0 0 24 24" stroke-width="2.6"><path d="M12 6.2v.1M12 12v.1M12 17.8v.1"/></svg>',
 home:'<svg viewBox="0 0 24 24"><path d="M4 11l8-6.5 8 6.5V20H4z"/></svg>',
 shop:'<svg viewBox="0 0 24 24"><path d="M5 7h14l-1 13H6z"/><path d="M9 7a3 3 0 016 0"/></svg>',
 gift:'<svg viewBox="0 0 24 24"><rect x="3.5" y="9" width="17" height="11" rx="2"/><path d="M3.5 13h17M12 9v11M8.5 9a2.5 2.5 0 010-5c2 0 3.5 5 3.5 5m3.5-5a2.5 2.5 0 010 5"/></svg>',
 book:'<svg viewBox="0 0 24 24"><path d="M4 5.5h6.5V20H4zM20 5.5h-6.5V20H20z"/></svg>',
 user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M5 20c1.4-4 4-5.6 7-5.6s5.6 1.6 7 5.6"/></svg>'};

function statusbar(color,dark){const c=color||"#111";return '<div class="sb" style="color:'+c+'"><span>9:41</span>'
 +'<span class="ic"><span style="display:flex;gap:1.6px;align-items:flex-end">'
 +[4,6,8,10].map(h=>'<i style="height:'+h+'px"></i>').join("")+'</span>'
 +'<svg width="12" height="10" viewBox="0 0 24 20" fill="'+c+'"><path d="M12 18l-11-11a15.5 15.5 0 0122 0z" opacity="0.95"/></svg>'
 +'<span class="bt"></span></span></div>';}

/* WhatsApp screen. msgs: {s:"in"|"out", t:text, tm:"10:12", btns:[], note:"", extra:""} */
function wa(brand,msgs,opts){opts=opts||{};const bg=brand.bg||"#075E54";
 return '<div class="wa"><div style="background:'+bg+';flex-shrink:0">'+statusbar("#fff")+'</div>'
 +'<div class="wa-h" style="background:'+bg+'"><span class="bk">‹</span><img src="'+brand.logo+'"/>'
 +'<div class="id"><div class="n">'+brand.name+'</div><div class="s">'+(brand.sub||"online")+'</div></div>'
 +'<div class="act">'+ICO.vid+ICO.call+ICO.dots+'</div></div>'
 +'<div class="wa-b">'+(opts.biz?'<div class="wa-biz">🔒 Business account · messages are kept by the business</div>':"")
 +msgs.map(m=>'<div class="msg '+(m.s==="out"?"out":"in")+(m.wide?" wide":"")+'">'+(m.t||"")
   +(m.note?'<div class="wa-note">'+m.note+'</div>':"")+(m.extra||"")
   +'<span class="tm">'+(m.tm||"10:12")+(m.s==="out"?'<b>✓✓</b>':"")+'</span></div>'
   +(m.btns?'<div class="wa-btns">'+m.btns.map(b=>'<div class="wa-btn">'+b+'</div>').join("")+'</div>':"")).join("")
 +'</div><div class="wa-c"><div class="in"><span class="em">☺</span><span>Message</span><span style="margin-left:auto;opacity:.55">📎 📷</span></div><div class="mic">🎙</div></div></div>';}

/* Joy Club screen, matching the Joy Club demo UI */
function joy(inner,tab,user){
 const tabs=[["Home","home"],["Shop","shop"],["Rewards","gift"],["Recipes","book"],["Profile","user"]];
 return '<div class="jc">'+statusbar("#111")
 +'<div class="jc-top"><img class="md" src="../../mdlz/lite-mdlz-logo.png"/><div class="r"><div class="w">Joy Club</div><div class="u">'+(user||"")+'</div></div></div>'
 +'<div class="jc-b">'+inner+'</div>'
 +'<div class="jc-tabs">'+tabs.map(t=>'<div class="jc-tab'+(t[0]===tab?" on":"")+'">'+ICO[t[1]]+t[0]+'</div>').join("")+'</div></div>';}

/* right-column helpers */
function head(t,s){return '<div><div class="h1">'+t+'</div><div class="sub">'+s+'</div></div>';}
function data(rows,count,title){return '<div class="card dp"><div class="hdr">'+(title||"Data captured at this step")+'<span class="c">'+(count||rows.length+" fields")+'</span></div>'
 +'<div class="rows">'+rows.map((r,i)=>'<div class="dr" style="animation-delay:'+(i*0.06)+'s"><div class="f">'+r[0]+'</div><div class="v">'+r[1]+'</div><div class="sc'+(r[2]?" "+r[2]:"")+'">'+r[3]+'</div></div>').join("")+'</div></div>';}
function meter(pct,label){return '<div class="meter"><div class="k">'+label+'</div><div class="track"><i style="width:'+pct+'%"></i></div><div class="n">'+pct+'%</div></div>';}
function kpis(arr){return '<div class="kpi" style="grid-template-columns:repeat('+arr.length+',1fr)">'+arr.map(k=>'<div><div class="v">'+k[0]+'</div><div class="l">'+k[1]+'</div></div>').join("")+'</div>';}
function card(h,body){return '<div class="card"><div class="hdr">'+h+'</div>'+body+'</div>';}
function chips(arr,bg,fg){return '<div class="chips">'+arr.map(c=>'<span class="chip" style="background:'+bg+';color:'+fg+'">'+c+'</span>').join("")+'</div>';}

function mountFlow(cfg){
  document.title=cfg.title;
  document.getElementById("bar-title").textContent=cfg.title;
  const S=cfg.steps,rail=document.getElementById("rail");
  rail.style.gridTemplateColumns="repeat("+S.length+",1fr)";
  function show(){
    const i=Math.max(0,Math.min(S.length-1,parseInt(location.hash.slice(1)||"0",10)||0));
    const s=S[i];
    rail.innerHTML=S.map((x,j)=>'<div class="st'+(j===i?" on":(j<i?" past":""))+'" onclick="location.hash='+j+'"><b>'+(j+1)+'</b>'+x.label+'</div>').join("");
    if(s.wide){document.body.classList.add("wide");document.getElementById("bb").innerHTML=s.screen();document.getElementById("burl").textContent=s.url||"app.freestand.in";}
    else{document.body.classList.remove("wide");document.getElementById("scr").innerHTML=s.screen();}
    document.getElementById("rc").innerHTML=s.right();
    document.getElementById("cap-tag").textContent="STEP "+String(i+1).padStart(2,"0");
    const hd=document.getElementById("hd-t"); if(hd)hd.textContent=s.cap;
    document.getElementById("cap-t").textContent=s.cap;
    document.getElementById("cap-s").textContent=s.meta;
  }
  window.addEventListener("hashchange",show); show();
}

/* ── platform helpers ── */
function browserFrame(){return '<div class="browser"><div class="bh"><div class="dots"><i style="background:#FF5F57"></i><i style="background:#FEBC2E"></i><i style="background:#28C840"></i></div><div class="url"><span style="opacity:.55">🔒</span><span id="burl"></span></div></div><div class="bb" id="bb"></div></div>';}
function consoleUI(active,title,crumb,body,stat){const NAV=["Campaigns","Activations","Audiences","WhatsApp","Analytics","Destinations","Settings"];
 return '<div class="cn"><img src="../../mdlz/lite-fs-logo.png"/>'+NAV.map(n=>'<div class="it'+(n===active?" on":"")+'"><i></i>'+n+'</div>').join("")+'</div>'
 +'<div class="cm"><div class="ch"><div class="t">'+title+'</div><div class="crumb">'+(crumb||"")+'</div>'+(stat?'<div class="stat" style="background:'+stat[1]+';color:'+stat[2]+'"><i></i>'+stat[0]+'</div>':"")+'</div><div class="cb">'+body+'</div></div>';}
function clock(t){return '<div class="clock"><i></i>'+t+'</div>';}
function hbars(rows,max){return rows.map((r,i)=>'<div class="hb"><div class="lb">'+r[0]+'</div><div class="tr"><i style="width:'+(r[1]/max*100)+'%;animation-delay:'+(i*0.05)+'s"></i></div><div class="nn">'+(r[2]||r[1]+"%")+'</div></div>').join("");}
function cols(rows,max){return '<div class="cols">'+rows.map((r,i)=>'<div class="c"><i style="height:'+(r[1]/max*100)+'%;animation-delay:'+(i*0.06)+'s"></i><span>'+r[0]+'</span></div>').join("")+'</div>';}
