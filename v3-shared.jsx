/* v3 shared primitives — always-on ecosystem demo */
const MZ3_AD = (window.__resources||{})["adCadbury"]||"mdlz/ad-cadbury.png";
/* Sampling stall scene (uses MZPerson/MZDairyMilk/MZQr from scene.jsx) */
function MZ3Stall({ tag="FREE TASTE", chip="Scan → answer → claim", retail, h=260 }){
  return (
    <div style={{position:"relative",background:"#fff",border:"1px solid #e8e8f0",borderRadius:16,overflow:"hidden",height:h,flex:"none"}}>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(#F5F3FA,#ECE8F4)"}}></div>
      {retail && <div style={{position:"absolute",left:14,right:14,top:18,display:"flex",flexDirection:"column",gap:10,opacity:0.55}}>
        {[0,1].map(r=>(<div key={r} style={{height:26,borderBottom:"3px solid #C9C2D8",display:"flex",gap:6,alignItems:"flex-end",paddingLeft:8}}>{Array.from({length:14},(_,i)=><div key={i} style={{width:14,height:20,borderRadius:2,background:["#8A6FC0","#B8A9DA","#E0B24A","#9C87CB"][i%4]}}></div>)}</div>))}
      </div>}
      <div style={{position:"absolute",left:0,right:0,bottom:0,height:24,background:"#DDD8E8"}}></div>
      <div style={{position:"absolute",left:"50%",transform:"translateX(-50%)",bottom:24,width:310}}>
        <div style={{height:26,background:`repeating-linear-gradient(90deg,${CAD_PURPLE} 0 34px,#fff 34px 68px)`,borderRadius:"10px 10px 0 0",border:`1px solid ${CAD_PURPLE}`}}></div>
        <div style={{height:40,background:CAD_PURPLE,display:"flex",alignItems:"center",justifyContent:"center",gap:10}}><span style={{fontFamily:"'Lobster Two',cursive",color:"#fff",fontSize:17}}>Cadbury</span><span style={{color:CAD_GOLD,fontSize:9.5,fontWeight:800,letterSpacing:1.5}}>{tag}</span></div>
        <div style={{height:104,background:"#F7F4FC",border:"1px solid #e2d9f2",position:"relative"}}>
          <div style={{position:"absolute",left:18,bottom:0,width:120,height:48,background:"#5E3D96",borderRadius:"6px 6px 0 0"}}></div>
          <div style={{position:"absolute",left:28,bottom:48}}><MZDairyMilk w={34} qr/></div>
          <div style={{position:"absolute",left:72,bottom:48}}><MZDairyMilk w={27}/></div>
          <div style={{position:"absolute",right:12,top:10,background:"#fff",border:`1.5px solid ${CAD_PURPLE}`,borderRadius:5,padding:"4px 8px",fontSize:9,fontWeight:700,color:CAD_PURPLE,whiteSpace:"nowrap"}}>{chip}</div>
          {retail && <div style={{position:"absolute",right:18,bottom:0,width:52,height:70,background:"#fff",border:`2px solid ${CAD_PURPLE}`,borderRadius:"5px 5px 0 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:3}}><MZQr size={30}/><span style={{fontSize:6.5,fontWeight:800,color:CAD_PURPLE}}>SCAN ME</span></div>}
        </div>
      </div>
      <div style={{position:"absolute",left:"50%",bottom:-50,transform:"translateX(64px)"}}><MZPerson x={0} shirt="#3B1E78" apron flip/></div>
      <div style={{position:"absolute",left:"50%",bottom:-50,transform:"translateX(-152px)"}}><MZPerson x={0} shirt="#1E6E5C" phone/></div>
      <div style={{position:"absolute",left:12,top:10,background:"rgba(255,255,255,0.9)",borderRadius:999,padding:"4px 12px",fontSize:10,fontWeight:800,color:CAD_PURPLE,border:"1px solid #e5ddf3"}}>{retail?"Modern trade endcap":"Mall / event stall"}</div>
    </div>
  );
}
function MZ3Kicker({ children, color=CAD_GOLD }){
  return <div style={{fontSize:11,fontWeight:800,letterSpacing:2.2,textTransform:"uppercase",color}}>{children}</div>;
}
function MZ3Chip({ t, on, onClick, small }){
  return <button onClick={onClick} style={{cursor:onClick?"pointer":"default",border:on?`1.5px solid ${CAD_PURPLE}`:"1.5px solid #e3e3ec",background:on?"#F3EFFB":"#fff",color:on?CAD_PURPLE:"#555",fontSize:small?11:12,fontWeight:700,borderRadius:999,padding:small?"4px 11px":"6px 14px",fontFamily:"inherit"}}>{t}</button>;
}
function MZ3Tag({ t, tone="gold" }){
  const c = tone==="gold"?{bg:"#FDF3DC",fg:"#7a5200"}:tone==="green"?{bg:"#E6F6EA",fg:"#1d6b2f"}:tone==="purple"?{bg:"#F3EFFB",fg:CAD_PURPLE}:{bg:"#EDF3FF",fg:"#1c4fd6"};
  return <span style={{background:c.bg,color:c.fg,fontSize:10.5,fontWeight:800,borderRadius:6,padding:"3px 8px",whiteSpace:"nowrap"}}>{t}</span>;
}
function MZ3Stat({ v, l, i=0, light }){
  return (
    <div style={{animation:`fadeInUp .4s ${i*0.08}s both`}}>
      <div style={{fontSize:26,fontWeight:800,color:light?"#fff":CAD_PURPLE,lineHeight:1.1}}>{v}</div>
      <div style={{fontSize:11.5,color:light?"rgba(255,255,255,0.75)":"#777",marginTop:3}}>{l}</div>
    </div>
  );
}
function MZ3Phone({ w=252, h=520, children, dark }){
  return (
    <div style={{width:w,height:h,borderRadius:30,border:"7px solid #1c1c22",background:dark?"#111":"#fff",overflow:"hidden",position:"relative",boxShadow:"0 18px 40px rgba(20,10,50,0.22)",flex:"none"}}>
      <div style={{position:"absolute",top:6,left:"50%",transform:"translateX(-50%)",width:70,height:14,borderRadius:8,background:"#1c1c22",zIndex:5}}></div>
      <div style={{height:"100%",display:"flex",flexDirection:"column"}}>{children}</div>
    </div>
  );
}
function MZ3WAHead({ title, sub="online" }){
  return (
    <div style={{background:"#075E54",color:"#fff",padding:"22px 12px 9px",display:"flex",alignItems:"center",gap:9,flex:"none"}}>
      <div style={{width:28,height:28,borderRadius:"50%",background:CAD_PURPLE,display:"grid",placeItems:"center",fontSize:12,fontWeight:800,fontFamily:"'Lobster Two',cursive"}}>C</div>
      <div><div style={{fontSize:12.5,fontWeight:700}}>{title}</div><div style={{fontSize:9.5,opacity:0.8}}>{sub} · ✓ verified business</div></div>
    </div>
  );
}
function MZ3WABody({ children }){
  return <div style={{flex:1,minHeight:0,overflow:"hidden",background:"#E5DDD5",padding:"10px 9px",display:"flex",flexDirection:"column",gap:7,justifyContent:"flex-end"}}>{children}</div>;
}
function MZ3Bub({ me, children, delay=0, media }){
  return (
    <div style={{display:"flex",justifyContent:me?"flex-end":"flex-start",animation:`fadeInUp .35s ${delay}s both`}}>
      <div style={{maxWidth:"86%",background:me?"#DCF8C6":"#fff",borderRadius:9,padding:media?4:"7px 10px",fontSize:11.5,lineHeight:1.45,boxShadow:"0 1px 1px rgba(0,0,0,0.12)"}}>{children}</div>
    </div>
  );
}
function MZ3QuickBtns({ opts, delay=0 }){
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:5,justifyContent:"flex-start",animation:`fadeInUp .35s ${delay}s both`}}>
      {opts.map((o,i)=><div key={i} style={{background:"#fff",color:"#0a7cff",border:"1px solid #d5e4f0",fontSize:10.5,fontWeight:700,borderRadius:999,padding:"5px 11px"}}>{o}</div>)}
    </div>
  );
}
function MZ3IGHead({ user="cadburydairymilk" }){
  return (
    <div style={{padding:"22px 11px 8px",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid #efefef",flex:"none"}}>
      <div style={{width:28,height:28,borderRadius:"50%",padding:2,background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"}}>
        <div style={{width:"100%",height:"100%",borderRadius:"50%",background:CAD_PURPLE,display:"grid",placeItems:"center",color:"#fff",fontSize:11,fontWeight:800,fontFamily:"'Lobster Two',cursive"}}>C</div>
      </div>
      <div style={{fontSize:11.5,fontWeight:700}}>{user} <span style={{color:"#3897f0"}}>✓</span></div>
      <div style={{marginLeft:"auto",fontSize:14,color:"#999"}}>⋯</div>
    </div>
  );
}
/* Simple SVG area chart */
function MZ3Area({ pts, w=380, h=120, color=CAD_PURPLE, fill, labels, unit="" }){
  const max = Math.max(...pts)*1.12;
  const xs = pts.map((p,i)=>[ (i/(pts.length-1))*(w-8)+4, h-14-(p/max)*(h-30) ]);
  const line = xs.map((p,i)=>`${i?"L":"M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const area = line+` L${xs[xs.length-1][0]},${h-14} L${xs[0][0]},${h-14} Z`;
  return (
    <svg width={w} height={h} style={{display:"block",maxWidth:"100%"}}>
      <path d={area} fill={fill||color} opacity="0.12"></path>
      <path d={line} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round"></path>
      <circle cx={xs[xs.length-1][0]} cy={xs[xs.length-1][1]} r="3.6" fill={color}></circle>
      {labels && labels.map((l,i)=><text key={i} x={(i/(labels.length-1))*(w-8)+4} y={h-2} fontSize="8.5" fill="#999" textAnchor="middle">{l}</text>)}
    </svg>
  );
}
function MZ3Panel({ title, kicker, children, style }){
  return (
    <div style={{background:"#fff",border:"1px solid #e8e8f0",borderRadius:14,padding:"16px 18px",display:"flex",flexDirection:"column",gap:10,...style}}>
      {kicker && <MZ3Kicker color={CAD_PURPLE}>{kicker}</MZ3Kicker>}
      {title && <div style={{fontSize:15,fontWeight:800,color:"#1a1a1a",marginTop:kicker?-4:0}}>{title}</div>}
      {children}
    </div>
  );
}
function MZ3DataChips({ items, label="Data captured at this gate" }){
  return (
    <div>
      <div style={{fontSize:10.5,fontWeight:800,letterSpacing:1.4,textTransform:"uppercase",color:"#999",marginBottom:7}}>{label}</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
        {items.map((d,i)=><span key={i} style={{background:"#F3EFFB",color:CAD_PURPLE,fontSize:11,fontWeight:700,borderRadius:999,padding:"4px 11px",animation:`fadeInUp .3s ${i*0.06}s both`}}>{d}</span>)}
      </div>
    </div>
  );
}
const MZ3_SITE = (window.__resources||{})["sitePic"]||"mdlz/cadbury-site.png";
const MZ3_FORM = (window.__resources||{})["formPic"]||"mdlz/web-form.png";
const MZ3_SCAN = (window.__resources||{})["scanPic"]||"mdlz/scan-photo.png";
/* Uniform visual frame — same size for every acquire channel so switching never feels abrupt */
function MZ3Visual({ children, label }){
  return (
    <div style={{width:460,flex:"none",height:"100%",borderRadius:18,background:"linear-gradient(165deg,#EFEAF7,#E2DBF0)",border:"1px solid #e0d8ef",position:"relative",overflow:"hidden",display:"grid",placeItems:"center",padding:20}}>
      {label && <div style={{position:"absolute",left:14,top:12,zIndex:6,background:"rgba(255,255,255,0.92)",borderRadius:999,padding:"4px 12px",fontSize:10,fontWeight:800,color:CAD_PURPLE,border:"1px solid #e5ddf3",letterSpacing:0.5}}>{label}</div>}
      {children}
    </div>
  );
}
/* Bigger, icon-led data capture boxes */
function MZ3DataGrid({ items, label="Data captured at this gate", cols=3 }){
  return (
    <div>
      <div style={{fontSize:10.5,fontWeight:800,letterSpacing:1.4,textTransform:"uppercase",color:"#999",marginBottom:8}}>{label}</div>
      <div style={{display:"grid",gridTemplateColumns:`repeat(${cols},1fr)`,gap:8}}>
        {items.map((d,i)=>(
          <div key={i} style={{display:"flex",gap:9,alignItems:"center",background:"#FBFAFD",border:"1px solid #ece7f6",borderRadius:12,padding:"9px 11px",animation:`fadeInUp .3s ${i*0.05}s both`}}>
            <span style={{width:32,height:32,flex:"none",borderRadius:9,background:"#F3EFFB",display:"grid",placeItems:"center",fontSize:15}}>{d.i}</span>
            <span style={{fontSize:11.5,fontWeight:800,color:"#3a3a44",lineHeight:1.25}}>{d.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
/* Floating "this is interactive" hint */
function MZ3ClickHint({ t="Click to interact", style }){
  return <div style={{position:"absolute",zIndex:8,background:"#17111f",color:"#fff",fontSize:10.5,fontWeight:800,borderRadius:999,padding:"5px 12px",boxShadow:"0 6px 16px rgba(0,0,0,0.28)",whiteSpace:"nowrap",animation:"hintFloat 1.5s ease-in-out infinite",pointerEvents:"none",...style}}>👆 {t}</div>;
}
/* Small horizontal arrow flow */
function MZ3Flow({ nodes }){
  return (
    <div style={{display:"flex",alignItems:"stretch",gap:7}}>
      {nodes.map((n,i)=>(
        <React.Fragment key={i}>
          <div style={{flex:1,background:i===nodes.length-1?"#FDF3DC":"#F7F5FB",border:`1px solid ${i===nodes.length-1?"#ecd9a8":"#ece7f6"}`,borderRadius:10,padding:"8px 8px",textAlign:"center",animation:`fadeInUp .35s ${i*0.12}s both`}}>
            <div style={{fontSize:16}}>{n[0]}</div>
            <div style={{fontSize:10,fontWeight:800,color:"#444",marginTop:2,lineHeight:1.3}}>{n[1]}</div>
          </div>
          {i<nodes.length-1 && <span style={{alignSelf:"center",color:CAD_GOLD,fontWeight:800,fontSize:14}}>→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
Object.assign(window, { MZ3_AD, MZ3_SITE, MZ3_FORM, MZ3_SCAN, MZ3Stall, MZ3Kicker, MZ3Chip, MZ3Tag, MZ3Stat, MZ3Phone, MZ3WAHead, MZ3WABody, MZ3Bub, MZ3QuickBtns, MZ3IGHead, MZ3Area, MZ3Panel, MZ3DataChips, MZ3Visual, MZ3DataGrid, MZ3ClickHint, MZ3Flow });
