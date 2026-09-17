/* Shared LINE phone + message templates for demo pages (plain JS). Brand avatar = brand logo. */
window.LINE = (function(){
let AV = {text:"B",bg:"#111"};
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\n/g,"<br>"); }
function setAvatar(a){ AV = a||AV; }
function avHtml(cls){
  if(AV.img) return '<div class="'+cls+'" style="background-image:url('+AV.img+')"></div>';
  return '<div class="'+cls+'" style="background:'+(AV.bg||"#111")+';font-family:'+(AV.font||"Roboto,sans-serif")+'">'+esc(AV.text||"B")+'</div>';
}
function bot(text,opts,time){
  const t=time||"11:14";
  if(opts&&opts.length) return '<div class="ln-row">'+avHtml("ln-av")+'<div class="ln-col"><div class="ln-card"><div class="ln-ctext">'+esc(text)+'</div>'+opts.map((o,i)=>'<div class="ln-btn" data-opt="'+i+'">'+esc(o)+'</div>').join("")+'</div></div><span class="ln-meta">'+t+'</span></div>';
  return '<div class="ln-row">'+avHtml("ln-av")+'<div class="ln-col"><div class="ln-bub ln-bot">'+esc(text)+'</div></div><span class="ln-meta">'+t+'</span></div>';
}
function user(text,time){ return '<div class="ln-row ln-right ln-user"><span class="ln-meta">Read<br>'+(time||"11:14")+'</span><div class="ln-bub">'+esc(text)+'</div></div>'; }
function img(src){ return '<div class="ln-row">'+avHtml("ln-av")+'<div class="ln-col"><div class="ln-bub ln-bot" style="padding:3px;"><img src="'+src+'" style="width:100%;border-radius:12px;display:block;" alt=""></div></div></div>'; }
function card(inner,time){ return '<div class="ln-row">'+avHtml("ln-av")+'<div class="ln-col"><div class="ln-card">'+inner+'</div></div>'+(time?'<span class="ln-meta">'+esc(time)+'</span>':"")+'</div>'; }
function date(label){ return '<div class="ln-date">'+esc(label)+'</div>'; }
function system(label){ return '<div class="ln-date ln-sys">'+esc(label)+'</div>'; }
function addFriend(brand, info){
  info=info||{};
  return '<div class="ln-phone" style="left:41px;top:43px;"><div class="ln-status"><span>9:41</span><span class="sig">●●● ▲ ▮▮▮</span></div>'
  + '<div class="ln-af"><div class="ln-af-cover" style="background:'+(info.cover||"#1F2A40")+'"><span class="x">✕</span><span class="sh">↑</span></div>'
  + '<div class="ln-af-card">'+avHtml("ln-af-av")+'<div class="ln-af-name">'+esc(brand)+BADGE+'</div><div class="ln-af-oa">Official account</div><div class="ln-af-cnt">'+esc(info.friends||"1,204,532")+' friends</div>'
  + '<div class="ln-af-btns"><div class="ln-af-add live" data-go="1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4"><circle cx="9" cy="8" r="4"></circle><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6"></path></svg>Add</div><div class="ln-af-blk">Block</div></div>'
  + '<div class="ln-af-desc">'+esc(info.desc||"Add us to claim your free sample and get delivery updates, tips and offers right here on LINE.")+'</div>'
  + '<div class="ln-af-links">'+(info.links||["Free sample campaign","Official website","Store locator"]).map(l=>'<div class="ln-af-link">'+esc(l)+'<span>›</span></div>').join("")+'</div>'
  + '<div class="ln-af-note">By adding this account you agree to receive messages from '+esc(brand)+'. You can block or unfriend at any time.</div></div></div></div>';
}
function typing(){ return '<div class="ln-row ln-typing-row">'+avHtml("ln-av")+'<div class="ln-bub ln-bot ln-typing"><span></span><span></span><span></span></div></div>'; }
const BADGE='<svg class="ln-badge" viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5.2-3.4 9.6-8 11-4.6-1.4-8-5.8-8-11V5z" fill="#06C755"></path><path d="M12 7l1.5 3.2 3.5.4-2.6 2.4.7 3.4L12 14.7 8.9 16.4l.7-3.4L7 10.6l3.5-.4z" fill="#fff"></path></svg>';
function phone(brand, msgsHtml, opt){
  opt=opt||{};
  return '<div class="ln-phone" style="left:'+(opt.x||41)+'px;top:'+(opt.y||43)+'px;'+(opt.scale?'transform:scale('+opt.scale+');transform-origin:top left;':'')+'">'
  + '<div class="ln-status"><span>9:41</span><span class="sig">●●● ▲ ▮▮▮</span></div>'
  + '<div class="ln-head"><span class="ln-back">‹</span>'+avHtml("ln-avatar")+'<div class="ln-bname">'+esc(brand)+BADGE+'</div>'
    + '<div class="ln-hicons"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7A2 2 0 0 1 22 16.9z"></path></svg><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></div></div>'
  + '<div class="ln-chat">'+(opt.date===false?"":date(opt.date||"Today"))+(opt.system?system(opt.system):"")+msgsHtml+'</div>'
  + '<div class="ln-input"><span class="ln-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"></path></svg></span><span class="ln-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></span><span class="ln-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path></svg></span><div class="ln-field">Aa</div><span class="ln-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"></path></svg></span></div>'
  + '</div>';
}
return { bot:bot, user:user, img:img, card:card, date:date, system:system, typing:typing, phone:phone, addFriend:addFriend, esc:esc, setAvatar:setAvatar };
})();
