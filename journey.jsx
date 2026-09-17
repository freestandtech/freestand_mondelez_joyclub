/* Mondelez sampling journey — shared by Website & Digital demos. window.DEMO_MODE = "website" | "digital" */
const MODE = window.DEMO_MODE||"digital";
const WEB = MODE==="website";

const CONSENT_MSG = "Welcome to the Cadbury Silk Hazelnut launch! 👋\n\nWe're giving away FREE Silk Hazelnut bars so India can taste the new recipe first.\n\nBy continuing you agree to receive messages from Mondelez brands on WhatsApp.";
const BRAND_Q = "First things first — which chocolate do you buy most often? 🍫";
const BRAND_OPTS = ["Cadbury Dairy Milk Silk","Amul Dark","Nestlé KitKat","Ferrero / other"];
const REJECT_MSG = "You're already part of the Silk family! 💜\n\nThis free-sample offer is for people who haven't tried Silk yet. But loyalty deserves love — you've been enrolled in Joy Club with 100 welcome points, and here's 10% off your next Silk: SILKLOVE10 🎟️";
const APPROVE_MSG = "An Amul Dark fan — you're exactly who we made this launch for! 😄\n\nJust 2 quick questions before we send your free Silk Hazelnut.";
const Q2 = "When do you usually reach for chocolate?";
const Q2_OPTS = ["Self-treat","Gifting","For the kids","Festive"];
const Q3 = "How often do you buy chocolate?";
const Q3_OPTS = ["Weekly","Fortnightly","Monthly"];
const PIN_Q = "Great! Now enter your pincode so we can pick the right sample for your area 📍";

const CONVO = [
  {bot:CONSENT_MSG,opts:["I agree ✓","No thanks"],picked:0},
  {user:"I agree ✓"},
  {bot:BRAND_Q,opts:BRAND_OPTS,picked:1},
  {user:"Amul Dark"},
  {bot:APPROVE_MSG},
  {bot:Q2,opts:Q2_OPTS,picked:0},
  {user:"Self-treat"},
  {bot:Q3,opts:Q3_OPTS,picked:0},
  {user:"Weekly"},
  {bot:PIN_Q},
  {user:"400050"},
  {bot:"Bandra West! ✨ You're getting the launch hero:\n\n🍫 Cadbury Dairy Milk Silk Hazelnut (58 g)\n\nA ₹199 bar — free, before it hits shelves."},
  {bot:"Now share your full address with flat/apartment/city 🏠"},
  {user:"1203, Palm Court, Carter Road, Bandra West, Mumbai 400050"},
  {bot:"Verifying your address…"},
  {bot:"✅ Address verified — no duplicate claims, cold-chain serviceable.\n\nYour Silk Hazelnut sample is confirmed! 🎊\nTracking: MDLZ-5501-1147\n\nArrives in 3–5 days."},
  {bot:"Your Cadbury sample is out for delivery today! 🚚\n\nShare OTP 4729 with the delivery partner."},
  {user:"Received it! 📦"},
  {bot:"You've had a few days with Silk Hazelnut — moment of truth! 😄\n\nHow was it?",opts:["😍 Loved it","🙂 Good","😐 Same as my brand","😕 Not for me"],picked:0},
  {user:"😍 Loved it — the hazelnut crunch is unreal"},
  {bot:"That's what we like to hear! 💜\n\nHere's 15% off your first full-size Silk Hazelnut: SWITCH15 🎟️\n\nAvailable on:",opts:["🛒 Amazon","🛍️ Blinkit","🏪 Local store"]},
  {bot:"One more thing — you're now a Mondelez Joy Club member! 🎁\n\nMember #JC-88412 · 100 welcome points\n\nEarn on feedback, photos, receipts & referrals across 14 Mondelez brands. No signup needed — you're already in."},
];

function msgsFor(stage){
  if(stage.branch) return [...CONVO.slice(0,stage.base),...stage.branch];
  return CONVO.slice(0,stage.through||0);
}

