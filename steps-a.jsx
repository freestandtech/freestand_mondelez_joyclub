/* Journey steps — scene configs + bottom detail strips */

function MZStage({ cfg, detail }){
  return (
    <div style={{position:"absolute",inset:0,background:"#fff",fontFamily:"Roboto,-apple-system,sans-serif"}}>
      <MZScene cfg={cfg}/>
      {detail}
    </div>
  );
}
const mzLive = <div style={{display:"flex",alignItems:"center",gap:8,fontSize:11.5,fontWeight:700,color:MZ_GREEN,paddingTop:8}}><div style={{width:8,height:8,borderRadius:999,background:MZ_GREEN,animation:"blink 1.4s infinite"}}></div>LIVE</div>;

/* S2 — kiosk capture */
function MZKioskDetail(){
  return (
    <DetailStrip kicker="Step 1 · Capture" title="The welcome kiosk asks for just two things" sub="Name and pincode — a 10-second, zero-friction start" right={mzLive}>
      <DCol title="Kiosk tablet — what Aarav sees" flex={1.1}>
        <div style={{display:"flex",flexDirection:"column",gap:9,height:"100%",justifyContent:"center"}}>
          <div style={{textAlign:"center",marginBottom:2}}><MdlzMark size={13}/></div>
          {[["Your name","Aarav Mehta"],["Your pincode","400050"]].map(([l,v],i)=>(
            <div key={l} style={{animation:`fadeInUp 0.35s ${i*0.15}s both`}}>
              <div style={{fontSize:10,color:"#999",fontWeight:600,letterSpacing:0.5,marginBottom:3}}>{l}</div>
              <div style={{border:"1.5px solid #4F2D7F",borderRadius:8,padding:"9px 13px",fontSize:14,fontWeight:600,color:"#1a1a1a",background:"#FBFAFE"}}>{v}</div>
            </div>
          ))}
          <div style={{display:"flex",gap:8,alignItems:"center",fontSize:10,color:"#777",animation:"fadeInUp 0.35s 0.3s both"}}>
            <div style={{width:15,height:15,borderRadius:4,background:"#4F2D7F",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            I agree to receive offers from Mondelez brands
          </div>
        </div>
      </DCol>
      <DCol title="Why so little, so early">
        {[["Two fields, not a form","Nothing kills mall sign-ups like a long form — everything else is earned later"],
          ["Consent captured at second zero","Timestamped opt-in makes every later touch compliant"],
          ["Pincode is the seed","One field that FreeStand's intelligence can multiply into geography, affluence & catchment"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={CAD_PURPLE}/>)}
      </DCol>
    </DetailStrip>
  );
}

/* S3 — saved to Mondelez DB */
function MZDbDetail(){
  return (
    <DetailStrip kicker="Step 2 · First-party record" title="Saved straight into Mondelez's own database" sub="The record belongs to the brand from the first second" right={mzLive}>
      <DCol title="Mondelez consumer DB — new record" flex={1.2}>
        <div style={{border:"1px solid #e8e4f2",borderRadius:8,overflow:"hidden",fontFamily:"monospace",fontSize:11}}>
          <div style={{background:"#F4F1FA",padding:"6px 12px",display:"flex",gap:18,color:"#7a6f92",fontWeight:700,fontSize:9.5,letterSpacing:1}}><span>ID</span><span>NAME</span><span style={{marginLeft:"auto"}}>PINCODE</span><span>CONSENT</span><span>SOURCE</span></div>
          <div style={{padding:"9px 12px",display:"flex",gap:18,alignItems:"center",background:"#FDF8EC",animation:"fadeInUp 0.4s both"}}>
            <span style={{color:CAD_PURPLE,fontWeight:700}}>MDLZ-1PD-88412</span><span>Aarav Mehta</span><span style={{marginLeft:"auto"}}>400050</span><span style={{color:MZ_GREEN,fontWeight:700}}>✓ 6:12 PM</span><span>KIOSK-ORB-04</span>
          </div>
          {[["MDLZ-1PD-88411","Priya S.","400052"],["MDLZ-1PD-88410","Rahul K.","400049"]].map(([id,n,p])=>(
            <div key={id} style={{padding:"9px 12px",display:"flex",gap:18,color:"#b5b0c2",borderTop:"1px solid #f4f2f8"}}><span>{id}</span><span>{n}</span><span style={{marginLeft:"auto"}}>{p}</span><span>✓</span><span>KIOSK-ORB-04</span></div>
          ))}
        </div>
        <div style={{marginTop:10,fontSize:11,color:"#8a6a3a",background:"#FFF9F2",border:"1px solid #F2DEC2",borderRadius:8,padding:"8px 12px",lineHeight:1.5}}>2 attributes today. Watch this record — by the end of the walk it holds <strong>24</strong>.</div>
      </DCol>
      <DCol title="Record hygiene">
        {[["Deduped on entry","Phone/name fuzzy-match against existing Mondelez records"],["Consent ledger entry","Immutable opt-in log — auditable per DPDP"],["Synced to FreeStand","The record ID travels ahead of Aarav in real time"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i}/>)}
      </DCol>
    </DetailStrip>
  );
}

/* S4 — data passes ahead */
function MZHandoffDetail(){
  return (
    <DetailStrip kicker="Step 3 · Handoff" title="Mondelez passes the record to FreeStand — while Aarav keeps walking" sub="The data moves ahead of the person" right={mzLive}>
      <DCol title="API payload — Mondelez → FreeStand" flex={1.1}>
        <pre style={{margin:0,fontFamily:"monospace",fontSize:11,lineHeight:1.7,color:"#3a3548",background:"#FBFAFE",border:"1px solid #ece7f6",borderRadius:8,padding:"10px 14px"}}>{`POST /v2/profiles  · 200 OK · 84 ms
{
  "id": "MDLZ-1PD-88412",
  "name": "Aarav Mehta",
  "pincode": "400050",
  "consent": "2026-09-09T18:12:04+05:30",
  "venue": "ORBIT-MALL-BKC"
}`}</pre>
      </DCol>
      <DCol title="What happens next — before he reaches the stall">
        {[["FreeStand receives the seed profile","2 attributes in, enrichment pipeline triggered"],["Geo-intelligence job queued","Pincode 400050 → locality, affluence, catchment"],["Engagement plan computed","The right mechanisms get deployed on his path ahead"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={FS_NAVY_C()}/>)}
        <div style={{marginTop:8,display:"flex",alignItems:"center",gap:10}}><MdlzMark size={11}/><svg width="30" height="10" viewBox="0 0 30 10"><line x1="0" y1="5" x2="24" y2="5" stroke="#B9CBE8" strokeWidth="2" strokeDasharray="4 4" style={{animation:"dashMove 1.2s linear infinite"}}></line><path d="M24 1l6 4-6 4z" fill="#B9CBE8"></path></svg><FSMark h={13}/></div>
      </DCol>
    </DetailStrip>
  );
}
function FS_NAVY_C(){ return MZ_NAVY; }

/* S5 — geo enrichment */
function MZGeoDetail(){
  return (
    <DetailStrip kicker="Step 4 · Enrichment" title="FreeStand's intelligence multiplies the pincode" sub="2 attributes in → 8 attributes out, before a single question is asked" right={mzLive}>
      <DCol title="Geo-intelligence · 400050" flex={1}>
        <div style={{height:"100%",minHeight:150,borderRadius:8,position:"relative",overflow:"hidden",border:"1px solid #dde5f2",background:"linear-gradient(135deg,#E8F0E4,#D8E6F2)"}}>
          <svg width="100%" height="100%" viewBox="0 0 400 190" preserveAspectRatio="none">
            <path d="M0 60h400M0 130h400M110 0v190M250 20v170M330 0v190" stroke="#fff" strokeWidth="10"></path>
            <path d="M0 60h400M0 130h400M110 0v190M250 20v170M330 0v190" stroke="#C3D2BC" strokeWidth="1.2"></path>
          </svg>
          <div style={{position:"absolute",left:170,top:80}}>
            <div style={{width:14,height:14,borderRadius:999,background:CAD_PURPLE,border:"3px solid #fff",boxShadow:"0 0 0 8px rgba(59,30,120,0.18)"}}></div>
            <div style={{fontSize:9.5,fontWeight:700,color:"#333",marginTop:3,whiteSpace:"nowrap"}}>Bandra West · 400050</div>
          </div>
          {[["Smart Bazaar",290,40],["D-Mart",70,140],["Nature's Basket",320,140]].map(([l,x,y])=>(
            <div key={l} style={{position:"absolute",left:x,top:y,background:"#fff",borderRadius:999,padding:"2px 8px",fontSize:8.5,fontWeight:700,color:MZ_NAVY,boxShadow:"0 2px 5px rgba(0,0,0,0.15)"}}>{l}</div>
          ))}
        </div>
      </DCol>
      <DCol title="Derived — no questions asked" flex={1}>
        {[["Locality","Bandra West, Mumbai"],["Affluence tier","A2 · High"],["Catchment","14 modern-trade stores"],["Persona model","Young urban professional"],["Price-point fit","Premium SKUs viable"]].map(([k,v],i)=><KV key={k} k={k} v={v} i={i} hi={i<4}/>)}
      </DCol>
      <DCol title="Why it matters">
        {[["The 1PD card doubles in seconds","Every attribute here cost the consumer zero effort"],["Engagement gets sharper","Affluence + catchment decide which mechanism and which SKU meet him ahead"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={FS_NAVY_C()}/>)}
      </DCol>
    </DetailStrip>
  );
}

/* S6 — engagement deployed */
function MZDeployDetail(){
  const mech=[["QR-on-pack sampling stall","Deployed · 40 m ahead",true],["Post-trial feedback loop","Armed · fires 12 min after handover",true],["Cadbury Joy Club enrolment","Armed · on verified claim",true],["UGC photo wall","Deployed · near exit",true],["Receipt-upload points","Armed · post-visit",true]];
  return (
    <DetailStrip kicker="Step 5 · Orchestration" title="FreeStand deploys engagement on the path ahead" sub="The enriched profile decides what meets Aarav — before he gets there" right={mzLive}>
      <DCol title="Engagement mechanisms · this profile" flex={1.4}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          {mech.map(([t,s],i)=>(
            <div key={t} style={{border:"1px solid #e6e0f2",borderRadius:8,padding:"9px 12px",display:"flex",gap:10,alignItems:"center",animation:`fadeInUp 0.35s ${i*0.1}s both`}}>
              <div style={{width:8,height:8,borderRadius:2,background:CAD_PURPLE,flexShrink:0}}></div>
              <div><div style={{fontSize:12,fontWeight:700}}>{t}</div><div style={{fontSize:10,color:MZ_GREEN,fontWeight:600,marginTop:1}}>{s}</div></div>
            </div>
          ))}
        </div>
      </DCol>
      <DCol title="Targeting logic">
        {[["A2 affluence → premium track","Dairy Milk hero SKU, Silk upsell staged for later"],["High store density → receipt loop on","Purchase verification is realistic within 1 km of home"],["Mall context → UGC wall active","Social moment mechanics only where they convert"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={FS_NAVY_C()}/>)}
      </DCol>
    </DetailStrip>
  );
}

/* S7 — QR scan */
function MZScanDetail(){
  return (
    <DetailStrip kicker="Step 6 · Engage" title="Aarav scans the QR on the Dairy Milk pack" sub="The stall promises a free taste — the QR opens WhatsApp instantly" right={mzLive}>
      <div style={{flex:"0 0 200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,border:"1px solid #eceef4",borderRadius:10}}>
        <MZDairyMilk w={72} qr/>
        <div style={{fontSize:10.5,color:"#888",textAlign:"center",lineHeight:1.5}}>QR printed on the<br/>sampling pack itself</div>
      </div>
      <DCol flex={1}>
        <WAPane>
          <WABubble me delay={0.1}>Hi! Claiming my free Dairy Milk 🍫</WABubble>
          <WABubble delay={0.5}><strong>Welcome Aarav!</strong> Great to see you at Orbit Mall. Answer 3 quick questions and your sample is yours.</WABubble>
          <WABubble delay={0.9}>Q1. Milk chocolate or dark?</WABubble>
        </WAPane>
      </DCol>
      <DCol title="Recognised instantly">
        {[["No re-introduction needed","The kiosk record + geo profile already identify him — WhatsApp greets him by name"],["Session stitched to MDLZ-1PD-88412","QR → WhatsApp → profile, one thread"],["Channel & device captured","2 more attributes, free"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i}/>)}
      </DCol>
    </DetailStrip>
  );
}

/* S8 — quiz */
function MZQuizDetail(){
  return (
    <DetailStrip kicker="Step 7 · Qualify" title="Three questions stand between Aarav and the sample" sub="Declared preferences — the highest-grade 1PD there is" right={mzLive}>
      <DCol flex={1.15}>
        <WAPane>
          <WABubble me delay={0}>Milk 🥛</WABubble>
          <WABubble delay={0.3}>Q2. How often do you buy chocolate?</WABubble>
          <WABubble me delay={0.6}>Every week</WABubble>
          <WABubble delay={0.9}>Q3. Who do you usually share it with?</WABubble>
          <WABubble me delay={1.2}>Family 👨‍👩‍👧</WABubble>
          <WABubble delay={1.6}>🎉 Done! Show this code at the counter: <strong>CDM-4471</strong></WABubble>
        </WAPane>
      </DCol>
      <DCol title="Profile enriched — declared data">
        {[["Taste preference","Milk chocolate"],["Purchase frequency","Weekly buyer"],["Consumption occasion","Shares with family"]].map(([k,v],i)=><KV key={k} k={k} v={v} i={i} hi/>)}
        <div style={{marginTop:8,fontSize:11,color:"#666",background:"#F7F9FD",border:"1px solid #dde5f2",borderRadius:8,padding:"8px 12px",lineHeight:1.55}}>Answers gate the sample — so completion is <strong>~94%</strong>, not survey-style 8%.</div>
      </DCol>
    </DetailStrip>
  );
}

/* S9 — handover */
function MZHandoverDetail(){
  return (
    <DetailStrip kicker="Step 8 · Sample" title="The promoter hands over the Dairy Milk — verified" sub="Code checked, stock decremented, timestamped" right={<div style={{padding:"6px 14px",borderRadius:999,background:"#E8F5E9",border:"1.5px solid #A5D6A7",fontSize:12,fontWeight:700,color:MZ_GREEN,marginTop:6}}>✓ Claimed</div>}>
      <DCol title="Promoter app — claim CDM-4471" flex={1}>
        <div style={{display:"flex",flexDirection:"column",gap:8,height:"100%",justifyContent:"center"}}>
          <div style={{border:`1.5px solid ${CAD_PURPLE}`,borderRadius:10,padding:"10px 14px",display:"flex",alignItems:"center",gap:12}}>
            <div style={{width:34,height:34,borderRadius:999,background:"#EDE7F8",color:CAD_PURPLE,fontWeight:800,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center"}}>AM</div>
            <div style={{flex:1}}><div style={{fontSize:13,fontWeight:700}}>Aarav Mehta · CDM-4471</div><div style={{fontSize:10.5,color:"#888"}}>Dairy Milk 13 g · 1 unit</div></div>
            <div style={{background:MZ_GREEN,color:"#fff",fontSize:11,fontWeight:700,borderRadius:6,padding:"7px 14px"}}>Hand over ✓</div>
          </div>
          <div style={{fontSize:10.5,color:"#888",display:"flex",justifyContent:"space-between",padding:"0 4px"}}><span>Stall stock</span><span style={{fontWeight:700,color:"#1a1a1a"}}>212 → 211 · auto-synced</span></div>
        </div>
      </DCol>
      <DCol title="What just became true">
        {[["Verified trial, not blind drop","A named, consented person received this exact SKU at 6:31 PM"],["Cost attached to outcome","Mondelez pays for verified handovers, not distributed boxes"],["Trigger armed","Feedback message fires while the taste is still fresh"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i}/>)}
      </DCol>
    </DetailStrip>
  );
}

/* S10 — feedback */
function MZFeedbackDetail(){
  return (
    <DetailStrip kicker="Step 9 · Listen" title="Feedback reaches him while he's still walking" sub="12 minutes after handover — the moment recall is perfect" right={mzLive}>
      <DCol flex={1.1}>
        <WAPane>
          <WABubble delay={0}>Aarav! How was the Dairy Milk? 🍫</WABubble>
          <WABubble me delay={0.4}>Loved it ⭐⭐⭐⭐⭐</WABubble>
          <WABubble delay={0.8}>Planning to pick one up soon?</WABubble>
          <WABubble me delay={1.2}>Yes, this week probably</WABubble>
          <WABubble delay={1.6}>We'll make that worth it 😉 You're now in <strong>Cadbury Joy Club</strong> — details coming up.</WABubble>
        </WAPane>
      </DCol>
      <DCol title="Captured sentiment">
        {[["Experience","Loved it · 5/5"],["Purchase intent","This week"],["Time from trial","12 min"]].map(([k,v],i)=><KV key={k} k={k} v={v} i={i} hi={i<2}/>)}
        <div style={{marginTop:8,fontSize:11,color:"#666",background:"#F7F9FD",border:"1px solid #dde5f2",borderRadius:8,padding:"8px 12px",lineHeight:1.55}}>Blind sampling gets <strong>0%</strong> feedback. In-flow WhatsApp gets <strong>~76%</strong>.</div>
      </DCol>
    </DetailStrip>
  );
}
Object.assign(window, { MZStage, MZKioskDetail, MZDbDetail, MZHandoffDetail, MZGeoDetail, MZDeployDetail, MZScanDetail, MZQuizDetail, MZHandoverDetail, MZFeedbackDetail });
