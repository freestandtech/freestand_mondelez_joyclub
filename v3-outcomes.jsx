/* Outcomes — infrastructure story + 12-month growth + business case */
function MZ3Infra(){
  const camps = ["Silk V-Day","Oreo Holi UGC","5Star IPL","Rakhi hampers","Diwali Celebrations","Sampling drives"];
  return (
    <div style={{background:"#fff",border:"1px solid #e8e8f0",borderRadius:16,padding:"16px 20px",display:"flex",gap:20,alignItems:"center"}}>
      <div style={{width:250,flex:"none"}}>
        <MZ3Kicker color={CAD_PURPLE}>We are infrastructure</MZ3Kicker>
        <div style={{fontSize:15,fontWeight:800,lineHeight:1.4,marginTop:4}}>Your successful campaigns all come to one place.</div>
        <div style={{fontSize:11.5,color:"#777",lineHeight:1.55,marginTop:5}}>Campaigns end. The pipes stay. Every activation — any brand, any agency — lands in the same unified customer layer.</div>
      </div>
      <div style={{flex:1,minWidth:0,display:"flex",alignItems:"center",gap:14}}>
        <div style={{display:"flex",flexDirection:"column",gap:6,flex:"none"}}>
          {camps.map((c,i)=>(
            <div key={c} style={{background:"#F7F5FB",border:"1px solid #ece7f6",borderRadius:8,padding:"5px 12px",fontSize:10.5,fontWeight:800,color:"#555",animation:`fadeInUp .35s ${i*0.08}s both`}}>{c}</div>
          ))}
        </div>
        <svg width="70" height="180" style={{flex:"none"}} viewBox="0 0 70 180">
          {[16,46,76,106,136,166].map((y,i)=><path key={i} d={`M0,${y} C 40,${y} 30,90 66,90`} fill="none" stroke={CAD_GOLD} strokeWidth="1.8" strokeDasharray="5 5" style={{animation:"dashMove 1.4s linear infinite"}}></path>)}
          <path d="M66,90 l-9,-4 M66,90 l-9,4" stroke={CAD_GOLD} strokeWidth="2" fill="none"></path>
        </svg>
        <div style={{flex:"none",width:190,background:`linear-gradient(150deg,${CAD_PURPLE},${CAD_PURPLE_DK})`,borderRadius:14,padding:"14px 16px",color:"#fff",textAlign:"center",boxShadow:"0 12px 28px rgba(42,20,88,0.3)"}}>
          <FSMark h={15} boxed/>
          <div style={{fontSize:13,fontWeight:800,marginTop:8}}>One customer layer</div>
          {["Centralise","Enrich","Analyse"].map((t,i)=>(
            <div key={t} style={{background:"rgba(255,255,255,0.1)",borderRadius:7,padding:"4px 0",fontSize:10.5,fontWeight:800,marginTop:5,color:CAD_GOLD,animation:`fadeInUp .35s ${0.3+i*0.12}s both`}}>✦ {t}</div>
          ))}
        </div>
        <svg width="46" height="150" style={{flex:"none"}} viewBox="0 0 46 150">
          {[20,58,96,134].map((y,i)=><path key={i} d={`M0,75 C 26,75 16,${y} 42,${y}`} fill="none" stroke={CAD_PURPLE} strokeWidth="1.8" strokeDasharray="5 5" style={{animation:"dashMove 1.4s linear infinite"}}></path>)}
        </svg>
        <div style={{display:"flex",flexDirection:"column",gap:6,flex:1,minWidth:0}}>
          {[["👥","Unified 1PD profiles","one record per human, deduped"],["🧩","Cohorts refreshed daily","pushed to CRM & ad platforms"],["📊","Live analytics","2-way & 3-way statistical cuts"],["♻️","Retargeting & lookalikes","audiences that compound"]].map(([e,t,s],i)=>(
            <div key={t} style={{display:"flex",gap:9,alignItems:"center",background:"#FBFAFD",border:"1px solid #ece7f6",borderRadius:9,padding:"6px 11px",animation:`fadeInUp .35s ${0.5+i*0.1}s both`}}>
              <span style={{fontSize:14}}>{e}</span>
              <span style={{minWidth:0}}><span style={{display:"block",fontSize:11,fontWeight:800,color:"#333"}}>{t}</span><span style={{display:"block",fontSize:9,color:"#999"}}>{s}</span></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function MZ3Outcomes(){
  const M = ["J","F","M","A","M","J","J","A","S","O","N","D"];
  return (
    <div style={{display:"flex",flexDirection:"column",gap:13,height:"100%"}}>
      <div style={{display:"flex",alignItems:"flex-end"}}>
        <div>
          <MZ3Kicker color={CAD_PURPLE}>The compounding effect</MZ3Kicker>
          <div style={{fontSize:21,fontWeight:800,marginTop:2}}>Centralise · Enrich · Analyse — what 12 always-on months build</div>
        </div>
        <div style={{marginLeft:"auto",fontSize:11,color:"#999"}}>Illustrative projections · benchmarked on FreeStand FMCG programs</div>
      </div>
      <MZ3Infra/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14}}>
        {[
          { t:"WhatsApp engagement", v:"2.4M opted-in", s:"58% open · 31% reply rate", pts:[8,14,20,26,38,47,55,66,84,118,132,144], c:"#0a7c5c" },
          { t:"Instagram following + DM bot", v:"+86K followers", s:"214K quiz completions via DM", pts:[4,7,12,16,21,26,38,47,55,68,79,88], c:"#c13584" },
          { t:"Website + Joy Club portal", v:"3.1× sessions", s:"driven by QR, shop, rewards & recap pages", pts:[10,12,15,18,22,27,31,38,47,62,71,78], c:CAD_PURPLE },
        ].map((g,i)=>(
          <div key={i} style={{background:"#fff",border:"1px solid #e8e8f0",borderRadius:14,padding:"12px 16px",animation:`fadeInUp .4s ${i*0.12}s both`}}>
            <div style={{fontSize:12.5,fontWeight:800}}>{g.t}</div>
            <div style={{fontSize:18,fontWeight:800,color:g.c,margin:"2px 0 0"}}>{g.v}</div>
            <div style={{fontSize:10.5,color:"#888",marginBottom:4}}>{g.s}</div>
            <MZ3Area pts={g.pts} w={330} h={92} color={g.c} labels={M}/>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1.35fr 1fr",gap:14,flex:1,minHeight:0}}>
        <div style={{background:`linear-gradient(140deg,${CAD_PURPLE},${CAD_PURPLE_DK})`,borderRadius:16,padding:"16px 22px",color:"#fff",display:"flex",flexDirection:"column",gap:10}}>
          <MZ3Kicker>The business case</MZ3Kicker>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14,flex:1}}>
            {[["Customer delight","+18 NPS","measured post-engagement, quarterly"],["First-party data","2.4M profiles","92% profile completeness by Dec"],["Revenue influence","+6–9% uplift","matched-cohort sales lift, festive-led"]].map(([t,v,s],i)=>(
              <div key={i} style={{background:"rgba(255,255,255,0.08)",borderRadius:12,padding:"12px 15px",animation:`fadeInUp .4s ${0.2+i*0.12}s both`}}>
                <div style={{fontSize:10.5,letterSpacing:1.2,opacity:0.75,fontWeight:800,textTransform:"uppercase"}}>{t}</div>
                <div style={{fontSize:22,fontWeight:800,color:CAD_GOLD,margin:"4px 0 3px"}}>{v}</div>
                <div style={{fontSize:10.5,opacity:0.75,lineHeight:1.45}}>{s}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:14,borderTop:"1px solid rgba(255,255,255,0.15)",paddingTop:10}}>
            <span style={{fontSize:10.5,letterSpacing:1.4,opacity:0.7,fontWeight:800}}>PROVEN ACROSS</span>
            <span style={{fontSize:12,fontWeight:700,opacity:0.9}}>Pampers · L'Oréal · Tide · Mars · Royal Canin · ITC Aashirvaad</span>
            <span style={{marginLeft:"auto"}}><FSMark h={16} boxed/></span>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          <MZ3Panel title="Profile completeness compounds" style={{flex:1,justifyContent:"center"}}>
            {[["Day 1 · first claim","6 attributes",22],["Month 3 · enriched + engaged","19 attributes",52],["Month 12 · always-on year","40+ attributes",92]].map(([k,v,p],i)=>(
              <div key={i} style={{animation:`fadeInUp .35s ${i*0.15}s both`}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:11.5,marginBottom:3}}><span style={{color:"#666"}}>{k}</span><b style={{color:CAD_PURPLE}}>{v}</b></div>
                <div style={{height:7,background:"#efeff5",borderRadius:999}}><div style={{width:`${p}%`,height:"100%",background:`linear-gradient(90deg,${CAD_PURPLE},${CAD_GOLD})`,borderRadius:999}}></div></div>
              </div>
            ))}
          </MZ3Panel>
          <div style={{background:"#FDF3DC",borderRadius:12,padding:"10px 14px",fontSize:11.5,color:"#6a4a00",lineHeight:1.5}}><b>Next step:</b> Mondelēz shares CRM schemas & cohort definitions → FreeStand returns the full attribute map, feasibility and pricing.</div>
        </div>
      </div>
    </div>
  );
}
function MZ3CoverGlass({ children, style }){
  return <div style={{background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.18)",borderRadius:14,padding:"13px 16px",...style}}>{children}</div>;
}
function MZ3CoverLink(){
  return <svg width="20" height="26" viewBox="0 0 20 26" style={{display:"block",margin:"0 auto"}}><path d="M10 0v20" stroke="#E8A417" strokeWidth="2" strokeDasharray="4 4" style={{animation:"dashMove 1.2s linear infinite"}}></path><path d="M10 25l-5-6h10z" fill="#E8A417"></path></svg>;
}
function MZ3CoverInfra(){
  return (
    <div style={{width:530,flex:"none",animation:"fadeInUp .6s .3s both"}}>
      <div style={{fontSize:11,letterSpacing:2.6,color:"rgba(255,255,255,0.6)",fontWeight:800,marginBottom:12,textAlign:"center"}}>WE ARE INFRASTRUCTURE — NOT A CAMPAIGN</div>
      <MZ3CoverGlass style={{padding:"16px 20px"}}>
        <div style={{fontSize:10.5,letterSpacing:1.8,color:CAD_GOLD,fontWeight:800,marginBottom:11}}>YOUR SUCCESSFUL CAMPAIGNS · EVERY BRAND, EVERY AGENCY</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          {["Silk V-Day","Holi UGC","IPL spins","Rakhi hampers","Diwali gifting","Sampling drives"].map((d,i)=>(
            <div key={d} style={{flex:"1 1 30%",background:"rgba(255,255,255,0.09)",border:"1px solid rgba(255,255,255,0.14)",borderRadius:10,padding:"9px 0",textAlign:"center",fontSize:11.5,fontWeight:800,animation:`fadeInUp .4s ${0.4+i*0.07}s both`,whiteSpace:"nowrap"}}>{d}</div>
          ))}
        </div>
      </MZ3CoverGlass>
      <div style={{textAlign:"center",margin:"2px 0"}}><MZ3CoverLink/><div style={{fontSize:10,fontWeight:800,letterSpacing:1.4,color:CAD_GOLD,marginTop:-2}}>ALL COME TO ONE PLACE</div></div>
      <MZ3CoverGlass style={{border:`1.5px solid rgba(232,164,23,0.6)`,background:"rgba(232,164,23,0.09)",padding:"16px 20px",boxShadow:"0 14px 40px rgba(0,0,0,0.25)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <FSMark h={19} boxed/>
          <span style={{fontSize:16,fontWeight:800}}>One customer layer</span>
          <span style={{marginLeft:"auto",fontSize:10.5,color:"rgba(255,255,255,0.65)",fontWeight:700}}>unification · user data</span>
        </div>
        <div style={{display:"flex",gap:9,marginTop:12}}>
          {[["Centralising","every claim, scan & chat in one record"],["Enriching","geo, affluence & behaviour layered on"],["Analytics","live cohorts, cuts & lookalikes"]].map(([t,s],i)=>(
            <div key={t} style={{flex:1,background:"rgba(255,255,255,0.1)",borderRadius:10,padding:"10px 12px",animation:`fadeInUp .4s ${0.6+i*0.1}s both`}}>
              <div style={{fontSize:12.5,fontWeight:800,color:CAD_GOLD}}>✦ {t}</div>
              <div style={{fontSize:9.5,color:"rgba(255,255,255,0.65)",marginTop:4,lineHeight:1.45}}>{s}</div>
            </div>
          ))}
        </div>
      </MZ3CoverGlass>
      <div style={{textAlign:"center",margin:"2px 0"}}><MZ3CoverLink/></div>
      <MZ3CoverGlass style={{padding:"14px 20px"}}>
        <div style={{display:"flex",alignItems:"center",gap:14}}>
          <div style={{fontSize:13.5,fontWeight:800,whiteSpace:"nowrap"}}>Unified user data</div>
          <div style={{fontSize:10.5,color:"rgba(255,255,255,0.65)",lineHeight:1.5}}>One 1PD profile per human — powering Joy Club loyalty, Mondelēz CRM, daily cohorts and retargeting.</div>
        </div>
      </MZ3CoverGlass>
    </div>
  );
}
function MZ3Cover3({ onStart }){
  return (
    <div style={{position:"absolute",inset:0,background:`radial-gradient(1100px 600px at 75% -10%, #5E3D96 0%, ${CAD_PURPLE} 42%, ${CAD_PURPLE_DK} 100%)`,color:"#fff",display:"flex",flexDirection:"column",padding:"44px 60px"}}>
      <div style={{display:"flex",alignItems:"center",gap:14}}>
        <MdlzMark size={16} light/><span style={{opacity:0.5}}>×</span><FSMark h={22} boxed/>
        <span style={{marginLeft:"auto",fontSize:11,letterSpacing:2,opacity:0.65,fontWeight:700}}>PROPOSAL DEMO · SEP 2026</span>
      </div>
      <div style={{margin:"auto 0",display:"flex",alignItems:"center",gap:56}}>
        <div style={{flex:1,minWidth:0,maxWidth:600}}>
          <div style={{fontSize:12,letterSpacing:3,color:CAD_GOLD,fontWeight:800,marginBottom:14,animation:"fadeInUp .5s both"}}>ALWAYS-ON CUSTOMER DATA & LOYALTY ECOSYSTEM</div>
          <div style={{fontFamily:"'Lobster Two',cursive",fontSize:58,lineHeight:1.18,animation:"fadeInUp .5s .1s both"}}>A year of joy,<br/>a decade of data.</div>
          <div style={{fontSize:15.5,opacity:0.85,marginTop:16,maxWidth:560,lineHeight:1.6,animation:"fadeInUp .5s .2s both"}}>How Mondelēz India acquires customers through five always-open doors, enriches every record into CRM-ready intelligence, engages them 365 days a year — and lands them all in one loyalty home.</div>
          <button onClick={onStart} style={{marginTop:26,cursor:"pointer",fontFamily:"inherit",background:CAD_GOLD,color:"#3a2600",border:"none",borderRadius:999,padding:"13px 30px",fontSize:14.5,fontWeight:800,animation:"fadeInUp .5s .3s both"}}>Start the tour →</button>
        </div>
        <MZ3CoverInfra/>
      </div>
      <div style={{display:"flex",gap:56,borderTop:"1px solid rgba(255,255,255,0.16)",paddingTop:22}}>
        <MZ3Stat light v="5" l="acquisition entry points" i={0}/>
        <MZ3Stat light v="19K" l="pincodes of local intelligence" i={1}/>
        <MZ3Stat light v="12" l="months of always-on mechanics" i={2}/>
        <MZ3Stat light v="1" l="loyalty portal · Joy Club" i={3}/>
        <MZ3Stat light v="40+" l="attributes per profile by month 12" i={4}/>
      </div>
    </div>
  );
}
Object.assign(window, { MZ3Outcomes, MZ3Cover3 });
