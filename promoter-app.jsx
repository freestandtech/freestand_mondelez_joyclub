/* Mondelez promoter sampling — conversation, stages & app */
const P_CONVO = [
  {bot:"Namaste from Mondelez India! 🍫\n\nYou asked our promoter at Phoenix Mills for a FREE Cadbury Silk Hazelnut sample.\n\nBy continuing you confirm you're 18+ and agree to receive messages from Mondelez brands on WhatsApp.",opts:["I agree ✓","No thanks"],picked:0},
  {user:"I agree ✓"},
  {bot:"Do you want to claim your free Silk Hazelnut at the stall today?",opts:["Yes, I do!","Not today"],picked:0},
  {user:"Yes, I do!"},
  {bot:"Great! Two quick questions before your sample is released. 😄"},
  {bot:"Which chocolate do you buy most often? 🍫",opts:["Amul Dark","Nestlé KitKat","Ferrero / other","Cadbury Dairy Milk Silk"],picked:0},
  {user:"Amul Dark"},
  {bot:"When do you usually reach for chocolate?",opts:["Self-treat","Gifting","For the kids","Festive"],picked:1},
  {user:"Gifting"},
  {bot:"Sample claimed! 🎊\n\nShow this QR code to the promoter — they'll scan it and hand you your free Silk Hazelnut.\n\nEnjoy the silkiest crunch! ✨",qr:true},
  {divider:"7 DAYS LATER"},
  {bot:"It's been a week since you tried Silk Hazelnut! 😄\n\nHow was it?",opts:["😍 Loved it","🙂 Good","😐 Same as my brand","😕 Not for me"],picked:0},
  {user:"😍 Loved it — the hazelnut crunch is unreal"},
  {bot:"That's what we like to hear! 💜\n\nHere's 15% off your first full-size Silk Hazelnut: SWITCH15 🎟️\n\nRedeemable at the same store or online."},
  {bot:"And you're now a Mondelez Joy Club member! 🎁\n\nMember #JC-91208 · 100 welcome points\n\nEarn on feedback, photos, receipts & referrals across 14 Mondelez brands."},
];
function msgsFor(stage){ return P_CONVO.slice(0,stage.through||0); }

function buildStages(){
  const mk=(o={})=>({nameKnown:!!o.name,phoneKnown:!!o.phone,address:o.address||null,selfTags:o.self||[],cohortTags:[...PROMO.baselineCohorts,...(o.cohort||[])]});
  const self2=["Current brand: Amul Dark","Occasion: Gifting"];
  return [
    {kind:"cover",label:"01 · Cover"},
    {kind:"scene",scene:0,label:"02 · Step 0 — Promoter at the Cadbury stall",caption:{tag:"STEP 0",title:"Promoter standing at the brand stall",sub:"Two ways to claim: scan the QR yourself, or give the promoter your number to initiate the claim."}},
    {kind:"scene",scene:1,label:"03 · Step 1 — Customer walks up",caption:{tag:"STEP 1",title:"Customer comes to the promoter stall",sub:"Shopper is intercepted in the confectionery aisle with a free-sample offer."}},
    {kind:"scene",scene:2,label:"04 · Step 2 — Customer shares their number",caption:{tag:"STEP 2",title:"Customer gives their phone number to claim",sub:"No app, no paper form — a phone number is all it takes to start the journey."}},
    {kind:"promoter",label:"05 · Step 3 — Promoter inputs the number"},
    {kind:"chat",through:1,label:"06 · Step 4 — WhatsApp consent",state:mk({phone:true})},
    {kind:"chat",through:4,label:"07 · Claim confirmed",state:mk({phone:true,name:true,cohort:["Claim confirmed at stall"]})},
    {kind:"chat",through:7,label:"08 · Q2 — current brand",state:mk({phone:true,name:true,self:[self2[0]],cohort:["Conversion target"]})},
    {kind:"chat",through:9,label:"09 · Q3 — occasion",state:mk({phone:true,name:true,self:self2,cohort:["Conversion target"]})},
    {kind:"qr",through:10,label:"10 · Claim pass — QR issued"},
    {kind:"scene",scene:"showqr",label:"11 · Customer shows the QR",caption:{tag:"STEP 5",title:"Customer shows the claim pass to the promoter",sub:"Back at the counter, the customer holds up the WhatsApp QR for the promoter to scan."}},
    {kind:"scan",label:"12 · Step 6 — Promoter scans the QR"},
    {kind:"scene",scene:"handover",label:"13 · Sample handed over",caption:{tag:"STEP 7",title:"Sample handed over at the stall",sub:"Verified claim → stock decremented → gratification is instant, not 3–5 days away."}},
    {kind:"chat",through:12,label:"14 · Step 8 — Day-7 feedback",state:mk({phone:true,name:true,self:self2,cohort:["Conversion target","Sample handed over","Day-7 follow-up"]})},
    {kind:"feedback",through:14,label:"15 · Feedback → conversion engine"},
    {kind:"joyclub",through:15,label:"16 · Auto-enrolled into Joy Club"},
    {kind:"analytics",tab:0,label:"17 · Analytics — Overview"},
    {kind:"analytics",tab:1,label:"18 · Analytics — Live analytics"},
    {kind:"analytics",tab:2,label:"19 · Analytics — Data visualisation"},
    {kind:"analytics",tab:3,label:"20 · Analytics — Statistical analysis"},
  ];
}

