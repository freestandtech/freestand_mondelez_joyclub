/* Analytics, CRM handover, thank-you */
const MZ_PIE={navy:"#33518E",pink:"#C9487E",purple:"#92549A",orange:"#EE8B54",blue:"#4B9CD3"};

function MZKpi({label,val,d}){
  return <div style={{background:"#fff",border:"1px solid #e8e8e8",borderRadius:8,padding:"12px 16px"}}><div style={{fontSize:11.5,color:"#888"}}>{label}</div><div style={{fontSize:24,fontWeight:600,marginTop:3}}>{val}</div><div style={{fontSize:10.5,color:MZ_GREEN,marginTop:2}}>{d}</div></div>;
}
function MZBars({data,max=100,unit="%"}){
  return <div style={{display:"flex",flexDirection:"column",gap:7,padding:"4px 0"}}>{data.map(([l,v,c])=>(<div key={l} style={{display:"flex",alignItems:"center",gap:10,fontSize:11,color:"#444"}}><span style={{width:140,textAlign:"right",flexShrink:0}}>{l}</span><div style={{flex:1,height:14,background:"#f2f4f8",borderRadius:3,overflow:"hidden"}}><div style={{width:`${v/max*100}%`,height:"100%",background:c||MZ_PIE.navy}}></div></div><span style={{width:52,fontWeight:700}}>{v.toLocaleString()}{unit}</span></div>))}</div>;
}
function MZPie({data,size=120}){
  let acc=0; const stops=data.map(d=>{const s=acc;acc+=d.v;return `${d.c} ${s}% ${acc}%`;}).join(", ");
  return <div style={{display:"flex",alignItems:"center",gap:14,justifyContent:"center"}}><div style={{width:size,height:size,borderRadius:999,background:`conic-gradient(${stops})`,flexShrink:0}}></div><div style={{display:"flex",flexDirection:"column",gap:5}}>{data.map(d=>(<div key={d.l} style={{display:"flex",alignItems:"center",gap:7,fontSize:10.5,color:"#444"}}><span style={{width:9,height:9,borderRadius:2,background:d.c,display:"inline-block"}}></span><span>{d.l}</span><span style={{fontWeight:700,marginLeft:"auto",paddingLeft:10}}>{d.v}%</span></div>))}</div></div>;
}
function MZCardBox({title,children}){
  return <div style={{background:"#fff",border:"1px solid #e8e8e8",borderRadius:8,padding:"13px 16px"}}><div style={{fontSize:13,fontWeight:600,marginBottom:9}}>{title}</div>{children}</div>;
}

