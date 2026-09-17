/* Campaign-setup (builder) screens shown before the journey — FreeStand dashboard shell. SETUP.render(step, CHAT_CONFIG) → HTML */
window.SETUP=(function(){
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");}
const IC={
 flow:'<path d="M5 4h6v5H5zM13 15h6v5h-6zM8 9v3h8v3"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
 code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
 tag:'<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/>',
 box:'<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
 users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.2 2.7-5 6-5s6 1.8 6 5"/><path d="M16 11a3 3 0 1 0 0-6M17 15c2.5.4 4 1.9 4 5"/>',
 chart:'<path d="M4 20h16M7 16v-5M12 16V6M17 16v-8"/>',
 check:'<path d="M20 6L9 17l-5-5"/>',
 chat:'<path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
 copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>'
};
function ic(n,s,c){return '<svg width="'+(s||14)+'" height="'+(s||14)+'" viewBox="0 0 24 24" fill="none" stroke="'+(c||"currentColor")+'" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+IC[n]+'</svg>';}
const MENU=[["flow","Brand questions"],["rules","Qualification & SKU rules"],["embed","Embed & tracking"],["integr","Integrations"],["publish","Publish"]];
function shell(s,C,body){
 const rail=["users","chart","chat","box","tag","bell","gear"];
 return '<div class="su"><div class="su-rail"><div class="lg"><img src="../shared/assets/fs-icon.png" alt="FreeStand"></div>'+rail.map((r,i)=>'<div class="ri'+(i===2?" on":"")+'">'+ic(r,15,"rgba(255,255,255,0.82)")+'</div>').join("")+'</div>'
 +'<div class="su-menu"><div class="su-cons"><img src="'+C.avatar.img+'" alt="">'+esc(C.brand)+' Japan</div><div class="su-grp">Campaign builder</div>'+MENU.filter(m=>!(s.hide||[]).includes(m[0])).map(m=>'<div class="su-mi'+(m[0]===s.menu?" on":"")+'">'+m[1]+'</div>').join("")+'<div class="su-grp">Analytics</div><div class="su-mi">Overview</div><div class="su-mi">Live Analytics</div><div class="su-grp">Loyalty</div><div class="su-mi">Members</div></div>'
 +'<div class="su-main"><div class="su-top"><div class="su-h">'+esc(s.title)+'</div><span class="su-chip">'+esc(C.campaignId||"CAMPAIGN")+'</span><span class="su-chip ch">'+esc(s.channel||C.channelLabel||"LINE chatbot")+'</span><div class="su-rt"><span class="su-status'+(s.live?" live":"")+'">'+(s.live?"● Live":"Draft · autosaved")+'</span><span class="su-btn" data-go="1">'+esc(s.cta||"Save & continue →")+'</span></div></div>'
 +'<div class="su-sub">'+(s.sub||"")+'</div><div class="su-body">'+body+'</div></div></div>';
}
const TYPE={consent:["Consent","#EDE4F7","#5B3FD9"],qual:["Qualification","#FFF3E0","#B26A00"],q:["Question","#DCE8F2","#052762"],addr:["Address & delivery","#DFF3EA","#1E8E4B"],fb:["Feedback · Day 7","#FDF3DC","#9A4A00"],pi:["Purchase intent","#E8F5E9","#2E7D32"],contact:["Contact details","#DCE8F2","#052762"]};
function flow(s,C){
 const qs=s.questions.map((q,i)=>{const T=TYPE[q.type]||TYPE.q;return '<div class="su-q" style="animation-delay:'+(i*0.1)+'s"><div class="su-qn">'+(i+1)+'</div><div class="su-qb"><div class="su-qt"><span class="su-type" style="background:'+T[1]+';color:'+T[2]+'">'+T[0]+'</span>'+(q.sku?'<span class="su-type" style="background:#052762;color:#fff">→ SKU rule</span>':"")+(q.stop?'<span class="su-type" style="background:#FDECEC;color:#B91C1C">If “'+esc(q.stop)+'” → end politely</span>':"")+'<span class="su-drag">⋮⋮</span></div><div class="su-qq">'+esc(q.q)+'</div>'+(q.opts?'<div class="su-opts">'+q.opts.map(o=>'<span class="su-opt">'+esc(o)+'</span>').join("")+'</div>':'<div class="su-free">'+esc(q.free||"Free text · validated")+'</div>')+(q.rule?'<div class="su-rule">'+ic("tag",12,"#052762")+esc(q.rule)+'</div>':"")+'</div></div>';}).join("");
 const tr=(s.tracking||[]).map((t,i)=>'<div class="su-tr" style="animation-delay:'+(0.3+i*0.08)+'s"><span class="su-sw on"><i></i></span><div><div class="t">'+esc(t[0])+'</div><div class="s">'+esc(t[1])+'</div></div></div>').join("");
 return '<div class="su-cols"><div class="su-flow"><div class="su-ft">'+ic("flow",14,"#052762")+esc(s.flowTitle||"Journey — in the order the customer sees it")+'<span class="su-cnt">'+s.questions.length+' steps · drag to reorder</span></div>'+qs+'</div>'
 +'<div class="su-side"><div class="su-card"><div class="su-ct">'+ic("tag",14,"#052762")+'Captured on every claim</div>'+tr+'</div>'+(s.note?'<div class="su-note">'+s.note+'</div>':"")+'</div></div>';
}
function rules(s,C){
 const rows=s.skus.map((k,i)=>'<tr style="animation-delay:'+(i*0.1)+'s"><td><span class="su-ans">'+esc(k.answer)+'</span></td><td><div class="su-skuc"><span class="su-skui" style="background:'+k.color+'">'+esc(k.short)+'</span><div><div class="n">'+esc(k.name)+'</div><div class="p">'+esc(k.pack)+'</div></div></div></td><td class="num">'+esc(k.stock)+'</td><td>'+esc(k.fc)+'</td><td><span class="su-ok">Reserved</span></td></tr>').join("");
 const integ=s.integrations.map((g,i)=>'<div class="su-int" style="animation-delay:'+(0.2+i*0.1)+'s"><div class="su-inti" style="background:'+(g.bg||"#EEF3FB")+';color:'+(g.fg||"#052762")+'">'+esc(g.mark)+'</div><div class="b"><div class="t">'+esc(g.name)+'</div><div class="s">'+esc(g.sub)+'</div></div><span class="su-ok">'+esc(g.status||"Connected")+'</span></div>').join("");
 return '<div class="su-cols wide"><div class="su-side"><div class="su-card"><div class="su-ct">'+ic("box",14,"#052762")+esc(s.ruleTitle||"SKU allocation rule")+'<span class="su-cnt">'+esc(s.rule)+'</span></div><table class="su-tbl"><tr><th>Answer</th><th>Sample SKU</th><th class="num">Stock held</th><th>Fulfilment</th><th></th></tr>'+rows+'</table></div>'
 +(s.qual?'<div class="su-card"><div class="su-ct">'+ic("check",14,"#052762")+'Qualification & exclusions</div>'+s.qual.map(q=>'<div class="su-qrow"><span class="su-type" style="background:#FFF3E0;color:#B26A00">'+esc(q[0])+'</span><span>'+esc(q[1])+'</span></div>').join("")+'</div>':"")+'</div>'
 +'<div class="su-side"><div class="su-card"><div class="su-ct">'+ic("gear",14,"#052762")+'Integrations</div>'+integ+'</div></div></div>';
}
function embed(s,C){
 const code=s.code.map(l=>'<div>'+l+'</div>').join("");
 const px=s.pixels.map((p,i)=>'<div class="su-tr" style="animation-delay:'+(0.3+i*0.08)+'s"><span class="su-sw on"><i></i></span><div><div class="t">'+esc(p[0])+' <span class="su-id">'+esc(p[1])+'</span></div><div class="s">Fires on: '+esc(p[2])+'</div></div></div>').join("");
 return '<div class="su-cols wide"><div class="su-side"><div class="su-card"><div class="su-ct">'+ic("code",14,"#052762")+'Embed on '+esc(s.site)+'<span class="su-cnt">'+ic("copy",12,"#052762")+' Copy snippet</span></div><pre class="su-code">'+code+'</pre><div class="su-steps">'+s.steps.map((t,i)=>'<div><b>'+(i+1)+'</b><span>'+esc(t)+'</span></div>').join("")+'</div></div>'
 +'<div class="su-card"><div class="su-ct">'+ic("chart",14,"#052762")+'Pixel & tag tracking</div>'+px+'</div></div>'
 +'<div class="su-side"><div class="su-prev"><div class="su-pbar"><span></span><span></span><span></span><div class="u">'+esc(s.site)+'</div></div><div class="su-page"><div class="su-pnav"><img src="'+C.web.logo+'" alt=""><span>≡</span></div><div class="su-phero" style="background:'+(s.heroBg||"#E8F4FB")+'"><div class="k">FREE SAMPLE</div><div class="t">'+(s.heroT||"")+'</div></div><div class="su-pform"><div class="su-pf-hd">'+ic("flow",11,"#052762")+'FreeStand form · embedded · '+esc(C.campaignId)+'</div>'+(s.formFields||[]).map(f=>'<div class="su-pf"><div class="l">'+esc(f)+'</div><div class="f"></div></div>').join("")+'<div class="su-pbtn" style="background:'+(C.web.color||"#052762")+'">'+esc(s.formCta||"Get my free sample")+'</div></div></div></div><div class="su-utm">'+ic("globe",12,"#052762")+'<span>'+esc(s.utm)+'</span></div></div></div>';
}
function render(s,C){ return shell(s,C, s.kind==="flow"?flow(s,C):s.kind==="rules"?rules(s,C):embed(s,C)); }
return {render:render};
})();
