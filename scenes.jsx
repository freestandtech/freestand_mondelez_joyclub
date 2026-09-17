/* Mondelez analytics scene (FreeStand shell) + cover scene + thank-you — shared by the sampling demos */
function MFSPie({ slices, size=170 }) {
  let cum=0; const r=size/2-6, cx=size/2, cy=size/2;
  const paths = slices.map(s=>{
    const a1=cum*3.6*Math.PI/180; cum+=s.p; const a2=cum*3.6*Math.PI/180;
    const la=s.p>50?1:0;
    return {...s,d:`M ${cx} ${cy} L ${cx+r*Math.sin(a1)} ${cy-r*Math.cos(a1)} A ${r} ${r} 0 ${la} 1 ${cx+r*Math.sin(a2)} ${cy-r*Math.cos(a2)} Z`,mid:(cum-s.p/2)*3.6*Math.PI/180};
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{filter:"drop-shadow(0 4px 10px rgba(79,33,112,0.14))"}}>
      {paths.map((p,i)=><path key={i} d={p.d} fill={p.c} stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>)}
      {paths.filter(p=>p.p>=10).map((p,i)=><text key={i} x={cx+(r*0.6)*Math.sin(p.mid)} y={cy-(r*0.6)*Math.cos(p.mid)+3} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">{p.p}%</text>)}
      {paths.filter(p=>p.p<10).map((p,i)=><text key={i} x={cx+(r+13)*Math.sin(p.mid)} y={cy-(r+13)*Math.cos(p.mid)+3} textAnchor="middle" fontSize="10" fontWeight="700" fill={p.c}>{p.p}%</text>)}
    </svg>
  );
}
function MFSPieCard({ title, slices }) {
  return (
    <div style={{background:"#fff",border:"1px solid #e4e8f0",borderRadius:10,overflow:"hidden",boxShadow:"0 1px 3px rgba(79,33,112,0.05)"}}>
      <div style={{padding:"12px 16px",borderBottom:"1px solid #eef0f5",fontSize:12.5,fontWeight:700,color:"#1a1a1a"}}>{title}</div>
      <div style={{display:"flex",alignItems:"center",gap:16,padding:"16px 16px 18px"}}>
        <MFSPie slices={slices}/>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {slices.map((s,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:7}}>
              <div style={{width:9,height:9,borderRadius:999,background:s.c,flexShrink:0}}></div>
              <div style={{fontSize:11,color:"#4a5468",whiteSpace:"nowrap"}}>{s.l} <span style={{color:"#98a2b8",fontWeight:600}}>{s.p}%</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const MKPI = [["1,04,512","OTP Verified"],["78,341","Claimants"],["61,208","Delivered"],["26% (15,914)","Feedback Rate"],["13% (7,957)","Purchase Intent"]];

function MFSOverviewTab() {
  return (
    <div>
      <div style={{background:"#fff",border:"1px solid #e4e8f0",borderRadius:10,padding:"16px 20px",marginBottom:14}}>
        <div style={{fontSize:15,fontWeight:600,color:"#1a1a1a",marginBottom:14}}>Live Numbers</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10}}>
          {MKPI.map(([v,l],i)=>(
            <div key={i} style={{border:"1px solid #e8ecf4",borderRadius:8,padding:"14px 10px",textAlign:"center"}}>
              <div style={{fontSize:20,fontWeight:700,color:"#1a1a1a"}}>{v}</div>
              <div style={{fontSize:11,color:"#8a94a8",marginTop:4}}>{l} ⓘ</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{background:"#fff",border:"1px solid #e4e8f0",borderRadius:10,padding:"16px 20px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
          <div style={{fontSize:14,fontWeight:600,color:"#1a1a1a"}}>💡 Key Insights</div>
          <div style={{padding:"2px 10px",borderRadius:999,background:"#F3E8FD",border:"1px solid #D8B4FE",fontSize:10,fontWeight:700,color:"#7C3AED"}}>36 Analyses</div>
        </div>
        {[
          "Purchase intent varies by 54% between best and worst performing segments",
          "18 2-Way and 18 3-Way analyses completed using predictor variables",
        ].map((t,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:8,fontSize:12,color:"#333",marginBottom:6}}>
            <div style={{width:14,height:14,borderRadius:999,border:"1.5px solid #2E7D32",color:"#2E7D32",fontSize:9,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>✓</div>{t}
          </div>
        ))}
        <div style={{fontSize:12,fontWeight:700,color:"#1a1a1a",margin:"12px 0 8px"}}>▦ Significant Associations ⓘ</div>
        {[
          ["Which chocolate do you buy most often? x What's the usual occasion?","moderate","V=0.19"],
          ["What's the usual occasion? x How often do you buy chocolate?","weak","V=0.09"],
          ["Which chocolate do you buy? x Did you buy Silk after the sample?","weak","V=0.07"],
          ["How often do you buy? x Has your household tried the sample?","weak","V=0.04"],
        ].map(([q,w,v],i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 12px",border:"1px solid #eef0f5",borderRadius:6,marginBottom:6}}>
            <div style={{color:"#7B4FA8",fontSize:11}}>▦</div>
            <div style={{flex:1,fontSize:12,color:"#333"}}>{q}</div>
            <div style={{padding:"2px 8px",borderRadius:4,background:"#f0f2f6",fontSize:10,fontWeight:600,color:"#555"}}>{w}</div>
            <div style={{fontSize:10,color:"#98a2b8"}}>{v}</div>
          </div>
        ))}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginTop:12}}>
          <div>
            <div style={{fontSize:12,fontWeight:700,color:"#1a1a1a",marginBottom:8}}>📈 Top Performers</div>
            {[["Gifting + Amul user + Yes","48.2%"],["Self-treat + Ferrero + Yes","44.6%"],["Weekly buyer + Amul + Yes","41.9%"]].map(([l,v],i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 12px",background:"#F0F9F0",borderRadius:5,marginBottom:5,fontSize:11.5,color:"#333"}}>
                <span>{l}</span><span style={{fontWeight:700,color:"#2E7D32"}}>{v}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{fontSize:12,fontWeight:700,color:"#1a1a1a",marginBottom:8}}>📉 Low Performers</div>
            {[["Festive-only + local brands","2.1%"],["Monthly + price-first + local","1.4%"],["Kids-only + monthly buyer","0.8%"]].map(([l,v],i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 12px",background:"#FDF0F0",borderRadius:5,marginBottom:5,fontSize:11.5,color:"#333"}}>
                <span>{l}</span><span style={{fontWeight:700,color:"#C62828"}}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function MFSLiveTab() {
  const claims =    [4.8, 12.2, 23.6, 36.4, 49.8, 61.5, 71.3, 78.3];
  const delivered = [1.6,  6.9, 15.8, 26.7, 38.4, 49.2, 56.6, 61.2];
  const W=940,H=280,PL=52,PB=34,PT=16,PR=16, maxY=90;
  const x=i=>PL+i*(W-PL-PR)/7, y=v=>H-PB-(v/maxY)*(H-PB-PT);
  const line=arr=>arr.map((v,i)=>`${i?"L":"M"} ${x(i)} ${y(v)}`).join(" ");
  const area=arr=>line(arr)+` L ${x(7)} ${H-PB} L ${x(0)} ${H-PB} Z`;
  return (
    <div>
      <div style={{background:"#fff",border:"1px solid #e4e8f0",borderRadius:10,padding:"14px 20px",marginBottom:14,display:"flex"}}>
        {MKPI.map(([v,l],i)=>(
          <div key={i} style={{textAlign:"center",flex:1,borderRight:i<4?"1px solid #eef0f5":"none"}}>
            <div style={{fontSize:20,fontWeight:700,color:"#1a1a1a"}}>{v}</div>
            <div style={{fontSize:11,color:"#8a94a8",marginTop:3}}>{l} ⓘ</div>
          </div>
        ))}
      </div>
      <div style={{background:"#fff",border:"1px solid #e4e8f0",borderRadius:10,overflow:"hidden"}}>
        <div style={{padding:"12px 20px",borderBottom:"1px solid #eef0f5",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{fontSize:14,fontWeight:600,color:"#1a1a1a"}}>Claims vs Deliveries <span style={{fontWeight:400,fontSize:12,color:"#8a94a8"}}>(cumulative, campaign weeks 1–8)</span></div>
          <div style={{display:"flex",gap:18,fontSize:11.5,color:"#4a5468"}}>
            <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{width:10,height:10,borderRadius:999,background:"#4F2170"}}></span>Samples claimed</span>
            <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{width:10,height:10,borderRadius:999,background:"#E4A400"}}></span>Samples delivered</span>
          </div>
        </div>
        <svg width="100%" height="300" viewBox={`0 0 ${W} ${H}`} style={{display:"block",padding:"10px 0 4px"}}>
          <defs>
            <linearGradient id="mgClaims" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4F2170" stopOpacity="0.18"/><stop offset="1" stopColor="#4F2170" stopOpacity="0.02"/></linearGradient>
            <linearGradient id="mgDeliv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#E4A400" stopOpacity="0.20"/><stop offset="1" stopColor="#E4A400" stopOpacity="0.02"/></linearGradient>
          </defs>
          {[0,22.5,45,67.5,90].map(v=>(
            <g key={v}>
              <line x1={PL} x2={W-PR} y1={y(v)} y2={y(v)} stroke="#eef0f5" strokeWidth="1"/>
              <text x={PL-8} y={y(v)+4} fontSize="10" fill="#98a2b8" textAnchor="end">{Math.round(v)}k</text>
            </g>
          ))}
          <path d={area(claims)} fill="url(#mgClaims)"/>
          <path d={area(delivered)} fill="url(#mgDeliv)"/>
          <path d={line(claims)} fill="none" stroke="#4F2170" strokeWidth="2.5" strokeLinecap="round"/>
          <path d={line(delivered)} fill="none" stroke="#E4A400" strokeWidth="2.5" strokeLinecap="round"/>
          {claims.map((v,i)=><circle key={"c"+i} cx={x(i)} cy={y(v)} r="4" fill="#4F2170" stroke="#fff" strokeWidth="1.5"/>)}
          {delivered.map((v,i)=><circle key={"d"+i} cx={x(i)} cy={y(v)} r="4" fill="#E4A400" stroke="#fff" strokeWidth="1.5"/>)}
          <text x={x(7)+2} y={y(claims[7])-10} fontSize="11" fontWeight="700" fill="#4F2170" textAnchor="end">78,341 claimed</text>
          <text x={x(7)+2} y={y(delivered[7])+20} fontSize="11" fontWeight="700" fill="#B07E00" textAnchor="end">61,208 delivered</text>
          {claims.map((v,i)=><text key={"w"+i} x={x(i)} y={H-PB+18} fontSize="10" fill="#98a2b8" textAnchor="middle">{"W"+(i+1)}</text>)}
        </svg>
      </div>
    </div>
  );
}
function MFSDataVizTab() {
  const navy="#4C6FBF", pink="#E0699A", purple="#9B6FC3", coral="#F08A66", amber="#F2B34C", deep="#3D5A8C";
  const cards = [
    {t:"Q1) Which chocolate brand do you buy most often?",s:[{l:"Cadbury Dairy Milk",p:38.4,c:purple},{l:"Amul",p:26.2,c:navy},{l:"Nestlé KitKat",p:22.1,c:pink},{l:"Ferrero / other",p:13.3,c:coral}]},
    {t:"Q2) What's the usual occasion?",s:[{l:"Self-treat",p:41.6,c:purple},{l:"Gifting",p:27.9,c:amber},{l:"Kids",p:19.3,c:navy},{l:"Festive",p:11.2,c:pink}]},
    {t:"Q3) How often do you buy chocolate?",s:[{l:"Weekly",p:44.1,c:navy},{l:"Fortnightly",p:31.7,c:purple},{l:"Monthly",p:24.2,c:coral}]},
    {t:"Q4) SKU allocation by pincode tier",s:[{l:"Metro → Silk Hazelnut",p:46,c:amber},{l:"Tier-2/3 → Dairy Milk",p:54,c:deep}]},
    {t:"Q5) Has your household tried the free sample yet?",s:[{l:"Yes",p:86.1,c:navy},{l:"Not yet",p:13.9,c:pink}]},
    {t:"Q6) Did you buy Silk after trying the sample?",s:[{l:"Yes",p:58.3,c:navy},{l:"No",p:41.7,c:pink}]},
  ];
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14}}>
      {cards.map((c,i)=><MFSPieCard key={i} title={c.t} slices={c.s}/>)}
    </div>
  );
}
function MFSStatsTab() {
  return (
    <div>
      <div style={{display:"flex",gap:22,borderBottom:"1px solid #e4e8f0",marginBottom:14,fontSize:12.5}}>
        {[["▦ 2-Way Analysis",true],["⧉ 3-Way Analysis"],["⚇ Segmentation"],["▽ Barrier Analysis",false,"Coming Soon"],["ƒx Regression",false,"Coming Soon"]].map(([l,active,soon],i)=>(
          <div key={i} style={{padding:"0 2px 10px",fontWeight:active?700:500,color:active?"#4F2170":"#667",borderBottom:active?"2.5px solid #4F2170":"2.5px solid transparent",display:"flex",alignItems:"center",gap:6}}>
            {l}{soon&&<span style={{padding:"1px 7px",borderRadius:999,background:"#F3E8FD",border:"1px solid #D8B4FE",fontSize:9,fontWeight:700,color:"#7C3AED"}}>{soon}</span>}
          </div>
        ))}
      </div>
      <div style={{background:"#F5EEFB",border:"1px solid #DCC9EC",borderRadius:8,padding:"12px 16px",marginBottom:14,display:"flex",gap:12}}>
        <div style={{width:20,height:20,borderRadius:999,background:"#7B4FA8",color:"#fff",fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontWeight:700}}>i</div>
        <div>
          <div style={{fontSize:13,fontWeight:700,color:"#1a1a1a"}}>2-Way Interaction Analysis</div>
          <div style={{fontSize:12,color:"#445",marginTop:3}}>Discover how two variables together affect purchase intent. For example: does the effect of Brand change depending on the occasion (Self-treat vs Gifting)?</div>
        </div>
      </div>
      <div style={{background:"#fff",border:"1px solid #e4e8f0",borderRadius:8,padding:"14px 16px",marginBottom:14}}>
        <div style={{fontSize:13,fontWeight:700,color:"#1a1a1a",marginBottom:10}}>Select Variables</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {[["Variable 1 (Rows)","Which chocolate do you buy most often?"],["Variable 2 (Columns)","What's the usual occasion?"]].map(([l,v],i)=>(
            <div key={i}>
              <div style={{fontSize:11,color:"#8a94a8",marginBottom:5}}>{l}</div>
              <div style={{border:"1px solid #d8dee8",borderRadius:6,padding:"9px 12px",fontSize:12,color:"#333",display:"flex",justifyContent:"space-between"}}>{v}<span style={{color:"#98a2b8"}}>∨</span></div>
            </div>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginTop:16}}>
          <div><div style={{fontSize:11,color:"#8a94a8"}}>Sample Size</div><div style={{fontSize:19,fontWeight:700,color:"#1a1a1a",marginTop:3}}>78,341 claimants</div></div>
          <div><div style={{fontSize:11,color:"#8a94a8"}}>Overall Purchase Rate</div><div style={{fontSize:19,fontWeight:700,color:"#1a1a1a",marginTop:3}}>12.7 %</div></div>
          <div><div style={{fontSize:11,color:"#8a94a8"}}>Interaction Test ⓘ</div><div style={{marginTop:5,display:"inline-flex",alignItems:"center",gap:6,border:"1px solid #d8dee8",borderRadius:999,padding:"4px 10px",fontSize:11,color:"#555"}}>✓ Interaction (p=0.014)</div></div>
          <div><div style={{fontSize:11,color:"#8a94a8"}}>Common OR ⓘ</div><div style={{fontSize:19,fontWeight:700,color:"#1a1a1a",marginTop:3}}>1.32</div></div>
        </div>
      </div>
      <div style={{background:"#fff",border:"1px solid #e4e8f0",borderRadius:8,padding:"14px 16px",marginBottom:14}}>
        <div style={{fontSize:13,fontWeight:700,color:"#1a1a1a",marginBottom:8}}>💡 Key Insights</div>
        <div style={{fontSize:12,fontWeight:700,color:"#333",marginBottom:4}}>Analysis Summary</div>
        <div style={{fontSize:12,color:"#445",lineHeight:1.6,marginBottom:8}}>Purchase intent rates vary by current brand and occasion, with gifting occasions converting best across all brands. The significant interaction means brand-switch likelihood depends on why people buy chocolate — not just which brand they buy.</div>
        <div style={{fontSize:12,fontWeight:700,color:"#333",marginBottom:4}}>Key Insights</div>
        <div style={{fontSize:12,color:"#445",lineHeight:1.7}}>
          - Amul buyers sampling for gifting show 48.2% purchase intent — the strongest segment.<br/>
          &nbsp;&nbsp;• Self-treat Ferrero buyers convert at 44.6% — premium seekers respond to Silk Hazelnut.<br/>
          &nbsp;&nbsp;• Festive-only buyers convert at just 2.1% — exclude from paid retargeting.
        </div>
        <div style={{fontSize:12,fontWeight:700,color:"#333",margin:"8px 0 4px"}}>Recommendations</div>
        <div style={{fontSize:12,color:"#445",lineHeight:1.7}}>
          - Retarget gifting-occasion competitor users with Silk gifting packs before Raksha Bandhan.<br/>
          &nbsp;&nbsp;• Route premium self-treat cohorts to Silk Hazelnut launch offers via Joy Club.
        </div>
      </div>
      <div style={{background:"#fff",border:"1px solid #e4e8f0",borderRadius:8,padding:"14px 16px"}}>
        <div style={{fontSize:13,fontWeight:700,color:"#1a1a1a",marginBottom:10}}>⚗ Statistical Tests ⓘ</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {[["Breslow-Day Test","Statistic: 6.12","Tests if odds ratios are equal across strata"],["CMH Test","Statistic: 9.84","Tests conditional independence controlling for strata"]].map(([t,s,d],i)=>(
            <div key={i} style={{border:"1px solid #e8ecf4",borderRadius:6,padding:"12px 14px"}}>
              <div style={{fontSize:12.5,fontWeight:700,color:"#1a1a1a"}}>{t} ⓘ</div>
              <div style={{fontSize:12,color:"#333",marginTop:4}}>{s}</div>
              <div style={{fontSize:10.5,color:"#98a2b8",marginTop:2}}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function AnalyticsScene({ tab=0, campaign="2026: Cadbury Silk Hazelnut Sampling" }) {
  const tabs = [["◔","Overview"],["📈","Live analytics"],["📊","Data visualisation"],["⚗","Statistical analysis"]];
  return (
    <div style={{position:"absolute",inset:0,background:"#fff",display:"flex",fontFamily:"'Poppins',Arial,sans-serif"}}>
      <div style={{width:200,background:"linear-gradient(180deg,#0D2A6B,#1A3D8F)",color:"#fff",display:"flex",flexDirection:"column",flexShrink:0}}>
        <div style={{padding:"16px 18px",display:"flex",alignItems:"center"}}><FSLogo h={26} white={true}/></div>
        <div style={{flex:1,overflow:"hidden",paddingTop:6}}>
          {[["🏠","Home"],["📅","Campaigns"],["📄","Planner"],["📋","SKUs"],["❓","Query resolution"],["📦","Inventory"],["₹","Accounts"],["◔","Analytics",true],["☑","Audits"],["📊","Reports"],["👥","Promoters"],["👥","Retailers"],["🎫","My Coupons"]].map(([ic,l,a],i)=>(
            <div key={i} style={{padding:"8px 18px",fontSize:12.5,display:"flex",alignItems:"center",gap:10,
              background:a?"rgba(255,255,255,0.14)":"transparent",
              borderLeft:a?"3px solid #fff":"3px solid transparent",
              opacity:a?1:0.75,fontWeight:a?600:400}}>
              <span style={{fontSize:13,width:16,textAlign:"center"}}>{ic}</span>{l}
            </div>
          ))}
        </div>
        <div style={{padding:"10px 0 14px",borderTop:"1px solid rgba(255,255,255,0.15)"}}>
          {[["👤","Profile"],["🎧","Help"]].map(([ic,l],i)=>(
            <div key={i} style={{padding:"8px 18px",fontSize:12.5,display:"flex",alignItems:"center",gap:10,opacity:0.75}}>
              <span style={{fontSize:13,width:16,textAlign:"center"}}>{ic}</span>{l}
            </div>
          ))}
        </div>
      </div>
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",background:"#fff"}}>
        <div style={{height:52,borderBottom:"1px solid #e8e8e8",display:"flex",alignItems:"center",padding:"0 24px",justifyContent:"space-between",flexShrink:0}}>
          <div style={{fontSize:19,fontWeight:700,color:"#1a1a1a"}}>Campaign Analytics</div>
          <div style={{display:"flex",gap:16,alignItems:"center"}}>
            <div style={{position:"relative",fontSize:17,color:"#8a94a8"}}>🔔<div style={{position:"absolute",top:-6,right:-8,background:"#2D7FD3",color:"#fff",borderRadius:999,fontSize:9,padding:"1px 5px",fontWeight:700}}>13</div></div>
            <div style={{width:28,height:28,borderRadius:999,background:"#d8dee8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"#667"}}>👤</div>
          </div>
        </div>
        <div style={{flex:1,overflow:"auto",padding:"16px 22px",background:"#fbfcfe"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:30,border:"1px solid #d8dee8",borderRadius:6,padding:"9px 14px",fontSize:13,color:"#333",marginBottom:14,background:"#fff",whiteSpace:"nowrap"}}>
            {campaign} <span style={{color:"#98a2b8"}}>∨</span>
          </div>
          <div style={{background:"#fff",border:"1px solid #e4e8f0",borderRadius:10,padding:"0 18px 18px"}}>
            <div style={{borderBottom:"1px solid #eef0f5",marginBottom:12}}>
              <div style={{display:"inline-block",padding:"14px 4px 10px",fontSize:13.5,fontWeight:700,color:"#0D2A6B",borderBottom:"2.5px solid #0D2A6B"}}>FreeStand</div>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexWrap:"wrap",gap:10}}>
              <div style={{display:"flex",gap:4}}>
                {tabs.map(([ic,l],i)=>(
                  <button key={i} style={{display:"flex",alignItems:"center",gap:7,padding:"9px 14px",border:"none",cursor:"default",fontFamily:"inherit",
                    background:"transparent",fontSize:12.5,fontWeight:tab===i?700:500,
                    color:tab===i?"#0D2A6B":"#667",
                    borderBottom:tab===i?"2.5px solid #0D2A6B":"2.5px solid transparent"}}>
                    <span style={{fontSize:13}}>{ic}</span>{l}
                    {i===3&&<span style={{padding:"1px 7px",borderRadius:999,background:"#F3E8FD",border:"1px solid #D8B4FE",fontSize:9,fontWeight:700,color:"#7C3AED"}}>New</span>}
                  </button>
                ))}
              </div>
              <div style={{display:"flex",gap:8}}>
                <div style={{padding:"8px 14px",borderRadius:6,background:"#8A9AB8",color:"#fff",fontSize:12,fontWeight:600}}>Duplicate Orders</div>
                <div style={{padding:"8px 14px",borderRadius:6,border:"1px solid #d8dee8",fontSize:12,color:"#333",display:"flex",alignItems:"center",gap:8}}>📅 All time <span style={{color:"#98a2b8"}}>∨</span></div>
              </div>
            </div>
            {tab===0&&<MFSOverviewTab/>}
            {tab===1&&<MFSLiveTab/>}
            {tab===2&&<MFSDataVizTab/>}
            {tab===3&&<MFSStatsTab/>}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Cover scene — matches the hub demo cover pattern (logo, title, description, steps card) */
function CoverScene({ title, desc, steps, onStart }) {
  return (
    <div style={{position:"absolute",inset:0,background:"#fff",fontFamily:"'Poppins',Arial,sans-serif"}}>
      <img src="mdlz/lite-mdlz-logo.png" alt="Mondelez" style={{position:"absolute",left:52,top:56,height:64,objectFit:"contain"}}/>
      <div style={{position:"absolute",left:52,top:160,width:600,fontSize:64,fontWeight:500,lineHeight:1.08,color:"#111"}}>{title}</div>
      <div style={{position:"absolute",left:52,top:430,width:560,fontSize:17,fontWeight:300,lineHeight:1.6,color:"#333"}}>{desc}</div>
      <div onClick={onStart} style={{position:"absolute",left:52,top:560,width:223,height:56,background:"#4F2170",borderRadius:5,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",gap:10,fontSize:16,fontWeight:600,cursor:"pointer"}}>Get started <span>→</span></div>
      <div style={{position:"absolute",left:52,top:700,fontSize:22,fontWeight:300,color:"#333"}}>Powered by</div>
      <img src="mdlz/lite-fs-logo.png" alt="FreeStand" style={{position:"absolute",left:52,top:738,height:48}}/>
      <div style={{position:"absolute",left:730,top:65,width:492,height:700,borderRadius:10,border:"2px solid #bababa",padding:"36px 36px"}}>
        {steps.map((s,i)=>(
          <React.Fragment key={i}>
            <div style={{display:"flex",gap:16,alignItems:"flex-start",minHeight:99}}>
              <div style={{width:99,height:99,borderRadius:12,border:"2px solid #4F2170",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,flexShrink:0,background:"#fff"}}>{s.icon}</div>
              <div style={{paddingTop:14}}>
                <div style={{fontSize:16,fontWeight:600,color:"#111"}}>{s.t}</div>
                <div style={{fontSize:15,fontWeight:300,color:"#444",marginTop:4,lineHeight:1.4}}>{s.s}</div>
              </div>
            </div>
            {i<steps.length-1&&<div style={{textAlign:"center",fontSize:26,color:"#9aa2b0",margin:"22px 0",paddingLeft:36}}>↓</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* Thank-you scene */
function ThankYouScene({ cards }) {
  const card = {background:"#fff",borderRadius:20,border:"1px solid #E9E2F2",boxShadow:"0 10px 30px rgba(79,33,112,0.08)",overflow:"hidden",display:"flex",flexDirection:"column"};
  const cardHead = (n,t)=>(
    <div style={{display:"flex",alignItems:"center",gap:10,padding:"14px 18px",borderBottom:"1px solid #F0EAF6",flexShrink:0}}>
      <div style={{width:24,height:24,borderRadius:8,background:"#4F2170",color:"#fff",fontSize:11,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}}>{n}</div>
      <div style={{fontSize:12.5,fontWeight:700,color:"#1a1a1a",letterSpacing:0.2}}>{t}</div>
    </div>
  );
  return (
    <div style={{position:"absolute",inset:0,background:"#F3EEF8",padding:"26px 34px",display:"grid",gridTemplateColumns:"300px 300px 1fr",gridTemplateRows:"128px 1fr",gap:18,overflow:"hidden"}}>
      <div style={{...card,gridColumn:"1 / -1",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:"0 34px",background:"linear-gradient(100deg,#2E1145,#4F2170)"}}>
        <div>
          <div style={{fontSize:28,fontWeight:800,color:"#fff",lineHeight:1.2}}>Turning Product Sampling into Customer Loyalty</div>
          <div style={{fontSize:16,fontStyle:"italic",color:"rgba(255,255,255,0.75)",marginTop:6}}>Snacking made right — Lets Sample!</div>
        </div>
        <button onClick={()=>window.dispatchEvent(new KeyboardEvent("keydown",{key:"Home"}))} style={{background:"#E4A400",color:"#2E1145",border:"none",borderRadius:8,padding:"12px 28px",fontSize:14,fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:9,fontFamily:"inherit",flexShrink:0}}>Restart <span>→</span></button>
      </div>
      {cards.map((c,i)=>(
        <div key={i} style={card}>
          {cardHead(String(i+1),c.title)}
          <div style={{flex:1,position:"relative",background:"#F8F5FB"}}>{c.body}</div>
        </div>
      ))}
    </div>
  );
}
function FitPhone({ children }) {
  return (
    <div style={{position:"absolute",left:"50%",top:14,transform:"translateX(-50%)"}}>
      <div style={{position:"relative",width:375*0.62,height:730*0.62}}>
        <div style={{position:"absolute",left:0,top:0,width:375,height:730,transform:"scale(0.62)",transformOrigin:"top left"}}>
          <div style={{position:"absolute",left:-27,top:-43,width:429,height:843}}>
            <WAPhone>{children}</WAPhone>
          </div>
        </div>
      </div>
    </div>
  );
}
function FitProfile({ state, photo }) {
  const ref = React.useRef(null);
  const [s,setS] = React.useState(0.6);
  React.useEffect(()=>{
    const el = ref.current; if(!el) return;
    const fit = ()=>setS(Math.min((el.clientWidth-28)/807,(el.clientHeight-28)/746));
    fit();
    const ro = new ResizeObserver(fit); ro.observe(el);
    return ()=>ro.disconnect();
  },[]);
  return (
    <div ref={ref} style={{position:"absolute",inset:0}}>
      <div style={{position:"absolute",left:"50%",top:14,width:807,height:746,transform:`translateX(-50%) scale(${s})`,transformOrigin:"top center"}}>
        <div style={{position:"absolute",left:-443,top:-43,width:1250,height:790}}>
          <ProfilePanel state={state} persona={MDLZ.persona} photo={photo}/>
        </div>
      </div>
    </div>
  );
}

/* Demo shell — stage nav + hub-embed support */
function DemoShell({ stages, storageKey, CanvasFrame, msgsFor, subtitle }) {
  const {useState,useEffect} = React;
  const [idx,setIdx]=useState(()=>{
    const v=parseInt(localStorage.getItem(storageKey)||"0",10);
    return isNaN(v)?0:Math.min(Math.max(0,v),stages.length-1);
  });
  useEffect(()=>{ localStorage.setItem(storageKey,String(idx)); },[idx]);
  useEffect(()=>{
    function onKey(e){
      if(e.key==="ArrowRight"||e.key===" "){setIdx(i=>Math.min(i+1,stages.length-1));e.preventDefault();}
      else if(e.key==="ArrowLeft"){setIdx(i=>Math.max(i-1,0));e.preventDefault();}
      else if(e.key==="Home") setIdx(0);
      else if(e.key==="End") setIdx(stages.length-1);
    }
    window.addEventListener("keydown",onKey);
    return ()=>window.removeEventListener("keydown",onKey);
  },[stages.length]);
  const stage=stages[idx];
  const lastIdxRef=React.useRef(idx);
  const prevIdx=lastIdxRef.current;
  React.useEffect(()=>{ lastIdxRef.current=idx; },[idx]);
  const prevStage=stages[prevIdx];
  const cur=msgsFor(stage);
  let prevCount=cur.length;
  if(prevIdx!==idx&&prevStage){
    const prev=msgsFor(prevStage);
    let shared=0;
    while(shared<cur.length&&shared<prev.length&&JSON.stringify(cur[shared])===JSON.stringify(prev[shared])) shared++;
    prevCount=prevIdx<idx?shared:cur.length;
  }
  const goNext=()=>setIdx(i=>Math.min(i+1,stages.length-1));
  const EMB = window.self!==window.top;
  const frame = <CanvasFrame stage={stage} prevCount={prevCount} onStart={goNext}/>;
  if(EMB) return (
    <div style={{width:"100vw",height:"100vh",overflow:"hidden",background:"#fff"}}>
      <div style={{position:"relative",width:1280,height:890,background:"#fff",overflow:"hidden",color:"#1a1a1a"}} data-screen-label={stage.label}>{frame}</div>
    </div>
  );
  return (
    <div style={{minHeight:"100vh",background:"#2b2b2b",padding:"28px 28px 100px",fontFamily:"'Poppins',Arial,sans-serif",color:"#f5f5f5"}}>
      <div style={{maxWidth:1336,margin:"0 auto",display:"flex",flexDirection:"column",gap:18}}>
        <div>
          <div style={{fontSize:10,letterSpacing:2,opacity:0.5,textTransform:"uppercase"}}>{subtitle}</div>
          <div style={{display:"flex",alignItems:"center",gap:14,marginTop:6}}>
            <MdlzLogo size={40}/>
            <div style={{fontSize:28,fontWeight:300,letterSpacing:4}}>MONDELEZ <span style={{opacity:0.4,letterSpacing:2}}>— INDIA</span></div>
          </div>
        </div>
        <div style={{position:"relative",width:1280,height:890,background:"#fff",borderRadius:8,boxShadow:"0 30px 80px rgba(0,0,0,0.5)",overflow:"hidden",margin:"0 auto",color:"#1a1a1a"}} data-screen-label={stage.label}>{frame}</div>
        <div style={{maxWidth:1280,margin:"0 auto",width:"100%"}}>
          <div style={{display:"grid",gridTemplateColumns:`repeat(${stages.length},1fr)`,gap:3}}>
            {stages.map((s,i)=>(
              <button key={i} onClick={()=>setIdx(i)} title={s.label} style={{height:30,border:"none",borderRadius:3,background:i===idx?"#E4A400":i<idx?"rgba(255,255,255,0.38)":"rgba(255,255,255,0.1)",color:"#fff",fontSize:9,fontWeight:600,cursor:"pointer",transition:"all 0.2s",padding:0,fontFamily:"inherit"}}>{String(i+1).padStart(2,"0")}</button>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"space-between",gap:12,marginTop:8,alignItems:"center"}}>
            <button onClick={()=>setIdx(i=>Math.max(0,i-1))} disabled={idx===0} style={mdlzNavBtn(idx===0)}>← Previous</button>
            <div style={{fontSize:10,opacity:0.45,fontFamily:"monospace"}}>← → keys · Home / End to jump</div>
            <button onClick={()=>setIdx(i=>Math.min(stages.length-1,i+1))} disabled={idx===stages.length-1} style={mdlzNavBtn(idx===stages.length-1)}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
function mdlzNavBtn(disabled){
  return {background:disabled?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.14)",color:disabled?"rgba(255,255,255,0.3)":"#fff",border:"1px solid rgba(255,255,255,0.18)",padding:"7px 16px",borderRadius:6,fontSize:11,fontWeight:500,cursor:disabled?"not-allowed":"pointer",fontFamily:"inherit"};
}
Object.assign(window,{AnalyticsScene,CoverScene,ThankYouScene,FitPhone,FitProfile,DemoShell,MFSPie,MFSPieCard});
