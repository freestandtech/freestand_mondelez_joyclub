/* Cadbury-branded FreeStand web form (website sampling) — mirrors the chatbot questions & checks */
const WF_BRAND={top:"#4F2170",grad:"linear-gradient(180deg,#4F2170 0%,#6B3595 42%,#8C5BB0 100%)"};
function WFPhone({ children, footer=true }) {
  return (
    <div style={{position:"absolute",left:27,top:43,width:375,height:800,borderRadius:34,background:"#111",boxShadow:"0 12px 40px rgba(0,0,0,0.32), 0 0 0 6px #1c1c1c",padding:9,overflow:"hidden"}}>
      <div style={{width:"100%",height:"100%",borderRadius:26,background:WF_BRAND.grad,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        <div style={{height:56,background:WF_BRAND.top,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          <div style={{fontFamily:"Georgia,serif",fontStyle:"italic",fontWeight:700,fontSize:23,color:"#F2C94C"}}>Cadbury</div>
        </div>
        <div style={{flex:1,margin:"14px 16px",background:"#fff",borderRadius:4,display:"flex",flexDirection:"column",padding:"22px 18px",overflow:"hidden"}}>
          <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>{children}</div>
          {footer&&<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,fontSize:9,color:"#9CA3AF",flexShrink:0}}>
            Powered by <img src="mdlz/lite-fs-logo.png" alt="FreeStand" style={{height:13}}/>
          </div>}
        </div>
      </div>
    </div>
  );
}
const wfLabel={fontSize:13,fontWeight:700,color:"#1F2937",marginBottom:6};
const wfInput={width:"100%",border:"1.5px solid #0F2E6B",borderRadius:5,padding:"11px 12px",fontSize:13,color:"#111827",marginBottom:14,background:"#fff"};
const wfHint={fontSize:11,color:"#6B7280",marginTop:3,marginBottom:11,lineHeight:1.4};
const wfBtn={background:"#0F2E6B",color:"#fff",borderRadius:5,padding:"9px 18px",fontSize:12.5,fontWeight:600,alignSelf:"flex-end",marginTop:4};
function WFOpt({letter,text,picked}){
  return (
    <div style={{display:"flex",alignItems:"center",gap:10,border:`1.5px solid ${picked?"#F2C94C":"#0F2E6B"}`,background:picked?"#FDF8E7":"#fff",borderRadius:5,padding:"9px 11px",marginBottom:9}}>
      <div style={{width:22,height:22,borderRadius:3,background:picked?"#F2C94C":"#0F2E6B",color:picked?"#3a2600":"#fff",fontSize:11,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{letter}</div>
      <div style={{fontSize:12.5,color:"#1F2937",fontWeight:picked?600:400}}>{text}</div>
      {picked&&<div style={{marginLeft:"auto",color:"#8a6d00",fontWeight:700,fontSize:12}}>✓</div>}
    </div>
  );
}
function WFQuestion({q,sub,opts,picked,btn="Next"}){
  return (
    <React.Fragment>
      <div style={{fontSize:16,fontWeight:700,color:"#111827"}}>{q}</div>
      <div style={{fontSize:11.5,color:"#6B7280",margin:"5px 0 13px"}}>{sub||"Select that applies"}</div>
      {opts.map((o,i)=><WFOpt key={i} letter={"ABCD"[i]} text={o} picked={picked===i}/>)}
      <div style={wfBtn}>{btn}</div>
    </React.Fragment>
  );
}
function WFDetails(){
  return (
    <React.Fragment>
      <div style={wfLabel}>Name</div><div style={wfInput}>Aarav Mehta</div>
      <div style={wfLabel}>Email ID</div><div style={wfInput}>aarav.mehta@gmail.com</div>
      <div style={wfLabel}>WhatsApp Number</div><div style={wfInput}>9821044712</div>
      <div style={wfBtn}>Generate OTP</div>
    </React.Fragment>
  );
}
function WFOtp({filled}){
  return (
    <React.Fragment>
      <div style={{fontSize:16,fontWeight:700,color:"#111827"}}>Verification Code</div>
      <div style={{fontSize:11.5,color:"#6B7280",margin:"6px 0 16px",lineHeight:1.45}}>Enter the 6 digit verification code sent on 9821044712 to proceed</div>
      <div style={{display:"flex",gap:7,marginBottom:16}}>
        {["4","7","2","9","1","6"].map((d,i)=>(
          <div key={i} style={{flex:1,height:42,border:`1.5px solid ${filled?"#0F2E6B":"#C9CFDA"}`,borderRadius:5,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:600,color:"#111827"}}>{filled?d:""}</div>
        ))}
      </div>
      <div style={wfBtn}>Verify Code</div>
    </React.Fragment>
  );
}
function WFAddress({filled,pin,house,locality,city,state,btn}){
  return (
    <React.Fragment>
      <div style={{fontSize:15,fontWeight:700,color:"#111827"}}>Please enter your address</div>
      <div style={wfHint}>This will be used to check availability &amp; deliver your order</div>
      <div style={wfInput}>{filled?pin:<span style={{color:"#9CA3AF"}}>Six digit pincode</span>}</div>
      <div style={{fontSize:13.5,fontWeight:700,color:"#1F2937"}}>House / Flat / Building Number</div>
      <div style={wfHint}>Please enter exact information for timely delivery</div>
      <div style={{fontSize:10,color:"#6B7280",marginBottom:4}}>House Number &amp; Floor</div>
      <div style={wfInput}>{filled?house:<span style={{color:"#9CA3AF"}}>Example: 12th floor</span>}</div>
      <div style={{fontSize:10,color:"#6B7280",marginBottom:4}}>Locality</div>
      <div style={wfInput}>{filled?locality:<span style={{color:"#9CA3AF"}}>Example: Palm Court, Carter Road</span>}</div>
      <div style={{display:"flex",gap:10}}>
        <div style={{flex:1}}><div style={{fontSize:10,color:"#6B7280",marginBottom:4}}>City</div><div style={wfInput}>{filled?city:""}</div></div>
        <div style={{flex:1}}><div style={{fontSize:10,color:"#6B7280",marginBottom:4}}>State</div><div style={wfInput}>{filled?state:""}</div></div>
      </div>
      <div style={wfBtn}>{btn||"Next"}</div>
    </React.Fragment>
  );
}
function WFVerifying(){
  const rows=[["Checking address format…",1],["Validating pincode coverage…",1],["Verifying delivery serviceability…",1],["Confirming no duplicate claim…",0]];
  return (
    <React.Fragment>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:8,marginBottom:16}}>
        <div style={{width:42,height:42,borderRadius:999,background:"#EAF0FB",display:"flex",alignItems:"center",justifyContent:"center",fontSize:19}}>📍</div>
        <div style={{fontSize:15,fontWeight:700,color:"#111827"}}>Verifying Your Address</div>
        <div style={{fontSize:11,color:"#6B7280",textAlign:"center"}}>Please wait while we verify your delivery address</div>
      </div>
      {rows.map(([t,ok],i)=>(
        <div key={i} style={{display:"flex",alignItems:"center",gap:9,marginBottom:9,fontSize:11.5,color:"#374151"}}>
          <div style={{width:17,height:17,borderRadius:999,background:ok?"#27AE60":"#EAF0FB",color:ok?"#fff":"#0F2E6B",fontSize:9,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{ok?"✓":"◔"}</div>{t}
        </div>
      ))}
      <div style={{height:6,borderRadius:3,background:"#EEF1F6",marginTop:8,overflow:"hidden"}}><div style={{width:"72%",height:"100%",background:"#27AE60"}}/></div>
    </React.Fragment>
  );
}
function WFClaimed(){
  return (
    <div style={{textAlign:"left"}}>
      <div style={{fontSize:20,fontWeight:700,color:"#111827"}}>Sample claimed 🎉</div>
      <div style={{fontSize:13,color:"#374151",marginTop:10,lineHeight:1.6}}>Your free Cadbury Silk Hazelnut is on its way.<br/>You will receive a confirmation on <b>WhatsApp</b> shortly.</div>
      <div style={{marginTop:14,display:"inline-flex",alignItems:"center",gap:8,background:"#E8F6EC",border:"1px solid #BFE5CB",borderRadius:6,padding:"8px 12px",fontSize:11.5,fontWeight:700,color:"#1E7A38"}}>✓ MDLZ-5501-1147 · confirmed</div>
    </div>
  );
}
function WFRejected(){
  return (
    <div>
      <div style={{fontSize:16,fontWeight:700,color:"#111827"}}>You're already family 💜</div>
      <div style={{fontSize:12.5,color:"#374151",marginTop:9,lineHeight:1.6}}>This free-sample offer is for households yet to try Silk. You've been enrolled in <b>Joy Club</b> with 100 welcome points.</div>
      <div style={{marginTop:13,border:"1.5px dashed #C9B6DC",borderRadius:6,padding:"10px 12px",fontFamily:"ui-monospace,monospace",fontSize:14,fontWeight:700,color:"#4F2170",textAlign:"center"}}>SILKLOVE10</div>
      <div style={{fontSize:10.5,color:"#6B7280",marginTop:7,textAlign:"center"}}>10% off your next Silk pack</div>
    </div>
  );
}
const WF_SCREENS=[
  ()=><WFDetails/>,
  ()=><WFOtp filled={false}/>,
  ()=><WFOtp filled={true}/>,
  ()=><WFQuestion q="Which chocolate do you buy most often?" opts={["Cadbury Dairy Milk Silk","Amul Dark","Nestlé KitKat","Ferrero / other"]} picked={0}/>,
  ()=><WFRejected/>,
  ()=><WFQuestion q="Which chocolate do you buy most often?" opts={["Cadbury Dairy Milk Silk","Amul Dark","Nestlé KitKat","Ferrero / other"]} picked={1}/>,
  ()=><WFQuestion q="When do you usually reach for chocolate?" opts={["Self-treat","Gifting","For the kids","Festive"]} picked={0}/>,
  ()=><WFQuestion q="How often do you buy chocolate?" opts={["Weekly","Fortnightly","Monthly"]} picked={0}/>,
  ()=><WFAddress filled={false}/>,
  ()=><WFAddress filled={true} pin="400050" house="1203, Palm Court" locality="Carter Road, Bandra West" city="Mumbai" state="Maharashtra" btn="Submit"/>,
  ()=><WFVerifying/>,
  ()=><WFClaimed/>,
];
function WebFormPhone({ step }){
  const S=WF_SCREENS[Math.max(0,Math.min(WF_SCREENS.length-1,step||0))];
  return <WFPhone footer={true}><S/></WFPhone>;
}
Object.assign(window,{WebFormPhone,WFPhone});