/* Entry scenes */
function WebsiteScene(){
  return (
    <div style={{position:"absolute",inset:0,background:"#fff"}}>
      <div style={{position:"absolute",left:50,top:38,fontSize:11.5,fontWeight:700,color:"#5B6577",letterSpacing:2,textTransform:"uppercase"}}>CUSTOMER CLAIM PROCESS — BRAND WEBSITE</div>
      <div style={{position:"absolute",left:50,top:80,width:640,height:730,borderRadius:12,overflow:"hidden",boxShadow:"0 14px 40px rgba(0,0,0,0.18)",border:"1px solid #ddd",background:"#fff"}}>
        <div style={{height:36,background:"#f1f3f5",display:"flex",alignItems:"center",gap:8,padding:"0 12px",borderBottom:"1px solid #e0e2e6"}}>
          <span style={{width:10,height:10,borderRadius:99,background:"#FC5753"}}></span><span style={{width:10,height:10,borderRadius:99,background:"#FDBC40"}}></span><span style={{width:10,height:10,borderRadius:99,background:"#33C748"}}></span>
          <div style={{flex:1,margin:"0 30px",height:22,borderRadius:11,background:"#fff",border:"1px solid #e0e2e6",display:"flex",alignItems:"center",padding:"0 12px",fontSize:10.5,color:"#667"}}>🔒 cadbury.in/silk-hazelnut — claim your free bar</div>
        </div>
        <div style={{position:"relative",height:694,overflow:"hidden",background:"#fff",display:"flex",flexDirection:"column"}}>
          <img src="mdlz/mini-cadbury-nav.png?v=2" alt="cadbury.in header" style={{width:"100%",height:48,objectFit:"cover",objectPosition:"left center",display:"block",flexShrink:0,background:"#4F2170"}}/>
          <div style={{flex:1,background:"linear-gradient(135deg,#3B1560 0%,#4F2170 60%,#5E2E85 100%)",display:"flex",flexDirection:"column"}}>
            <div style={{padding:"26px 26px 0"}}>
              <div style={{fontSize:10.5,fontWeight:800,letterSpacing:2.2,color:"#F2C94C"}}>NEW LAUNCH · LIMITED</div>
              <div style={{fontSize:33,fontWeight:800,color:"#fff",lineHeight:1.12,marginTop:9,letterSpacing:-0.6,maxWidth:420}}>Claim your free Silk Hazelnut</div>
              <div style={{fontSize:13.5,color:"rgba(255,255,255,0.82)",marginTop:9,lineHeight:1.5,maxWidth:400}}>Free launch samples for the first 50,000 households.</div>
              <div style={{marginTop:16,display:"inline-flex",alignItems:"center",gap:10,background:"#25D366",borderRadius:10,padding:"13px 22px",fontSize:14,fontWeight:700,color:"#fff",animation:"pulse 1.8s ease-in-out infinite",boxShadow:"0 8px 22px rgba(37,211,102,0.35)"}}>
                Claim free sample <span>→</span>
              </div>
            </div>
            <div style={{margin:"18px 26px 0",borderRadius:14,overflow:"hidden",boxShadow:"0 16px 34px rgba(0,0,0,0.3)"}}>
              <img src="mdlz/mini-hero-silk.png?v=2" alt="Cadbury pack" style={{width:"100%",height:224,objectFit:"cover",objectPosition:"center center",display:"block"}}/>
            </div>
            <div style={{marginTop:"auto",display:"flex",gap:8,padding:"16px 26px"}}>
              {[["1","Tap the button"],["2","Answer 3 questions"],["3","Sample at your door"]].map(([n,t])=>(
                <div key={n} style={{flex:1,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"9px 10px"}}>
                  <div style={{fontSize:10,fontWeight:800,color:"#F2C94C"}}>{n}</div>
                  <div style={{fontSize:11,fontWeight:600,color:"#fff",marginTop:3,lineHeight:1.3}}>{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{height:38,background:"#2E1145",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",fontSize:10.5,color:"rgba(255,255,255,0.62)",flexShrink:0}}>
            <span>cadbury.in · Mondelez India</span><span>Terms apply · One pack per household</span>
          </div>
        </div>
      </div>
      <TimelineRail x={760} items={[
        "Customer lands on the brand website",
        "The claim form opens right on the page",
        "Brand screening — Silk buyers routed to Joy Club",
        "Competitor users qualified with brand questions",
        "Pincode decides which SKU ships",
        "Delivery + OTP verification",
        "Feedback captured → auto-enrolled in Joy Club",
      ]}/>
    </div>
  );
}
function IGAdScene(){
  return (
    <div style={{position:"absolute",inset:0,background:"#fff"}}>
      <div style={{position:"absolute",left:50,top:38,fontSize:11.5,fontWeight:700,color:"#5B6577",letterSpacing:2,textTransform:"uppercase"}}>CUSTOMER CLAIM PROCESS — DIGITAL ADS</div>
      <div style={{position:"absolute",left:50,top:80,width:390,height:760,borderRadius:36,background:"#fff",overflow:"hidden",boxShadow:"0 14px 40px rgba(0,0,0,0.15), 0 0 0 8px #111 inset, 0 0 0 9px #333"}}>
        <div style={{position:"absolute",inset:8,borderRadius:28,background:"#fff",overflow:"hidden"}}>
          <div style={{height:32,padding:"0 20px",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:13,fontWeight:600}}>
            <span>9:41</span><span style={{fontSize:11}}>●●●● 100%</span>
          </div>
          <div style={{height:42,padding:"0 14px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"0.5px solid #dbdbdb"}}>
            <div style={{fontFamily:"cursive",fontSize:22}}>Instagram</div>
            <div style={{display:"flex",gap:16,fontSize:18}}>♡ ✈</div>
          </div>
          <div style={{padding:"8px 12px",display:"flex",alignItems:"center",gap:8}}>
            <MdlzLogo size={32}/>
            <div>
              <div style={{fontSize:12,fontWeight:600}}>cadburydairymilk.in</div>
              <div style={{fontSize:10,color:"#8e8e8e"}}>Sponsored</div>
            </div>
            <div style={{marginLeft:"auto",fontSize:16}}>···</div>
          </div>
          <div style={{height:340,position:"relative",overflow:"hidden",background:"#3B1A5E"}}>
            <img src="mdlz/mini-ad-ig.png" alt="Cadbury ad" style={{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center"}}/>
            <div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent,rgba(46,17,69,0.92))",padding:"20px 14px 10px",color:"#fff"}}>
              <div style={{fontSize:12,fontWeight:700}}>Claim your free Silk Hazelnut 🎁</div>
              <div style={{fontSize:10,opacity:0.85,marginTop:1}}>First 50,000 households only</div>
            </div>
          </div>
          <div style={{margin:"10px 12px",background:"#fafafa",borderRadius:8,padding:"10px 12px",display:"flex",alignItems:"center",justifyContent:"space-between",border:"0.5px solid #dbdbdb",animation:"pulse 1.8s ease-in-out infinite"}}>
            <div>
              <div style={{fontSize:12,fontWeight:600}}>Chat on WhatsApp</div>
              <div style={{fontSize:10,color:"#8e8e8e",marginTop:1}}>cadbury.in/free-sample</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <div style={{padding:"0 12px",fontSize:11.5,lineHeight:1.45}}>
            <div style={{fontWeight:600}}>12,806 likes</div>
            <div style={{marginTop:2}}><span style={{fontWeight:600}}>cadburydairymilk.in</span> The new Silk Hazelnut — whole roasted hazelnuts in the silkiest chocolate. Free samples before launch. <span style={{color:"#00376b"}}>#SilkHazelnut #FreeSample</span></div>
          </div>
        </div>
      </div>
      <TimelineRail x={520} items={[
        "Customer is targeted through Meta / Google ads",
        "Lands on the WhatsApp chatbot",
        "Brand screening — Silk buyers routed to Joy Club",
        "Competitor users qualified with brand questions",
        "Pincode decides which SKU ships",
        "Delivery + OTP verification",
        "Feedback captured → auto-enrolled in Joy Club",
      ]}/>
    </div>
  );
}
function TimelineRail({ x, items }){
  return (
    <React.Fragment>
      <svg width={2} height={520} style={{position:"absolute",left:x,top:130}}>
        <line x1={1} y1={0} x2={1} y2={520} stroke="#E4DBEE" strokeWidth={2}/>
      </svg>
      {items.map((label,i)=>{
        const top = 110 + i * 82;
        const active = i===0;
        return (
          <React.Fragment key={i}>
            <div style={{position:"absolute",left:x-9,top:top+4,width:20,height:20,borderRadius:999,background:active?"#E4A400":"#E4DBEE",border:active?"4px solid rgba(228,164,0,0.25)":"none",boxSizing:active?"content-box":"border-box",marginLeft:active?-4:0,marginTop:active?-4:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:10,fontWeight:700,zIndex:2}}>{active?"✓":""}</div>
            <div style={{position:"absolute",left:x+32,top:top,width:1200-x-80,fontSize:20,color:active?"#1a1a1a":"#c3b8d2",fontWeight:active?600:400,lineHeight:1.3}}>{label}</div>
          </React.Fragment>
        );
      })}
      <div style={{position:"absolute",right:60,bottom:52,width:140,height:140,borderRadius:999,background:"linear-gradient(135deg,#2E1145,#4F2170)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:6,boxShadow:"0 8px 24px rgba(46,17,69,0.35)"}}>
        <MdlzLogo size={52}/>
        <div style={{color:"#fff",fontWeight:700,letterSpacing:1.5,fontSize:10,textAlign:"center"}}>MONDELEZ<br/>SAMPLING</div>
      </div>
    </React.Fragment>
  );
}

function buildStages() {
  const p = MDLZ.persona;
  const mk = (o={})=>({nameKnown:!!o.name,phoneKnown:!!o.phone,address:o.address||null,selfTags:o.self||[],cohortTags:[...MDLZ.baselineCohorts,...(o.cohort||[])]});
  const selfBase = ["Current brand: Amul Dark","Occasion: Self-treat","Frequency: Weekly"];
  const coverSteps = WEB ? [
    {icon:"🌐",t:"Claim starts on the brand website",s:"One QR / link on cadbury.in — no app, no form"},
    {icon:"💬",t:"Chocolate quiz & claim on WhatsApp",s:"Brand, occasion & frequency matched to the right Silk SKU"},
    {icon:"📊",t:"Live analytics & Joy Club",s:"Verified deliveries, feedback and loyalty auto-enrolment on FreeStand"},
  ] : [
    {icon:"📱",t:"Ads across digital channels",s:"Chocolate lovers reached on Meta, Google & AI platforms"},
    {icon:"💬",t:"Chocolate quiz & claim on WhatsApp",s:"Brand, occasion & frequency matched to the right Silk SKU"},
    {icon:"📊",t:"Live analytics & Joy Club",s:"Verified deliveries, feedback and loyalty auto-enrolment on FreeStand"},
  ];
  return [
    { kind:"cover", label:"01 · Cover", coverSteps },
    { kind:"entry", label: WEB?"02 · Brand website — how it starts":"02 · Ad impression" },
    { kind:"chat", wf:0, label:"03 · Web form — details", through:1, state:mk() },
    { kind:"chat", wf:2, label:"04 · OTP verified", through:3, state:mk({name:true,phone:true}) },
    { kind:"chat-screen", rejected:true, wf:4, label:"05 · Path A — Silk buyer → Joy Club",
      base:2, branch:[{bot:BRAND_Q,opts:BRAND_OPTS,picked:0},{user:"Cadbury Dairy Milk Silk"},{bot:REJECT_MSG}],
      state:mk({name:true,phone:true,self:["Current brand: Silk"],cohort:["Silk loyalist","Joy Club enrolled"]}) },
    { kind:"chat-screen", rejected:false, wf:5, label:"06 · Path B — Amul Dark → APPROVED", through:5,
      state:mk({name:true,phone:true,self:["Current brand: Amul Dark"],cohort:["Conversion target"]}) },
    { kind:"chat", wf:6, label:"07 · Brand question 1 — occasion", through:7,
      state:mk({name:true,phone:true,self:selfBase.slice(0,2),cohort:["Conversion target"]}) },
    { kind:"chat", wf:7, label:"08 · Brand question 2 — frequency", through:9,
      state:mk({name:true,phone:true,self:selfBase,cohort:["Conversion target"]}) },
    { kind:"alloc", tier:"premium", wf:9, label:"09 · Case A — Bandra 400050 → Silk Hazelnut", through:12 },
    { kind:"alloc", tier:"value", label:"10 · Case B — Agra 282005 → Dairy Milk",
      base:10, branch:[{user:"282005"},{bot:"Agra! 🕌 Your free sample:\n\n🍫 Cadbury Dairy Milk (24 g)\n\nThe classic taste of India. Now share your delivery address."}] },
    { kind:"chat", wf:10, label:"11 · Address entered — checks running", through:15,
      state:mk({name:true,phone:true,address:p.addressBandra,self:selfBase,cohort:["Conversion target","Pincode: 400050","Premium SKU allocated"]}) },
    { kind:"chat", wf:11, label:"12 · Sample claimed", through:16,
      state:mk({name:true,phone:true,address:p.addressBandra,self:selfBase,cohort:["Conversion target","Premium SKU allocated","Successful claim"]}) },
    { kind:"chat", label:"13 · WhatsApp confirmation", base:0, branch:CONVO.slice(14,16),
      state:mk({name:true,phone:true,address:p.addressBandra,self:selfBase,cohort:["Conversion target","Premium SKU allocated","Successful claim"]}) },
    { kind:"delivery", premium:true, label:"14 · Delivery tracking + OTP", base:0, branch:CONVO.slice(16,18) },
    { kind:"chat", label:"15 · Feedback ask", base:0, branch:CONVO.slice(18,20),
      state:mk({name:true,phone:true,address:p.addressBandra,self:[...selfBase,"Feedback: Positive"],cohort:["Successful claim","Delivered","High purchase intent"]}) },
    { kind:"feedback", label:"16 · Feedback → conversion engine", base:0, branch:CONVO.slice(18,21) },
    { kind:"analytics", tab:0, label:"17 · Analytics — Overview" },
    { kind:"analytics", tab:1, label:"18 · Analytics — Live analytics" },
    { kind:"analytics", tab:2, label:"19 · Analytics — Data visualisation" },
    { kind:"analytics", tab:3, label:"20 · Analytics — Statistical analysis" },
    { kind:"joyclub", label:"21 · Auto-enrolled into Joy Club", base:0, branch:CONVO.slice(21,22) },
    { kind:"thanks", label:"22 · Thank you" },
  ];
}

function CanvasFrame({ stage, prevCount, onStart }) {
  if(stage.kind==="cover") return <CoverScene
    title={WEB?"Website sampling campaign":"Digital sampling campaign"}
    desc="Every chocolate lover gets the right Silk SKU for their taste, occasion and pincode — a rich first-party profile built before a single sample ships, ending in Joy Club membership."
    steps={stage.coverSteps} onStart={onStart}/>;
  if(stage.kind==="entry") return WEB?<WebsiteScene/>:<IGAdScene/>;
  if(stage.kind==="analytics") return <AnalyticsScene tab={stage.tab}/>;
  if(stage.kind==="thanks") return <ThankYouScene cards={[
    {title:"Qualification — accept or reject", body:(
      <FitPhone>
        <WABotMsg>{BRAND_Q}<WAOptions options={BRAND_OPTS} picked={0}/></WABotMsg>
        <WAUserMsg>Cadbury Dairy Milk Silk</WAUserMsg>
        <WABotMsg>{"Already family! 💜 Enrolled in Joy Club + 10% off coupon instead."}</WABotMsg>
        <div style={{textAlign:"center",margin:"6px 0"}}><span style={{fontSize:9,fontWeight:800,color:"#C62828",background:"#FDECEC",border:"1px solid #F5C6C6",padding:"4px 12px",borderRadius:999,letterSpacing:0.5}}>✕ REJECTED — Silk loyalist</span></div>
        <WABotMsg>{"…and for an Amul Dark household? ✓ Approved — free sample unlocked."}</WABotMsg>
        <div style={{textAlign:"center",margin:"6px 0"}}><span style={{fontSize:9,fontWeight:800,color:"#1E7A38",background:"#E8F6EC",border:"1px solid #BFE5CB",padding:"4px 12px",borderRadius:999,letterSpacing:0.5}}>✓ APPROVED — conversion target</span></div>
      </FitPhone>)},
    {title:"Smart sampling — pincode → SKU", body:(
      <FitPhone>
        <WABotMsg>{PIN_Q}</WABotMsg>
        <WAUserMsg>400050</WAUserMsg>
        <WABotMsg>{"Bandra West! ✨ You're getting the launch hero:\n\n🍫 Cadbury Dairy Milk Silk Hazelnut (58 g) — ₹199, free."}</WABotMsg>
        <div style={{textAlign:"center",margin:"6px 0"}}><span style={{fontSize:9,fontWeight:800,color:"#4F2170",background:"#F0E4F7",border:"1px solid #DCC9EC",padding:"4px 12px",borderRadius:999,letterSpacing:0.5}}>METRO PINCODE → SILK HAZELNUT</span></div>
      </FitPhone>)},
    {title:"Consumer profile — first-party data", body:(
      <FitProfile state={{nameKnown:true,phoneKnown:true,address:MDLZ.persona.addressBandra,
        selfTags:["Current brand: Amul Dark","Occasion: Self-treat","Frequency: Weekly","Feedback: Positive"],
        cohortTags:["Chocolate buyers","WhatsApp opt-in","Conversion target","Premium SKU allocated","Delivered","High purchase intent","Joy Club member"]}}/>)},
  ]}/>;
  const list = msgsFor(stage);
  const useForm = WEB && stage.wf!==undefined;
  const chat = useForm ? <WebFormPhone step={stage.wf}/> : (
    <WAPhone>
      {list.map((m,i)=>{
        const isNew = i >= prevCount;
        const wrap = (node)=> <div key={i} style={isNew?{animation:`fadeInUp 0.35s ${Math.min((i-prevCount)*0.12,0.6)}s both`}:undefined}>{node}</div>;
        if(m.user) return wrap(<WAUserMsg>{m.user}</WAUserMsg>);
        const showPicked = m.picked!==undefined && i+1 < list.length;
        return wrap(<WABotMsg>{m.bot}{m.opts && <WAOptions options={m.opts} picked={showPicked?m.picked:undefined}/>}</WABotMsg>);
      })}
    </WAPhone>
  );
  let right = null;
  if(stage.kind==="chat")        right = <ProfilePanel state={stage.state} persona={MDLZ.persona} source={useForm?"Web form · cadbury.in":"WhatsApp · Mondelez India"}/>;
  if(stage.kind==="chat-screen") right = <ScreeningPanel rejected={stage.rejected}/>;
  if(stage.kind==="alloc")       right = <AllocationPanel tier={stage.tier}/>;
  if(stage.kind==="delivery")    right = <DeliveryPanel premium={stage.premium}/>;
  if(stage.kind==="feedback")    right = <FeedbackPanel/>;
  if(stage.kind==="joyclub")     right = <JoyClubPanel/>;
  return <div style={{position:"absolute",inset:0,background:"#fff"}}>{chat}{right}</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <DemoShell stages={buildStages()} storageKey={"mdlz-"+MODE+"-stage"} CanvasFrame={CanvasFrame} msgsFor={msgsFor}
    subtitle={WEB?"Website Sampling Demo":"Digital Sampling Demo"}/>
);
