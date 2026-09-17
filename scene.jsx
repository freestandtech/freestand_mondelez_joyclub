/* Mall walking scene + living 1PD profile card */

const MZ_ATTRS = [
  {k:"Name",v:"Aarav Mehta",s:2},{k:"Pincode",v:"400050",s:2},
  {k:"Consent",v:"Opt-in · 6:12 PM",s:3},{k:"Source",v:"Mall kiosk · Orbit Mall",s:3},
  {k:"Locality",v:"Bandra West, Mumbai",s:5},{k:"Affluence",v:"Tier A2 · High",s:5},{k:"Catchment",v:"14 modern-trade stores",s:5},{k:"Persona",v:"Young urban professional",s:5},
  {k:"Channel",v:"WhatsApp · QR scan",s:7},{k:"Device",v:"Android",s:7},
  {k:"Taste",v:"Milk chocolate",s:8},{k:"Frequency",v:"Weekly buyer",s:8},{k:"Occasion",v:"Shares with family",s:8},
  {k:"Sampled",v:"Dairy Milk 13 g",s:9},{k:"Handover",v:"Verified · 6:31 PM",s:9},
  {k:"Sentiment",v:"Loved it ★★★★★",s:10},{k:"Intent",v:"Will buy this week",s:10},
  {k:"Loyalty",v:"Joy Club #JC-88412",s:11},{k:"Points",v:"100 pts · Joy Starter",s:11},
  {k:"UGC",v:"1 post · #DairyMilkMoment",s:12},{k:"Social",v:"@aarav.mehta",s:12},
  {k:"Purchase",v:"Verified · ₹95",s:13},{k:"Store",v:"Smart Bazaar, Linking Rd",s:13},{k:"Points",v:"440 pts total",s:13},
];
const MZ_ATTR_MAX = MZ_ATTRS.length;

function MZPerson({ x, walking, shirt="#1E6E5C", apron, flip, phone }){
  return (
    <div style={{position:"absolute",left:x,bottom:74,width:44,display:"flex",flexDirection:"column",alignItems:"center",animation:walking?"mzBob 0.55s ease-in-out infinite":"none",transform:flip?"scaleX(-1)":"none",zIndex:5}}>
      <div style={{width:22,height:22,borderRadius:999,background:"#B07B5E"}}></div>
      <div style={{width:30,height:40,borderRadius:"9px 9px 5px 5px",background:shirt,marginTop:-2,position:"relative"}}>
        {apron && <div style={{position:"absolute",inset:"8px 5px 0",background:CAD_GOLD,borderRadius:"4px 4px 0 0"}}></div>}
        {phone && <div style={{position:"absolute",right:-7,top:9,width:9,height:15,borderRadius:2,background:"#111",border:"1.5px solid #444"}}></div>}
      </div>
      <div style={{display:"flex",gap:6}}>
        <div style={{width:8,height:26,background:"#26324B",borderRadius:3,transformOrigin:"top",animation:walking?"mzLegA 0.55s ease-in-out infinite":"none"}}></div>
        <div style={{width:8,height:26,background:"#26324B",borderRadius:3,transformOrigin:"top",animation:walking?"mzLegB 0.55s ease-in-out infinite":"none"}}></div>
      </div>
    </div>
  );
}

function MZShop({ x, w, name, c1="#E9EAF2", c2="#B9BEd2", sign="#5A6178" }){
  return (
    <div style={{position:"absolute",left:x,bottom:100,width:w,height:230,background:c1,borderRadius:"6px 6px 0 0",border:"1px solid rgba(0,0,0,0.06)"}}>
      <div style={{height:40,background:sign,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:700,letterSpacing:2}}>{name}</div>
      <div style={{position:"absolute",left:14,right:14,top:56,bottom:14,background:c2,opacity:0.35,borderRadius:4}}></div>
    </div>
  );
}

function MZQr({ size=30 }){
  const c=[[0,0],[0,3],[3,0],[1,1],[2,2],[3,2],[2,3],[1,3],[3,3]];
  return (
    <div style={{width:size,height:size,background:"#fff",borderRadius:3,padding:size*0.1,display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridTemplateRows:"repeat(4,1fr)",gap:1}}>
      {Array.from({length:16},(_,i)=>{const on=c.some(([r,cc])=>r*4+cc===i);return <div key={i} style={{background:on?"#111":"transparent"}}></div>;})}
    </div>
  );
}

