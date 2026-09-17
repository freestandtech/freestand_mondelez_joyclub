/* Mondelez promoter/retail-activation demo — stall scenes, promoter app, panels & stages */
const PROMO = {
  persona:{ name:"Meena Iyer", phone:"+91 98330 27641" },
  sku:{ name:"Cadbury Dairy Milk Silk Hazelnut", pack:"58 g launch bar", price:"₹199 value" },
  baselineCohorts:["In-store sampling","WhatsApp opt-in"],
};
function Person({x,y,skin="#C68863",shirt="#4F2170",hair="#2A1A0E",pants="#3A4A5C",flip=false,z=1}){
  return (
    <div style={{position:"absolute",left:x,top:y,width:110,height:310,zIndex:z,transform:flip?"scaleX(-1)":"none"}}>
      <div style={{position:"absolute",left:33,top:0,width:44,height:26,borderRadius:"22px 22px 0 0",background:hair}}/>
      <div style={{position:"absolute",left:35,top:10,width:40,height:42,borderRadius:"0 0 20px 20px",background:skin}}/>
      <div style={{position:"absolute",left:47,top:52,width:16,height:10,background:skin}}/>
      <div style={{position:"absolute",left:20,top:62,width:70,height:116,borderRadius:"18px 18px 8px 8px",background:shirt}}/>
      <div style={{position:"absolute",left:6,top:72,width:16,height:92,borderRadius:10,background:shirt}}/>
      <div style={{position:"absolute",left:88,top:72,width:16,height:92,borderRadius:10,background:shirt}}/>
      <div style={{position:"absolute",left:8,top:160,width:12,height:12,borderRadius:99,background:skin}}/>
      <div style={{position:"absolute",left:90,top:160,width:12,height:12,borderRadius:99,background:skin}}/>
      <div style={{position:"absolute",left:26,top:178,width:24,height:114,background:pants,borderRadius:"0 0 4px 4px"}}/>
      <div style={{position:"absolute",left:60,top:178,width:24,height:114,background:pants,borderRadius:"0 0 4px 4px"}}/>
      <div style={{position:"absolute",left:20,top:288,width:36,height:14,borderRadius:"8px 8px 2px 2px",background:"#222"}}/>
      <div style={{position:"absolute",left:56,top:288,width:36,height:14,borderRadius:"8px 8px 2px 2px",background:"#222"}}/>
    </div>
  );
}
function SampleBox({x,y,size=62,z=2,rot=0,anim}){
  return (
    <div style={{position:"absolute",left:x,top:y,width:size,height:size*1.25,zIndex:z,transform:`rotate(${rot}deg)`,borderRadius:6,background:"linear-gradient(160deg,#4F2170,#2E1145)",boxShadow:"0 4px 10px rgba(0,0,0,0.18)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,border:"2px solid rgba(255,255,255,0.5)",animation:anim}}>
      <MdlzLogo size={size*0.5}/>
      <div style={{fontSize:Math.max(6,size*0.1),fontWeight:800,color:"#F2C94C",letterSpacing:0.5,whiteSpace:"nowrap"}}>FREE SAMPLE</div>
    </div>
  );
}
function Bubble({x,y,w=260,tailX=34,children,z=5}){
  return (
    <div style={{position:"absolute",left:x,top:y,width:w,zIndex:z,animation:"fadeInUp 0.4s both"}}>
      <div style={{background:"#fff",border:"2px solid #4F2170",borderRadius:12,padding:"12px 16px",fontSize:15,fontWeight:600,color:"#1a1a1a",lineHeight:1.45,boxShadow:"0 8px 20px rgba(79,33,112,0.15)",whiteSpace:"pre-line"}}>{children}</div>
      <div style={{position:"absolute",left:tailX,bottom:-13,width:0,height:0,borderLeft:"10px solid transparent",borderRight:"10px solid transparent",borderTop:"14px solid #4F2170"}}/>
    </div>
  );
}
function StallScene({step,caption}){
  const handover = step==="handover";
  const showqr = step==="showqr";
  const customer = handover || showqr || step>=1;
  const custX = step===1 ? 1010 : 790;
  return (
    <div style={{position:"absolute",inset:0,background:"#F4EFF9",overflow:"hidden",fontFamily:"'Poppins',Arial,sans-serif"}}>
      <div style={{position:"absolute",left:0,top:0,right:0,height:54,background:"#4F2170",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{color:"#fff",fontSize:13,letterSpacing:4,fontWeight:600,opacity:0.85}}>SUPERMARKET · CONFECTIONERY AISLE</div>
      </div>
      <div style={{position:"absolute",left:1150,top:110,width:180,height:530,background:"#E6DCF0",borderRadius:6,padding:"14px 12px",display:"flex",flexDirection:"column",gap:24}}>
        {[0,1,2,3,4].map(r=>(
          <div key={r} style={{height:62,borderBottom:"5px solid #CDBEDD",display:"flex",alignItems:"flex-end",gap:6,paddingBottom:2}}>
            {[0,1,2].map(b=><div key={b} style={{width:34,height:46,borderRadius:3,background:["#C4B2D8","#D5C7E4","#B9A5CF"][(r+b)%3]}}/>)}
          </div>
        ))}
      </div>
      <div style={{position:"absolute",left:0,right:0,top:640,bottom:0,background:"#DDD8E3",borderTop:"3px solid #CBC3D4"}}/>
      <div style={{position:"absolute",left:110,top:664,width:880,height:186,borderRadius:12,background:"rgba(228,164,0,0.10)",border:"2px dashed rgba(228,164,0,0.45)"}}/>
      <div style={{position:"absolute",left:26,top:296,width:186,height:270,zIndex:1,transform:"rotate(-1.5deg)",border:"7px solid #fff",borderRadius:6,boxShadow:"0 10px 26px rgba(0,0,0,0.22)",overflow:"hidden",background:"#3B1A5E"}}>
        <img src="mdlz/lite-ad-cadbury.png" alt="Cadbury standee" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
      </div>
      <div style={{position:"absolute",left:96,top:566,width:46,height:52,background:"#9AA6B4",clipPath:"polygon(30% 0,70% 0,100% 100%,0 100%)"}}/>
      <Person x={368} y={350} shirt="#E4A400" z={1}/>
      <div style={{position:"absolute",left:388,top:428,padding:"2px 8px",background:"#fff",border:"1px solid #ccc",borderRadius:4,fontSize:9,fontWeight:700,color:"#4F2170",letterSpacing:1,zIndex:1}}>PROMOTER</div>
      <div style={{position:"absolute",left:246,top:216,width:14,height:424,background:"#2E1145",zIndex:2}}/>
      <div style={{position:"absolute",left:700,top:216,width:14,height:424,background:"#2E1145",zIndex:2}}/>
      <div style={{position:"absolute",left:214,top:154,width:532,height:70,borderRadius:10,background:"repeating-linear-gradient(90deg,#4F2170 0 44px,#F2C94C 44px 88px)",boxShadow:"0 6px 18px rgba(46,17,69,0.18)",zIndex:3}}/>
      <div style={{position:"absolute",left:214,top:224,width:532,height:13,borderRadius:"0 0 8px 8px",background:"#2E1145",zIndex:3}}/>
      <SampleBox x={286} y={392} z={2}/>
      <SampleBox x={356} y={392} z={2} rot={-3}/>
      <SampleBox x={590} y={392} z={2} rot={2}/>
      <div style={{position:"absolute",left:236,top:470,width:488,height:172,zIndex:3,borderRadius:"8px 8px 0 0",background:"#4F2170",boxShadow:"0 10px 24px rgba(46,17,69,0.22)",display:"flex",alignItems:"center",justifyContent:"center",gap:18}}>
        <MdlzLogo size={80}/>
        <div>
          <div style={{color:"#fff",fontSize:25,fontWeight:900,letterSpacing:1}}>SILK HAZELNUT LAUNCH</div>
          <div style={{color:"#F2C94C",fontSize:13,fontWeight:700,letterSpacing:3,marginTop:4}}>FREE SAMPLE DAY</div>
        </div>
      </div>
      <div style={{position:"absolute",left:236,top:470,width:488,height:12,background:"#F2C94C",zIndex:4,borderRadius:"8px 8px 0 0"}}/>
      {customer&&<Person x={custX} y={396} flip={true} shirt="#3E7D5A" hair="#1A1A1A" pants="#4A4A55" z={2}/>}
      {customer&&<div style={{position:"absolute",left:custX+20,top:474,padding:"2px 8px",background:"#fff",border:"1px solid #ccc",borderRadius:4,fontSize:9,fontWeight:700,color:"#3E7D5A",letterSpacing:1,zIndex:3}}>CUSTOMER</div>}
      {step===0&&(
        <div style={{position:"absolute",left:790,top:150,width:400,zIndex:5,animation:"fadeInUp 0.4s both"}}>
          <div style={{background:"#fff",border:"3px solid #4F2170",borderRadius:14,overflow:"hidden",boxShadow:"0 14px 36px rgba(79,33,112,0.22)"}}>
            <div style={{background:"#4F2170",color:"#fff",padding:"12px 18px",fontSize:15,fontWeight:800,letterSpacing:1,textAlign:"center"}}>CLAIM YOUR FREE SAMPLE</div>
            <div style={{display:"flex",gap:0}}>
              <div style={{flex:1,padding:"16px 14px",display:"flex",flexDirection:"column",alignItems:"center",gap:8,borderRight:"1px solid #EDE7F4"}}>
                <div style={{background:"#fff",border:"2px solid #4F2170",borderRadius:8,padding:6}}><QRCode size={92} seed={13}/></div>
                <div style={{fontSize:12.5,fontWeight:800,color:"#4F2170",textAlign:"center"}}>Option 1 — Scan the QR</div>
                <div style={{fontSize:10.5,color:"#667",textAlign:"center",lineHeight:1.45}}>Scan with your phone to start the claim yourself</div>
              </div>
              <div style={{flex:1,padding:"16px 14px",display:"flex",flexDirection:"column",alignItems:"center",gap:8}}>
                <div style={{width:104,height:104,borderRadius:8,background:"#FDF6E3",border:"2px solid #E4A400",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4}}>
                  <div style={{fontSize:30}}>📱</div>
                  <div style={{fontSize:14,fontWeight:800,color:"#B07E00",fontFamily:"monospace"}}>+91 _____</div>
                </div>
                <div style={{fontSize:12.5,fontWeight:800,color:"#4F2170",textAlign:"center"}}>Option 2 — Give your number</div>
                <div style={{fontSize:10.5,color:"#667",textAlign:"center",lineHeight:1.45}}>The promoter enters it and initiates the claim for you</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step===0&&<Bubble x={470} y={236} w={270} tailX={30}>Free Silk Hazelnut today! 🍫{"\n"}Scan the QR or give me{"\n"}your number to claim.</Bubble>}
      {step===1&&<Bubble x={480} y={248} w={290} tailX={30}>Hi! Want a free Cadbury sample?{"\n"}Takes 30 seconds on WhatsApp.</Bubble>}
      {step===2&&<Bubble x={640} y={240} w={280} tailX={210}>Sure — my number is{"\n"}<span style={{fontFamily:"monospace",fontWeight:800,color:"#4F2170",fontSize:17}}>98330 27641</span> 📱</Bubble>}
      {showqr&&<Bubble x={620} y={228} w={300} tailX={230}>Got my claim pass!{"\n"}Here's the QR code 👇</Bubble>}
      {showqr&&(
        <div style={{position:"absolute",left:706,top:400,width:112,height:210,zIndex:6,transform:"rotate(8deg)",borderRadius:16,background:"#111",boxShadow:"0 12px 30px rgba(0,0,0,0.35)",padding:6,animation:"fadeInUp 0.45s 0.2s both"}}>
          <div style={{width:"100%",height:"100%",borderRadius:11,background:"#ECE5DD",display:"flex",flexDirection:"column",alignItems:"center",overflow:"hidden"}}>
            <div style={{width:"100%",height:22,background:"#075E54",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:7,fontWeight:700,letterSpacing:0.5}}>Mondelez India ✓</div>
            <div style={{marginTop:14,background:"#fff",padding:6,borderRadius:6,boxShadow:"0 2px 6px rgba(0,0,0,0.15)"}}><QRCode size={80}/></div>
            <div style={{fontSize:6.5,fontFamily:"monospace",color:"#555",marginTop:6}}>MDLZ-STALL-4471</div>
          </div>
        </div>
      )}
      {showqr&&<div style={{position:"absolute",left:806,top:434,width:34,height:34,borderRadius:999,background:"#E4A400",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,zIndex:7,boxShadow:"0 4px 12px rgba(228,164,0,0.4)",animation:"popIn 0.4s 0.5s both"}}>📷</div>}
      {handover&&<Bubble x={470} y={240} w={290} tailX={30}>Claim verified ✓{"\n"}Here's your Silk Hazelnut — enjoy! 💜</Bubble>}
      {handover&&<SampleBox x={716} y={430} size={70} z={5} rot={-6} anim="popIn 0.45s 0.3s both"/>}
      {handover&&<div style={{position:"absolute",left:768,top:398,width:36,height:36,borderRadius:999,background:"#2E7D32",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,fontWeight:900,zIndex:6,boxShadow:"0 4px 12px rgba(46,125,50,0.4)",animation:"popIn 0.4s 0.6s both"}}>✓</div>}
      <div style={{position:"absolute",left:36,bottom:30,zIndex:7,background:"#4F2170",color:"#fff",borderRadius:10,padding:"14px 20px",maxWidth:600,boxShadow:"0 10px 30px rgba(46,17,69,0.35)",display:"flex",gap:14,alignItems:"center"}}>
        <div style={{background:"#E4A400",color:"#2E1145",borderRadius:6,padding:"6px 10px",fontSize:12,fontWeight:900,letterSpacing:1,flexShrink:0}}>{caption.tag}</div>
        <div>
          <div style={{fontSize:16,fontWeight:700}}>{caption.title}</div>
          <div style={{fontSize:11.5,opacity:0.8,marginTop:2,lineHeight:1.4}}>{caption.sub}</div>
        </div>
      </div>
    </div>
  );
}
function PromoterApp({mode}){
  return (
    <div style={{position:"absolute",left:27,top:43,width:375,height:800,overflow:"hidden",background:"#fff",borderRadius:30,boxShadow:"0 12px 40px rgba(0,0,0,0.3), 0 0 0 6px #111",display:"flex",flexDirection:"column",fontFamily:"'Poppins',Arial,sans-serif"}}>
      <div style={{height:30,background:"#0D2A6B",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",flexShrink:0}}>
        <span style={{fontSize:11,fontWeight:600,color:"#fff"}}>9:38</span>
        <span style={{fontSize:10,color:"rgba(255,255,255,0.9)"}}>●●●● 100%</span>
      </div>
      <div style={{background:"#0D2A6B",padding:"12px 16px 14px",flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <FSLogo h={20} white={true}/>
          <div style={{fontSize:11,color:"rgba(255,255,255,0.7)",fontWeight:600,letterSpacing:1,borderLeft:"1px solid rgba(255,255,255,0.3)",paddingLeft:10}}>PROMOTER</div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:9,marginTop:12}}>
          <div style={{width:30,height:30,borderRadius:999,background:"#E4A400",color:"#2E1145",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700}}>RK</div>
          <div>
            <div style={{fontSize:12.5,fontWeight:700,color:"#fff"}}>Ravi Kumar</div>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.65)"}}>Stall 04 · Phoenix Mills, Lower Parel</div>
          </div>
          <div style={{marginLeft:"auto",padding:"3px 9px",borderRadius:999,background:"rgba(255,255,255,0.15)",fontSize:9.5,color:"#7FE08A",fontWeight:700}}>● ON SHIFT</div>
        </div>
      </div>
      <div style={{margin:"12px 14px 0",padding:"10px 14px",borderRadius:10,background:"#F5EEFB",border:"1px solid #DCC9EC",display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
        <MdlzLogo size={30}/>
        <div style={{flex:1}}>
          <div style={{fontSize:12,fontWeight:700,color:"#4F2170"}}>Silk Hazelnut Launch — Free Sample Day</div>
          <div style={{fontSize:9.5,color:"#7B4FA8",marginTop:1}}>Sep 2026 · Mondelez India</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:15,fontWeight:900,color:"#E4A400"}}>{mode==="scan"?283:284}</div>
          <div style={{fontSize:8.5,color:"#7B4FA8",letterSpacing:0.5}}>STOCK</div>
        </div>
      </div>
      {mode==="input" ? (
        <div style={{flex:1,display:"flex",flexDirection:"column",padding:"16px 14px 14px"}}>
          <div style={{fontSize:11,fontWeight:700,color:"#0D2A6B",letterSpacing:1,textTransform:"uppercase"}}>New claim</div>
          <div style={{fontSize:10.5,color:"#889",marginTop:3}}>Enter the customer's phone number to start their WhatsApp journey</div>
          <div style={{marginTop:12,padding:"13px 16px",borderRadius:12,border:"2px solid #E4A400",background:"#fff",display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 14px rgba(228,164,0,0.15)"}}>
            <span style={{fontSize:15,color:"#889",fontWeight:600}}>+91</span>
            <span style={{fontSize:21,fontWeight:700,color:"#1a1a1a",fontFamily:"monospace",letterSpacing:1}}>98330 27641</span>
            <span style={{width:2,height:24,background:"#E4A400",animation:"blink 1s infinite"}}></span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginTop:14}}>
            {["1","2","3","4","5","6","7","8","9","•","0","⌫"].map((k,i)=>(
              <div key={i} style={{height:52,borderRadius:10,background:"#F2F5FA",border:"1px solid #E2E8F2",display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,fontWeight:600,color:"#1a2a4a"}}>{k}</div>
            ))}
          </div>
          <div style={{marginTop:"auto"}}>
            <div style={{display:"flex",gap:8,marginBottom:10}}>
              {["Today: 52 claims","Verified: 47","Queue: 0"].map((t,i)=>(
                <div key={i} style={{flex:1,padding:"7px 4px",textAlign:"center",borderRadius:8,background:"#F2F5FA",fontSize:9.5,fontWeight:600,color:"#445"}}>{t}</div>
              ))}
            </div>
            <div style={{height:50,borderRadius:12,background:"linear-gradient(135deg,#4F2170,#2E1145)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,color:"#fff",fontSize:15,fontWeight:700,boxShadow:"0 6px 18px rgba(79,33,112,0.35)",animation:"pulse 1.8s infinite"}}>Send WhatsApp journey →</div>
          </div>
        </div>
      ) : (
        <div style={{flex:1,display:"flex",flexDirection:"column",padding:"14px"}}>
          <div style={{fontSize:11,fontWeight:700,color:"#0D2A6B",letterSpacing:1,textTransform:"uppercase",marginBottom:8}}>Scan claim QR</div>
          <div style={{position:"relative",height:320,borderRadius:14,background:"#0E1420",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <div style={{background:"#fff",padding:12,borderRadius:8}}><QRCode size={164}/></div>
            <div style={{position:"absolute",left:16,top:16,width:34,height:34,borderTop:"4px solid #42E07A",borderLeft:"4px solid #42E07A",borderRadius:"6px 0 0 0"}}></div>
            <div style={{position:"absolute",right:16,top:16,width:34,height:34,borderTop:"4px solid #42E07A",borderRight:"4px solid #42E07A",borderRadius:"0 6px 0 0"}}></div>
            <div style={{position:"absolute",left:16,bottom:16,width:34,height:34,borderBottom:"4px solid #42E07A",borderLeft:"4px solid #42E07A",borderRadius:"0 0 0 6px"}}></div>
            <div style={{position:"absolute",right:16,bottom:16,width:34,height:34,borderBottom:"4px solid #42E07A",borderRight:"4px solid #42E07A",borderRadius:"0 0 6px 0"}}></div>
            <div style={{position:"absolute",left:"8%",right:"8%",height:3,borderRadius:2,background:"linear-gradient(90deg,transparent,#42E07A,transparent)",animation:"scanline 2.4s ease-in-out infinite"}}></div>
          </div>
          <div style={{marginTop:12,padding:"12px 14px",borderRadius:12,background:"#E8F5E9",border:"2px solid #4A8C5C",display:"flex",gap:10,alignItems:"center",animation:"popIn 0.4s 0.5s both"}}>
            <div style={{width:34,height:34,borderRadius:999,background:"#2E7D32",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:900,flexShrink:0}}>✓</div>
            <div>
              <div style={{fontSize:13,fontWeight:800,color:"#1B5E20"}}>Claim verified</div>
              <div style={{fontSize:10,color:"#4C7A50",fontFamily:"monospace",marginTop:1}}>MDLZ-STALL-4471 · Meena I.</div>
            </div>
          </div>
          <div style={{marginTop:10,padding:"10px 12px",borderRadius:10,background:"#F2F5FA",display:"flex",alignItems:"center",gap:10}}>
            <MdlzLogo size={26}/>
            <div style={{fontSize:10.5,fontWeight:600,color:"#334",lineHeight:1.4}}>Hand over 1 × Cadbury Dairy Milk<br/>Silk Hazelnut · 58 g launch bar</div>
          </div>
          <div style={{marginTop:"auto",height:48,borderRadius:12,background:"#2E7D32",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,fontWeight:700}}>Mark as handed over ✓</div>
        </div>
      )}
    </div>
  );
}
function JourneyPanel(){
  return (
    <div style={window.panelFrame}>
      <PanelHeader icon="📲" title="Journey initiated" sub="FreeStand Promoter app → WhatsApp" statusColor="#E4A400" statusText="SENT"/>
      <div style={{padding:"22px 28px"}}>
        {[
          {t:"Phone number captured at the stall",s:"Typed by the promoter — no app install or form for the customer",done:true},
          {t:"Duplicate check passed",s:"98330 27641 has not claimed in this campaign · velocity limits OK",done:true},
          {t:"WhatsApp journey fired",s:"Mondelez India template delivered to the customer's phone in ~2 s",done:true},
          {t:"Consent pending",s:"The journey continues on the customer's own phone — next screen",done:false},
        ].map((r,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"13px 16px",borderRadius:8,marginBottom:9,background:r.done?"#E8F5E9":"#FFF8E8",border:`1px solid ${r.done?"#A5D6A7":"#F0DCA8"}`}}>
            <div style={{width:26,height:26,borderRadius:999,background:r.done?"#2E7D32":"#E0A800",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:700,flexShrink:0}}>{r.done?"✓":"…"}</div>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:"#1a1a1a"}}>{r.t}</div>
              <div style={{fontSize:11.5,color:"#888",marginTop:2}}>{r.s}</div>
            </div>
          </div>
        ))}
        <div style={{marginTop:16,padding:"14px 18px",borderRadius:10,background:"#F5EEFB",border:"1px solid #DCC9EC",display:"flex",gap:12,alignItems:"center"}}>
          <div style={{fontSize:22,flexShrink:0}}>🔒</div>
          <div style={{fontSize:12,color:"#334",lineHeight:1.55}}><strong style={{color:"#4F2170"}}>Privacy by design</strong> — the promoter only ever sees claim status (Pending → Verified → Handed over), never the customer's chat or profile.</div>
        </div>
        <div style={{display:"flex",gap:8,marginTop:16,flexWrap:"wrap"}}>
          {["Stall: Phoenix Mills, Lower Parel","Promoter: Ravi Kumar","Campaign stock: 284","GPS + timestamp logged"].map((t,i)=>(
            <div key={i} style={{padding:"6px 12px",borderRadius:5,fontSize:11.5,fontWeight:500,color:"#1a1a1a",background:tagBg(i)}}>{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
function QRPanel(){
  return (
    <div style={window.panelFrame}>
      <PanelHeader icon="🎟️" title="Claim pass issued" sub="Single-use QR — redeemable only at this stall" statusColor="#E4A400" statusText="ACTIVE"/>
      <div style={{padding:"22px 28px",display:"grid",gridTemplateColumns:"290px 1fr",gap:24}}>
        <div style={{borderRadius:12,border:"2px solid #4F2170",padding:"18px 18px 14px",display:"flex",flexDirection:"column",alignItems:"center",gap:10,background:"#fff",boxShadow:"0 8px 24px rgba(79,33,112,0.12)"}}>
          <QRCode size={200}/>
          <div style={{fontSize:13,fontFamily:"monospace",fontWeight:700,color:"#4F2170",letterSpacing:1}}>MDLZ-STALL-4471</div>
          <div style={{fontSize:11,color:"#888",textAlign:"center"}}>Meena Iyer · +91 98330 27641</div>
          <div style={{padding:"4px 14px",borderRadius:999,background:"#FDF6E3",border:"1px solid #E4A400",fontSize:10.5,fontWeight:700,color:"#8a6d00"}}>Expires in 29:41</div>
        </div>
        <div>
          <div style={{fontSize:12,fontWeight:700,color:"#4F2170",letterSpacing:0.5,textTransform:"uppercase",marginBottom:10}}>Fraud controls</div>
          {[
            {t:"Single-use",s:"The pass burns the instant a promoter scans it"},
            {t:"30-minute expiry",s:"Can't be saved and redeemed later or shared in groups"},
            {t:"Geo-locked",s:"Valid only at the issuing stall — scans elsewhere are rejected"},
            {t:"Promoter-scan only",s:"Redemption needs an authenticated promoter device"},
          ].map((r,i)=>(
            <div key={i} style={{display:"flex",gap:12,alignItems:"center",padding:"10px 14px",borderRadius:8,marginBottom:7,background:"#f8f9fb",border:"1px solid #e8ecf2"}}>
              <div style={{width:22,height:22,borderRadius:999,background:"#4F2170",color:"#fff",fontSize:11,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{i+1}</div>
              <div>
                <div style={{fontSize:13,fontWeight:700,color:"#1a1a1a"}}>{r.t}</div>
                <div style={{fontSize:11,color:"#888",marginTop:1}}>{r.s}</div>
              </div>
            </div>
          ))}
          <div style={{marginTop:12,padding:"11px 14px",borderRadius:10,background:"#F5EEFB",border:"1px solid #DCC9EC",display:"flex",alignItems:"center",gap:12}}>
            <MdlzLogo size={30}/>
            <div>
              <div style={{fontSize:12.5,fontWeight:700,color:"#4F2170"}}>Cadbury Dairy Milk Silk Hazelnut</div>
              <div style={{fontSize:10.5,color:"#888",marginTop:1}}>58 g launch bar · ₹199 value · reserved at Stall 04</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function VerifyPanel(){
  return (
    <div style={{...window.panelFrame,border:"5px solid #2E7D32"}}>
      <PanelHeader icon="✅" title="Claim verified" sub="Scanned in 0.4 s · FreeStand Promoter app" statusColor="#2E7D32" statusText="REDEEMED"/>
      <div style={{padding:"22px 28px"}}>
        <div style={{padding:"16px 20px",borderRadius:10,background:"#E8F5E9",border:"1px solid #A5D6A7",display:"flex",alignItems:"center",gap:16,marginBottom:20}}>
          <div style={{width:46,height:46,borderRadius:999,background:"#2E7D32",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:22,fontWeight:700,flexShrink:0}}>✓</div>
          <div>
            <div style={{fontSize:17,fontWeight:700,color:"#1B5E20"}}>MDLZ-STALL-4471 — Meena Iyer</div>
            <div style={{fontSize:12,color:"#4CAF50",marginTop:3}}>Hand over 1 × Cadbury Dairy Milk Silk Hazelnut · 58 g</div>
          </div>
        </div>
        <div style={{fontSize:12,fontWeight:700,color:"#4F2170",letterSpacing:0.5,textTransform:"uppercase",marginBottom:10}}>Verification checks</div>
        {[
          ["QR signature valid","Signed by FreeStand — not a screenshot forgery"],
          ["Not previously redeemed","First scan of this pass across all stalls"],
          ["Within 30-minute expiry","Issued 2 min 14 s ago"],
          ["Geo-fence match","Scanned at the issuing stall — Phoenix Mills, Lower Parel"],
        ].map(([t,s],i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",borderRadius:8,marginBottom:7,background:"#f8f9fb",border:"1px solid #e8ecf2"}}>
            <div style={{width:24,height:24,borderRadius:999,background:"#2E7D32",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:12,fontWeight:700,flexShrink:0}}>✓</div>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:600,color:"#1a1a1a"}}>{t}</div>
              <div style={{fontSize:11,color:"#888",marginTop:1}}>{s}</div>
            </div>
          </div>
        ))}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginTop:16}}>
          {[
            {label:"Stall stock",val:"284 → 283",sub:"Decremented on scan"},
            {label:"Promoter tally",val:"53 today",sub:"Ravi Kumar · Stall 04"},
            {label:"Audit trail",val:"Logged",sub:"GPS + timestamp + device ID"},
          ].map((k,i)=>(
            <div key={i} style={{background:"#fff",borderRadius:8,padding:"14px 16px",border:"1px solid #e2d8ec"}}>
              <div style={{fontSize:11,color:"#888"}}>{k.label}</div>
              <div style={{fontSize:20,fontWeight:700,marginTop:3,color:"#4F2170"}}>{k.val}</div>
              <div style={{fontSize:10,color:"#2B8A3E",marginTop:2}}>{k.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Object.assign(window,{Person,SampleBox,Bubble,StallScene,PromoterApp,JourneyPanel,QRPanel,VerifyPanel,PROMO});
