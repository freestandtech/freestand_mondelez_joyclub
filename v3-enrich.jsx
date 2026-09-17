/* ACT 2 — Enrich: enrichment engine (multi-layer) + CRM schema mapping */
const MZ3_SPOKES = [
  { t:"Address geolocation", s:"Lat/long + locality from declared address", icon:"📍" },
  { t:"Local affluence index", s:"Property values, retail density, vehicle mix", icon:"🏙" },
  { t:"3rd-party databases", s:"Telco tier, device band, credit-safe signals", icon:"🗄" },
  { t:"Pincode intelligence", s:"19K pincodes: language, tier, income mix", icon:"🧭" },
  { t:"Declared Q&A", s:"Micro-surveys inside every chat & claim", icon:"💬" },
  { t:"Behaviour mapping", s:"Scans, redemptions, replies, opens over time", icon:"📈" },
];
function MZ3Gauge({ val=0.72, band="B+" }){
  return (
    <div>
      <div style={{position:"relative",height:9,borderRadius:999,background:"linear-gradient(90deg,#d9b98a,#cfc98f,#9cc98f,#4da06b,#1d7a4a)"}}>
        <div style={{position:"absolute",left:`${val*100}%`,top:-3,width:3,height:15,background:"#17111f",borderRadius:2}}></div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:8.5,color:"#999",marginTop:3}}>{["D","C","B","A","A+"].map(l=><span key={l}>{l}</span>)}</div>
    </div>
  );
}
function MZ3Layer({ n, icon, run, i, children, locked }){
  return (
    <div style={{position:"relative",paddingLeft:20}}>
      <div style={{position:"absolute",left:5,top:0,bottom:-10,width:2,background:run?`linear-gradient(${CAD_GOLD},${CAD_GOLD})`:"#e6e3ee"}}></div>
      <div style={{position:"absolute",left:0,top:14,width:12,height:12,borderRadius:"50%",background:run?CAD_GOLD:"#d8d4e4",border:"2px solid #fff",boxShadow:"0 0 0 1.5px "+(run?CAD_GOLD:"#d8d4e4")}}></div>
      <div style={{background:"#fff",border:`1.5px solid ${run?"#eadfc2":"#ececf3"}`,borderRadius:12,padding:"10px 13px",marginBottom:10,animation:run?`fadeInUp .4s ${i*0.18}s both`:"none",opacity:run||!locked?1:0.55}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:run||!locked?7:0}}>
          <span style={{fontSize:13}}>{icon}</span>
          <span style={{fontSize:10,fontWeight:800,letterSpacing:1.3,textTransform:"uppercase",color:run?"#8a6a10":"#999"}}>{n}</span>
          {locked && !run && <span style={{marginLeft:"auto",fontSize:9.5,color:"#bbb",fontWeight:700}}>🔒 unlocks on enrich</span>}
          {run && <span style={{marginLeft:"auto",fontSize:9.5,color:MZ_GREEN,fontWeight:800}}>✓ applied</span>}
        </div>
        {(run||!locked) && children}
      </div>
    </div>
  );
}
function MZ3KVRow({ k, v, hi }){
  return <div style={{display:"flex",justifyContent:"space-between",gap:10,fontSize:11.5,padding:"3px 0",borderBottom:"1px dashed #f0eef6"}}><span style={{color:"#888"}}>{k}</span><b style={{color:hi?CAD_PURPLE:"#333",textAlign:"right"}}>{v}</b></div>;
}
function MZ3EnrichEngine(){
  const [run,setRun] = React.useState(false);
  const pos = [[60,60],[300,26],[540,60],[60,290],[300,326],[540,290]];
  return (
    <div style={{display:"flex",gap:22,height:"100%"}}>
      <div style={{flex:1,minWidth:0,position:"relative",background:"#fff",border:"1px solid #e8e8f0",borderRadius:16,overflow:"hidden"}}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.5}} viewBox="0 0 700 420" preserveAspectRatio="none">
          <defs><pattern id="mz3grid" width="38" height="38" patternUnits="userSpaceOnUse"><path d="M38 0H0V38" fill="none" stroke="#EDEAF5" strokeWidth="1"></path></pattern></defs>
          <rect width="700" height="420" fill="url(#mz3grid)"></rect>
          <path d="M-20,340 C120,300 180,360 300,330 S 480,250 580,290 720,260 740,250" fill="none" stroke="#D9E7F5" strokeWidth="14" opacity="0.8"></path>
          <path d="M60,-20 C90,80 40,180 110,280 S 150,400 130,440" fill="none" stroke="#EDE7DA" strokeWidth="9"></path>
          <path d="M620,-20 C580,90 660,160 600,260 S 640,380 630,440" fill="none" stroke="#EDE7DA" strokeWidth="9"></path>
          <path d="M-20,120 L720,80" stroke="#EDE7DA" strokeWidth="6"></path>
          {[[150,120],[280,80],[440,110],[210,320],[520,340],[590,150],[400,370]].map((p,i)=>(
            <g key={i} opacity="0.55"><circle cx={p[0]} cy={p[1]} r="4" fill={CAD_PURPLE}></circle><circle cx={p[0]} cy={p[1]} r="8" fill="none" stroke={CAD_PURPLE} strokeWidth="1" opacity="0.4"></circle></g>
          ))}
          {[[90,220,26],[480,60,20],[560,390,24],[260,190,18]].map((b,i)=><rect key={i} x={b[0]} y={b[1]} width={b[2]} height={b[2]*0.7} rx="2" fill="#E7E2F0"></rect>)}
        </svg>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%"}} viewBox="0 0 700 420" preserveAspectRatio="none">
          {pos.map((p,i)=><path key={i} d={`M${p[0]+90},${p[1]+30} C ${350},${p[1]+30} ${p[0]+90},${210} 350,210`} fill="none" stroke={run?CAD_GOLD:"#e3e3ec"} strokeWidth="1.6" strokeDasharray="5 6" style={run?{animation:"dashMove 1.2s linear infinite"}:{}}></path>)}
        </svg>
        <div style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",display:"flex",alignItems:"center",gap:0,boxShadow:"0 10px 30px rgba(42,20,88,0.18)",borderRadius:12,zIndex:3}}>
          {!run && <MZ3ClickHint t="Click to enrich this record" style={{top:-40,left:"50%",transform:"translateX(-50%)"}}/>}
          <div style={{background:"#fff",border:"1.5px solid #e3e3ec",borderRight:"none",borderRadius:"12px 0 0 12px",padding:"12px 16px",fontSize:13.5,fontWeight:700,color:"#333",whiteSpace:"nowrap"}}>+91 98••• ••210 · <span style={{color:CAD_PURPLE}}>482002</span></div>
          <button onClick={()=>setRun(true)} style={{cursor:"pointer",fontFamily:"inherit",background:run?MZ_GREEN:CAD_PURPLE,color:"#fff",border:"none",borderRadius:"0 12px 12px 0",padding:"13px 18px",fontSize:13,fontWeight:800,whiteSpace:"nowrap"}}>{run?"✓ Enriched":"✦ Enrich"}</button>
        </div>
        {MZ3_SPOKES.map((sp,i)=>(
          <div key={i} style={{position:"absolute",left:`${(pos[i][0]/700)*100}%`,top:`${(pos[i][1]/420)*100}%`,width:178,background:"rgba(255,255,255,0.96)",border:`1.5px solid ${run?CAD_GOLD:"#e8e8f0"}`,borderRadius:11,padding:"9px 11px",zIndex:2,transition:`border-color .3s ${i*0.15}s`,display:"flex",gap:9,alignItems:"center",boxShadow:"0 4px 14px rgba(42,20,88,0.08)"}}>
            <span style={{width:30,height:30,flex:"none",borderRadius:9,background:run?"#FDF3DC":"#F3EFFB",display:"grid",placeItems:"center",fontSize:14,transition:`background .3s ${i*0.15}s`}}>{sp.icon}</span>
            <span style={{minWidth:0}}>
              <span style={{display:"block",fontSize:11,fontWeight:800,color:"#333"}}>{sp.t}</span>
              <span style={{display:"block",fontSize:9,color:"#888",marginTop:1,lineHeight:1.35}}>{sp.s}</span>
            </span>
          </div>
        ))}
      </div>
      <div style={{width:398,flex:"none",height:"100%",overflow:"auto",paddingRight:2}}>
        <div style={{fontSize:10.5,fontWeight:800,letterSpacing:1.6,textTransform:"uppercase",color:CAD_PURPLE,margin:"2px 0 10px"}}>Multi-layer enrichment · one record</div>
        <MZ3Layer n="Layer 1 · Declared at the gate" icon="🙋" run={run} i={0}>
          <MZ3KVRow k="Name" v="Meena Sharma"/>
          <MZ3KVRow k="Phone" v="+91 98••• ••210 · verified ✓"/>
          <MZ3KVRow k="Pincode" v="482002 · Jabalpur"/>
          <MZ3KVRow k="Household" v="Family · kids at home"/>
        </MZ3Layer>
        <MZ3Layer n="Layer 2 · Geo & affluence" icon="🏙" run={run} i={1} locked>
          <div style={{display:"flex",gap:10,alignItems:"center",background:"#F4F7FE",borderRadius:9,padding:"8px 11px",marginBottom:8}}>
            <span style={{fontSize:20,fontWeight:800,color:"#1c4fd6",fontFamily:"ui-monospace,monospace"}}>482002</span>
            <span style={{fontSize:10.5,color:"#666",lineHeight:1.35}}>Wright Town, Jabalpur<br/>Tier-2 · urban core</span>
            <span style={{marginLeft:"auto",fontSize:18,fontWeight:800,color:"#2b8a4b"}}>B+</span>
          </div>
          <MZ3Gauge val={0.68}/>
          <div style={{display:"flex",gap:6,marginTop:8,flexWrap:"wrap"}}><MZ3Tag t="Choc spend ₹120+/mo in locality" tone="blue"/><MZ3Tag t="Premium formats over-index" tone="purple"/></div>
        </MZ3Layer>
        <MZ3Layer n="Layer 3 · 3rd-party signals" icon="🗄" run={run} i={2} locked>
          <MZ3KVRow k="Telco tier" v="Postpaid · premium circle" hi/>
          <MZ3KVRow k="Device band" v="Mid-premium Android" hi/>
          <MZ3KVRow k="Language model" v="Hindi-first" hi/>
        </MZ3Layer>
        <MZ3Layer n="Layer 4 · Behaviour over time" icon="📈" run={run} i={3} locked>
          <MZ3KVRow k="Pack scans" v="4 in 60 days" hi/>
          <MZ3KVRow k="Reply rate" v="2.3× vernacular vs EN" hi/>
          <MZ3KVRow k="Redemption pattern" v="Weekends · festive-led" hi/>
        </MZ3Layer>
        {run && <div style={{marginLeft:20,background:"linear-gradient(140deg,#FFF9EC,#FDF3DC)",border:`2px solid ${CAD_GOLD}`,borderRadius:14,padding:"12px 15px",animation:"fadeInUp .45s .75s both"}}>
          <div style={{fontSize:10,fontWeight:800,letterSpacing:1.4,color:"#8a6a10",textTransform:"uppercase"}}>CRM-ready record</div>
          <div style={{display:"flex",gap:18,margin:"7px 0 6px"}}>
            <span><b style={{fontSize:20,color:CAD_PURPLE}}>21</b> <span style={{fontSize:10.5,color:"#777"}}>attributes</span></span>
            <span><b style={{fontSize:20,color:CAD_PURPLE}}>₹4.8–7.2K</b> <span style={{fontSize:10.5,color:"#777"}}>CLTV band / yr</span></span>
          </div>
          <div style={{fontSize:11,color:"#6a4a00",lineHeight:1.5}}><b>Next best action:</b> Silk Valentine's push · Hindi · weekend evening window · gifting angle.</div>
        </div>}
        {!run && <div style={{marginLeft:20,fontSize:11.5,color:"#999",padding:"4px 2px"}}>Press <b>✦ Enrich</b> — 3 more layers + 17 derived attributes appear in &lt; 400 ms.</div>}
      </div>
    </div>
  );
}
const MZ3_SCHEMA = [
  ["Mobile (MSISDN)","phone_verified","OTP at every claim","100%"],
  ["Name","full_name","Declared in chat / form","98%"],
  ["Email","email","Web form · Joy Club signup","54%"],
  ["Age band","age_band","Declared + name-model","81%"],
  ["Gender","gender","Declared + inference","88%"],
  ["City / Pincode","pincode + geo","Declared, geo-validated","100%"],
  ["Chocolate consumption freq.","choc_freq_band","Declared Q + repeat scans","76%"],
  ["Parent (kids 0–12)","parent_flag","Declared Q + basket signal","63%"],
  ["Occasion affinity","occasion_scores","12-month engagement history","92%"],
  ["Preferred brand / SKU","sku_affinity","Pack scans + quiz answers","84%"],
];
const MZ3_COHORTS = [
  { t:"Heavy chocolate households", d:"choc_freq_band ≥ weekly", e:"~34% of base" },
  { t:"Parents · kids 6–12", d:"parent_flag ∧ age_band 28–45", e:"~22% of base" },
  { t:"Gifting-first buyers", d:"occasion_scores: festive > daily", e:"~18% of base" },
  { t:"Tier 2/3 · vernacular-first", d:"pincode tier ∧ language ≠ EN", e:"~41% of base" },
];
function MZ3Schema(){
  return (
    <div style={{display:"flex",gap:22,height:"100%"}}>
      <div style={{flex:1.5,minWidth:0,background:"#fff",border:"1px solid #e8e8f0",borderRadius:16,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        <div style={{display:"grid",gridTemplateColumns:"1.3fr 1fr 1.2fr 64px 60px",gap:0,padding:"11px 18px",background:CAD_PURPLE,color:"#fff",fontSize:10.5,fontWeight:800,letterSpacing:1,textTransform:"uppercase"}}>
          <span>Mondelēz CRM field</span><span>FreeStand attribute</span><span>Source</span><span>Fill</span><span>Feas.</span>
        </div>
        <div style={{flex:1,overflow:"hidden"}}>
          {MZ3_SCHEMA.map((r,i)=>(
            <div key={i} style={{display:"grid",gridTemplateColumns:"1.3fr 1fr 1.2fr 64px 60px",alignItems:"center",padding:"8.5px 18px",borderBottom:"1px solid #f2f2f7",fontSize:12,animation:`fadeInUp .3s ${i*0.05}s both`}}>
              <span style={{fontWeight:700,color:"#333"}}>{r[0]}</span>
              <span style={{fontFamily:"ui-monospace,monospace",fontSize:11,color:CAD_PURPLE}}>{r[1]}</span>
              <span style={{color:"#777",fontSize:11.5}}>{r[2]}</span>
              <span style={{fontWeight:800,color:parseInt(r[3])>=80?MZ_GREEN:"#b07800"}}>{r[3]}</span>
              <span style={{color:MZ_GREEN,fontWeight:800}}>✓</span>
            </div>
          ))}
        </div>
        <div style={{padding:"9px 18px",background:"#FBFAF6",fontSize:11,color:"#888",borderTop:"1px solid #eee"}}>Fill rates: observed medians across FreeStand FMCG programs · attribute-level feasibility & pricing in commercial annexure.</div>
      </div>
      <div style={{width:330,flex:"none",display:"flex",flexDirection:"column",gap:10}}>
        <MZ3Kicker color={CAD_PURPLE}>Cohorts we can build & refresh daily</MZ3Kicker>
        {MZ3_COHORTS.map((c,i)=>(
          <div key={i} style={{background:"#fff",border:"1px solid #e8e8f0",borderRadius:12,padding:"11px 14px",animation:`fadeInUp .35s ${i*0.1}s both`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8}}>
              <span style={{fontSize:13,fontWeight:800}}>{c.t}</span><MZ3Tag t="Feasible ✓" tone="green"/>
            </div>
            <div style={{fontFamily:"ui-monospace,monospace",fontSize:10.5,color:CAD_PURPLE,marginTop:4}}>{c.d}</div>
            <div style={{fontSize:11,color:"#888",marginTop:3}}>{c.e}</div>
          </div>
        ))}
        <div style={{background:"#FDF3DC",borderRadius:12,padding:"11px 14px",fontSize:11.5,color:"#6a4a00",lineHeight:1.5}}><b>Existing CRM data flows in too</b> — current Mondelēz records are matched on phone/email, deduped, and enriched with the same pipeline.</div>
      </div>
    </div>
  );
}
function MZ3Enrich({ sub=0, setSub }){
  const tab = sub===1?"schema":"engine";
  return (
    <div style={{display:"flex",flexDirection:"column",gap:14,height:"100%"}}>
      <div style={{display:"flex",alignItems:"flex-end",gap:18}}>
        <div>
          <MZ3Kicker color={CAD_PURPLE}>Pillar 2 · Enrich</MZ3Kicker>
          <div style={{fontSize:21,fontWeight:800,marginTop:2}}>Every record gets smarter than it was declared</div>
        </div>
        <div style={{marginLeft:"auto",display:"flex",gap:8,position:"relative"}}>
          <MZ3ClickHint t="Click to switch views" style={{top:-30,right:0}}/>
          <MZ3Chip t="Enrichment engine" on={tab==="engine"} onClick={()=>setSub(0)}/>
          <MZ3Chip t="CRM schema mapping" on={tab==="schema"} onClick={()=>setSub(1)}/>
        </div>
      </div>
      <div key={tab} style={{flex:1,minHeight:0,animation:"stageIn .4s both"}}>{tab==="engine"?<MZ3EnrichEngine/>:<MZ3Schema/>}</div>
    </div>
  );
}
Object.assign(window, { MZ3Enrich });
