/* Loyalty / UGC / receipt strips + full-stage scenes */

function MZLoyaltyDetail(){
  return (
    <DetailStrip kicker="Step 10 · Retain" title="Auto-enrolled into Cadbury Joy Club" sub="The verified claim already holds everything a signup form would ask" right={mzLive}>
      <DCol title="Joy Club — member card" flex={1}>
        <div style={{borderRadius:12,background:`linear-gradient(135deg,${CAD_PURPLE},#5E3D96)`,padding:"14px 18px",color:"#fff",boxShadow:"0 10px 24px rgba(42,20,88,0.35)"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}><CadburyMark size={17} light/><span style={{fontSize:9.5,fontWeight:800,letterSpacing:2,color:CAD_GOLD}}>JOY CLUB</span></div>
          <div style={{marginTop:12,fontSize:15,fontWeight:700}}>Aarav Mehta</div>
          <div style={{fontSize:10,opacity:0.8}}>Member #JC-88412 · Joy Starter tier</div>
          <div style={{display:"flex",alignItems:"baseline",gap:6,marginTop:10}}>
            <span style={{fontSize:26,fontWeight:800,color:CAD_GOLD}}>100</span><span style={{fontSize:10.5,opacity:0.85}}>welcome points</span>
            <span style={{marginLeft:"auto",fontSize:9.5,background:"rgba(255,255,255,0.16)",borderRadius:999,padding:"3px 10px"}}>Zero signup steps</span>
          </div>
        </div>
      </DCol>
      <DCol title="How points grow from here">
        {[["Share a #DairyMilkMoment","UGC post → +150 pts",],["Upload purchase receipts","2 pts per ₹ on Cadbury SKUs"],["Refer a friend to a free taste","+100 pts per verified claim"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={CAD_PURPLE}/>)}
      </DCol>
      <DCol title="Why auto-enrolment wins">
        {[["100% coverage","No form to abandon — every verified claimer is a member"],["Points give data a reason","Each earn action below is also an enrichment event"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i}/>)}
      </DCol>
    </DetailStrip>
  );
}

function MZUgcDetail(){
  return (
    <DetailStrip kicker="Step 11 · Advocate" title="A photo at the wall becomes UGC — and points" sub="Content Mondelez can reuse, tied to a real verified consumer" right={<PtsChip v={150}/>}>
      <div style={{flex:"0 0 250px",border:"1px solid #eceef4",borderRadius:10,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        <div style={{padding:"7px 12px",display:"flex",gap:8,alignItems:"center",borderBottom:"1px solid #f2f2f6"}}>
          <div style={{width:22,height:22,borderRadius:999,background:"#EDE7F8",color:CAD_PURPLE,fontSize:9,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}}>AM</div>
          <span style={{fontSize:11.5,fontWeight:700}}>aarav.mehta</span>
        </div>
        <div style={{flex:1,background:`linear-gradient(150deg,${CAD_PURPLE},#5E3D96)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,minHeight:120}}>
          <MZPersonStill/>
          <div style={{color:CAD_GOLD,fontSize:12,fontWeight:800}}>#DairyMilkMoment</div>
        </div>
        <div style={{padding:"7px 12px",fontSize:10.5,color:"#555"}}>❤ 214 · "sweetest detour ever @cadbury"</div>
      </div>
      <DCol title="What the post does">
        {[["Organic reach with proof","A real person, a real taste, a real place — not an ad"],["Rights captured in-flow","Posting via the campaign tag grants reuse consent"],["+150 Joy points credited","Advocacy is paid in points, not discounts"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={CAD_PURPLE}/>)}
      </DCol>
      <DCol title="Profile enriched">
        {[["UGC","1 post · #DairyMilkMoment"],["Social handle","@aarav.mehta"],["Joy points","250 total"]].map(([k,v],i)=><KV key={k} k={k} v={v} i={i} hi={i<2}/>)}
      </DCol>
    </DetailStrip>
  );
}
function MZPersonStill(){
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div style={{width:16,height:16,borderRadius:999,background:"#B07B5E"}}></div>
      <div style={{width:22,height:28,borderRadius:"7px 7px 4px 4px",background:"#1E6E5C",marginTop:-1}}></div>
    </div>
  );
}

function MZReceiptDetail(){
  return (
    <DetailStrip kicker="Step 12 · Verified purchase" title="Days later, at home — Aarav uploads his receipt" sub="The loyalty loop turns purchases into first-party proof" right={<PtsChip v={190}/>}>
      <div style={{flex:"0 0 220px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #eceef4",borderRadius:10}}>
        <div style={{width:160,background:"#fff",border:"1px solid #ddd",boxShadow:"0 6px 16px rgba(0,0,0,0.12)",padding:"10px 12px",fontFamily:"monospace",fontSize:9.5,lineHeight:1.7,color:"#333",transform:"rotate(-2deg)"}}>
          <div style={{textAlign:"center",fontWeight:700,borderBottom:"1px dashed #bbb",paddingBottom:4,marginBottom:4}}>SMART BAZAAR<br/>Linking Rd, Mumbai</div>
          <div style={{display:"flex",justifyContent:"space-between",background:"#FDF3DC"}}><span>DAIRY MILK SILK 60g</span><span>95.00</span></div>
          <div style={{display:"flex",justifyContent:"space-between"}}><span>MILK 1L</span><span>66.00</span></div>
          <div style={{display:"flex",justifyContent:"space-between"}}><span>BREAD</span><span>45.00</span></div>
          <div style={{display:"flex",justifyContent:"space-between",fontWeight:700,borderTop:"1px dashed #bbb",marginTop:4,paddingTop:4}}><span>TOTAL</span><span>206.00</span></div>
        </div>
      </div>
      <DCol title="FreeStand receipt engine">
        {[["OCR + SKU match","Dairy Milk Silk 60 g recognised · ₹95"],["Store resolved","Smart Bazaar, Linking Rd — inside his known catchment"],["Fraud checks passed","Unique bill no. · GST id valid · no duplicate"],["+190 Joy points credited","2 pts per ₹ on the Cadbury line"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i}/>)}
      </DCol>
      <DCol title="The claim → purchase circle closes">
        {[["Sample → shelf, proven","The same person who tasted on Tue bought on Sat — receipt-verified"],["Basket context for free","Where he shops, what he pays, what sits beside the chocolate"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={CAD_PURPLE}/>)}
      </DCol>
    </DetailStrip>
  );
}

/* ---- Full-stage scenes ---- */
function MZCover(){
  const rows=[["1","Capture","Name + pincode at the mall kiosk → Mondelez DB"],["2","Enrich","FreeStand geo-intelligence multiplies the seed data"],["3","Engage","QR sampling stall, quiz, promoter handover"],["4","Grow","Feedback, Joy Club loyalty, UGC, receipt uploads"],["5","Own","One enriched 1PD profile, handed to Mondelez CRM"]];
  return (
    <div style={{position:"absolute",inset:0,background:"#fff",fontFamily:"Roboto,-apple-system,sans-serif"}}>
      <div style={{position:"absolute",left:0,top:0,bottom:0,width:14,background:`linear-gradient(180deg,${CAD_PURPLE},#5E3D96)`}}></div>
      <div style={{position:"absolute",left:70,top:64,display:"flex",alignItems:"center",gap:20}}><MdlzMark size={20}/><div style={{width:1,height:34,background:"#ddd"}}></div><CadburyMark size={30}/></div>
      <div style={{position:"absolute",left:70,top:170,width:600,fontSize:62,fontWeight:500,lineHeight:1.08,color:"#000",letterSpacing:-1}}>One walk through a mall.<br/><span style={{color:CAD_PURPLE}}>24 first-party attributes.</span></div>
      <div style={{position:"absolute",left:70,top:470,width:560,fontSize:17,fontWeight:300,color:"#444",lineHeight:1.6}}>Follow Aarav from a two-field hello to a fully enriched consumer profile — data enhancement, tech-driven engagement, and sampling working as one system.</div>
      <button onClick={()=>window.dispatchEvent(new Event("mz-next"))} style={{position:"absolute",left:70,top:580,display:"flex",alignItems:"center",gap:20,padding:"15px 28px",borderRadius:6,background:CAD_PURPLE,border:"none",color:"#fff",fontSize:21,fontWeight:500,cursor:"pointer",fontFamily:"inherit"}}>
        Start the walk
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
      </button>
      <div style={{position:"absolute",left:70,bottom:78,fontSize:18,fontWeight:300}}>Powered by</div>
      <div style={{position:"absolute",left:70,bottom:36}}><FSMark h={30}/></div>
      <div style={{position:"absolute",right:60,top:70,bottom:70,width:440,borderRadius:12,border:"2px solid #E2DBEF",padding:"34px 34px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        {rows.map(([n,t,s])=>(
          <div key={n} style={{display:"flex",gap:16,alignItems:"flex-start"}}>
            <div style={{width:34,height:34,borderRadius:999,background:"#EDE7F8",color:CAD_PURPLE,fontSize:14,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{n}</div>
            <div><div style={{fontSize:17,fontWeight:700,color:"#111"}}>{t}</div><div style={{fontSize:12.5,color:"#777",marginTop:3,lineHeight:1.5,fontWeight:300}}>{s}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MZRecapScene(){
  const declared=[["Name","Aarav Mehta"],["Pincode","400050"],["Taste","Milk chocolate"],["Frequency","Weekly buyer"],["Occasion","Shares with family"],["Sentiment","Loved it ★★★★★"],["Intent","Will buy this week"],["UGC","1 post · @aarav.mehta"],["Purchase","Verified · ₹95 · Silk"]];
  const derived=[["Financial group","Tier A2 · High affluence"],["Est. household spend","₹38–52k/month band"],["Locality profile","Bandra West · premium urban"],["Persona","Young urban professional"],["CLTV band","High · top 18% of cohort"],["Catchment","14 MT + 62 GT stores · 2 km"],["Best channel","WhatsApp · evening window"],["Price-point fit","Premium SKUs viable"]];
  const nba=[["Silk Valentine's push · Feb window","0.91"],["Gifting hampers · Rakhi & Diwali","0.87"],["Family-pack upsell · weekly cadence","0.84"],["Ambassador cohort · UGC performer","0.71"]];
  return (
    <div style={{position:"absolute",inset:0,background:"#F5F3F9",fontFamily:"Roboto,-apple-system,sans-serif",display:"flex"}}>
      <div style={{flex:"0 0 700px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{width:620,position:"relative"}}>
          <div style={{position:"absolute",inset:-14,borderRadius:20,background:`linear-gradient(135deg,${CAD_PURPLE},${CAD_GOLD})`,opacity:0.14,filter:"blur(2px)"}}></div>
          <div style={{position:"relative",background:"#fff",borderRadius:14,border:`2px solid ${CAD_PURPLE}`,boxShadow:"0 24px 60px rgba(42,20,88,0.25)",overflow:"hidden"}}>
            <div style={{background:CAD_PURPLE,padding:"11px 18px",display:"flex",alignItems:"center",gap:10}}>
              <span style={{width:8,height:8,borderRadius:999,background:CAD_GOLD}}></span>
              <span style={{color:"#fff",fontSize:11.5,fontWeight:800,letterSpacing:1.5}}>1PD PROFILE · COMPLETE</span>
              <span style={{marginLeft:"auto",color:CAD_GOLD,fontSize:11.5,fontWeight:800}}>24 attributes · CDP-ready</span>
            </div>
            <div style={{padding:"11px 18px",display:"flex",alignItems:"center",gap:12,borderBottom:"1px solid #f0edf6"}}>
              <img src={MZ_IMG.aarav} alt="" style={{width:44,height:44,borderRadius:999,objectFit:"cover",border:`2px solid ${CAD_GOLD}`}}/>
              <div><div style={{fontSize:15.5,fontWeight:700}}>Aarav Mehta</div><div style={{fontSize:10.5,color:"#999"}}>MDLZ-1PD-88412 · Bandra West, Mumbai · Joy Club #JC-88412 · 440 pts</div></div>
              <div style={{marginLeft:"auto",textAlign:"right"}}>
                <div style={{fontSize:9,fontWeight:800,letterSpacing:1,color:"#999"}}>MATCH CONFIDENCE</div>
                <div style={{fontSize:16,fontWeight:800,color:MZ_GREEN}}>0.98</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",borderBottom:"1px solid #f0edf6"}}>
              <div style={{padding:"9px 16px 11px",borderRight:"1px solid #f0edf6"}}>
                <div style={{fontSize:9,fontWeight:800,letterSpacing:1.2,color:"#8a8494",marginBottom:5}}>✋ DECLARED — HE TOLD US</div>
                {declared.map(([k,v],i)=>(
                  <div key={k} style={{display:"flex",justifyContent:"space-between",gap:8,padding:"2.5px 0",fontSize:10.3,animation:`fadeInUp 0.3s ${i*0.04}s both`}}>
                    <span style={{color:"#95919e",whiteSpace:"nowrap"}}>{k}</span><span style={{fontWeight:700,color:"#2a2632",textAlign:"right",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{padding:"9px 16px 11px",background:"#FBF9FF"}}>
                <div style={{fontSize:9,fontWeight:800,letterSpacing:1.2,color:MZ_NAVY,marginBottom:5}}>⚡ DERIVED — FREESTAND INTELLIGENCE</div>
                {derived.map(([k,v],i)=>(
                  <div key={k} style={{display:"flex",justifyContent:"space-between",gap:8,padding:"2.5px 0",fontSize:10.3,animation:`fadeInUp 0.3s ${0.2+i*0.04}s both`}}>
                    <span style={{color:"#8f9bb5",whiteSpace:"nowrap"}}>{k}</span><span style={{fontWeight:700,color:MZ_NAVY,textAlign:"right",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{padding:"9px 16px 13px",background:"#FDF9F0"}}>
              <div style={{fontSize:9,fontWeight:800,letterSpacing:1.2,color:"#8a6a3a",marginBottom:6}}>🎯 NEXT BEST ENGAGEMENT — SUGGESTED BY THE AI PLAN</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px 14px"}}>
                {nba.map(([t,c],i)=>(
                  <div key={t} style={{display:"flex",alignItems:"center",gap:8,fontSize:10.3,animation:`fadeInUp 0.3s ${0.4+i*0.06}s both`}}>
                    <span style={{width:6,height:6,borderRadius:2,background:CAD_GOLD,flexShrink:0}}></span>
                    <span style={{flex:1,fontWeight:600,color:"#3a3040",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{t}</span>
                    <span style={{fontWeight:800,color:"#8a6a3a"}}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{flex:1,padding:"60px 56px 40px 0",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <div style={{fontSize:12,fontWeight:700,color:MZ_BLUE,letterSpacing:2.5,textTransform:"uppercase"}}>Step 13 · The asset</div>
        <div style={{fontSize:31,fontWeight:500,lineHeight:1.2,marginTop:10}}>Half told to us. Half derived for you.</div>
        <div style={{fontSize:13.5,color:"#666",lineHeight:1.65,marginTop:12,fontWeight:300}}>Nine attributes Aarav volunteered for value — a taste, points, perks. The rest is FreeStand intelligence: his financial group from the pincode, spend band, CLTV, and a ranked plan for what to do with him next. Nothing scraped, everything consented.</div>
        <div style={{marginTop:24,display:"flex",flexDirection:"column",gap:10}}>
          {[["Declared by Aarav",9,"#8a8a94"],["Derived by FreeStand",11,MZ_NAVY],["Engagement suggestions",4,"#B08000"]].map(([g,n,c],i)=>(
            <div key={g} style={{display:"flex",alignItems:"center",gap:12,animation:`fadeInUp 0.3s ${i*0.08}s both`}}>
              <span style={{width:150,fontSize:12,color:"#555",textAlign:"right",flexShrink:0}}>{g}</span>
              <div style={{flex:1,height:14,background:"#ECE8F4",borderRadius:4,overflow:"hidden"}}><div style={{width:`${n/11*100}%`,height:"100%",background:c,borderRadius:4}}></div></div>
              <span style={{width:30,fontSize:11.5,fontWeight:700,color:"#333"}}>{n}</span>
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:22,marginTop:28}}>
          {[["24","consented attributes"],["440","Joy points earned"],["₹95","receipt-verified purchase"]].map(([v,l])=>(
            <div key={l} style={{borderLeft:`3px solid ${CAD_PURPLE}`,paddingLeft:14}}>
              <div style={{fontSize:24,fontWeight:700,color:CAD_PURPLE}}>{v}</div>
              <div style={{fontSize:11,color:"#888",marginTop:2}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { MZLoyaltyDetail, MZUgcDetail, MZReceiptDetail, MZCover, MZRecapScene });