function MZDairyMilk({ w=54, qr }){
  return (
    <div style={{width:w,height:w*1.5,background:`linear-gradient(160deg,#4B2A94,${CAD_PURPLE} 60%)`,borderRadius:5,boxShadow:"0 6px 14px rgba(42,20,88,0.4)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:6,left:0,right:0,textAlign:"center"}}><span style={{fontFamily:"'Lobster Two',Georgia,serif",fontStyle:"italic",color:"#fff",fontSize:w*0.2,fontWeight:700}}>Cadbury</span></div>
      <div style={{fontSize:w*0.16,fontWeight:800,color:CAD_GOLD,letterSpacing:0.5,marginTop:w*0.28}}>DAIRY MILK</div>
      {qr && <MZQr size={w*0.5}/>}
    </div>
  );
}

/* World track: mall concourse, x = world position */
function MZMallTrack(){
  return (
    <React.Fragment>
      <MZShop x={40} w={330} name="TRENDS" sign="#7A4E63"/>
      {/* Mondelez welcome kiosk */}
      <div style={{position:"absolute",left:540,bottom:100,width:240}}>
        <div style={{height:52,background:"#4F2D7F",borderRadius:"8px 8px 0 0",display:"flex",alignItems:"center",justifyContent:"center"}}><MdlzMark size={14} light/></div>
        <div style={{height:120,background:"#F4F1FA",border:"1px solid #ddd4ee",display:"flex",alignItems:"flex-end",justifyContent:"center",paddingBottom:0}}>
          <div style={{width:150,height:64,background:"#5E3D96",borderRadius:"8px 8px 0 0",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:10,fontWeight:700,letterSpacing:1.5,textAlign:"center"}}>WELCOME<br/>DESK</div>
        </div>
        <div style={{position:"absolute",left:64,top:-38,background:"#fff",border:"1px solid #e0d8f0",borderRadius:6,padding:"5px 12px",fontSize:9.5,fontWeight:700,color:"#4F2D7F",boxShadow:"0 4px 10px rgba(0,0,0,0.1)",whiteSpace:"nowrap"}}>Tell us your name & pincode 👋</div>
      </div>
      <MZPerson x={762} shirt="#4F2D7F" flip/>
      <MZShop x={880} w={380} name="CAFÉ AROMA" sign="#7E6A4E" c1="#F2EDE4" c2="#D8C9AC"/>
      <MZShop x={1320} w={340} name="URBAN KIDS" sign="#4E6B7E"/>
      {/* Cadbury stall */}
      <div style={{position:"absolute",left:1790,bottom:100,width:330}}>
        <div style={{height:34,background:`repeating-linear-gradient(90deg,${CAD_PURPLE} 0 40px,#fff 40px 80px)`,borderRadius:"8px 8px 0 0",border:`1px solid ${CAD_PURPLE}`}}></div>
        <div style={{height:44,background:CAD_PURPLE,display:"flex",alignItems:"center",justifyContent:"center",gap:10}}><CadburyMark size={22} light/><span style={{color:CAD_GOLD,fontSize:10,fontWeight:800,letterSpacing:1.5}}>FREE TASTE</span></div>
        <div style={{height:128,background:"#F7F4FC",border:"1px solid #e2d9f2",position:"relative"}}>
          <div style={{position:"absolute",left:20,bottom:0,width:130,height:58,background:"#5E3D96",borderRadius:"6px 6px 0 0"}}></div>
          <div style={{position:"absolute",left:34,bottom:58}}><MZDairyMilk w={40} qr/></div>
          <div style={{position:"absolute",left:86,bottom:58}}><MZDairyMilk w={32}/></div>
          <div style={{position:"absolute",right:16,top:14,background:"#fff",border:`1.5px solid ${CAD_PURPLE}`,borderRadius:5,padding:"4px 8px",fontSize:8.5,fontWeight:700,color:CAD_PURPLE,whiteSpace:"nowrap"}}>Scan → answer → claim</div>
        </div>
        <div style={{position:"absolute",right:14,bottom:-100,width:44}}><MZPerson x={0} shirt="#3B1E78" apron flip/></div>
      </div>
      {/* UGC photo wall */}
      <div style={{position:"absolute",left:2420,bottom:100,width:300,height:200,background:`linear-gradient(150deg,${CAD_PURPLE},#5E3D96)`,borderRadius:"8px 8px 0 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10}}>
        <CadburyMark size={26} light/>
        <div style={{color:CAD_GOLD,fontSize:15,fontWeight:800,letterSpacing:1}}>#DairyMilkMoment</div>
        <div style={{color:"rgba(255,255,255,0.75)",fontSize:9.5,fontWeight:600,letterSpacing:1}}>POST · TAG · EARN JOY POINTS</div>
      </div>
      <div style={{position:"absolute",left:2860,bottom:100,width:200,height:230,background:"#E4E7EF",borderRadius:"6px 6px 0 0",display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:14}}>
        <div style={{background:"#2E7D32",color:"#fff",fontSize:12,fontWeight:800,letterSpacing:3,padding:"6px 20px",borderRadius:4}}>EXIT →</div>
      </div>
    </React.Fragment>
  );
}

function MZHomeTrack(){
  return (
    <React.Fragment>
      <div style={{position:"absolute",left:120,bottom:100,width:170,height:190,background:"#39415C",borderRadius:8,padding:10}}>
        <div style={{width:"100%",height:"100%",borderRadius:4,background:"linear-gradient(180deg,#F5C86E,#E58F4E)",opacity:0.85}}></div>
      </div>
      <div style={{position:"absolute",left:360,bottom:100,width:250,height:86,background:"#7E5A8C",borderRadius:"12px 12px 4px 4px"}}>
        <div style={{position:"absolute",left:-14,top:-22,width:34,height:100,background:"#6E4C7C",borderRadius:10}}></div>
        <div style={{position:"absolute",right:-14,top:-22,width:34,height:100,background:"#6E4C7C",borderRadius:10}}></div>
      </div>
      <div style={{position:"absolute",left:700,bottom:100,width:14,height:170,background:"#4A4A55",borderRadius:4}}>
        <div style={{position:"absolute",top:-30,left:-24,width:62,height:40,background:"#F2D48A",borderRadius:"50% 50% 8% 8%",boxShadow:"0 18px 40px rgba(242,212,138,0.5)"}}></div>
      </div>
      <div style={{position:"absolute",left:820,bottom:174,transform:"scale(0.9)"}}><MZDairyMilk w={40}/></div>
      <div style={{position:"absolute",left:800,bottom:100,width:160,height:70,background:"#4E5A78",borderRadius:6}}>
        <div style={{position:"absolute",top:-8,left:14,width:70,height:10,background:"#fff",borderRadius:2,transform:"rotate(-4deg)",boxShadow:"0 2px 6px rgba(0,0,0,0.2)"}}></div>
      </div>
    </React.Fragment>
  );
}

function MZProfileCard({ attrStep, personX }){
  const attrs = MZ_ATTRS.filter(a=>a.s<=attrStep);
  const fresh = attrs.filter(a=>a.s===attrStep).length;
  const shown = attrs.slice(-5);
  const pct = Math.round(attrs.length/MZ_ATTR_MAX*100);
  if(attrs.length===0) return null;
  return (
    <div style={{position:"absolute",left:personX-128,top:18,width:300,zIndex:9,transition:"left 1.2s cubic-bezier(0.3,0.7,0.3,1)"}}>
      <div style={{background:"rgba(255,255,255,0.97)",borderRadius:12,border:`1.5px solid ${CAD_PURPLE}`,boxShadow:"0 14px 34px rgba(42,20,88,0.28)",overflow:"hidden"}}>
        <div style={{background:CAD_PURPLE,padding:"7px 12px",display:"flex",alignItems:"center",gap:8}}>
          <span style={{width:7,height:7,borderRadius:999,background:CAD_GOLD,animation:"blink 1.4s infinite"}}></span>
          <span style={{color:"#fff",fontSize:10,fontWeight:800,letterSpacing:1.5}}>1PD PROFILE · LIVE</span>
          {fresh>0 && <span key={attrStep} style={{marginLeft:"auto",background:CAD_GOLD,color:"#3a2600",fontSize:9.5,fontWeight:800,borderRadius:999,padding:"2px 8px",animation:"fadeInUp 0.4s both"}}>+{fresh} new</span>}
        </div>
        <div style={{padding:"8px 12px 6px",display:"flex",alignItems:"center",gap:9,borderBottom:"1px solid #f0edf6"}}>
          <div style={{width:28,height:28,borderRadius:999,background:"#EDE7F8",color:CAD_PURPLE,fontSize:11,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}}>AM</div>
          <div style={{flex:1}}>
            <div style={{fontSize:12.5,fontWeight:700,color:"#1a1a1a"}}>Aarav Mehta</div>
            <div style={{fontSize:9.5,color:"#999"}}>ID MDLZ-1PD-88412 · Mumbai 400050</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:15,fontWeight:800,color:CAD_PURPLE,lineHeight:1}}>{attrs.length}</div>
            <div style={{fontSize:8,color:"#999",letterSpacing:0.5}}>ATTRIBUTES</div>
          </div>
        </div>
        <div style={{padding:"6px 12px 4px"}}>
          <div style={{height:5,background:"#EFEBF7",borderRadius:3,overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${CAD_PURPLE},${CAD_GOLD})`,transition:"width 0.9s ease"}}></div></div>
        </div>
        <div style={{padding:"2px 6px 8px"}}>
          {shown.map((a,i)=>(
            <div key={a.k+a.s} style={{display:"flex",justifyContent:"space-between",gap:10,padding:"3.5px 8px",borderRadius:5,fontSize:10.5,background:a.s===attrStep?"#FDF3DC":"transparent",animation:a.s===attrStep?`fadeInUp 0.4s ${i*0.1}s both`:"none"}}>
              <span style={{color:"#95919e"}}>{a.k}</span><span style={{fontWeight:700,color:"#2a2632",textAlign:"right",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{a.v}</span>
            </div>
          ))}
          {attrs.length>5 && <div style={{fontSize:9,color:"#a9a4b4",padding:"3px 8px 0"}}>+ {attrs.length-5} more attributes on file</div>}
        </div>
      </div>
      <div style={{width:2,height:26,background:CAD_PURPLE,margin:"0 auto",opacity:0.5}}></div>
      <div style={{width:8,height:8,borderRadius:999,background:CAD_PURPLE,margin:"0 auto",marginTop:-2}}></div>
    </div>
  );
}

/* cfg: { cameraX, walking, home, beam, chip, caption, attrStep, personX(view)=430 } */
function MZScene({ cfg }){
  const personX = cfg.personX ?? 430;
  return (
    <div style={{position:"absolute",left:0,right:0,top:0,height:478,overflow:"hidden",background:cfg.home?"linear-gradient(180deg,#232838 0%,#2E3448 62%,#3A4055 62.1%,#333950 100%)":"linear-gradient(180deg,#F2F1F5 0%,#EDEAF2 56%,#DCD9E4 56.1%,#CFCBDA 100%)"}}>
      <style>{`@keyframes mzBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}@keyframes mzLegA{0%,100%{transform:rotate(14deg)}50%{transform:rotate(-14deg)}}@keyframes mzLegB{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}@keyframes mzPkt{from{left:34%;opacity:1}to{left:92%;opacity:0.2}}`}</style>
      {/* floor tiles */}
      <div style={{position:"absolute",left:0,right:0,bottom:0,height:100,background:cfg.home?"repeating-linear-gradient(90deg,transparent 0 118px,rgba(255,255,255,0.05) 118px 120px)":"repeating-linear-gradient(90deg,transparent 0 78px,rgba(59,30,120,0.08) 78px 80px)"}}></div>
      <div style={{position:"absolute",left:0,width:3200,top:0,bottom:0,transform:`translateX(${-cfg.cameraX}px)`,transition:"transform 1.4s cubic-bezier(0.3,0.7,0.25,1)"}}>
        {cfg.home?<MZHomeTrack/>:<MZMallTrack/>}
      </div>
      <MZPerson x={personX} walking={cfg.walking} phone={cfg.phone}/>
      <MZProfileCard attrStep={cfg.attrStep} personX={personX}/>
      {cfg.beam && (
        <React.Fragment>
          <div style={{position:"absolute",top:120,left:"34%",right:"4%",borderTop:"2.5px dashed rgba(59,30,120,0.4)"}}></div>
          {[0,1,2].map(i=>(
            <div key={i} style={{position:"absolute",top:112,width:34,height:16,borderRadius:4,background:CAD_PURPLE,color:"#fff",fontSize:8,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",animation:`mzPkt 2.1s linear ${i*0.7}s infinite`}}>1PD</div>
          ))}
          <div style={{position:"absolute",top:96,right:"4%",background:MZ_NAVY,color:"#fff",fontSize:9.5,fontWeight:700,borderRadius:999,padding:"4px 12px"}}>→ FreeStand · data travelling ahead</div>
        </React.Fragment>
      )}
      <div style={{position:"absolute",top:14,left:16,background:"rgba(20,18,30,0.78)",color:"#fff",fontSize:10.5,fontWeight:600,borderRadius:999,padding:"5px 14px",letterSpacing:0.5,whiteSpace:"nowrap"}}>{cfg.chip}</div>
      {cfg.caption && <div style={{position:"absolute",bottom:12,left:16,right:16,textAlign:"center"}}><span style={{background:"rgba(20,18,30,0.82)",color:"#fff",fontSize:12,fontWeight:500,borderRadius:8,padding:"7px 16px",lineHeight:1.5}}>{cfg.caption}</span></div>}
    </div>
  );
}
Object.assign(window, { MZ_ATTRS, MZ_ATTR_MAX, MZPerson, MZScene, MZQr, MZDairyMilk, MZProfileCard });