function CanvasFrame({stage,prevCount,onStart}){
  if(stage.kind==="cover") return <CoverScene
    title="Promoter sampling & retail activation"
    desc="A branded stall in the store, a promoter with the FreeStand app, and instant gratification — every handover verified, every shopper captured as first-party data."
    steps={[
      {icon:"🏬",t:"Branded stall in-store",s:"Promoter intercepts shoppers in the confectionery aisle"},
      {icon:"📱",t:"Claim via QR or phone number",s:"WhatsApp journey qualifies the shopper in 30 seconds"},
      {icon:"✅",t:"Verified handover & analytics",s:"Single-use QR scan, stock decrement, Day-7 feedback → Joy Club"},
    ]} onStart={onStart}/>;
  if(stage.kind==="scene") return <StallScene step={stage.scene} caption={stage.caption}/>;
  if(stage.kind==="analytics") return <AnalyticsScene tab={stage.tab}/>;
  if(stage.kind==="promoter") return <div style={{position:"absolute",inset:0,background:"#fff"}}><PromoterApp mode="input"/><JourneyPanel/></div>;
  if(stage.kind==="scan") return <div style={{position:"absolute",inset:0,background:"#fff"}}><PromoterApp mode="scan"/><VerifyPanel/></div>;
  const list=msgsFor(stage);
  const chat=(
    <WAPhone>
      {list.map((m,i)=>{
        const isNew=i>=prevCount;
        const wrap=(node)=><div key={i} style={isNew?{animation:`fadeInUp 0.35s ${Math.min((i-prevCount)*0.12,0.6)}s both`}:undefined}>{node}</div>;
        if(m.divider) return wrap(<div style={{textAlign:"center",margin:"12px 0 10px"}}><span style={{fontSize:9,color:"#5a7a75",background:"rgba(255,255,255,0.85)",padding:"3px 10px",borderRadius:8,fontWeight:700,letterSpacing:1}}>{m.divider}</span></div>);
        if(m.user) return wrap(<WAUserMsg>{m.user}</WAUserMsg>);
        const showPicked=m.picked!==undefined&&i+1<list.length;
        return wrap(
          <WABotMsg>
            {m.bot}
            {m.qr&&<div style={{marginTop:10,background:"#fff",border:"1px solid #e4e4e4",borderRadius:10,padding:"12px 12px 8px",display:"flex",flexDirection:"column",alignItems:"center",gap:6}}><QRCode size={156}/><div style={{fontSize:10,fontFamily:"monospace",color:"#667",letterSpacing:1}}>MDLZ-STALL-4471 · single-use</div></div>}
            {m.opts&&<WAOptions options={m.opts} picked={showPicked?m.picked:undefined}/>}
          </WABotMsg>
        );
      })}
    </WAPhone>
  );
  let right=null;
  if(stage.kind==="chat") right=<ProfilePanel state={stage.state} persona={PROMO.persona} source="Promoter-initiated · Mondelez India" photo="mdlz/meena.png"/>;
  if(stage.kind==="qr") right=<QRPanel/>;
  if(stage.kind==="feedback") right=<FeedbackPanel/>;
  if(stage.kind==="joyclub") right=<JoyClubPanel persona={PROMO.persona}/>;
  return <div style={{position:"absolute",inset:0,background:"#fff"}}>{chat}{right}</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <DemoShell stages={buildStages()} storageKey="mdlz-promoter-stage" CanvasFrame={CanvasFrame} msgsFor={msgsFor}
    subtitle="Promoter Sampling / Retail Activation Demo"/>
);
