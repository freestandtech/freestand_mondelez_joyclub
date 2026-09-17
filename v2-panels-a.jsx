/* V2 capability panels — acquisition, enrichment, geo, AI consensus, deployment */

function MZ2Box({ title, children, flex=1, style }){
  return (
    <div style={{flex,minWidth:0,border:"1px solid #eceef4",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden",...style}}>
      {title && <div style={{padding:"8px 14px",fontSize:10.5,fontWeight:700,color:"#999",letterSpacing:1,textTransform:"uppercase",borderBottom:"1px solid #f2f2f6",flexShrink:0}}>{title}</div>}
      <div style={{flex:1,minHeight:0,padding:"10px 14px"}}>{children}</div>
    </div>
  );
}
const mz2Live = <div style={{display:"flex",alignItems:"center",gap:8,fontSize:11.5,fontWeight:700,color:MZ_GREEN,paddingTop:6}}><div style={{width:8,height:8,borderRadius:999,background:MZ_GREEN,animation:"blink 1.4s infinite"}}></div>LIVE</div>;

/* S2 — acquisition avenues */
function MZ2CapturePanel(){
  const doors=[["Pack QR code","Every Cadbury pack sold is an entry point",false],["Digital advertising","Meta / Google click-to-WhatsApp",false],["Retail activation","Mall kiosks & in-store promoters",true],["Brand web app","Joy Club web enrolment",false],["Receipt scan","Any bill becomes a sign-up",false],["Referral link","Member-to-member invites",false]];
  return (
    <MZ2Panel kicker="Station 1 · Data acquisition" title="Many entry points. One profile." sub="Pack scans, ads and retail all converge into the same WhatsApp + web-app experience — Aarav entered via a mall kiosk" right={mz2Live}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
        {doors.map(([t,s,act],i)=>(
          <div key={t} style={{border:act?`2px solid ${CAD_PURPLE}`:"1px solid #e8e4f2",background:act?"#F7F3FD":"#fff",borderRadius:10,padding:"11px 13px 13px",animation:`fadeInUp 0.35s ${i*0.08}s both`}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{width:8,height:8,borderRadius:2,background:act?CAD_GOLD:CAD_PURPLE,flexShrink:0}}></div>
              <div style={{fontSize:12.5,fontWeight:700,flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{t}</div>
              {act && <span style={{fontSize:8.5,fontWeight:800,color:"#fff",background:CAD_PURPLE,borderRadius:999,padding:"2px 8px",flexShrink:0}}>AARAV</span>}
            </div>
            <div style={{fontSize:10.5,color:"#888",marginTop:4,lineHeight:1.45}}>{s}</div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",gap:12,flex:1,minHeight:0}}>
        <MZ2Box title="Captured at the kiosk — 10 seconds" flex={1}>
          {[["Your name","Aarav Mehta"],["Your pincode","400050"]].map(([l,v],i)=>(
            <div key={l} style={{marginBottom:8,animation:`fadeInUp 0.35s ${i*0.15}s both`}}>
              <div style={{fontSize:9.5,color:"#999",fontWeight:600,marginBottom:2}}>{l}</div>
              <div style={{border:"1.5px solid #4F2D7F",borderRadius:7,padding:"7px 12px",fontSize:13,fontWeight:600,background:"#FBFAFE"}}>{v}</div>
            </div>
          ))}
          <div style={{display:"flex",gap:7,alignItems:"center",fontSize:9.5,color:"#777"}}>
            <div style={{width:13,height:13,borderRadius:3,background:"#4F2D7F",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            Consent to Mondelez brand communication · timestamped
          </div>
        </MZ2Box>
        <MZ2Box title="Written to Mondelez's own DB — instantly" flex={1.4}>
          <div style={{border:"1px solid #e8e4f2",borderRadius:7,overflow:"hidden",fontFamily:"monospace",fontSize:10}}>
            <div style={{background:"#F4F1FA",padding:"5px 10px",display:"flex",gap:14,color:"#7a6f92",fontWeight:700,fontSize:8.5,letterSpacing:1}}><span>ID</span><span>NAME</span><span style={{marginLeft:"auto"}}>PIN</span><span>CONSENT</span><span>SOURCE</span></div>
            <div style={{padding:"7px 10px",display:"flex",gap:14,background:"#FDF8EC"}}><span style={{color:CAD_PURPLE,fontWeight:700}}>MDLZ-1PD-88412</span><span>Aarav Mehta</span><span style={{marginLeft:"auto"}}>400050</span><span style={{color:MZ_GREEN,fontWeight:700}}>✓ 6:12 PM</span><span>KIOSK-04</span></div>
            <div style={{padding:"7px 10px",display:"flex",gap:14,color:"#b5b0c2",borderTop:"1px solid #f4f2f8"}}><span>MDLZ-1PD-88411</span><span>Priya S.</span><span style={{marginLeft:"auto"}}>400052</span><span>✓</span><span>QR-PACK</span></div>
            <div style={{padding:"7px 10px",display:"flex",gap:14,color:"#b5b0c2",borderTop:"1px solid #f4f2f8"}}><span>MDLZ-1PD-88410</span><span>Rahul K.</span><span style={{marginLeft:"auto"}}>400049</span><span>✓</span><span>WA-AD</span></div>
          </div>
          <div style={{marginTop:8,fontSize:10.5,color:"#8a6a3a",background:"#FFF9F2",border:"1px solid #F2DEC2",borderRadius:7,padding:"7px 11px",lineHeight:1.5}}>First-party from second zero — deduped, consent-ledgered, owned by Mondelez. FreeStand gets a copy to work with, in real time.</div>
        </MZ2Box>
      </div>
    </MZ2Panel>
  );
}

/* S3 — enrichment pipeline */
function MZ2EnrichPanel(){
  const stages=[["Ingest","2 attrs in","name, pincode, consent, source"],["Validate & dedupe","fraud + identity","fuzzy match vs 2.1M records"],["Geo-resolve","pincode → place","polygon, catchment, retail density"],["Persona model","who is this?","demographic + behavioural inference"],["Score & segment","8 attrs out","propensity, price-point, channel fit"]];
  return (
    <MZ2Panel kicker="Station 2 · Data enrichment" title="The enrichment pipeline — every record, 84 ms" sub="Aarav keeps walking; his record is already inside FreeStand's intelligence stack" right={mz2Live}>
      <div style={{display:"flex",alignItems:"stretch",gap:0}}>
        {stages.map(([t,n,s],i)=>(
          <React.Fragment key={t}>
            <div style={{flex:1,border:"1px solid #dde5f2",borderTop:`3px solid ${MZ_NAVY}`,borderRadius:8,padding:"10px 12px 13px",background:"#FDFDFF",animation:`fadeInUp 0.35s ${i*0.12}s both`}}>
              <div style={{fontSize:12.5,fontWeight:700}}>{t}</div>
              <div style={{fontSize:9.5,fontWeight:700,color:MZ_NAVY,marginTop:2}}>{n}</div>
              <div style={{fontSize:9.5,color:"#8a8a94",marginTop:4,lineHeight:1.45}}>{s}</div>
            </div>
            {i<stages.length-1 && <div style={{display:"flex",alignItems:"center",padding:"0 3px"}}><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6h10M8 2l4 4-4 4" stroke="#B9CBE8" strokeWidth="2"></path></svg></div>}
          </React.Fragment>
        ))}
      </div>
      <div style={{display:"flex",gap:12,flex:1,minHeight:0}}>
        <MZ2Box title="Intelligence sources fused" flex={1}>
          {[["FreeStand campaign graph","41M verified sampling interactions across brands"],["Geo & census layers","Affluence, household spend, retail density by pincode"],["Retail network signals","Live stock & redemption data from partner stores"],["Device & channel signals","Platform, language, response latency"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={MZ_NAVY}/>)}
        </MZ2Box>
        <MZ2Box title="Out: the profile grows 2 → 8, unasked" flex={1}>
          {[["Locality","Bandra West, Mumbai"],["Affluence tier","A2 · High"],["Catchment","14 modern-trade stores"],["Persona","Young urban professional"],["Price-point fit","Premium SKUs viable"],["Best channel","WhatsApp, evening window"]].map(([k,v],i)=><KV key={k} k={k} v={v} i={i} hi={i<4}/>)}
        </MZ2Box>
      </div>
    </MZ2Panel>
  );
}

/* S4 — geo mapping */
function MZ2GeoPanel(){
  const layers=[["Pincode polygon","400050 resolved to boundary + centroid",true],["Affluence heat","Ward-level income & spend model",true],["Store catchment","14 modern-trade + 62 GT outlets in 2 km",true],["Competitor presence","Share-of-shelf index by store",false]];
  return (
    <MZ2Panel kicker="Station 3 · Geo-location intelligence" title="One pincode, mapped four layers deep" sub="Where he lives decides which stores, which SKUs and which offers make sense" right={mz2Live}>
      <div style={{display:"flex",gap:12,flex:1,minHeight:0}}>
        <div style={{flex:1.35,borderRadius:10,position:"relative",overflow:"hidden",border:"1px solid #dde5f2",background:"linear-gradient(135deg,#E8F0E4,#D8E6F2)"}}>
          <svg width="100%" height="100%" viewBox="0 0 460 300" preserveAspectRatio="none">
            <path d="M0 80h460M0 190h460M120 0v300M260 20v280M370 0v300" stroke="#fff" strokeWidth="12"></path>
            <path d="M0 80h460M0 190h460M120 0v300M260 20v280M370 0v300" stroke="#C3D2BC" strokeWidth="1.4"></path>
            <path d="M150 60 L330 50 L400 150 L330 250 L160 240 L110 150 Z" fill="rgba(59,30,120,0.10)" stroke={CAD_PURPLE} strokeWidth="2" strokeDasharray="7 5"></path>
            <circle cx="250" cy="150" r="56" fill="rgba(232,164,23,0.16)"></circle>
          </svg>
          <div style={{position:"absolute",left:232,top:132}}>
            <div style={{width:15,height:15,borderRadius:999,background:CAD_PURPLE,border:"3px solid #fff",boxShadow:"0 0 0 9px rgba(59,30,120,0.18)"}}></div>
            <div style={{fontSize:10,fontWeight:700,color:"#333",marginTop:3,whiteSpace:"nowrap"}}>Aarav · 400050</div>
          </div>
          {[["Smart Bazaar · MT",330,80],["D-Mart · MT",95,225],["Nature's Basket",360,215],["GT cluster ×18",160,105]].map(([l,x,y])=>(
            <div key={l} style={{position:"absolute",left:x,top:y,background:"#fff",borderRadius:999,padding:"2px 9px",fontSize:8.5,fontWeight:700,color:MZ_NAVY,boxShadow:"0 2px 5px rgba(0,0,0,0.15)",whiteSpace:"nowrap"}}>{l}</div>
          ))}
          <div style={{position:"absolute",left:10,bottom:10,background:"rgba(20,18,30,0.78)",color:"#fff",fontSize:9,fontWeight:600,borderRadius:6,padding:"4px 10px"}}>Bandra West · polygon + heat + catchment</div>
        </div>
        <div style={{flex:1,display:"flex",flexDirection:"column",gap:12,minHeight:0}}>
          <MZ2Box title="Map layers applied">
            {layers.map(([t,s,on],i)=>(
              <div key={t} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderBottom:"1px solid #f4f4f8",animation:`fadeInUp 0.3s ${i*0.1}s both`}}>
                <div style={{width:26,height:15,borderRadius:999,background:on?CAD_PURPLE:"#d8d4e2",position:"relative",flexShrink:0}}><div style={{position:"absolute",top:2,left:on?13:2,width:11,height:11,borderRadius:999,background:"#fff",transition:"left 0.2s"}}></div></div>
                <div><div style={{fontSize:11.5,fontWeight:700}}>{t}</div><div style={{fontSize:9.5,color:"#909090"}}>{s}</div></div>
              </div>
            ))}
          </MZ2Box>
          <MZ2Box title="What geo unlocks">
            {[["Right stall placement","Orbit Mall scores 0.91 for his segment"],["Receipt loop is viable","He lives inside a dense modern-trade catchment"],["Store-level retargeting","Offers can name the store he actually shops at"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={MZ_NAVY}/>)}
          </MZ2Box>
        </div>
      </div>
    </MZ2Panel>
  );
}

/* S5 — AI agentic consensus */
function MZ2AgentsPanel(){
  const agents=[["Geo Agent","A2 affluence · 14 MT stores in catchment → premium sampling viable","0.92"],["Persona Agent","Young professional, family-sharing pattern → gifting & sharing hooks","0.88"],["SKU Agent","Lead with Dairy Milk core; stage Silk as the upsell after verified trial","0.90"],["Channel Agent","WhatsApp over SMS · QR-gated flow · evening engagement window","0.95"],["Address Agent","Address is unique — no variant of it has claimed before · clear to engage","0.99"]];
  return (
    <MZ2Panel kicker="Station 4 · AI agentic consensus" title="Five agents debate. One plan comes out." sub="Every enriched profile is deliberated by specialist agents before anything is deployed" right={mz2Live}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:9}}>
        {agents.map(([t,s,c],i)=>(
          <div key={t} style={{border:"1px solid #dde5f2",borderTop:`3px solid ${MZ_NAVY}`,borderRadius:9,padding:"9px 11px 13px",background:"#FDFDFF",display:"flex",flexDirection:"column",animation:`fadeInUp 0.35s ${i*0.13}s both`}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{width:18,height:18,borderRadius:5,background:MZ_NAVY,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path></svg></div>
              <div style={{fontSize:10.5,fontWeight:800}}>{t}</div>
            </div>
            <div style={{fontSize:9.5,color:"#5a5a68",lineHeight:1.5,marginTop:6,flex:1}}>{s}</div>
            <div style={{marginTop:8}}>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:8.5,color:"#999",marginBottom:2}}><span>confidence</span><span style={{fontWeight:800,color:MZ_NAVY}}>{c}</span></div>
              <div style={{height:4,background:"#EAF0F8",borderRadius:2,overflow:"hidden"}}><div style={{width:`${parseFloat(c)*100}%`,height:"100%",background:MZ_NAVY}}></div></div>
            </div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",gap:12,flex:1,minHeight:0}}>
        <MZ2Box title="Consensus reached — 93% agreement" flex={1.3}>
          <div style={{display:"flex",alignItems:"center",gap:14,height:"100%"}}>
            <div style={{width:64,height:64,borderRadius:999,background:`conic-gradient(${CAD_PURPLE} 0% 93%, #EFEBF7 93% 100%)`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <div style={{width:46,height:46,borderRadius:999,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,color:CAD_PURPLE}}>93%</div>
            </div>
            <div>
              <div style={{fontSize:13.5,fontWeight:700,lineHeight:1.45}}>Deploy the premium sampling track for MDLZ-1PD-88412:</div>
              <div style={{fontSize:11.5,color:"#555",marginTop:5,lineHeight:1.6}}>QR-gated Cadbury stall on his path · 3-question quiz · Dairy Milk hero SKU · Joy Club auto-enrolment · receipt loop armed · Silk upsell staged for week 2.</div>
            </div>
          </div>
        </MZ2Box>
        <MZ2Box title="Why agents, not rules" flex={1}>
          {[["Per-profile, not per-campaign","21,460 visitors got 21,460 deliberations today"],["Duplicate claims caught by consensus","Multiple AI models vote on whether an address is a variant of one already served"],["Every decision auditable","Traceable reasoning per consumer, per action"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={MZ_NAVY}/>)}
        </MZ2Box>
      </div>
    </MZ2Panel>
  );
}

/* S6 — engagement avenues deployed (visual mall path) */
function MZ2DeployPanel(){
  const ic={
    stall:<g><rect x="5" y="12" width="22" height="12" rx="1.5"/><path d="M3 12l4-6h18l4 6z" opacity="0.65"/><rect x="13" y="16" width="6" height="8"/></g>,
    quiz:<g><rect x="6" y="4" width="20" height="24" rx="3"/><path d="M11 11h10M11 16h10M11 21h6" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round"/></g>,
    fb:<g><path d="M4 6h24v14H14l-6 6v-6H4z"/><circle cx="11" cy="13" r="1.8" fill="#fff"/><circle cx="16" cy="13" r="1.8" fill="#fff"/><circle cx="21" cy="13" r="1.8" fill="#fff"/></g>,
    loyal:<g><circle cx="16" cy="14" r="9"/><path d="M16 9l1.6 3.4 3.7.5-2.7 2.6.7 3.7-3.3-1.8-3.3 1.8.7-3.7-2.7-2.6 3.7-.5z" fill="#fff"/><path d="M10 22l-2 7 8-4 8 4-2-7" opacity="0.65"/></g>,
    ugc:<g><rect x="4" y="8" width="24" height="18" rx="3"/><circle cx="16" cy="17" r="5.5" fill="#fff"/><circle cx="16" cy="17" r="2.6"/><rect x="11" y="5" width="10" height="5" rx="2"/></g>,
    rcpt:<g><path d="M8 3h16v25l-2.7-2-2.6 2-2.7-2-2.7 2-2.6-2L8 28z"/><path d="M12 9h8M12 14h8M12 19h5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></g>,
    ref:<g><circle cx="10" cy="10" r="4.5"/><circle cx="22" cy="10" r="4.5" opacity="0.55"/><path d="M3 26c0-4.5 3-7.5 7-7.5s7 3 7 7.5zM15 26c.4-4 3-7.5 7-7.5s7 3 7 7.5z" opacity="0.8"/></g>,
    spin:<g><circle cx="16" cy="16" r="11"/><path d="M16 5v22M5 16h22M8.2 8.2l15.6 15.6M23.8 8.2L8.2 23.8" stroke="#fff" strokeWidth="1.6"/><circle cx="16" cy="16" r="3" fill="#fff"/></g>,
  };
  const avenues=[["QR sampling stall","40 m ahead",ic.stall,1],["Gated quiz","before the sample",ic.quiz,1],["Feedback loop","+12 min after trial",ic.fb,1],["Joy Club enrolment","on verified claim",ic.loyal,1],["UGC photo wall","near mall exit",ic.ugc,1],["Receipt points loop","post-visit, at home",ic.rcpt,1],["Referral engine","after first redeem",ic.ref,0],["Spin-the-wheel","skipped for this profile",ic.spin,0]];
  return (
    <MZ2Panel kicker="Station 5 · Engagement orchestration" title="The engagement arsenal — armed along Aarav's path" sub="The consensus plan becomes real mechanisms, deployed ahead of him in the mall" right={mz2Live}>
      <div style={{flex:1,minHeight:0,position:"relative",border:"1px solid #E2DBEF",borderRadius:12,background:"linear-gradient(180deg,#FBFAFE,#F3EFFA)",overflow:"hidden",padding:"18px 26px 12px"}}>
        <svg style={{position:"absolute",left:0,right:0,top:0,width:"100%",height:"100%"}} viewBox="0 0 880 330" preserveAspectRatio="none">
          <path d="M30 285 C 200 285 180 90 400 90 S 640 285 850 285" fill="none" stroke="#DDD5EA" strokeWidth="3" strokeDasharray="1 0"></path>
          <path d="M30 285 C 200 285 180 90 400 90 S 640 285 850 285" fill="none" stroke={CAD_GOLD} strokeWidth="3" strokeDasharray="10 8" style={{animation:"dashMove 1.6s linear infinite"}}></path>
        </svg>
        <div style={{position:"relative",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"14px 16px",height:"100%",alignContent:"space-between"}}>
          {avenues.map(([t,s,icon,on],i)=>(
            <div key={t} style={{background:on?"#fff":"rgba(255,255,255,0.6)",border:on?`1.5px solid ${CAD_PURPLE}`:"1.5px dashed #cfc8dd",borderRadius:12,padding:"12px 12px 11px",textAlign:"center",boxShadow:on?"0 8px 20px rgba(42,20,88,0.12)":"none",opacity:on?1:0.62,animation:`fadeInUp 0.4s ${i*0.09}s both`}}>
              <div style={{width:44,height:44,margin:"0 auto",borderRadius:12,background:on?`linear-gradient(135deg,${CAD_PURPLE},#5E3D96)`:"#c9c2d6",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="26" height="26" viewBox="0 0 32 32" fill={on?CAD_GOLD:"#f2f0f6"}>{icon}</svg>
              </div>
              <div style={{fontSize:12,fontWeight:800,marginTop:7,color:"#241c38"}}>{t}</div>
              <div style={{fontSize:9.5,color:on?MZ_GREEN:"#999",fontWeight:700,marginTop:2}}>{on?`● ARMED · ${s}`:`○ OFF · ${s}`}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{background:"#F7F3FD",border:"1px solid #E2DBEF",borderRadius:10,padding:"10px 16px",fontSize:11.5,color:"#4a3c6a",lineHeight:1.55,display:"flex",gap:12,alignItems:"center",flexShrink:0}}>
        <div style={{width:8,height:8,borderRadius:2,background:CAD_GOLD,flexShrink:0}}></div>
        <span>Same platform, different consumer, different arsenal — a student in a Tier-2 town would get the spin-the-wheel and a GT-store coupon instead. <strong>Engagement follows the profile, not the campaign.</strong></span>
      </div>
    </MZ2Panel>
  );
}
Object.assign(window, { MZ2Box, mz2Live, MZ2CapturePanel, MZ2EnrichPanel, MZ2GeoPanel, MZ2AgentsPanel, MZ2DeployPanel });
