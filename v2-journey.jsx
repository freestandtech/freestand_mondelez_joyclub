/* V2 — metaphorical journey: capability rail + persistent phone + profile card */

const MZ2_STATIONS = ["Capture","Enrich","Geo map","AI consensus","Deploy","Quiz","Sample","Feedback","Loyalty","UGC","Receipt"];

const MZ2_THREAD = [
  {s:2,t:<span>Hi Aarav! 👋 You're on the Mondelez guest list at Orbit Mall today. Good things ahead.</span>},
  {s:7,me:1,t:<span>Hi! Claiming my free Dairy Milk 🍫</span>},
  {s:7,t:<span><strong>Welcome back, Aarav!</strong> 3 quick questions and it's yours. Q1. Milk or dark?</span>},
  {s:7,me:1,t:<span>Milk 🥛</span>},
  {s:7,t:<span>Q2. How often do you buy chocolate?</span>},
  {s:7,me:1,t:<span>Every week</span>},
  {s:7,t:<span>Q3. Who do you share it with?</span>},
  {s:7,me:1,t:<span>Family 👨‍👩‍👧</span>},
  {s:7,t:<span>🎉 Show code <strong>CDM-4471</strong> at the counter</span>},
  {s:8,t:<span>Handed over ✓ Enjoy the Dairy Milk, Aarav! · 6:31 PM</span>},
  {s:9,t:<span>How was it? 🍫</span>},
  {s:9,me:1,t:<span>Loved it ⭐⭐⭐⭐⭐</span>},
  {s:9,t:<span>Planning to buy one soon?</span>},
  {s:9,me:1,t:<span>Yes, this week</span>},
  {s:10,t:<span>You're now a <strong>Mondelez Joy Club</strong> member — 100 pts credited, valid across Cadbury and 13 more brands. No forms, ever.</span>},
  {s:11,me:1,t:<span>📸 <em>photo</em> · #DairyMilkMoment</span>},
  {s:11,t:<span>Gorgeous shot! <strong>+150 pts</strong> · balance 250</span>},
  {s:12,me:1,t:<span>🧾 <em>receipt</em> · Smart Bazaar</span>},
  {s:12,t:<span>Verified: Dairy Milk Silk ₹95 ✓ <strong>+190 pts</strong> · balance 440 🏆</span>},
];

function MZ2Phone({ threadStep }){
  const msgs = MZ2_THREAD.filter(m=>m.s<=threadStep).slice(-8);
  return (
    <div style={{width:312,height:"100%",borderRadius:26,background:"#111",padding:8,boxShadow:"0 16px 40px rgba(0,0,0,0.3)",flexShrink:0,display:"flex",flexDirection:"column"}}>
      <div style={{flex:1,borderRadius:19,overflow:"hidden",display:"flex",flexDirection:"column",background:"#EFE7DD"}}>
        <div style={{background:"#075E54",color:"#fff",padding:"9px 14px 8px",flexShrink:0}}>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:9.5,opacity:0.85,marginBottom:6}}><span>6:{String(12+threadStep*3).padStart(2,"0")} PM</span><span>▮▮▮ ᯤ 🔋</span></div>
          <div style={{display:"flex",alignItems:"center",gap:9}}>
            <div style={{width:28,height:28,borderRadius:999,background:CAD_PURPLE,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><span style={{fontFamily:"'Lobster Two',Georgia,serif",fontStyle:"italic",color:"#fff",fontSize:14,fontWeight:700}}>C</span></div>
            <div><div style={{fontSize:12.5,fontWeight:700}}>Cadbury Dairy Milk ✓</div><div style={{fontSize:9,opacity:0.8}}>WhatsApp Business · online</div></div>
          </div>
        </div>
        <div style={{flex:1,minHeight:0,padding:"10px 10px 12px",display:"flex",flexDirection:"column",gap:6,justifyContent:"flex-end",overflow:"hidden"}}>
          {msgs.length===0 && <div style={{alignSelf:"center",background:"rgba(0,0,0,0.06)",borderRadius:999,padding:"4px 14px",fontSize:9.5,color:"#777"}}>Conversation starts at the kiosk</div>}
          {msgs.map((m,i)=>(
            <div key={i} style={{display:"flex",justifyContent:m.me?"flex-end":"flex-start",animation:m.s===threadStep?`fadeInUp 0.35s ${i*0.12}s both`:"none"}}>
              <div style={{maxWidth:"84%",background:m.me?"#D9FDD3":"#fff",borderRadius:m.me?"9px 2px 9px 9px":"2px 9px 9px 9px",padding:"6px 10px",fontSize:11,lineHeight:1.45,color:"#222",boxShadow:"0 1px 1px rgba(0,0,0,0.06)"}}>{m.t}</div>
            </div>
          ))}
        </div>
        <div style={{flexShrink:0,padding:"7px 10px",background:"#F0F0F0",display:"flex",gap:8,alignItems:"center"}}>
          <div style={{flex:1,background:"#fff",borderRadius:999,padding:"6px 12px",fontSize:10,color:"#aaa"}}>Message…</div>
          <div style={{width:26,height:26,borderRadius:999,background:"#075E54",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="11" height="11" viewBox="0 0 24 24" fill="#fff"><path d="M2 21l21-9L2 3v7l15 2-15 2z"></path></svg></div>
        </div>
      </div>
      <div style={{textAlign:"center",padding:"7px 0 2px",fontSize:9,color:"rgba(255,255,255,0.45)",letterSpacing:1.5,fontWeight:700}}>SAME THREAD, END TO END</div>
    </div>
  );
}

function MZ2Card({ attrStep, x }){
  const attrs = MZ_ATTRS.filter(a=>a.s<=attrStep);
  const fresh = attrs.filter(a=>a.s===attrStep).length;
  const shown = attrs.slice(-3);
  const left = Math.max(12, Math.min(x-128, 1280-56-268));
  return (
    <div style={{position:"absolute",left,top:10,width:256,transition:"left 1.1s cubic-bezier(0.3,0.7,0.3,1)",zIndex:6}}>
      <div style={{background:"#fff",borderRadius:11,border:`1.5px solid ${CAD_PURPLE}`,boxShadow:"0 12px 30px rgba(42,20,88,0.30)",overflow:"hidden"}}>
        <div style={{background:CAD_PURPLE,padding:"6px 11px",display:"flex",alignItems:"center",gap:7}}>
          <span style={{width:6,height:6,borderRadius:999,background:CAD_GOLD,animation:"blink 1.4s infinite"}}></span>
          <span style={{color:"#fff",fontSize:9,fontWeight:800,letterSpacing:1.3}}>1PD PROFILE · LIVE</span>
          {fresh>0 && <span key={attrStep} style={{marginLeft:"auto",background:CAD_GOLD,color:"#3a2600",fontSize:9,fontWeight:800,borderRadius:999,padding:"1px 8px",animation:"fadeInUp 0.4s both"}}>+{fresh} new</span>}
        </div>
        <div style={{padding:"6px 11px 5px",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid #f0edf6"}}>
          {attrStep>=7
            ? <img key="ph" src={MZ_IMG.aarav} alt="" style={{width:24,height:24,borderRadius:999,objectFit:"cover",border:`1.5px solid ${CAD_GOLD}`,animation:"fadeInUp 0.4s both"}}/>
            : <div style={{width:24,height:24,borderRadius:999,background:"#EDE7F8",color:CAD_PURPLE,fontSize:10,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"}}>AM</div>}
          <div style={{flex:1}}><div style={{fontSize:11.5,fontWeight:700}}>Aarav Mehta</div><div style={{fontSize:8.5,color:"#999"}}>MDLZ-1PD-88412 · 400050</div></div>
          <div style={{textAlign:"right"}}><div style={{fontSize:14,fontWeight:800,color:CAD_PURPLE,lineHeight:1}}>{attrs.length}</div><div style={{fontSize:7,color:"#999",letterSpacing:0.5}}>ATTRS</div></div>
        </div>
        <div style={{padding:"5px 11px 3px"}}><div style={{height:4,background:"#EFEBF7",borderRadius:3,overflow:"hidden"}}><div style={{width:`${Math.round(attrs.length/MZ_ATTR_MAX*100)}%`,height:"100%",background:`linear-gradient(90deg,${CAD_PURPLE},${CAD_GOLD})`,transition:"width 0.9s ease"}}></div></div></div>
        <div style={{padding:"1px 5px 6px"}}>
          {shown.map((a,i)=>(
            <div key={a.k+a.s} style={{display:"flex",justifyContent:"space-between",gap:8,padding:"2.5px 7px",borderRadius:4,fontSize:9.5,background:a.s===attrStep?"#FDF3DC":"transparent"}}>
              <span style={{color:"#95919e",whiteSpace:"nowrap"}}>{a.k}</span><span style={{fontWeight:700,color:"#2a2632",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{a.v}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{width:2,height:14,background:CAD_PURPLE,margin:"0 auto",opacity:0.5}}></div>
    </div>
  );
}

/* journey rail: js = journey step 1..11 */
function MZ2Rail({ js, attrStep }){
  const n = MZ2_STATIONS.length;
  const xAt = (i)=> 88 + i*((1280-56*2-64)/(n-1));
  const ax = xAt(js-1);
  return (
    <div style={{position:"absolute",left:0,right:0,top:0,height:222,background:"linear-gradient(180deg,#F5F3F9,#EDE9F4)",borderBottom:"1px solid #E2DBEF",overflow:"hidden"}}>
      <style>{`@keyframes mz2Bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2.5px)}}@keyframes mz2Pkt{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(120px)}}`}</style>
      <div style={{position:"absolute",top:11,left:20,fontSize:10,fontWeight:800,letterSpacing:2,color:"#9a8fb5"}}>THE PROFILE'S JOURNEY — EVERY STATION IS A FREESTAND CAPABILITY</div>
      <MZ2Card attrStep={attrStep} x={ax}/>
      {/* path */}
      <div style={{position:"absolute",left:56,right:56,top:168,height:3,background:"#DDD5EA",borderRadius:2}}></div>
      <div style={{position:"absolute",left:56,top:168,height:3,width:ax-56,background:`linear-gradient(90deg,${CAD_PURPLE},${CAD_GOLD})`,borderRadius:2,transition:"width 1.1s cubic-bezier(0.3,0.7,0.3,1)"}}></div>
      {js<n && [0,1].map(i=>(
        <div key={i} style={{position:"absolute",left:ax+18,top:160,width:26,height:13,borderRadius:3,background:CAD_PURPLE,color:"#fff",fontSize:7,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",animation:`mz2Pkt 1.8s linear ${i*0.9}s infinite`,transition:"left 1.1s cubic-bezier(0.3,0.7,0.3,1)"}}>1PD</div>
      ))}
      {MZ2_STATIONS.map((st,i)=>{
        const x=xAt(i), done=i<js-1, act=i===js-1;
        return (
          <React.Fragment key={st}>
            <div style={{position:"absolute",left:x-8,top:161,width:16,height:16,borderRadius:999,background:act?CAD_GOLD:done?CAD_PURPLE:"#fff",border:act?`3px solid ${CAD_PURPLE}`:done?"none":"2px solid #C9BEDF",boxSizing:"border-box",zIndex:3,transition:"all 0.4s"}}></div>
            <div style={{position:"absolute",left:x-44,top:184,width:88,textAlign:"center",fontSize:9.5,fontWeight:act?800:600,color:act?CAD_PURPLE:done?"#6d5f8f":"#b3aac6",letterSpacing:0.3,transition:"color 0.4s"}}>{st}</div>
          </React.Fragment>
        );
      })}
      {/* avatar at active station */}
      <div style={{position:"absolute",left:ax-13,top:110,transition:"left 1.1s cubic-bezier(0.3,0.7,0.3,1)",zIndex:4,animation:"mz2Bob 0.6s ease-in-out infinite"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div style={{width:14,height:14,borderRadius:999,background:"#B07B5E"}}></div>
          <div style={{width:19,height:24,borderRadius:"6px 6px 3px 3px",background:"#1E6E5C",marginTop:-1}}></div>
          <div style={{display:"flex",gap:3}}><div style={{width:5,height:13,background:"#26324B",borderRadius:2}}></div><div style={{width:5,height:13,background:"#26324B",borderRadius:2}}></div></div>
        </div>
      </div>
    </div>
  );
}

/* Right capability panel wrapper */
function MZ2Panel({ kicker, title, sub, right, children }){
  return (
    <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column"}}>
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:10,flexShrink:0}}>
        <div>
          <div style={{fontSize:10.5,fontWeight:700,color:MZ_BLUE,letterSpacing:2,textTransform:"uppercase"}}>{kicker}</div>
          <div style={{fontSize:21,fontWeight:600,color:"#1a1a1a",marginTop:3}}>{title}</div>
          {sub && <div style={{fontSize:12.5,color:"#888",marginTop:3,fontWeight:300}}>{sub}</div>}
        </div>
        {right}
      </div>
      <div style={{flex:1,minHeight:0,display:"flex",flexDirection:"column",gap:12}}>{children}</div>
    </div>
  );
}

function MZ2Frame({ js, attrStep, threadStep, note, children }){
  return (
    <div style={{position:"absolute",inset:0,background:"#fff",fontFamily:"Roboto,-apple-system,sans-serif"}}>
      <MZ2Rail js={js} attrStep={attrStep}/>
      <div style={{position:"absolute",left:0,right:0,top:222,height:50,background:"#FBF9FE",borderBottom:"1px solid #EEE9F6",display:"flex",alignItems:"center",gap:16,padding:"0 28px"}}>
        <span style={{background:CAD_PURPLE,color:"#fff",fontSize:10,fontWeight:800,letterSpacing:1.5,borderRadius:999,padding:"5px 14px",whiteSpace:"nowrap",flexShrink:0}}>STATION {js} OF {MZ2_STATIONS.length}</span>
        <span key={js} style={{fontSize:13.5,color:"#3f3455",lineHeight:1.4,fontWeight:400,animation:"fadeInUp 0.5s both"}}>{note}</span>
      </div>
      <div style={{position:"absolute",left:0,right:0,top:272,bottom:0,padding:"16px 28px 18px",display:"flex",gap:22}}>
        <MZ2Phone threadStep={threadStep}/>
        <div key={js} style={{flex:1,minWidth:0,display:"flex",animation:"fadeInUp 0.5s 0.15s both"}}>{children}</div>
      </div>
    </div>
  );
}

function MZ2Cover(){
  const rows=[["Acquire","Pack QR, digital ads, retail activations, kiosks — every entry point converges into one WhatsApp + web-app experience"],["Enrich","PIN-code intelligence, affluence models and an AI agent consensus multiply every data point"],["Engage","Sampling stalls, gated quizzes, feedback loops — deployed per profile, not per campaign"],["Retain","Mondelez Joy Club: one parent-level program across 14 brands — points, tiers, lifecycle nudges"],["Own","24 consented attributes per consumer, CLTV & ROAS measurement, transfer into Mondelez's CDP"]];
  return (
    <div style={{position:"absolute",inset:0,background:`linear-gradient(150deg,${CAD_PURPLE_DK} 0%,${CAD_PURPLE} 52%,#4B2A94 100%)`,fontFamily:"Roboto,-apple-system,sans-serif",overflow:"hidden"}}>
      <div style={{position:"absolute",right:-180,top:-180,width:560,height:560,borderRadius:999,background:"radial-gradient(circle,rgba(232,164,23,0.22),transparent 65%)"}}></div>
      <div style={{position:"absolute",left:-140,bottom:-200,width:520,height:520,borderRadius:999,background:"radial-gradient(circle,rgba(255,255,255,0.07),transparent 65%)"}}></div>
      <div style={{position:"absolute",left:70,top:56}}><MdlzMark size={17} light/></div>
      <div style={{position:"absolute",left:70,top:150,width:620,fontSize:54,fontWeight:500,lineHeight:1.1,color:"#fff",letterSpacing:-1}}>The journey of<br/>one consumer profile —<br/><span style={{color:CAD_GOLD}}>2 fields to 24 attributes.</span></div>
      <div style={{position:"absolute",left:70,top:428,display:"flex",alignItems:"center",gap:14,background:"rgba(255,255,255,0.09)",border:"1px solid rgba(255,255,255,0.18)",borderRadius:14,padding:"12px 18px"}}>
        <img src={MZ_IMG.aarav} alt="" style={{width:52,height:52,borderRadius:999,objectFit:"cover",border:`2.5px solid ${CAD_GOLD}`}}/>
        <div>
          <div style={{color:"#fff",fontSize:15,fontWeight:700}}>Meet Aarav Mehta</div>
          <div style={{color:"rgba(255,255,255,0.7)",fontSize:11.5,marginTop:2}}>One walk through a mall · one WhatsApp thread · one owned profile</div>
        </div>
      </div>
      <div style={{position:"absolute",left:70,top:524,display:"flex",gap:24}}>
        {[["11","capability stations"],["24","consented attributes"],["14","brands, one Joy Club"]].map(([v,l])=>(
          <div key={l} style={{borderLeft:`3px solid ${CAD_GOLD}`,paddingLeft:12}}>
            <div style={{fontSize:24,fontWeight:800,color:CAD_GOLD,lineHeight:1}}>{v}</div>
            <div style={{fontSize:10.5,color:"rgba(255,255,255,0.7)",marginTop:3}}>{l}</div>
          </div>
        ))}
      </div>
      <button onClick={()=>window.dispatchEvent(new Event("mz2-next"))} style={{position:"absolute",left:70,top:626,display:"flex",alignItems:"center",gap:18,padding:"15px 30px",borderRadius:8,background:CAD_GOLD,border:"none",color:"#3a2600",fontSize:20,fontWeight:700,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap",boxShadow:"0 12px 30px rgba(0,0,0,0.3)"}}>
        Start the journey
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3a2600" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
      </button>
      <div style={{position:"absolute",left:70,bottom:64,fontSize:15,fontWeight:300,color:"rgba(255,255,255,0.7)"}}>Powered by</div>
      <div style={{position:"absolute",left:70,bottom:26}}><FSMark h={26} boxed/></div>
      <div style={{position:"absolute",right:210,bottom:200,transform:"rotate(-10deg)",filter:"drop-shadow(0 24px 40px rgba(0,0,0,0.45))"}}><MZDairyMilk w={96} qr/></div>
      <div style={{position:"absolute",right:60,top:64,bottom:64,width:410,borderRadius:14,background:"rgba(255,255,255,0.97)",padding:"30px 30px",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 30px 70px rgba(0,0,0,0.35)"}}>
        <div style={{fontSize:10.5,fontWeight:800,letterSpacing:2,color:CAD_PURPLE}}>WHAT THIS DEMO PROVES</div>
        {rows.map(([t,s],i)=>(
          <div key={t} style={{display:"flex",gap:15,alignItems:"flex-start"}}>
            <div style={{width:32,height:32,borderRadius:999,background:"#EDE7F8",color:CAD_PURPLE,fontSize:13,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{i+1}</div>
            <div><div style={{fontSize:16,fontWeight:700,color:"#111"}}>{t}</div><div style={{fontSize:12,color:"#777",marginTop:2,lineHeight:1.5,fontWeight:300}}>{s}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { MZ2_STATIONS, MZ2Phone, MZ2Card, MZ2Rail, MZ2Panel, MZ2Frame, MZ2Cover });
