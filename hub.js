/* FreeStand Demo Hub — shell logic (plain JS) */
(function(){
const DEMOS = window.HUB_DEMOS;
const state = (()=>{ try{return JSON.parse(localStorage.getItem("mdlz-demo-hub")||"{}");}catch(e){return {};} })();
let sel = DEMOS.some(d=>d.id===state.sel) ? state.sel : DEMOS[0].id;
let frame = state.frame||0;
function save(){ localStorage.setItem("mdlz-demo-hub",JSON.stringify({sel,frame})); }
function demo(){ return DEMOS.find(d=>d.id===sel); }

const sidebar = document.getElementById("hub-side-list");
const stage = document.getElementById("hub-stage");
const counter = document.getElementById("hub-counter");
const label = document.getElementById("hub-label");
const prevBtn = document.getElementById("hub-prev");
const nextBtn = document.getElementById("hub-next");

function renderSidebar(){
  sidebar.innerHTML = "";
  let group = null;
  DEMOS.forEach(d=>{
    if(d.group!==group){ group=d.group; const g=document.createElement("div"); g.className="hub-group"; g.textContent=group; sidebar.appendChild(g); }
    const el=document.createElement("div");
    el.className="hub-item"+(d.id===sel?" active":"");
    el.innerHTML='<span class="dot"></span><span>'+d.name+'</span>'+(d.frames?'<span class="n">'+d.frames.length+'</span>':"");
    el.onclick=()=>{ sel=d.id; frame=0; save(); render(); };
    sidebar.appendChild(el);
  });
}
function renderStage(){
  const d = demo();
  if(d.page){ renderPage(d); return; }
  stage.innerHTML = "";
  if(d.embed){
    const w=d.w||1280, h=d.h||890;
    const box=document.createElement("div");
    box.className="hub-frame scaled";
    box.style.aspectRatio=w+" / "+h;
    const f=document.createElement("iframe");
    f.src=d.embed; f.className="hub-embed"; f.setAttribute("title",d.name);
    f.style.width=w+"px"; f.style.height=h+"px";
    f.addEventListener("load",()=>fitFrame(box,w,h));
    box.appendChild(f); stage.appendChild(box);
    fitObserver.disconnect(); fitObserver.observe(box);
    requestAnimationFrame(()=>fitFrame(box,w,h));
    counter.textContent="interactive";
    label.textContent=d.note||"Interactive demo — Next/Prev or arrow keys step through it.";
    prevBtn.disabled=nextBtn.disabled=false;
    return;
  }
  pageSrc=null;
  if(!d.frames||!d.frames.length){
    stage.innerHTML='<div class="hub-empty">Frames for “'+d.name+'” pending — awaiting Figma source.</div>';
    counter.textContent="—"; label.textContent=""; prevBtn.disabled=nextBtn.disabled=true;
    return;
  }
  frame=Math.max(0,Math.min(frame,d.frames.length-1));
  const fr=d.frames[frame];
  const box=document.createElement("div");
  box.className="hub-frame";
  const w=fr.w||d.w||1280, h=fr.h||d.h||832;
  box.style.aspectRatio=w+" / "+h;
  if(fr.img){ const im=document.createElement("img"); im.src=fr.img; im.draggable=false; box.appendChild(im); }
  else if(fr.html){ const f=document.createElement("iframe"); f.src=fr.html; f.style.width=w+"px"; f.style.height=h+"px"; f.addEventListener("load",()=>fitFrame(box,w,h)); box.appendChild(f); box.classList.add("scaled"); fitObserver.disconnect(); fitObserver.observe(box); requestAnimationFrame(()=>fitFrame(box,w,h)); }
  stage.appendChild(box);
  counter.textContent=(frame+1)+" / "+d.frames.length;
  label.textContent=fr.label||"";
  navState(frame,d.frames.length);
}
function navState(f,len){ const i=DEMOS.findIndex(x=>x.id===sel); prevBtn.disabled=(f===0&&i===0); nextBtn.disabled=(f===len-1&&i===DEMOS.length-1); prevBtn.textContent=(f===0&&i>0)?"← Previous demo":"← Previous"; nextBtn.textContent=(f===len-1&&i<DEMOS.length-1)?"Next demo →":"Next →"; }
function fitFrame(box,w,h){
  const inner=box.querySelector("iframe"); if(!inner)return;
  const bw=box.clientWidth||box.getBoundingClientRect().width, bh=box.clientHeight||box.getBoundingClientRect().height;
  const s=Math.min(bw/w, bh/h);
  if(!s||!isFinite(s))return;
  inner.style.transform="scale("+s+")"; inner.style.transformOrigin="top left";
}
const fitObserver = new ResizeObserver(entries=>{
  entries.forEach(en=>{ const d=demo(); const w=d.w||(d.frames&&d.frames[frame]&&d.frames[frame].w)||1280; const h=d.h||(d.frames&&d.frames[frame]&&d.frames[frame].h)||(d.embed?890:832); fitFrame(en.target,w,h); });
});
let pageBox=null, pageSrc=null;
function renderPage(d){
  frame=Math.max(0,Math.min(frame,d.steps.length-1));
  const w=d.w||1280,h=d.h||832;
  const sp=d.stepPages&&d.stepPages[frame];
  const PG=sp?sp[0]:d.page, HS=sp?sp[1]:frame;
  if(pageSrc!==PG || !stage.contains(pageBox)){
    stage.innerHTML="";
    pageBox=document.createElement("div");
    pageBox.className="hub-frame scaled";
    pageBox.style.aspectRatio=w+" / "+h;
    const f=document.createElement("iframe");
    f.src=PG+"#"+HS; f.style.width=w+"px"; f.style.height=h+"px";
    f.addEventListener("load",()=>fitFrame(pageBox,w,h));
    pageBox.appendChild(f); stage.appendChild(pageBox); pageSrc=PG;
    fitFrame(pageBox,w,h);
    fitObserver.disconnect(); fitObserver.observe(pageBox);
    requestAnimationFrame(()=>fitFrame(pageBox,w,h));
    setTimeout(()=>fitFrame(pageBox,w,h),120);
  } else {
    try{ pageBox.firstChild.contentWindow.location.replace(PG+"#"+HS); }catch(e){ pageBox.firstChild.src=PG+"#"+HS; }
  }
  counter.textContent=(frame+1)+" / "+d.steps.length;
  label.textContent=d.steps[frame]||"";
  navState(frame,d.steps.length);
}
window.addEventListener("resize",()=>{ const b=stage.querySelector(".hub-frame.scaled"); if(b){ const d=demo(); const w=d.w||1280, h=d.h||(d.embed?890:832); fitFrame(b,w,h); } });
function sendKey(key){
  const f=stage.querySelector("iframe.hub-embed");
  if(!f)return false;
  try{ f.contentWindow.dispatchEvent(new KeyboardEvent("keydown",{key:key,bubbles:true})); return true; }catch(e){ return false; }
}
function hop(dir){ const i=DEMOS.findIndex(x=>x.id===sel); const n=i+dir; if(n<0||n>=DEMOS.length)return false; const t=DEMOS[n]; sel=t.id; const len=t.page?t.steps.length:(t.frames?t.frames.length:0); frame=dir>0?0:Math.max(0,len-1); save(); render(); return true; }
function go(dir){ const d=demo(); if(d.embed){ sendKey(dir>0?"ArrowRight":"ArrowLeft"); return; } const len=d.page?d.steps.length:(d.frames?d.frames.length:0); if(!len){ hop(dir); return; } const n=frame+dir; if(n<0||n>=len){ hop(dir); return; } frame=n; save(); renderStage(); }
prevBtn.onclick=()=>go(-1); nextBtn.onclick=()=>go(1);
window.addEventListener("keydown",e=>{
  if(e.key==="ArrowRight"||e.key===" "){ go(1); e.preventDefault(); }
  else if(e.key==="ArrowLeft"){ go(-1); e.preventDefault(); }
  else if(e.key==="Home"){ if(demo().embed){sendKey("Home");return;} frame=0; save(); renderStage(); }
  else if(e.key==="End"){ const d=demo(); if(d.embed){sendKey("End");return;} const len=d.page?d.steps.length:(d.frames?d.frames.length:0); if(len){frame=len-1; save(); renderStage();} }
});
function render(){ renderSidebar(); renderStage(); }
render();
})();
