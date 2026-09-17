/* V2 panels — quiz, handover, feedback, loyalty detail, UGC, receipt */

function MZ2QuizPanel(){
  return (
    <MZ2Panel kicker="Station 6 · Gated qualification" title="Three questions stand between Aarav and the sample" sub="Watch the thread on the left — declared preferences, the highest-grade 1PD there is" right={mz2Live}>
      <div style={{display:"flex",gap:12,flex:1,minHeight:0}}>
        <div style={{flex:"0 0 300px",border:"1px solid #eceef4",borderRadius:10,overflow:"hidden",position:"relative"}}>
          <img src={MZ_IMG.qr} alt="Scanning the QR on the pack" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
          <div style={{position:"absolute",left:0,right:0,bottom:0,padding:"22px 12px 9px",background:"linear-gradient(transparent,rgba(20,10,40,0.85))",color:"#fff",fontSize:11,fontWeight:700,lineHeight:1.45}}>QR printed on the pack — scan → WhatsApp → quiz</div>
          <div style={{position:"absolute",top:10,left:10,background:CAD_GOLD,color:"#3a2600",fontSize:9,fontWeight:800,letterSpacing:1,borderRadius:999,padding:"4px 11px"}}>SCAN ME</div>
        </div>
        <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:12}}>
          <MZ2Box title="Profile enriched — declared data" flex={1}>
            {[["Taste preference","Milk chocolate"],["Purchase frequency","Weekly buyer"],["Consumption occasion","Shares with family"],["Channel","WhatsApp · QR scan"],["Device","Android"]].map(([k,v],i)=><KV key={k} k={k} v={v} i={i} hi={i<3}/>)}
          </MZ2Box>
          <div style={{background:"#F7F9FD",border:"1px solid #dde5f2",borderRadius:10,padding:"10px 14px",fontSize:11,color:"#4a5568",lineHeight:1.55,flexShrink:0}}>The quiz is composable per campaign — 3 to 5 questions, brand-defined, localised, always inside the same trusted thread.</div>
        </div>
        <MZ2Box title="Why gating works" flex={1}>
          {[["The sample is the incentive","~94% quiz completion vs ~8% for surveys"],["Recognised, not re-asked","The thread greets him by name — kiosk + geo data already loaded"],["Every answer is an attribute","Declared taste, frequency and occasion drive SKU & retargeting"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={CAD_PURPLE}/>)}
        </MZ2Box>
      </div>
    </MZ2Panel>
  );
}

