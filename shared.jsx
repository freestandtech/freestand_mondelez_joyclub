/* Mondelez × FreeStand journey demo — shared constants & primitives */
const CAD_PURPLE = "#3B1E78";
const CAD_PURPLE_DK = "#2A1458";
const CAD_GOLD = "#E8A417";
const MZ_NAVY = "rgb(5,39,98)";
const MZ_BLUE = "#1677FF";
const MZ_GREEN = "#2E7D32";
const __R = window.__resources||{};
const MZ_FS_LOGO = __R["fsLogo"]||"mdlz/fs-logo.png";
const MZ_IMG = { aarav: __R["aarav"]||"mdlz/aarav.png", logo: __R["mdlzLogo"]||"mdlz/mdlz-logo.png", qr: __R["qrScan"]||"mdlz/qr-scan.png", ugc1: __R["ugc1"]||"mdlz/ugc-1.png", ugc2: __R["ugc2"]||"mdlz/ugc-2.png" };

function CadburyMark({ size=20, light }){
  return <img src={MZ_IMG.logo} alt="Mondelēz International" style={{height:size*1.6,background:light?"#fff":"none",borderRadius:light?6:0,padding:light?"3px 8px":0}}/>;
}
function MdlzMark({ size=15, light }){
  return <img src={MZ_IMG.logo} alt="Mondelēz International" style={{height:size*2.1,background:light?"#fff":"none",borderRadius:light?6:0,padding:light?"3px 8px":0}}/>;
}
function FSMark({ h=18, boxed }){
  return <img src={MZ_FS_LOGO} alt="FreeStand" style={{height:h,background:boxed?"#fff":"none",borderRadius:boxed?6:0,padding:boxed?"4px 8px":0}}/>;
}

/* Bottom system-detail strip */
function DetailStrip({ kicker, title, sub, right, children }){
  return (
    <div style={{position:"absolute",left:0,right:0,bottom:0,height:412,background:"#fff",borderTop:"1px solid #e6e6ee",display:"flex",flexDirection:"column"}}>
      <div style={{padding:"14px 28px 10px",display:"flex",alignItems:"flex-start",justifyContent:"space-between",borderBottom:"1px solid #f0f0f4",flexShrink:0}}>
        <div>
          <div style={{fontSize:10.5,fontWeight:700,color:MZ_BLUE,letterSpacing:2,textTransform:"uppercase"}}>{kicker}</div>
          <div style={{fontSize:19,fontWeight:600,color:"#1a1a1a",marginTop:2}}>{title}</div>
          {sub && <div style={{fontSize:12.5,color:"#888",marginTop:2,fontWeight:300}}>{sub}</div>}
        </div>
        {right}
      </div>
      <div style={{flex:1,minHeight:0,padding:"14px 28px 16px",display:"flex",gap:16}}>{children}</div>
    </div>
  );
}
function DCol({ flex=1, title, children, style }){
  return (
    <div style={{flex,minWidth:0,border:"1px solid #eceef4",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden",...style}}>
      {title && <div style={{padding:"8px 14px",fontSize:10.5,fontWeight:700,color:"#999",letterSpacing:1,textTransform:"uppercase",borderBottom:"1px solid #f2f2f6",flexShrink:0}}>{title}</div>}
      <div style={{flex:1,minHeight:0,padding:"10px 14px",overflow:"hidden"}}>{children}</div>
    </div>
  );
}
function CheckRow({ t, s, i=0, color=MZ_GREEN }){
  return (
    <div style={{display:"flex",alignItems:"center",gap:11,padding:"8px 0",borderBottom:"1px solid #f4f4f8",animation:`fadeInUp 0.35s ${i*0.12}s both`}}>
      <div style={{width:22,height:22,borderRadius:999,border:`2px solid ${color}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div><div style={{fontSize:12.5,fontWeight:600,color:"#222"}}>{t}</div>{s && <div style={{fontSize:10.5,color:"#909090",marginTop:1}}>{s}</div>}</div>
    </div>
  );
}
function KV({ k, v, i=0, hi }){
  return (
    <div style={{display:"flex",justifyContent:"space-between",gap:12,padding:"6px 10px",borderRadius:6,background:hi?"#FDF3DC":"transparent",fontSize:12,animation:`fadeInUp 0.3s ${i*0.07}s both`}}>
      <span style={{color:"#8a8a94",whiteSpace:"nowrap",flexShrink:0}}>{k}</span><span style={{fontWeight:600,color:"#26262e",textAlign:"right",minWidth:0}}>{v}</span>
    </div>
  );
}
function WABubble({ me, children, delay=0 }){
  return (
    <div style={{display:"flex",justifyContent:me?"flex-end":"flex-start",animation:`fadeInUp 0.3s ${delay}s both`}}>
      <div style={{maxWidth:"82%",background:me?"#D9FDD3":"#fff",border:"1px solid #e6e6e6",borderRadius:me?"10px 2px 10px 10px":"2px 10px 10px 10px",padding:"7px 11px",fontSize:11.5,lineHeight:1.45,color:"#222",boxShadow:"0 1px 1px rgba(0,0,0,0.05)"}}>{children}</div>
    </div>
  );
}
function WAPane({ title="Cadbury Dairy Milk", children }){
  return (
    <div style={{height:"100%",display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:"1px solid #e2e2e8"}}>
      <div style={{background:"#075E54",color:"#fff",padding:"8px 14px",display:"flex",alignItems:"center",gap:9,flexShrink:0}}>
        <div style={{width:24,height:24,borderRadius:999,background:CAD_PURPLE,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontFamily:"'Lobster Two',Georgia,serif",fontStyle:"italic",color:"#fff",fontSize:12,fontWeight:700}}>C</span></div>
        <div><div style={{fontSize:12,fontWeight:700}}>{title}</div><div style={{fontSize:9,opacity:0.8}}>Verified business · WhatsApp</div></div>
      </div>
      <div style={{flex:1,minHeight:0,background:"#EFE7DD",padding:"10px 12px",display:"flex",flexDirection:"column",gap:7,overflow:"hidden",justifyContent:"flex-end"}}>{children}</div>
    </div>
  );
}
function PtsChip({ v }){
  return <span style={{background:CAD_GOLD,color:"#3a2600",fontSize:10.5,fontWeight:800,borderRadius:999,padding:"3px 10px",whiteSpace:"nowrap"}}>+{v} pts</span>;
}
Object.assign(window, { MZ_IMG, CAD_PURPLE, CAD_PURPLE_DK, CAD_GOLD, MZ_NAVY, MZ_BLUE, MZ_GREEN, MZ_FS_LOGO, CadburyMark, MdlzMark, FSMark, DetailStrip, DCol, CheckRow, KV, WABubble, WAPane, PtsChip });