function MZAnalyticsScene(){
  const nav=["Campaigns","Planner","SKUs","Inventory","Reengage","Audits","Reports","Promoters","Audience"];
  return (
    <div style={{position:"absolute",inset:0,background:"#f5f5f5",display:"flex",fontFamily:"Roboto,-apple-system,sans-serif"}}>
      <div style={{width:200,flexShrink:0,background:"linear-gradient(180deg, rgb(5,39,98) 0%, rgb(10,73,183) 100%)",display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <div style={{height:54,borderBottom:"1px solid rgba(255,255,255,0.2)",display:"flex",alignItems:"center",padding:"0 18px",gap:8}}>
          <span style={{color:"#fff",fontWeight:800,fontSize:15,letterSpacing:1}}>FREESTAND</span>
        </div>
        <div style={{flex:1,padding:"10px 0"}}>
          {nav.slice(0,5).map(l=><div key={l} style={{padding:"9px 20px",fontSize:13,color:"rgba(255,255,255,0.85)",display:"flex",gap:11,alignItems:"center"}}><span style={{width:13,height:13,borderRadius:3,background:"rgba(255,255,255,0.25)"}}></span>{l}</div>)}
          <div style={{padding:"9px 20px",fontSize:13,color:"#fff",background:"rgba(255,255,255,0.12)",borderLeft:"4px solid #fff",display:"flex",gap:11,alignItems:"center"}}><span style={{width:13,height:13,borderRadius:3,background:"rgba(255,255,255,0.4)"}}></span>Analytics</div>
          {nav.slice(5).map(l=><div key={l} style={{padding:"9px 20px",fontSize:13,color:"rgba(255,255,255,0.85)",display:"flex",gap:11,alignItems:"center"}}><span style={{width:13,height:13,borderRadius:3,background:"rgba(255,255,255,0.25)"}}></span>{l}</div>)}
        </div>
      </div>
      <div style={{flex:1,display:"flex",flexDirection:"column",minWidth:0}}>
        <div style={{height:50,background:"#fff",borderBottom:"1px solid #d4d4d4",display:"flex",alignItems:"center",padding:"0 24px",justifyContent:"space-between",flexShrink:0}}>
          <span style={{fontSize:18,fontWeight:500,whiteSpace:"nowrap"}}>Campaign Analytics</span>
          <div style={{display:"inline-flex",alignItems:"center",gap:10,border:"1px solid #d9d9d9",borderRadius:6,padding:"6px 14px",fontSize:12.5,whiteSpace:"nowrap"}}>Sept 2026: Cadbury Dairy Milk · Mall Activation <span style={{color:"#999",fontSize:10}}>▾</span></div>
        </div>
        <div style={{flex:1,overflow:"auto",padding:"16px 22px",background:"#fdfdfd"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:12}}>
            <MZKpi label="Kiosk sign-ups" val="21,460" d="↑ across 6 malls"/>
            <MZKpi label="Samples handed over" val="17,882" d="↑ 83.3% of sign-ups engaged"/>
            <MZKpi label="Avg attributes / profile" val="19.4" d="↑ from 2 at capture"/>
            <MZKpi label="Receipt-verified purchases" val="4,315" d="↑ 24.1% of sampled"/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1.15fr 1fr",gap:12,marginBottom:12}}>
            <MZCardBox title="Profile enrichment funnel — attributes gained per stage">
              <MZBars max={21460} unit="" data={[["Kiosk capture (2 attrs)",21460,MZ_PIE.navy],["Geo-enriched (8 attrs)",21460,"#3D6AA8"],["Quiz completed (13 attrs)",18930,"#4E8BC4"],["Sampled + feedback (17 attrs)",13610,"#5FA8D8"],["Loyalty + UGC (21 attrs)",9480,"#6FC6E8"],["Receipt-verified (24 attrs)",4315,MZ_PIE.orange]]}/>
            </MZCardBox>
            <MZCardBox title="Q1) Milk or dark?">
              <MZPie data={[{l:"Milk chocolate",v:64,c:MZ_PIE.navy},{l:"Dark",v:23,c:MZ_PIE.purple},{l:"Both equally",v:13,c:MZ_PIE.orange}]}/>
              <div style={{height:8}}></div>
              <MZPie data={[{l:"Weekly buyers",v:41,c:MZ_PIE.navy},{l:"Monthly",v:37,c:MZ_PIE.pink},{l:"Occasional",v:22,c:MZ_PIE.orange}]}/>
            </MZCardBox>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
            <MZCardBox title="Sentiment after trial">
              <MZPie size={104} data={[{l:"Loved it",v:74,c:MZ_PIE.navy},{l:"Liked it",v:17,c:MZ_PIE.blue},{l:"Neutral",v:9,c:MZ_PIE.orange}]}/>
            </MZCardBox>
            <MZCardBox title="Joy Club actions per member · 30 days">
              <MZBars max={100} data={[["Feedback given",30],["UGC posted",31,MZ_PIE.orange],["Receipt uploaded",24,MZ_PIE.pink],["Referred a friend",12,MZ_PIE.purple]]}/>
            </MZCardBox>
            <MZCardBox title="Cohorts queued for retargeting">
              {[["Loved it, no purchase yet","6,120"],["Receipt-verified buyers","4,315"],["Dark-preference segment","4,930"],["Lapsed after 30 days","2,240"]].map(([l,v])=>(
                <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid #f2f2f2",fontSize:11.5}}><span style={{color:"#444"}}>{l}</span><span style={{fontWeight:700,color:MZ_NAVY}}>{v}</span></div>
              ))}
            </MZCardBox>
          </div>
        </div>
      </div>
    </div>
  );
}

function MZCrmScene(){
  const rows=[["Consumer profiles","Name, pincode, consent, persona","21,460 records"],["Declared preferences","Taste, frequency, occasion","18,930 records"],["Trial & feedback events","Handover, sentiment, intent","13,610 events"],["Loyalty & UGC","Members, points, posts, handles","9,480 members"],["Verified purchases","Receipt OCR, store, basket","4,315 receipts"]];
  const dests=[["Mondelez CDP","Direct connector — attributes & cohorts mapped to Mondelez's existing schema"],["Clean-room match","FreeStand's 70M-record graph enriches Mondelez's base without raw data ever crossing"],["Ad platforms","Google / Meta audience match — lookalikes & retargeting cohorts"],["Joy Club engine","Points, tiers and lifecycle nudges continue always-on, across 14 brands"]];
  return (
    <div style={{position:"absolute",inset:0,background:"#fff",fontFamily:"Roboto,-apple-system,sans-serif",display:"flex",flexDirection:"column"}}>
      <div style={{padding:"36px 56px 10px",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div style={{flex:1,minWidth:0,paddingRight:20}}>
          <div style={{fontSize:12,fontWeight:700,color:MZ_BLUE,letterSpacing:2.5,textTransform:"uppercase"}}>Step 15 · After the campaign</div>
          <div style={{fontSize:26,fontWeight:500,marginTop:6,whiteSpace:"nowrap"}}>Every consented byte flows into Mondelez's CDP</div>
          <div style={{fontSize:14,color:"#777",marginTop:5,fontWeight:300}}>Measured on what the brand cares about: first-party data, CLTV, attribution and ROAS.</div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:14,paddingTop:6,flexShrink:0}}><MdlzMark size={13}/><div style={{width:1,height:26,background:"#ddd"}}></div><FSMark h={18}/></div>
      </div>
      <div style={{flex:1,display:"grid",gridTemplateColumns:"1.25fr 120px 1fr",alignItems:"center",padding:"6px 56px 40px"}}>
        <div style={{border:`2px solid ${MZ_NAVY}`,borderRadius:14,overflow:"hidden",boxShadow:"0 10px 30px rgba(5,39,98,0.10)"}}>
          <div style={{background:"linear-gradient(135deg, rgb(5,39,98), rgb(10,73,183))",padding:"12px 20px",display:"flex",alignItems:"center",gap:10}}>
            <span style={{color:"#fff",fontWeight:800,fontSize:14,letterSpacing:1}}>FREESTAND</span>
            <span style={{color:"rgba(255,255,255,0.7)",fontSize:11}}>· campaign data vault</span>
            <span style={{marginLeft:"auto",fontSize:10.5,color:"#fff",background:"rgba(255,255,255,0.15)",padding:"3px 10px",borderRadius:999}}>consent-scoped</span>
          </div>
          {rows.map(([t,s,n],i)=>(
            <div key={t} style={{display:"flex",alignItems:"center",gap:14,padding:"20px 22px",borderBottom:i<rows.length-1?"1px solid #f0f0f0":"none",animation:`fadeInUp 0.35s ${i*0.1}s both`}}>
              <div style={{width:9,height:9,borderRadius:2,background:MZ_NAVY,flexShrink:0}}></div>
              <div style={{flex:1}}><div style={{fontSize:14.5,fontWeight:600}}>{t}</div><div style={{fontSize:12,color:"#888",marginTop:2}}>{s}</div></div>
              <div style={{fontSize:12.5,fontWeight:700,color:MZ_NAVY}}>{n}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
          <svg width="110" height="60" viewBox="0 0 110 60">
            {[14,30,46].map((y,i)=>(<g key={y}><line x1="6" y1={y} x2="96" y2={y} stroke="#B9CBE8" strokeWidth="2.5" strokeDasharray="6 6" style={{animation:`dashMove 1.2s linear ${i*0.3}s infinite`}}></line><path d={`M96 ${y-5} l10 5 -10 5z`} fill="#B9CBE8"></path></g>))}
          </svg>
          <div style={{fontSize:10,color:"#999",letterSpacing:1,fontWeight:600}}>SECURE API</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {dests.map(([t,s],i)=>(
            <div key={t} style={{border:"1px solid #e4e4e4",borderRadius:12,padding:"16px 20px",display:"flex",gap:16,alignItems:"center",animation:`fadeInUp 0.35s ${0.3+i*0.15}s both`,boxShadow:"0 6px 18px rgba(0,0,0,0.05)"}}>
              <div style={{width:10,height:10,borderRadius:999,background:CAD_PURPLE,flexShrink:0}}></div>
              <div><div style={{fontSize:15,fontWeight:700}}>{t}</div><div style={{fontSize:11.5,color:"#888",marginTop:3,lineHeight:1.45}}>{s}</div></div>
            </div>
          ))}
          <div style={{display:"flex",gap:10}}>
            {[["CLTV","per-consumer lifetime value"],["ROAS","sample → receipt attribution"],["~68%","Google/Meta match rate"]].map(([v,l])=>(
              <div key={l} style={{flex:1,borderLeft:`3px solid ${CAD_PURPLE}`,padding:"4px 0 4px 12px"}}>
                <div style={{fontSize:17,fontWeight:700,color:CAD_PURPLE}}>{v}</div>
                <div style={{fontSize:10,color:"#888",marginTop:1,lineHeight:1.35}}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{background:"#FFF9F2",border:"1px solid #F2DEC2",borderRadius:10,padding:"11px 16px",fontSize:11.5,color:"#8a6a3a",lineHeight:1.55}}>Not a campaign — <strong>always-on loyalty infrastructure</strong>: start with one brand, phase across the Mondelez portfolio, every tactical activation (a Silk Valentine's, an Oreo drop) earning into the same ecosystem.</div>
        </div>
      </div>
    </div>
  );
}

function MZThanks(){
  return (
    <div style={{position:"absolute",inset:0,background:`linear-gradient(160deg,${CAD_PURPLE_DK} 0%,${CAD_PURPLE} 55%,#5E3D96 100%)`,fontFamily:"Roboto,-apple-system,sans-serif",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff"}}>
      <div><MdlzMark size={17} light/></div>
      <div style={{fontSize:56,fontWeight:500,marginTop:36,lineHeight:1.15}}>Thank you.</div>
      <div style={{fontSize:20,fontWeight:300,color:"rgba(255,255,255,0.85)",marginTop:14,maxWidth:700,lineHeight:1.55}}>One consumer, one walk, one system — capture, enrichment, engagement and loyalty compounding into first-party data Mondelez owns.</div>
      <div style={{width:64,height:2.5,background:CAD_GOLD,margin:"34px 0"}}></div>
      <div style={{display:"flex",gap:16}}>
        {[["Konark","konark@freestand.in"],["Sneh","sneh@freestand.in"]].map(([n,e])=>(
          <div key={n} style={{display:"flex",alignItems:"center",gap:12,background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.25)",borderRadius:10,padding:"13px 22px"}}>
            <div style={{width:36,height:36,borderRadius:999,background:CAD_GOLD,color:"#3a2600",fontWeight:800,fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"}}>{n[0]}</div>
            <div style={{textAlign:"left"}}><div style={{fontSize:15,fontWeight:600}}>{n}</div><div style={{fontSize:12,color:"rgba(255,255,255,0.7)"}}>{e}</div></div>
          </div>
        ))}
      </div>
      <div style={{position:"absolute",bottom:42,display:"flex",alignItems:"center",gap:14}}>
        <span style={{fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.75)"}}>Powered by</span>
        <FSMark h={24} boxed/>
      </div>
    </div>
  );
}
Object.assign(window, { MZAnalyticsScene, MZCrmScene, MZThanks });
