/* App shell + stage list */
const MZ_SECTIONS = { Intro:"#64748B", Capture:"#3B1E78", Enrich:"#0A49B7", Engage:"#B08000", Grow:"#2E7D32", Data:"#92549A", Close:"#5E3D96" };

const MZ_STAGES = [
  { label:"Cover", section:"Intro", render:()=><MZCover/> },
  { label:"Kiosk — name & pincode", section:"Capture", render:()=><MZStage cfg={{cameraX:220,attrStep:2,chip:"Orbit Mall · Concourse L1 · 6:12 PM",caption:<span>Aarav stops at the Mondelez welcome desk — <strong>name & pincode</strong>, nothing more. His 1PD card is born.</span>}} detail={<MZKioskDetail/>}/> },
  { label:"Saved to Mondelez DB", section:"Capture", render:()=><MZStage cfg={{cameraX:220,attrStep:3,chip:"Orbit Mall · Concourse L1 · 6:12 PM",caption:<span>Two fields become a <strong>first-party record</strong> in Mondelez's own database — consented and timestamped.</span>}} detail={<MZDbDetail/>}/> },
  { label:"Data passes ahead", section:"Enrich", render:()=><MZStage cfg={{cameraX:620,walking:true,beam:true,attrStep:3,chip:"Orbit Mall · walking · 6:13 PM",caption:<span>Aarav strolls on. His record is already <strong>racing ahead of him</strong> — Mondelez hands it to FreeStand in real time.</span>}} detail={<MZHandoffDetail/>}/> },
  { label:"Geo-intelligence enrichment", section:"Enrich", render:()=><MZStage cfg={{cameraX:950,walking:true,beam:true,attrStep:5,chip:"FreeStand cloud · 84 ms later",caption:<span>FreeStand's intelligence turns one pincode into <strong>locality, affluence, catchment and persona</strong> — the card above him grows.</span>}} detail={<MZGeoDetail/>}/> },
  { label:"Engagement deployed ahead", section:"Engage", render:()=><MZStage cfg={{cameraX:1250,walking:true,attrStep:5,chip:"Orbit Mall · walking · 6:16 PM",caption:<span>Up ahead, FreeStand has already <strong>deployed the engagement</strong> his profile calls for — a Cadbury tasting stall on his path.</span>}} detail={<MZDeployDetail/>}/> },
  { label:"QR scan on the pack", section:"Engage", render:()=><MZStage cfg={{cameraX:1320,attrStep:7,phone:true,chip:"Cadbury stall · 6:24 PM",caption:<span>A Dairy Milk with a <strong>QR code on the pack</strong> — one scan opens WhatsApp, and it already knows him.</span>}} detail={<MZScanDetail/>}/> },
  { label:"Answer to claim", section:"Engage", render:()=><MZStage cfg={{cameraX:1320,attrStep:8,phone:true,chip:"Cadbury stall · 6:25 PM",caption:<span>Three questions gate the sample — <strong>declared preferences</strong> join the profile.</span>}} detail={<MZQuizDetail/>}/> },
  { label:"Promoter hands the sample", section:"Engage", render:()=><MZStage cfg={{cameraX:1320,attrStep:9,chip:"Cadbury stall · 6:31 PM",caption:<span>The promoter verifies code CDM-4471 and hands over the Dairy Milk — a <strong>verified trial</strong>, not a blind drop.</span>}} detail={<MZHandoverDetail/>}/> },
  { label:"Feedback on the walk", section:"Grow", render:()=><MZStage cfg={{cameraX:1980,walking:true,phone:true,attrStep:10,chip:"Orbit Mall · walking · 6:43 PM",caption:<span>Still walking, taste still fresh — a feedback ping lands and <strong>sentiment + intent</strong> join the card.</span>}} detail={<MZFeedbackDetail/>}/> },
  { label:"Enrolled into Joy Club", section:"Grow", render:()=><MZStage cfg={{cameraX:2060,walking:true,phone:true,attrStep:11,chip:"Orbit Mall · walking · 6:44 PM",caption:<span>No form, no signup — the verified claim <strong>auto-enrols him into Cadbury Joy Club</strong> with 100 points.</span>}} detail={<MZLoyaltyDetail/>}/> },
  { label:"UGC at the photo wall", section:"Grow", render:()=><MZStage cfg={{cameraX:2140,attrStep:12,phone:true,chip:"Orbit Mall · photo wall · 6:52 PM",caption:<span>A photo at the #DairyMilkMoment wall — <strong>UGC earns points</strong>, and a social handle joins the profile.</span>}} detail={<MZUgcDetail/>}/> },
  { label:"Receipt upload at home", section:"Grow", render:()=><MZStage cfg={{cameraX:0,personX:660,home:true,phone:true,attrStep:13,chip:"Home · Bandra West · Saturday, 8:10 PM",caption:<span>Days later he buys a Dairy Milk Silk and <strong>uploads the receipt</strong> — points for him, a verified purchase for Mondelez.</span>}} detail={<MZReceiptDetail/>}/> },
  { label:"The enriched profile", section:"Data", render:()=><MZRecapScene/> },
  { label:"FreeStand analytics", section:"Data", render:()=><MZAnalyticsScene/> },
  { label:"Handover to Mondelez CRM", section:"Data", render:()=><MZCrmScene/> },
  { label:"Thank you", section:"Close", render:()=><MZThanks/> },
];

const MZ_INTRO = [
  ["1","Capture","Aarav gives name + pincode at the mall kiosk — saved to Mondelez's DB"],
  ["2","Enrich","The record passes to FreeStand and geo-intelligence multiplies it — while he walks"],
  ["3","Engage","A QR-on-pack Cadbury stall, a 3-question quiz, a promoter handover"],
  ["4","Grow","Feedback, Joy Club loyalty, UGC and receipt uploads keep enriching the profile"],
  ["5","Own","24 consented attributes, analytics and a full CRM handover to Mondelez"],
];

function MZIntroModal({ onClose }){
  return (
    <div style={{position:"fixed",inset:0,zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(10,12,16,0.72)",backdropFilter:"blur(3px)"}}>
      <div style={{width:560,background:"#fff",borderRadius:14,overflow:"hidden",boxShadow:"0 30px 80px rgba(0,0,0,0.5)",fontFamily:"Roboto,-apple-system,sans-serif",animation:"fadeInUp 0.35s both"}}>
        <div style={{background:`linear-gradient(135deg,${CAD_PURPLE_DK},${CAD_PURPLE})`,padding:"22px 28px",display:"flex",alignItems:"center",gap:16}}>
          <CadburyMark size={26} light/>
          <div>
            <div style={{color:"#fff",fontSize:18,fontWeight:600}}>The Data-Enrichment Walk</div>
            <div style={{color:"rgba(255,255,255,0.75)",fontSize:12.5,marginTop:2}}>Mondelez × FreeStand · interactive demo · {MZ_STAGES.length} steps</div>
          </div>
        </div>
        <div style={{padding:"16px 28px 6px"}}>
          {MZ_INTRO.map(([n,t,s],i)=>(
            <div key={n} style={{display:"flex",gap:14,alignItems:"flex-start",padding:"9px 0",borderBottom:i<MZ_INTRO.length-1?"1px solid #f2f2f2":"none"}}>
              <div style={{width:24,height:24,borderRadius:999,background:"#EDE7F8",color:CAD_PURPLE,fontSize:12,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>{n}</div>
              <div><span style={{fontSize:13.5,fontWeight:700,color:"#1a1a1a"}}>{t}</span><span style={{fontSize:13,color:"#666",marginLeft:8}}>{s}</span></div>
            </div>
          ))}
        </div>
        <div style={{padding:"14px 28px 22px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <FSMark h={18}/>
          <button onClick={onClose} style={{background:CAD_PURPLE,color:"#fff",border:"none",borderRadius:6,padding:"12px 26px",fontSize:14.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:10}}>
            Start the demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function MZApp(){
  const stages = MZ_STAGES;
  const storeKey = "mz-stage-mdlz-journey";
  const [idx,setIdx] = React.useState(()=>{ const v=parseInt(localStorage.getItem(storeKey)||"0",10); return isNaN(v)?0:Math.min(Math.max(0,v),stages.length-1); });
  const [showIntro,setShowIntro] = React.useState(true);
  React.useEffect(()=>{ localStorage.setItem(storeKey,String(idx)); },[idx]);
  React.useEffect(()=>{
    function onKey(e){
      if(showIntro && (e.key==="Enter"||e.key==="Escape")){ setShowIntro(false); return; }
      if(e.key==="ArrowRight"||e.key===" "){ setShowIntro(false); setIdx(i=>Math.min(i+1,stages.length-1)); e.preventDefault(); }
      else if(e.key==="ArrowLeft"){ setIdx(i=>Math.max(i-1,0)); e.preventDefault(); }
      else if(e.key==="Home") setIdx(0);
      else if(e.key==="End") setIdx(stages.length-1);
    }
    function onNext(){ setIdx(i=>Math.min(i+1,stages.length-1)); }
    window.addEventListener("keydown",onKey);
    window.addEventListener("mz-next",onNext);
    return ()=>{ window.removeEventListener("keydown",onKey); window.removeEventListener("mz-next",onNext); };
  },[stages.length,showIntro]);
  const stage = stages[idx];
  const navBtn = (disabled)=>({ background:disabled?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.15)", color:disabled?"rgba(255,255,255,0.3)":"#fff", border:"1px solid rgba(255,255,255,0.2)", borderRadius:6, padding:"8px 20px", fontSize:13, fontWeight:500, cursor:disabled?"default":"pointer", fontFamily:"inherit" });
  return (
    <div style={{minHeight:"100vh",background:"#1f1f1f",padding:"26px 30px 70px",color:"#f5f5f5"}}>
      {showIntro && <MZIntroModal onClose={()=>setShowIntro(false)}/>}
      <div style={{width:1320,margin:"0 auto",display:"flex",flexDirection:"column",gap:16}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <span style={{background:"#fff",borderRadius:8,padding:"6px 12px",display:"inline-flex"}}><MdlzMark size={12}/></span>
              <span style={{background:CAD_PURPLE,borderRadius:8,padding:"5px 14px",display:"inline-flex"}}><CadburyMark size={17} light/></span>
              <div style={{width:1,height:24,background:"rgba(255,255,255,0.2)"}}></div>
              <FSMark h={22} boxed/>
              <div style={{fontSize:13,opacity:0.5,letterSpacing:2,textTransform:"uppercase"}}>The Data-Enrichment Walk</div>
            </div>
            <div style={{fontSize:12,opacity:0.35,marginTop:6}}>{stage.label} · Step {idx+1} of {stages.length}</div>
          </div>
          <div style={{display:"flex",gap:10,alignItems:"center"}}>
            <span style={{fontSize:11,padding:"4px 12px",borderRadius:999,background:MZ_SECTIONS[stage.section],color:"#fff",fontWeight:700,letterSpacing:1}}>{stage.section.toUpperCase()}</span>
            <button onClick={()=>setShowIntro(true)} title="How this demo works" style={{width:26,height:26,borderRadius:999,border:"1px solid rgba(255,255,255,0.3)",background:"transparent",color:"rgba(255,255,255,0.7)",fontSize:13,fontWeight:700,cursor:"pointer"}}>?</button>
          </div>
        </div>
        <div data-screen-label={stage.label} style={{width:1280,margin:"0 auto",height:890,borderRadius:12,overflow:"hidden",background:"#fff",color:"#1a1a1a",position:"relative",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"}}>
          <div key={idx} style={{position:"absolute",inset:0,animation:"stageIn 0.4s cubic-bezier(0.2,0.8,0.2,1) both"}}>{stage.render()}</div>
        </div>
        <div style={{width:1280,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:`repeat(${stages.length},1fr)`,gap:4}}>
            {stages.map((s,i)=>(
              <button key={i} onClick={()=>setIdx(i)} title={s.label} style={{height:32,border:"none",borderRadius:3,background:i===idx?"#fff":i<idx?MZ_SECTIONS[s.section]:"rgba(255,255,255,0.12)",opacity:i<idx?0.55:1,color:i===idx?CAD_PURPLE:"#fff",fontSize:10,fontWeight:600,cursor:"pointer",padding:0,fontFamily:"inherit",transition:"all 0.2s"}}>{String(i+1).padStart(2,"0")}</button>
            ))}
          </div>
          <div style={{display:"flex",gap:14,marginTop:8,fontSize:10,opacity:0.6}}>
            {Object.entries(MZ_SECTIONS).filter(([k])=>stages.some(s=>s.section===k)).map(([k,c])=>(
              <span key={k} style={{display:"flex",alignItems:"center",gap:5}}><span style={{width:9,height:9,borderRadius:2,background:c,display:"inline-block"}}></span>{k}</span>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"space-between",gap:12,marginTop:10,alignItems:"center"}}>
            <button onClick={()=>setIdx(i=>Math.max(0,i-1))} disabled={idx===0} style={navBtn(idx===0)}>← Previous</button>
            <div style={{fontSize:11,opacity:0.5,fontFamily:"monospace"}}>← → to navigate · Home/End to jump</div>
            <button onClick={()=>setIdx(i=>Math.min(stages.length-1,i+1))} disabled={idx===stages.length-1} style={navBtn(idx===stages.length-1)}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<MZApp/>);
