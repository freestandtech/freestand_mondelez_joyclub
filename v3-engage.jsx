/* ACT 3 — Engage: 12-month multi-brand calendar → loyalty, live growing profile + year-end record */
const MZ3R = window.__resources||{};
const MZ3_MEENA = MZ3R["meena"]||"mdlz/meena.png";
const MZ3_SRK = MZ3R["srkAd"]||"mdlz/srk-ad.png";
const MZ3_UGC1 = MZ3R["ugc1"]||"mdlz/ugc-1.png";
const MZ3_UGC2 = MZ3R["ugc2"]||"mdlz/ugc-2.png";
const MZ3_YEAR = [
  { m:"Jan", brand:"Dairy Milk", t:"New Year re-engage + referral kickoff", mech:"Personalised \"year of joy ahead\" message · refer 3 friends → 200 pts", pts:200, sig:"Referral graph — who brings whom", phone:"wa",
    wa:[["b","Happy New Year, Meena! 🎉 Your 2026 Joy pass is live. Gift a friend a free Dairy Milk — you both earn 200 points."],["q",["Refer a friend","See my rewards"]],["u","Refer a friend"],["b","Share this link 👉 joy.cadbury.in/m3x8 — 2 of 3 friends joined already!"]] },
  { m:"Feb", brand:"Silk", t:"Valentine's — Silk activation", mech:"\"How far will you go for love?\" — personalised Silk message + IG story filter", pts:150, sig:"Relationship status · gifting-for-partner flag", phone:"wa",
    wa:[["b","V-Day alert 💜 Someone in 482002 deserves a Silk. Send them a secret message — we'll deliver it on a pack."],["q",["Write my message","Order Silk hamper"]],["u","Write my message"],["b","Aww! 💌 \"For the one who makes Mondays sweet…\" — printed & on its way. +150 points!"]] },
  { m:"Mar", brand:"Oreo", t:"Holi UGC contest — #PlayWithColours", mech:"Post your Holi + Oreo moment; best entries reposted by the brand", pts:250, sig:"UGC creators · social handles linked", phone:"ig", ugc:1,
    ig:{ cap:"@meena.jbp's entry — reposted by @oreo.india", likes:"12.4K likes · #PlayWithColours" } },
  { m:"Apr", brand:"5Star", t:"IPL spin-the-wheel", mech:"Match-night spins on WhatsApp — every boundary unlocks a spin", pts:100, sig:"Match-time engagement windows", phone:"wa",
    wa:[["b","SIX! 🏏 That boundary just unlocked a spin, Meena."],["q",["🎡 SPIN NOW"]],["u","🎡 SPIN NOW"],["b","🎉 You won a Perk 4-pack! Collect at any partner store or add to your next delivery. +100 pts"]] },
  { m:"May", brand:"Dairy Milk", t:"Summer mystery drops", mech:"Heat-triggered offers — cold-chocolate recipes + surprise coupons in heatwave pincodes", pts:75, sig:"Offer sensitivity · price-band response", phone:"wa",
    wa:[["b","42° in Jabalpur today 🥵 Beat it with a Cold Coffee Dairy Milk Shake — recipe + ₹30 off your next pack inside."],["q",["Get recipe + coupon"]],["u","Get recipe + coupon"],["b","Sent! Coupon JOY30 is live for 48 hrs ⏳"]] },
  { m:"Jun", brand:"Joy Club", t:"Joy Club tier upgrade month", mech:"Points bonanza — double points, tier upgrades unlocked in the portal", pts:300, sig:"Redemption preferences · reward elasticity", phone:"club" },
  { m:"Jul", brand:"Perk", t:"Instagram chatbot push", mech:"IG DM bot: chocolate personality quiz → follow + auto-DM offers", pts:120, sig:"IG handle linked · content affinity", phone:"ig", ugc:2,
    ig:{ cap:"DM \"JOY\" to @cadburyperk — the bot finds your chocolate personality", likes:"Quiz taken 214K times · +86K new followers" } },
  { m:"Aug", brand:"Celebrations", t:"Rakhi gifting activation", mech:"Send a Rakhi hamper with a recorded sibling message on-pack QR", pts:180, sig:"Sibling graph · gifting addresses", phone:"wa",
    wa:[["b","Rakhi's coming 🪢 Record a 20-sec message for your brother — it plays when he scans his hamper."],["u","🎤 voice note (0:18)"],["b","Perfect! Hamper + your message ships to Indore. He'll scan, smile, and you get +180 pts 😄"]] },
  { m:"Sep", brand:"Bournvita", t:"Back-to-school quiz + festive pre-book", mech:"Bournvita brain-quiz for kids · Celebrations early-bird gifting slots open", pts:150, sig:"Festive intent · kids' age band confirmed", phone:"wa",
    wa:[["b","Quiz time! 🧠 Can your champ beat the Bournvita Brain Round? 5 questions, 50 pts each."],["q",["Start quiz","Pre-book Diwali hampers"]],["u","Start quiz"],["b","Round done — 4/5! 🏅 +150 pts. Diwali pre-book is open for Joy Club Gold ✨"]] },
  { m:"Oct", brand:"Celebrations", t:"Diwali — Celebrations at scale", mech:"Gifting concierge + receipt upload → points on every box", pts:400, sig:"Basket size · gifting network addresses", phone:"wa",
    wa:[["b","Happy Diwali, Meena! 🪔 Upload your Celebrations bill — every box earns 80 pts."],["u","📄 receipt_bigbazaar.jpg"],["b","5 boxes read via OCR ✓ +400 points! You're 250 pts from Bliss tier."]] },
  { m:"Nov", brand:"Celebrations", t:"Shaadi season — AI wish generator", mech:"AI-generated wedding wish in Shah Rukh Khan's iconic style, personalised per couple — riding the SRK Celebrations campaign", pts:200, sig:"Wedding-in-family flag · occasion dates", phone:"srk" },
  { m:"Dec", brand:"Joy Club", t:"Your Year of Joy — wrap + redeem", mech:"Personal recap film + reward redemption festival", pts:0, sig:"Full-year profile: 40+ attributes rich", phone:"wa",
    wa:[["b","Your 2026 Year of Joy 🎬 12 moments, 2,925 points, 9 friends referred. Watch your recap →"],["q",["▶ Play my recap","Redeem points"]],["u","Redeem points"],["b","Redeemed: Celebrations hamper + movie vouchers 🎟 See you in January — the joy never stops."]] },
];
function MZ3SrkCard(){
  return (
    <div style={{flex:1,minHeight:0,background:"#1a0f2e",display:"flex",flexDirection:"column"}}>
      <div style={{flex:1,minHeight:0,overflow:"hidden",position:"relative"}}>
        <img src={MZ3_SRK} alt="Cadbury Celebrations — SRK campaign" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block"}}/>
        <div style={{position:"absolute",left:0,right:0,bottom:0,height:90,background:"linear-gradient(transparent,#1a0f2e)"}}></div>
      </div>
      <div style={{flex:"none",padding:"0 16px 14px",textAlign:"center",color:"#fff",marginTop:-34,position:"relative"}}>
        <div style={{fontFamily:"'Lobster Two',cursive",fontSize:15.5,lineHeight:1.35}}>"Riya &amp; Arjun… kuch kuch hota hai,<br/>aur aaj sab kuch ho gaya."</div>
        <div style={{fontSize:9.5,opacity:0.75,marginTop:4}}>your wedding wish, in SRK's own style — generated in 20 seconds</div>
        <div style={{display:"inline-block",background:CAD_GOLD,color:"#3a2600",borderRadius:999,padding:"6px 16px",fontSize:11,fontWeight:800,marginTop:8}}>▶ Play video wish</div>
      </div>
    </div>
  );
}
function MZ3ClubPhoneMini(){
  return (
    <div style={{flex:1,background:"#F7F5FB",display:"flex",flexDirection:"column",padding:"26px 12px 12px",gap:9,overflow:"hidden"}}>
      <div style={{fontFamily:"'Lobster Two',cursive",fontSize:20,color:CAD_PURPLE,textAlign:"center"}}>Joy Club</div>
      <div style={{background:`linear-gradient(140deg,${CAD_PURPLE},#5E3D96)`,borderRadius:14,padding:"13px 15px",color:"#fff"}}>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:10.5,opacity:0.85}}><span>MEENA SHARMA</span><span>GOLD → BLISS</span></div>
        <div style={{fontSize:26,fontWeight:800,marginTop:5}}>1,625 pts</div>
        <div style={{height:6,background:"rgba(255,255,255,0.25)",borderRadius:999,marginTop:8}}><div style={{width:"72%",height:"100%",background:CAD_GOLD,borderRadius:999}}></div></div>
        <div style={{fontSize:9.5,opacity:0.8,marginTop:4}}>625 pts to Bliss tier — free festive hamper</div>
      </div>
      {[["Perk 4-pack","300 pts"],["Movie voucher ×2","800 pts"],["Celebrations hamper","1,500 pts"]].map(([t,p],i)=>(
        <div key={i} style={{background:"#fff",borderRadius:10,padding:"9px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:11.5,border:"1px solid #eee",animation:`fadeInUp .3s ${i*0.12}s both`}}>
          <span style={{fontWeight:700}}>{t}</span><span style={{color:CAD_PURPLE,fontWeight:800}}>{p}</span>
        </div>
      ))}
      <div style={{fontSize:10,color:"#999",textAlign:"center"}}>Earn: scans · quizzes · UGC · referrals · receipts</div>
    </div>
  );
}
function MZ3MonthPhone({ mo }){
  if (mo.phone==="srk") return <MZ3Phone h={470}><MZ3SrkCard/></MZ3Phone>;
  if (mo.phone==="club") return <MZ3Phone h={470}><MZ3ClubPhoneMini/></MZ3Phone>;
  if (mo.phone==="ig") return (
    <MZ3Phone h={470}>
      <MZ3IGHead user={mo.m==="Mar"?"oreo.india":"cadburyperk"}/>
      <div style={{flex:1,minHeight:0,overflow:"hidden",background:"#0e0618"}}>
        <img src={mo.ugc===1?MZ3_UGC1:MZ3_UGC2} alt="UGC entry" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
      </div>
      <div style={{flex:"none",padding:"8px 12px",borderTop:"1px solid #efefef"}}>
        <div style={{fontSize:11,fontWeight:700}}>{mo.ig.cap}</div>
        <div style={{fontSize:10,color:"#888",marginTop:2}}>♥ {mo.ig.likes}</div>
      </div>
    </MZ3Phone>
  );
  return (
    <MZ3Phone h={470}>
      <MZ3WAHead title="Cadbury Joy Bot"/>
      <MZ3WABody>
        {mo.wa.map((r,i)=> r[0]==="q" ? <MZ3QuickBtns key={i} opts={r[1]} delay={i*0.15}/> : <MZ3Bub key={i} me={r[0]==="u"} delay={i*0.15}>{r[1]}</MZ3Bub>)}
      </MZ3WABody>
    </MZ3Phone>
  );
}
function MZ3ProfileLive({ mi, total }){
  const attrs = Math.min(6 + (mi+1)*3, 42);
  const recent = MZ3_YEAR.slice(Math.max(0,mi-2), mi+1).reverse();
  const brands = [...new Set(MZ3_YEAR.slice(0,mi+1).map(y=>y.brand))];
  return (
    <div style={{flex:"none",background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 14px 34px rgba(42,20,88,0.13)",border:"1px solid #eceaf3"}}>
      <div style={{height:4,background:`linear-gradient(90deg,${CAD_PURPLE},${CAD_GOLD})`}}></div>
      <div style={{display:"flex",gap:22,alignItems:"center",padding:"13px 20px"}}>
        <div style={{display:"flex",gap:13,alignItems:"center",flex:"none",width:270}}>
          <img src={MZ3_MEENA} alt="Meena Sharma" style={{width:54,height:54,borderRadius:"50%",objectFit:"cover",border:`2.5px solid ${CAD_GOLD}`,flex:"none"}}/>
          <div style={{minWidth:0}}>
            <div style={{display:"flex",alignItems:"center",gap:7}}>
              <span style={{fontSize:15,fontWeight:800}}>Meena Sharma</span>
              <span style={{width:6,height:6,borderRadius:"50%",background:"#3bbf6e",animation:"blink 1.4s infinite"}}></span>
            </div>
            <div style={{fontSize:10,color:"#999",marginTop:1}}>1PD PROFILE · MDLZ-88412 · 482002</div>
            <div style={{display:"flex",gap:4,marginTop:5,flexWrap:"wrap"}}>
              {brands.map(b=><span key={b} style={{background:"#F3EFFB",color:CAD_PURPLE,fontSize:8.5,fontWeight:800,borderRadius:5,padding:"1px 7px"}}>{b}</span>)}
            </div>
          </div>
        </div>
        <div style={{flex:1,minWidth:0,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14,borderLeft:"1px solid #f0eef6",paddingLeft:22}}>
          {recent.map((r,i)=>(
            <div key={r.m} style={{animation:`fadeInUp .3s ${i*0.1}s both`,minWidth:0}}>
              <div style={{fontSize:9,fontWeight:800,letterSpacing:1,color:"#b8b3c6",textTransform:"uppercase"}}>{r.m} · {r.brand}</div>
              <div style={{fontSize:11,fontWeight:700,color:"#3a3a44",marginTop:2,lineHeight:1.4}}>{r.sig}</div>
            </div>
          ))}
        </div>
        <div style={{flex:"none",textAlign:"right",borderLeft:"1px solid #f0eef6",paddingLeft:22,width:170}}>
          <div style={{fontSize:23,fontWeight:800,color:CAD_PURPLE,lineHeight:1}}>{attrs}<span style={{fontSize:10,color:"#b8b3c6",fontWeight:800}}> / 42 ATTRS</span></div>
          <div style={{height:6,background:"#efeff5",borderRadius:999,margin:"7px 0 6px"}}><div style={{width:`${(attrs/42)*100}%`,height:"100%",background:`linear-gradient(90deg,${CAD_PURPLE},${CAD_GOLD})`,borderRadius:999,transition:"width .5s"}}></div></div>
          <div style={{fontSize:12,fontWeight:800,color:"#3a3a44"}}>{total.toLocaleString("en-IN")} pts <span style={{fontSize:9.5,color:"#999",fontWeight:700}}>· {total>=2250?"Bliss":"Gold"} tier</span></div>
        </div>
      </div>
    </div>
  );
}
const MZ3_FINAL = [
  { c:"Identity", a:["Verified phone","Email","Age band 28–35","Hindi-first","IG @meena.jbp"] },
  { c:"Household", a:["Family of 4","Kids 6–12","Sibling in Indore","Wedding in family"] },
  { c:"Geo & affluence", a:["482002 · Jabalpur","Tier-2 urban core","Affluence B+","Store: MT-114"] },
  { c:"Behaviour", a:["Weekly chocolate","Weekend redeemer","Evening windows","4 pack scans / 60d"] },
  { c:"Occasions", a:["Festive-led gifting","Diwali basket ×5","Rakhi sender","V-Day Silk buyer"] },
  { c:"Value", a:["CLTV ₹4.8–7.2K/yr","2,925 pts · Bliss","9 referrals","UGC creator"] },
];
function MZ3YearEnd(){
  const cohorts = ["Heavy chocolate households","Parents · kids 6–12","Gifting-first buyers","Tier-2 vernacular-first","UGC creators","IPL night engagers","Festive big-basket"];
  return (
    <div style={{flex:1,minHeight:0,display:"flex",gap:22,animation:"stageIn .4s both"}}>
      <div style={{width:330,flex:"none",background:"#fff",borderRadius:18,overflow:"hidden",border:"1px solid #eceaf3",boxShadow:"0 16px 40px rgba(42,20,88,0.15)",display:"flex",flexDirection:"column"}}>
        <div style={{position:"relative",height:250,flex:"none",overflow:"hidden"}}>
          <img src={MZ3_MEENA} alt="Meena Sharma" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
          <div style={{position:"absolute",left:0,right:0,bottom:0,height:100,background:"linear-gradient(transparent,rgba(20,8,44,0.85))"}}></div>
          <div style={{position:"absolute",left:16,bottom:12,color:"#fff"}}>
            <div style={{fontSize:19,fontWeight:800}}>Meena Sharma</div>
            <div style={{fontSize:10.5,opacity:0.85}}>MDLZ-1PD-88412 · Jabalpur 482002</div>
          </div>
          <div style={{position:"absolute",right:12,top:12,background:CAD_GOLD,color:"#3a2600",fontSize:10,fontWeight:800,borderRadius:999,padding:"4px 12px"}}>BLISS TIER</div>
        </div>
        <div style={{flex:1,padding:"14px 18px",display:"flex",flexDirection:"column",gap:10}}>
          <div style={{display:"flex",gap:24}}>
            <MZ3Stat v="42" l="attributes" i={0}/><MZ3Stat v="2,925" l="points earned" i={1}/><MZ3Stat v="12/12" l="months engaged" i={2}/>
          </div>
          <div style={{height:7,background:"#efeff5",borderRadius:999}}><div style={{width:"100%",height:"100%",background:`linear-gradient(90deg,${CAD_PURPLE},${CAD_GOLD})`,borderRadius:999}}></div></div>
          <div style={{fontSize:11.5,color:"#777",lineHeight:1.6}}>Anonymous scan in January → the <b>richest record in the CRM</b> by December. Refreshed daily, pushed to Mondelēz systems, activation-ready.</div>
        </div>
      </div>
      <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:12}}>
        <div>
          <MZ3Kicker color={CAD_PURPLE}>Dec 31 · The year-end record</MZ3Kicker>
          <div style={{fontSize:19,fontWeight:800,marginTop:2}}>One person, 42 living attributes, 7 activation cohorts</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          {MZ3_FINAL.map((g,i)=>(
            <div key={g.c} style={{background:"#fff",border:"1px solid #eceaf3",borderRadius:13,padding:"11px 14px",animation:`fadeInUp .35s ${i*0.08}s both`}}>
              <div style={{fontSize:9.5,fontWeight:800,letterSpacing:1.2,textTransform:"uppercase",color:CAD_PURPLE,marginBottom:6}}>{g.c}</div>
              {g.a.map(a=><div key={a} style={{fontSize:11,color:"#444",fontWeight:600,padding:"2.5px 0",borderBottom:"1px solid #f6f5fa"}}>{a}</div>)}
            </div>
          ))}
        </div>
        <div style={{background:"#fff",border:"1px solid #eceaf3",borderRadius:13,padding:"11px 16px"}}>
          <div style={{fontSize:9.5,fontWeight:800,letterSpacing:1.2,textTransform:"uppercase",color:"#8a6a10",marginBottom:7}}>Member of 7 cohorts — refreshed daily</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
            {cohorts.map((c,i)=><span key={c} style={{background:"#FDF3DC",color:"#6a4a00",fontSize:11,fontWeight:800,borderRadius:999,padding:"5px 13px",animation:`fadeInUp .3s ${0.3+i*0.06}s both`}}>{c}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
function MZ3Engage({ sub=0, setSub }){
  const mi = Math.min(sub,11);
  const yearEnd = sub===12;
  const mo = MZ3_YEAR[mi];
  const total = MZ3_YEAR.slice(0,mi+1).reduce((a,b)=>a+b.pts,0)+800;
  return (
    <div style={{display:"flex",flexDirection:"column",gap:12,height:"100%"}}>
      <div style={{display:"flex",alignItems:"flex-end",gap:18}}>
        <div>
          <MZ3Kicker color={CAD_PURPLE}>Pillar 3 · Engage</MZ3Kicker>
          <div style={{fontSize:21,fontWeight:800,marginTop:2}}>Every brand's campaign, one loyalty spine — 365 days a year</div>
        </div>
      </div>
      <div style={{display:"flex",gap:5,position:"relative"}}>
        <MZ3ClickHint t="Click any month" style={{top:-14,left:170}}/>
        {MZ3_YEAR.map((y,i)=>(
          <button key={y.m} onClick={()=>setSub(i)} style={{flex:1,cursor:"pointer",fontFamily:"inherit",border:"none",borderRadius:10,padding:"8px 2px 7px",background:!yearEnd&&i===mi?CAD_PURPLE:i<=sub?"#EFE9F9":"#fff",color:!yearEnd&&i===mi?"#fff":i<=sub?CAD_PURPLE:"#999",outline:!yearEnd&&i===mi?"none":"1px solid #e8e8f0",transition:"all .2s"}}>
            <div style={{fontSize:12,fontWeight:800}}>{y.m}</div>
            <div style={{fontSize:8.5,marginTop:2,opacity:0.85,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",padding:"0 3px"}}>{y.brand}</div>
          </button>
        ))}
        <button onClick={()=>setSub(12)} style={{flex:1.2,cursor:"pointer",fontFamily:"inherit",border:"none",borderRadius:10,padding:"8px 2px 7px",background:yearEnd?CAD_GOLD:"#FDF3DC",color:"#5a3d00",outline:yearEnd?"none":"1px solid #f0e3bd",transition:"all .2s"}}>
          <div style={{fontSize:12,fontWeight:800}}>Dec 31</div>
          <div style={{fontSize:8.5,marginTop:2,opacity:0.85}}>Year-end profile</div>
        </button>
      </div>
      {yearEnd ? <MZ3YearEnd/> : (<>
        <div key={mi} style={{flex:1,minHeight:0,display:"flex",gap:24,animation:"stageIn .35s both"}}>
          <MZ3MonthPhone mo={mo}/>
          <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:12}}>
            <MZ3Panel kicker={`Month ${String(mi+1).padStart(2,"0")} · ${mo.m} · ${mo.brand}`} title={mo.t} style={{flex:1,justifyContent:"center"}}>
              <div style={{fontSize:12.5,color:"#555",lineHeight:1.6}}>{mo.mech}</div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {mo.pts>0 && <PtsChip v={mo.pts}/>}
                <MZ3Tag t={`Data signal: ${mo.sig}`} tone="purple"/>
              </div>
            </MZ3Panel>
            <MZ3Panel title="Campaigns lead to loyalty — every time" style={{flex:1,justifyContent:"center"}}>
              <MZ3Flow nodes={[["🎯",`${mo.brand} campaign`],["📡","Data signal captured"],["👤","Unified 1PD profile"],["🏆","Joy Club — points, tiers, rewards"]]}/>
              <div style={{fontSize:11.5,color:"#777",lineHeight:1.55}}>Silk, Oreo, 5Star, Bournvita, Celebrations — different brands, different mechanics, <b>one loyalty destination</b>. The Feb gifting flag powers the Oct Diwali concierge; the Apr match window times the Sep nudge.</div>
            </MZ3Panel>
          </div>
        </div>
        <MZ3ProfileLive mi={mi} total={total}/>
      </>)}
    </div>
  );
}
Object.assign(window, { MZ3Engage, MZ3_YEAR });
