/* Shared WhatsApp phone + FS templates for demo pages (plain JS) */
window.WA = (function(){
function esc(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\n/g,"<br>"); }
function bot(text,opts,time){
  return '<div class="wa-row"><svg class="wa-tail" width="7" height="7" viewBox="0 0 7 7"><path d="M7 0 L7 7 L0 7 Z" fill="#fff"></path></svg><div class="wa-msgcol"><div class="wa-bubble wa-bot"><span class="wa-text">'+esc(text)+'</span><span class="wa-time">'+(time||"11.14 AM")+'</span></div>'
  + (opts?opts.map(o=>'<div class="wa-opt">'+esc(o)+'</div>').join(""):"")
  + '</div></div>';
}
function user(text,time){
  return '<div class="wa-row wa-right"><div class="wa-bubble wa-user"><span class="wa-text">'+esc(text)+'</span><span class="wa-time">'+(time||"11.14 AM")+'</span></div><svg class="wa-tail" width="7" height="7" viewBox="0 0 7 7"><path d="M0 0 L7 7 L0 7 Z" fill="#D3FFC8"></path></svg></div>';
}
function img(src){ return '<div class="wa-row"><svg class="wa-tail" width="7" height="7" viewBox="0 0 7 7"><path d="M7 0 L7 7 L0 7 Z" fill="#fff"></path></svg><div class="wa-bubble wa-bot" style="padding:4px;"><img src="'+src+'" style="width:100%;border-radius:3px;display:block;"></div></div>'; }
function phone(brand, msgsHtml, opt){
  opt=opt||{};
  const av = opt.logo ? '<div class="wa-avatar" style="background:#fff url('+opt.logo+') center/cover no-repeat;color:transparent;"></div>'
                      : '<div class="wa-avatar">'+brand.charAt(0)+'</div>';
  return '<div class="wa-phone" style="left:'+(opt.x||41)+'px;top:'+(opt.y||43)+'px;'+(opt.scale?'transform:scale('+opt.scale+');transform-origin:top left;':'')+'">'
  + '<div class="wa-notif"><span>1:42</span><span class="wa-sig">▮▮▮ ▲ ▰</span></div>'
  + '<div class="wa-head"><span class="wa-back">‹</span>'+av+'<div class="wa-brand"><div class="wa-bname">'+brand+'</div><div class="wa-bsub">online</div></div><span class="wa-dots">⋮</span></div>'
  + '<div class="wa-chat">'+msgsHtml+'</div>'
  + '<div class="wa-input"><div class="wa-field">Type a message</div><div class="wa-send"></div></div>'
  + '</div>';
}
return { bot:bot, user:user, img:img, phone:phone, esc:esc };
})();
