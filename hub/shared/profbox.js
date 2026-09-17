/* Enrollment-1 style "User profile" frame, sized for the 416px right column of the enrollment flows.
   profBox({name,sub,photo,initial,rows,pct,note,cohorts}) — rows: [label,value,cls("w"|"n"|""),stamp] */
(function(){var css=`
.pf2{background:#fff;border:3px solid #052762;border-radius:12px;font-family:Poppins,Inter,Arial,sans-serif;display:flex;flex-direction:column;overflow:hidden;height:100%}
.pf2-hd{display:flex;align-items:center;gap:10px;padding:10px 14px;box-shadow:0 3px 4px rgba(0,0,0,.07);flex-shrink:0}
.pf2-ic{width:32px;height:32px;border-radius:999px;background:#EEF3FB;border:1.5px solid #052762;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.pf2-ic svg{width:17px;height:17px;fill:none;stroke:#052762;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.pf2-t{font-size:15px;font-weight:600;color:#1a1a1a;letter-spacing:-0.1px}
.pf2-s{font-size:10.5px;color:#888;margin-top:1px}
.pf2-st{margin-left:auto;display:flex;align-items:center;gap:6px;font-size:9px;color:#666;font-family:monospace;white-space:nowrap}
.pf2-st i{width:7px;height:7px;border-radius:999px;background:#6BCB77;display:block;animation:pf2blink 1.4s infinite}
@keyframes pf2blink{50%{opacity:.25}}
.pf2-tabs{display:flex;gap:16px;padding:8px 14px 0;border-bottom:1px solid #e4e4e4;flex-shrink:0}
.pf2-tabs span{font-size:11px;font-weight:500;color:#666;padding-bottom:6px;border-bottom:2px solid transparent}
.pf2-tabs span.on{color:#052762;border-bottom-color:#FA6600}
.pf2-top{display:flex;gap:12px;padding:12px 14px 8px;align-items:center;flex-shrink:0}
.pf2-photo{width:74px;height:74px;border-radius:8px;border:2px solid #D9E1EE;background:#EEF3FB;overflow:hidden;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.pf2-photo img{width:100%;height:100%;object-fit:cover;display:block}
.pf2-photo span{font-size:30px;font-weight:500;color:rgba(5,39,98,.28)}
.pf2-who{min-width:0}
.pf2-who .n{font-size:16px;font-weight:600;letter-spacing:-0.2px}
.pf2-who .s{font-size:10.5px;color:#666;margin-top:2px;line-height:1.35}
.pf2-mtr{margin-top:8px;display:flex;align-items:center;gap:7px}
.pf2-mtr .k{font-size:8.5px;font-weight:700;letter-spacing:.5px;color:#052762;white-space:nowrap}
.pf2-mtr .tr{flex:1;height:6px;border-radius:99px;background:#EEF3FB;overflow:hidden}
.pf2-mtr .tr i{display:block;height:100%;background:#FA6600;border-radius:99px}
.pf2-mtr .n{font-size:10px;font-weight:700;color:#052762}
.pf2-rows{padding:0 14px;flex-shrink:0}
.pf2-r{display:flex;align-items:center;gap:10px;min-height:31px;border-bottom:1px solid #eee;animation:pf2in .3s both}
.pf2-r .l{font-size:10.5px;color:#888;font-weight:500;width:100px;flex-shrink:0}
.pf2-r .v{font-size:11.5px;color:#1a1a1a;font-weight:500;flex:1;min-width:0;line-height:1.3}
.pf2-r .shim{flex:1;height:12px;border-radius:4px;background:linear-gradient(90deg,#EEF3FB,#DCE6F5,#EEF3FB);background-size:200% 100%;animation:pf2sh 2.2s linear infinite;opacity:.75}
@keyframes pf2sh{from{background-position:200% 0}to{background-position:-200% 0}}
.pf2-r .st{font-size:8.5px;font-weight:700;letter-spacing:.4px;color:#1E7A38;white-space:nowrap}
.pf2-r.w .st{color:#A6AEBC}
.pf2-r.n .st{color:#B45309}
.pf2-lbl{font-size:9.5px;font-weight:700;color:#052762;letter-spacing:.5px;text-transform:uppercase;padding:9px 14px 5px}
.pf2-box{margin:0 14px;border:1px solid #D9E1EE;border-radius:6px;padding:9px;display:flex;flex-wrap:wrap;gap:5px;align-content:flex-start;overflow:auto;min-height:64px}
.pf2-box.f{flex:1}
.pf2-tag{padding:4px 8px;border-radius:5px;font-size:10px;font-weight:500;color:#1a1a1a;animation:pf2in .3s both;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
@keyframes pf2in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.pf2-empty{font-size:10px;color:#bbb;font-style:italic}
.pf2-note{margin:9px 14px 11px;font-size:10.5px;line-height:1.5;color:#4B5563;border-top:1px dashed #DDE4F0;padding-top:8px;flex-shrink:0}
`;var s=document.createElement("style");s.textContent=css;document.head.appendChild(s);})();
const PF2BG=["#DCE8F2","#FDF3DC","#EDE4F7","#DFF3EA"];
function pf2tag(t,i){return '<span class="pf2-tag" style="background:'+PF2BG[i%4]+';animation-delay:'+(i*0.05)+'s">'+t+'</span>';}
function profBox(o){
 const rows=o.rows||[],skip=2;
 const facts=rows.slice(skip).filter(r=>r[2]!=="w").map(r=>String(r[1]).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim()).filter(t=>t&&t!=="—"&&t!=="Not known");
 const coh=o.cohorts||[];
 return '<div class="pf2">'
 +'<div class="pf2-hd"><div class="pf2-ic">'+ICO.user+'</div><div style="min-width:0"><div class="pf2-t">User profile</div><div class="pf2-s">'+(o.src||"FreeStand · first-party")+'</div></div>'
 +'<div class="pf2-st"><i></i>SYNCED</div></div>'
 +'<div class="pf2-tabs"><span class="on">Personal details</span><span>Other details</span><span>Relevant cohorts</span></div>'
 +'<div class="pf2-top"><div class="pf2-photo">'+(o.photo?'<img src="'+o.photo+'" alt="'+o.name+'"/>':'<span>'+(o.initial||"?")+'</span>')+'</div>'
 +'<div class="pf2-who"><div class="n">'+o.name+'</div><div class="s">'+o.sub+'</div>'
 +'<div class="pf2-mtr"><span class="k">PROFILE</span><span class="tr"><i style="width:'+o.pct+'%"></i></span><span class="n">'+o.pct+'%</span></div></div></div>'
 +'<div class="pf2-rows">'+rows.map((r,i)=>'<div class="pf2-r'+(r[2]?" "+r[2]:"")+'" style="animation-delay:'+(i*0.04)+'s"><div class="l">'+r[0]+'</div>'
   +(r[2]==="w"?'<div class="shim"></div>':'<div class="v">'+r[1]+'</div>')+'<div class="st">'+r[3]+'</div></div>').join("")+'</div>'
 +'<div class="pf2-lbl">Self-declared &amp; captured</div>'
 +'<div class="pf2-box f">'+(facts.length?facts.map((t,i)=>pf2tag(t,i)).join(""):'<i class="pf2-empty">Collected as the customer moves through the journey…</i>')+'</div>'
 +'<div class="pf2-lbl">Relevant cohorts</div>'
 +'<div class="pf2-box">'+(coh.length?coh.map((t,i)=>pf2tag(t,i+1)).join(""):'<i class="pf2-empty">Assigned once the profile has an address and a verified contact…</i>')+'</div>'
 +(o.note?'<div class="pf2-note">'+o.note+'</div>':"")
 +'</div>';
}