function MZ2HandoverPanel(){
  return (
    <MZ2Panel kicker="Station 7 · Verified sampling" title="The promoter hands over the Dairy Milk — verified, not blind" sub="Code CDM-4471 checked · stock decremented · timestamped 6:31 PM" right={<div style={{padding:"6px 14px",borderRadius:999,background:"#E8F5E9",border:"1.5px solid #A5D6A7",fontSize:12,fontWeight:700,color:MZ_GREEN,marginTop:4}}>✓ Claimed</div>}>
      <div style={{display:"flex",gap:12}}>
        <div style={{flex:"0 0 210px",border:"1px solid #eceef4",borderRadius:10,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,padding:"12px 10px",background:"linear-gradient(180deg,#FBFAFE,#F5F1FB)"}}>
          <div style={{display:"flex",alignItems:"flex-end",gap:10}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <div style={{width:20,height:20,borderRadius:999,background:"#B07B5E"}}></div>
              <div style={{width:27,height:36,borderRadius:"8px 8px 4px 4px",background:CAD_PURPLE,position:"relative"}}><div style={{position:"absolute",inset:"7px 5px 0",background:CAD_GOLD,borderRadius:"3px 3px 0 0"}}></div></div>
              <div style={{fontSize:8.5,fontWeight:700,color:"#8a8494",marginTop:3}}>Promoter</div>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:14}}>
              <div style={{animation:"mzHand 1.6s ease-in-out infinite"}}><MZDairyMilk w={34}/></div>
              <svg width="38" height="12" viewBox="0 0 38 12" style={{marginTop:4}}><line x1="2" y1="6" x2="30" y2="6" stroke={CAD_PURPLE} strokeWidth="2" strokeDasharray="4 3" style={{animation:"dashMove 1s linear infinite"}}></line><path d="M30 2l7 4-7 4z" fill={CAD_PURPLE}></path></svg>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <img src={MZ_IMG.aarav} alt="" style={{width:20,height:20,borderRadius:999,objectFit:"cover"}}/>
              <div style={{width:27,height:36,borderRadius:"8px 8px 4px 4px",background:"#1E6E5C"}}></div>
              <div style={{fontSize:8.5,fontWeight:700,color:"#8a8494",marginTop:3}}>Aarav</div>
            </div>
          </div>
          <div style={{fontSize:9.5,color:"#888",textAlign:"center",lineHeight:1.5}}>Dairy Milk 13 g pack,<br/>hand to hand — logged 6:31 PM</div>
          <style>{`@keyframes mzHand{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}`}</style>
        </div>
        <MZ2Box title="Promoter app — claim CDM-4471" flex={1.2}>
          <div style={{border:`1.5px solid ${CAD_PURPLE}`,borderRadius:10,padding:"11px 14px",display:"flex",alignItems:"center",gap:12}}>
            <div style={{width:36,height:36,borderRadius:999,background:"#EDE7F8",color:CAD_PURPLE,fontWeight:800,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center"}}>AM</div>
            <div style={{flex:1}}><div style={{fontSize:13.5,fontWeight:700}}>Aarav Mehta · CDM-4471</div><div style={{fontSize:10.5,color:"#888"}}>Dairy Milk 13 g · 1 unit · quiz complete ✓</div></div>
            <div style={{background:MZ_GREEN,color:"#fff",fontSize:11,fontWeight:700,borderRadius:6,padding:"8px 16px"}}>Hand over ✓</div>
          </div>
          <div style={{marginTop:9,fontSize:10.5,color:"#888",display:"flex",justifyContent:"space-between",padding:"0 4px"}}><span>Stall stock</span><span style={{fontWeight:700,color:"#1a1a1a"}}>212 → 211 · auto-synced to FreeStand</span></div>
          <div style={{marginTop:9,fontSize:10.5,color:"#888",display:"flex",justifyContent:"space-between",padding:"0 4px"}}><span>Promoter</span><span style={{fontWeight:700,color:"#1a1a1a"}}>Kavita D. · ORB-ST-02 · geo-fenced check-in</span></div>
        </MZ2Box>
        <MZ2Box title="What just became true" flex={1}>
          {[["Verified trial","A named, consented person received this exact SKU — provable"],["Pay per outcome","Mondelez pays for verified handovers, not distributed boxes"],["Feedback trigger armed","Fires in 12 minutes, while the taste is fresh"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i}/>)}
        </MZ2Box>
      </div>
      <div style={{background:"#FFF9F2",border:"1px solid #F2DEC2",borderRadius:10,padding:"11px 16px",fontSize:11.5,color:"#8a6a3a",lineHeight:1.6}}>Blind sampling ends here: box distributed, story over. For FreeStand this handover is the <strong>midpoint</strong> — four more stations of value follow.</div>
    </MZ2Panel>
  );
}

function MZ2FeedbackPanel(){
  return (
    <MZ2Panel kicker="Station 8 · Closed-loop feedback" title="Feedback arrives minutes after the taste — not weeks later" sub="The ping fires 12 minutes post-handover, while recall is perfect and response rates peak" right={mz2Live}>
      <div style={{display:"flex",gap:12}}>
        <MZ2Box title="Captured this minute" flex={1}>
          {[["Experience","Loved it · 5/5"],["Purchase intent","This week"],["Time from trial","12 min"],["Response latency","41 sec"]].map(([k,v],i)=><KV key={k} k={k} v={v} i={i} hi={i<2}/>)}
        </MZ2Box>
        <MZ2Box title="Where each answer goes" flex={1.2}>
          {[["Sentiment → product teams","SKU-level taste verdicts, by segment and city"],["Intent → retargeting cohort","'Loved it, buying this week' joins a high-propensity audience"],["Detractors → save flow","A poor rating triggers an alternate-SKU offer, not silence"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={MZ_NAVY}/>)}
        </MZ2Box>
      </div>
      <div style={{display:"flex",gap:12}}>
        {[["~30%","feedback response rate in-flow"],["0%","what blind sampling hears back"],["10–15%","declare purchase intent"]].map(([v,l])=>(
          <div key={l} style={{flex:1,borderLeft:`3px solid ${CAD_PURPLE}`,paddingLeft:14,padding:"6px 0 6px 14px"}}>
            <div style={{fontSize:23,fontWeight:700,color:CAD_PURPLE}}>{v}</div>
            <div style={{fontSize:11,color:"#888",marginTop:2}}>{l}</div>
          </div>
        ))}
      </div>
    </MZ2Panel>
  );
}

/* Station 9 — loyalty program in detail (interactive) */
function MZ2LoyaltyPanel(){
  const earnsDef=[["Feedback given","feedback",50],["UGC post with campaign tag","ugc",150],["Receipt upload — Cadbury SKUs","receipt",190],["Referral (verified claim)","referral",100]];
  const tiers=[["Joy Starter",0,"Welcome points, birthday 2×"],["Joy Buff",500,"Early access, free pack every quarter"],["Joy Legend",1500,"Hampers, gifting concierge, events"]];
  const redeems=[["₹50 off any pack",200],["Movie voucher",400],["Chocolate hamper",800],["Silk 3-month subscription",1200]];
  const nudges=["Rakhi & Diwali gifting windows","Replenishment — weekly buyer cadence","Silk upsell · week 2 (per AI plan)","Win-back flow if silent for 45 days"];
  const [done,setDone] = React.useState({});
  const [tab,setTab] = React.useState("Earn");
  const [hint,setHint] = React.useState(true);
  const pts = 100 + earnsDef.reduce((a,[,k,v])=>a+(done[k]?v:0),0);
  const tier = pts>=1500?"Joy Legend":pts>=500?"Joy Buff":"Joy Starter";
  const next = pts>=1500?null:pts>=500?1500:500;
  const tabs=["Earn","Redeem","Tiers","Nudges"];
  return (
    <MZ2Panel kicker="Station 9 · Loyalty — Mondelez Joy Club" title="One parent-level program across 14 brands — entered with zero signup" sub="Interactive — tap the earn actions to simulate Aarav's next 30 days" right={mz2Live}>
      <div style={{display:"flex",gap:14,flex:1,minHeight:0,position:"relative"}}>
        {hint && (
          <div onClick={()=>setHint(false)} style={{position:"absolute",inset:-8,zIndex:20,background:"rgba(24,14,48,0.55)",backdropFilter:"blur(2px)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",animation:"fadeInUp 0.35s both"}}>
            <div style={{background:"#fff",borderRadius:14,padding:"22px 30px",textAlign:"center",boxShadow:"0 24px 60px rgba(0,0,0,0.4)",maxWidth:340}}>
              <div style={{width:46,height:46,borderRadius:999,background:"#F7F3FD",border:`2px solid ${CAD_PURPLE}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",fontSize:22}}>👆</div>
              <div style={{fontSize:16,fontWeight:800,color:"#241c38"}}>This screen is interactive</div>
              <div style={{fontSize:12.5,color:"#666",lineHeight:1.55,marginTop:6}}>Tap an <strong>earn action</strong> to simulate Aarav's next 30 days — watch points climb and Joy Buff unlock.</div>
              <div style={{marginTop:14,background:CAD_PURPLE,color:"#fff",borderRadius:7,padding:"10px 22px",fontSize:13,fontWeight:700,display:"inline-block"}}>Got it — let me try</div>
            </div>
          </div>
        )}
        <div style={{flex:"0 0 300px",display:"flex",flexDirection:"column",gap:10}}>
          <div style={{borderRadius:14,background:`linear-gradient(135deg,${CAD_PURPLE},#5E3D96)`,padding:"16px 18px",color:"#fff",boxShadow:"0 12px 28px rgba(42,20,88,0.35)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",right:-30,top:-30,width:110,height:110,borderRadius:999,background:"rgba(232,164,23,0.14)"}}></div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}><MdlzMark size={11} light/><span style={{fontSize:9.5,fontWeight:800,letterSpacing:2,color:CAD_GOLD}}>JOY CLUB</span></div>
            <div style={{marginTop:12,display:"flex",alignItems:"center",gap:9}}>
              <img src={MZ_IMG.aarav} alt="" style={{width:34,height:34,borderRadius:999,objectFit:"cover",border:`2px solid ${CAD_GOLD}`}}/>
              <div><div style={{fontSize:15,fontWeight:700}}>Aarav Mehta</div>
              <div style={{fontSize:10,opacity:0.8}}>#JC-88412 · auto-enrolled 6:44 PM</div></div>
            </div>
            <div style={{display:"flex",alignItems:"baseline",gap:6,marginTop:12}}>
              <span key={pts} style={{fontSize:30,fontWeight:800,color:CAD_GOLD,animation:"fadeInUp 0.35s both"}}>{pts}</span><span style={{fontSize:10.5,opacity:0.85}}>points</span>
              <span key={tier} style={{marginLeft:"auto",fontSize:10,fontWeight:800,background:tier==="Joy Starter"?"rgba(255,255,255,0.16)":CAD_GOLD,color:tier==="Joy Starter"?"#fff":"#3a2600",borderRadius:999,padding:"3px 11px",animation:"fadeInUp 0.35s both"}}>{tier}</span>
            </div>
            <div style={{height:7,background:"rgba(255,255,255,0.22)",borderRadius:4,marginTop:10,overflow:"hidden"}}><div style={{width:next?`${Math.min(100,pts/next*100)}%`:"100%",height:"100%",background:CAD_GOLD,borderRadius:4,transition:"width 0.7s cubic-bezier(0.3,0.7,0.3,1)"}}></div></div>
            <div style={{fontSize:9.5,opacity:0.8,marginTop:5}}>{next?`${next-pts} pts to ${next===500?"Joy Buff":"Joy Legend"}`:"Top tier reached 🏆"}</div>
          </div>
          <div style={{background:"#F7F3FD",border:"1px solid #E2DBEF",borderRadius:10,padding:"10px 14px",fontSize:10.5,color:"#4a3c6a",lineHeight:1.55}}>One program, <strong>14 Mondelez brands</strong> — a Silk Valentine's campaign or an Oreo activation earns into the same wallet. Enrolment took <strong>zero forms</strong>: the verified claim already held everything.</div>
        </div>
        <div style={{flex:1,minWidth:0,border:"1px solid #eceef4",borderRadius:12,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{display:"flex",borderBottom:"1px solid #f0f0f4",flexShrink:0}}>
            {tabs.map(t=>(
              <button key={t} onClick={()=>setTab(t)} style={{flex:1,border:"none",background:tab===t?"#fff":"#FAF9FC",borderBottom:tab===t?`3px solid ${CAD_PURPLE}`:"3px solid transparent",padding:"10px 0 8px",fontSize:12.5,fontWeight:tab===t?800:500,color:tab===t?CAD_PURPLE:"#8a8494",cursor:"pointer",fontFamily:"inherit"}}>{t}</button>
            ))}
          </div>
          <div key={tab} style={{flex:1,minHeight:0,padding:"12px 18px",overflow:"hidden",animation:"fadeInUp 0.3s both"}}>
            {tab==="Earn" && (
              <div>
                {earnsDef.map(([t,k,v],i)=>(
                  <button key={k} onClick={()=>setDone(d=>({...d,[k]:!d[k]}))} style={{display:"flex",alignItems:"center",gap:12,width:"100%",textAlign:"left",background:done[k]?"#F3FBF4":"#fff",border:done[k]?"1.5px solid #A5D6A7":"1px solid #e8e4f2",borderRadius:9,padding:"9px 13px",marginBottom:7,cursor:"pointer",fontFamily:"inherit",animation:`fadeInUp 0.3s ${i*0.07}s both`,transition:"all 0.25s"}}>
                    <div style={{width:20,height:20,borderRadius:999,border:done[k]?"none":"2px solid #d5cfe4",background:done[k]?MZ_GREEN:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.25s"}}>{done[k]&&<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg>}</div>
                    <span style={{flex:1,fontSize:12.5,fontWeight:600,color:"#2a2632"}}>{t}</span>
                    <span style={{fontSize:11,fontWeight:800,color:"#3a2600",background:"#FDF3DC",borderRadius:999,padding:"3px 11px",flexShrink:0}}>+{v}</span>
                  </button>
                ))}
              </div>
            )}
            {tab==="Redeem" && (
              <div>
                {redeems.map(([t,v],i)=>{
                  const ok = pts>=v;
                  return (
                    <div key={t} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 4px",borderBottom:"1px solid #f4f4f8",opacity:ok?1:0.5,animation:`fadeInUp 0.3s ${i*0.07}s both`}}>
                      <div style={{width:9,height:9,borderRadius:2,background:ok?CAD_GOLD:"#ddd",flexShrink:0}}></div>
                      <span style={{flex:1,fontSize:12.5,fontWeight:600}}>{t}</span>
                      <span style={{fontSize:11.5,fontWeight:800,color:CAD_PURPLE}}>{v} pts</span>
                      <span style={{fontSize:9,fontWeight:800,borderRadius:999,padding:"3px 10px",background:ok?CAD_PURPLE:"#eee",color:ok?"#fff":"#999"}}>{ok?"UNLOCKED":"LOCKED"}</span>
                    </div>
                  );
                })}
                <div style={{fontSize:10.5,color:"#888",marginTop:10,lineHeight:1.55}}>Redemptions route through the same WhatsApp thread — a coupon code or a doorstep hamper, no app required.</div>
              </div>
            )}
            {tab==="Tiers" && (
              <div>
                {tiers.map(([t,p,s],i)=>{
                  const act = t===tier;
                  return (
                    <div key={t} style={{display:"flex",alignItems:"center",gap:12,padding:"11px 12px",borderRadius:9,background:act?"#F7F3FD":"transparent",border:act?"1.5px solid #E2DBEF":"1.5px solid transparent",animation:`fadeInUp 0.3s ${i*0.08}s both`}}>
                      <span style={{width:11,height:11,borderRadius:999,background:act?CAD_GOLD:pts>=p?CAD_PURPLE:"#ddd",flexShrink:0,boxShadow:act?"0 0 0 4px rgba(232,164,23,0.25)":"none"}}></span>
                      <span style={{fontSize:13,fontWeight:800,width:96}}>{t}</span>
                      <span style={{fontSize:11,fontWeight:700,color:CAD_PURPLE,width:48}}>{p}+</span>
                      <span style={{fontSize:11,color:"#8a8a94",flex:1}}>{s}</span>
                      {act && <span style={{fontSize:9,fontWeight:800,background:CAD_GOLD,color:"#3a2600",borderRadius:999,padding:"3px 10px"}}>AARAV</span>}
                    </div>
                  );
                })}
              </div>
            )}
            {tab==="Nudges" && (
              <div>
                {nudges.map((t,i)=>(
                  <div key={t} style={{display:"flex",gap:11,alignItems:"center",padding:"9px 4px",borderBottom:"1px solid #f4f4f8",fontSize:12.5,color:"#3a3444",animation:`fadeInUp 0.3s ${i*0.07}s both`}}>
                    <span style={{width:7,height:7,borderRadius:2,background:CAD_GOLD,flexShrink:0}}></span>{t}
                  </div>
                ))}
                <div style={{fontSize:10.5,color:"#888",marginTop:10,lineHeight:1.55}}>Nudges are profile-triggered, not calendar-blasted — cadence comes from his declared weekly frequency and the AI plan.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MZ2Panel>
  );
}

function MZ2UgcPanel(){
  return (
    <MZ2Panel kicker="Station 10 · Advocacy" title="A photo at the wall becomes UGC — and points" sub="Content Mondelez can legally reuse, tied to a verified consumer" right={<PtsChip v={150}/>}>
      <div style={{display:"flex",gap:12,flex:1,minHeight:0}}>
        <div style={{flex:"0 0 200px",border:"1px solid #eceef4",borderRadius:10,overflow:"hidden",display:"flex",flexDirection:"column"}}>
          <div style={{padding:"6px 11px",display:"flex",gap:8,alignItems:"center",borderBottom:"1px solid #f2f2f6",flexShrink:0}}>
            <img src={MZ_IMG.aarav} alt="" style={{width:20,height:20,borderRadius:999,objectFit:"cover"}}/>
            <span style={{fontSize:11,fontWeight:700}}>aarav.mehta</span>
          </div>
          <div style={{flex:1,minHeight:0,position:"relative"}}>
            <img src={MZ_IMG.ugc2} alt="Limited edition Dairy Milk UGC" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
            <div style={{position:"absolute",left:0,right:0,bottom:0,padding:"14px 10px 7px",background:"linear-gradient(transparent,rgba(20,10,40,0.8))",color:CAD_GOLD,fontSize:11,fontWeight:800}}>#DairyMilkMoment</div>
          </div>
          <div style={{padding:"6px 11px",fontSize:9.5,color:"#555",flexShrink:0}}>❤ 214 · "sweetest detour ever @cadbury"</div>
        </div>
        <div style={{flex:"0 0 200px",border:"1px solid #eceef4",borderRadius:10,overflow:"hidden",display:"flex",flexDirection:"column"}}>
          <div style={{padding:"6px 11px",display:"flex",gap:8,alignItems:"center",borderBottom:"1px solid #f2f2f6",flexShrink:0}}>
            <div style={{width:20,height:20,borderRadius:999,background:"#EDE7F8",color:CAD_PURPLE,fontSize:8.5,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}}>RS</div>
            <span style={{fontSize:11,fontWeight:700}}>riya.shah_</span>
            <span style={{marginLeft:"auto",fontSize:8,fontWeight:800,color:"#999"}}>TODAY · SAME WALL</span>
          </div>
          <div style={{flex:1,minHeight:0,position:"relative"}}>
            <img src={MZ_IMG.ugc1} alt="Consumer with Dairy Milk bar" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
            <div style={{position:"absolute",left:0,right:0,bottom:0,padding:"14px 10px 7px",background:"linear-gradient(transparent,rgba(20,10,40,0.8))",color:CAD_GOLD,fontSize:11,fontWeight:800}}>#DairyMilkMoment</div>
          </div>
          <div style={{padding:"6px 11px",fontSize:9.5,color:"#555",flexShrink:0}}>❤ 891 · "this heart tho 💜"</div>
        </div>
        <MZ2Box title="What the posts do" flex={1}>
          {[["Organic reach with proof","Real people, real taste, a real place — not an ad"],["Rights captured in-flow","Posting via the campaign tag grants reuse consent"],["Creator pool builds itself","High-engagement posters get flagged for ambassador cohorts"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={CAD_PURPLE}/>)}
          <div style={{marginTop:6,fontSize:10,color:"#8a6a3a",background:"#FFF9F2",border:"1px solid #F2DEC2",borderRadius:7,padding:"7px 11px",lineHeight:1.5}}>Profile enriched: UGC · @aarav.mehta · 250 pts total</div>
        </MZ2Box>
      </div>
    </MZ2Panel>
  );
}

function MZ2ReceiptPanel(){
  return (
    <MZ2Panel kicker="Station 11 · Verified purchase" title="Days later, at home — the receipt closes the loop" sub="Sample on Tuesday, purchase on Saturday — receipt-proven, in the same thread" right={<PtsChip v={190}/>}>
      <div style={{display:"flex",gap:12,flex:1,minHeight:0}}>
        <div style={{flex:"0 0 190px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #eceef4",borderRadius:10}}>
          <div style={{width:150,background:"#fff",border:"1px solid #ddd",boxShadow:"0 6px 16px rgba(0,0,0,0.12)",padding:"9px 11px",fontFamily:"monospace",fontSize:9,lineHeight:1.7,color:"#333",transform:"rotate(-2deg)"}}>
            <div style={{textAlign:"center",fontWeight:700,borderBottom:"1px dashed #bbb",paddingBottom:4,marginBottom:4}}>SMART BAZAAR<br/>Linking Rd, Mumbai</div>
            <div style={{display:"flex",justifyContent:"space-between",background:"#FDF3DC"}}><span>DAIRY MILK SILK 60g</span><span>95.00</span></div>
            <div style={{display:"flex",justifyContent:"space-between"}}><span>MILK 1L</span><span>66.00</span></div>
            <div style={{display:"flex",justifyContent:"space-between"}}><span>BREAD</span><span>45.00</span></div>
            <div style={{display:"flex",justifyContent:"space-between",fontWeight:700,borderTop:"1px dashed #bbb",marginTop:4,paddingTop:4}}><span>TOTAL</span><span>206.00</span></div>
          </div>
        </div>
        <MZ2Box title="FreeStand receipt engine" flex={1.1}>
          {[["OCR + SKU match","Dairy Milk Silk 60 g recognised · ₹95"],["Store resolved","Smart Bazaar, Linking Rd — inside his known catchment"],["Fraud checks passed","Unique bill no. · valid GST id · no duplicate"],["+190 Joy points credited","2 pts per ₹ on the Cadbury line · balance 440"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i}/>)}
        </MZ2Box>
        <MZ2Box title="The loop, closed" flex={1}>
          {[["Sample → shelf, proven","The person who tasted on Tue bought on Sat — attributable"],["Basket context, free","Where he shops, what he pays, what sits beside the chocolate"],["Upsell already visible","He bought Silk — the AI plan's week-2 hypothesis confirmed early"]].map(([t,s],i)=><CheckRow key={t} t={t} s={s} i={i} color={CAD_PURPLE}/>)}
        </MZ2Box>
      </div>
    </MZ2Panel>
  );
}
Object.assign(window, { MZ2QuizPanel, MZ2HandoverPanel, MZ2FeedbackPanel, MZ2LoyaltyPanel, MZ2UgcPanel, MZ2ReceiptPanel });
