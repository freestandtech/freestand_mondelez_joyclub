/* V2 app shell + stage list */
const MZ2_SECTIONS = { Intro:"#64748B", Acquire:"#3B1E78", Enrich:"#0A49B7", Engage:"#B08000", Loyalty:"#2E7D32", Own:"#92549A", Close:"#5E3D96" };

const MZ2_STAGES = [
  { label:"Cover", section:"Intro", render:()=><MZ2Cover/> },
  { label:"Acquisition — many doors", section:"Acquire", journey:1, render:()=><MZ2Frame js={1} attrStep={3} threadStep={2} note={<span>Aarav gives <strong>name + pincode</strong> at the kiosk. His 1PD profile is born — and the WhatsApp thread that will carry the whole relationship opens.</span>}><MZ2CapturePanel/></MZ2Frame> },
  { label:"Enrichment pipeline", section:"Enrich", journey:1, render:()=><MZ2Frame js={2} attrStep={5} threadStep={2} note={<span>He hasn't been asked anything else — yet his profile just grew <strong>2 → 8 attributes</strong>, derived by the pipeline.</span>}><MZ2EnrichPanel/></MZ2Frame> },
  { label:"Geo-location mapping", section:"Enrich", journey:1, render:()=><MZ2Frame js={3} attrStep={5} threadStep={2} note={<span>Pincode 400050 becomes a <strong>polygon, an affluence score and a store catchment</strong> — the geography his engagement will run on.</span>}><MZ2GeoPanel/></MZ2Frame> },
  { label:"AI agentic consensus", section:"Enrich", journey:1, render:()=><MZ2Frame js={4} attrStep={5} threadStep={2} note={<span>Geo, Persona, SKU, Channel and Fraud agents reach <strong>93% consensus</strong> on exactly how to engage this one profile.</span>}><MZ2AgentsPanel/></MZ2Frame> },
  { label:"Engagement deployed", section:"Engage", journey:1, render:()=><MZ2Frame js={5} attrStep={5} threadStep={2} note={<span>Before Aarav reaches the atrium, a <strong>QR-gated Cadbury stall</strong> and five more mechanisms are armed on his path.</span>}><MZ2DeployPanel/></MZ2Frame> },
  { label:"QR scan & gated quiz", section:"Engage", journey:1, render:()=><MZ2Frame js={6} attrStep={8} threadStep={7} note={<span>He scans the QR printed on the pack — the entry point every Cadbury pack in India could carry. The <strong>same thread</strong> greets him by name and runs the quiz — 3 answers, 3 new attributes.</span>}><MZ2QuizPanel/></MZ2Frame> },
  { label:"Verified handover", section:"Engage", journey:1, render:()=><MZ2Frame js={7} attrStep={9} threadStep={8} note={<span>The promoter verifies the code and hands over the sample — a <strong>provable trial</strong>, logged against his profile.</span>}><MZ2HandoverPanel/></MZ2Frame> },
  { label:"Closed-loop feedback", section:"Engage", journey:1, render:()=><MZ2Frame js={8} attrStep={10} threadStep={9} note={<span>Still the same thread: one ping, and <strong>sentiment + purchase intent</strong> join the profile.</span>}><MZ2FeedbackPanel/></MZ2Frame> },
  { label:"Mondelez Joy Club", section:"Loyalty", journey:1, render:()=><MZ2Frame js={9} attrStep={11} threadStep={10} note={<span>No form, no app download — the verified claim <strong>auto-enrols him into Mondelez Joy Club</strong> — one wallet across 14 brands.</span>}><MZ2LoyaltyPanel/></MZ2Frame> },
  { label:"UGC & advocacy", section:"Loyalty", journey:1, render:()=><MZ2Frame js={10} attrStep={12} threadStep={11} note={<span>A photo at the #DairyMilkMoment wall: <strong>reusable content for the brand, points for him</strong>, a social handle for the profile.</span>}><MZ2UgcPanel/></MZ2Frame> },
  { label:"Receipt-verified purchase", section:"Loyalty", journey:1, render:()=><MZ2Frame js={11} attrStep={13} threadStep={12} note={<span>Saturday, at home: he uploads a receipt with a Dairy Milk Silk on it. <strong>Sample → purchase, proven</strong> — and the profile is complete.</span>}><MZ2ReceiptPanel/></MZ2Frame> },
  { label:"The enriched profile", section:"Own", render:()=><MZRecapScene/> },
  { label:"FreeStand analytics", section:"Own", render:()=><MZAnalyticsScene/> },
  { label:"Transfer into Mondelez CDP", section:"Own", render:()=><MZCrmScene/> },
  { label:"Thank you", section:"Close", render:()=><MZThanks/> },
];

const MZ2_INTRO = [
  ["1","Acquire","Six acquisition doors — Aarav enters via a mall kiosk with name + pincode"],
  ["2","Enrich","Enrichment pipeline, geo-location mapping and an AI agent consensus multiply the data"],
  ["3","Engage","QR-gated quiz, verified promoter handover, closed-loop feedback — one WhatsApp thread throughout"],
  ["4","Loyalty","Mondelez Joy Club: one program across 14 brands — tiers, earn & redeem, UGC, receipts"],
  ["5","Own","24 consented attributes, CLTV/ROAS measurement, transfer into Mondelez CDP"],
];

function MZ2IntroModal({ onClose }){
  return (
    <div style={{position:"fixed",inset:0,zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(10,12,16,0.72)",backdropFilter:"blur(3px)"}}>
      <div style={{width:580,background:"#fff",borderRadius:14,overflow:"hidden",boxShadow:"0 30px 80px rgba(0,0,0,0.5)",fontFamily:"Roboto,-apple-system,sans-serif",animation:"fadeInUp 0.35s both"}}>
        <div style={{background:`linear-gradient(135deg,${CAD_PURPLE_DK},${CAD_PURPLE})`,padding:"22px 28px",display:"flex",alignItems:"center",gap:16}}>
          <MdlzMark size={13} light/>
          <div>
            <div style={{color:"#fff",fontSize:18,fontWeight:600}}>The Journey of One Profile</div>
            <div style={{color:"rgba(255,255,255,0.75)",fontSize:12.5,marginTop:2}}>Mondelez × FreeStand · every capability, one consumer · {MZ2_STAGES.length} steps</div>
          </div>
        </div>
        <div style={{padding:"16px 28px 6px"}}>
          {MZ2_INTRO.map(([n,t,s],i)=>(
            <div key={n} style={{display:"flex",gap:14,alignItems:"flex-start",padding:"9px 0",borderBottom:i<MZ2_INTRO.length-1?"1px solid #f2f2f2":"none"}}>
              <div style={{width:24,height:24,borderRadius:999,background:"#EDE7F8",color:CAD_PURPLE,fontSize:12,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>{n}</div>
              <div><span style={{fontSize:13.5,fontWeight:700,color:"#1a1a1a"}}>{t}</span><span style={{fontSize:13,color:"#666",marginLeft:8}}>{s}</span></div>
            </div>
          ))}
        </div>
        <div style={{padding:"14px 28px 22px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <FSMark h={18}/>
          <button onClick={onClose} style={{background:CAD_PURPLE,color:"#fff",border:"none",borderRadius:6,padding:"12px 26px",fontSize:14.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:10,whiteSpace:"nowrap"}}>
            Start the demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function MZ2App(){
  const stages = MZ2_STAGES;
  const storeKey = "mz2-stage-mdlz-journey";
  const [idx,setIdx] = React.useState(()=>{ const v=parseInt(localStorage.getItem(storeKey)||"0",10); return isNaN(v)?0:Math.min(Math.max(0,v),stages.length-1); });
  const [showIntro,setShowIntro] = React.useState(false);
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
    window.addEventListener("mz2-next",onNext);
    return ()=>{ window.removeEventListener("keydown",onKey); window.removeEventListener("mz2-next",onNext); };
  },[stages.length,showIntro]);
  const stage = stages[idx];
  const navBtn = (disabled)=>({ background:disabled?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.15)", color:disabled?"rgba(255,255,255,0.3)":"#fff", border:"1px solid rgba(255,255,255,0.2)", borderRadius:6, padding:"8px 20px", fontSize:13, fontWeight:500, cursor:disabled?"default":"pointer", fontFamily:"inherit" });
  return (
    <div style={{minHeight:"100vh",background:"#1f1f1f",padding:"26px 30px 70px",color:"#f5f5f5"}}>
      {showIntro && <MZ2IntroModal onClose={()=>setShowIntro(false)}/>}
      <div style={{width:1320,margin:"0 auto",display:"flex",flexDirection:"column",gap:16}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <span style={{background:"#fff",borderRadius:8,padding:"6px 12px",display:"inline-flex"}}><MdlzMark size={12}/></span>
              <div style={{width:1,height:24,background:"rgba(255,255,255,0.2)"}}></div>
              <FSMark h={22} boxed/>
              <div style={{fontSize:13,opacity:0.5,letterSpacing:2,textTransform:"uppercase"}}>The Journey of One Profile</div>
            </div>
            <div style={{fontSize:12,opacity:0.35,marginTop:6}}>{stage.label} · Step {idx+1} of {stages.length}</div>
          </div>
          <div style={{display:"flex",gap:10,alignItems:"center"}}>
            <span style={{fontSize:11,padding:"4px 12px",borderRadius:999,background:MZ2_SECTIONS[stage.section],color:"#fff",fontWeight:700,letterSpacing:1}}>{stage.section.toUpperCase()}</span>
            <button onClick={()=>setShowIntro(true)} title="How this demo works" style={{width:26,height:26,borderRadius:999,border:"1px solid rgba(255,255,255,0.3)",background:"transparent",color:"rgba(255,255,255,0.7)",fontSize:13,fontWeight:700,cursor:"pointer"}}>?</button>
          </div>
        </div>
        <div data-screen-label={stage.label} style={{width:1280,margin:"0 auto",height:890,borderRadius:12,overflow:"hidden",background:"#fff",color:"#1a1a1a",position:"relative",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"}}>
          <div key={stage.journey?"journey":idx} style={{position:"absolute",inset:0,animation:stage.journey?"none":"stageIn 0.4s cubic-bezier(0.2,0.8,0.2,1) both"}}>{stage.render()}</div>
        </div>
        <div style={{width:1280,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:`repeat(${stages.length},1fr)`,gap:4}}>
            {stages.map((s,i)=>(
              <button key={i} onClick={()=>setIdx(i)} title={s.label} style={{height:32,border:"none",borderRadius:3,background:i===idx?"#fff":i<idx?MZ2_SECTIONS[s.section]:"rgba(255,255,255,0.12)",opacity:i<idx?0.55:1,color:i===idx?CAD_PURPLE:"#fff",fontSize:10,fontWeight:600,cursor:"pointer",padding:0,fontFamily:"inherit",transition:"all 0.2s"}}>{String(i+1).padStart(2,"0")}</button>
            ))}
          </div>
          <div style={{display:"flex",gap:14,marginTop:8,fontSize:10,opacity:0.6}}>
            {Object.entries(MZ2_SECTIONS).filter(([k])=>stages.some(s=>s.section===k)).map(([k,c])=>(
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
ReactDOM.createRoot(document.getElementById("root")).render(<MZ2App/>);
