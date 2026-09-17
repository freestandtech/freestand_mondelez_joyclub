/* Mondelez shared kit — data, WhatsApp phone, right panels, analytics, cover. Loaded by all three sampling demos. */
const MDLZ = {
  purple:"#4F2170", purple2:"#7B4FA8", gold:"#E4A400", cream:"#F6F1FA",
  persona:{ name:"Aarav Mehta", phone:"+91 98210 44712",
    addressBandra:"1203, Palm Court, Carter Road, Bandra West, Mumbai 400050",
    addressAgra:"18, Shanti Vihar, Kamla Nagar, Agra 282005" },
  skus:{
    premium:{ name:"Cadbury Dairy Milk Silk Hazelnut", pack:"58 g bar · new recipe", price:"₹199 value", why:"High-affluence pincode → premium Silk SKU", color:"#4F2170" },
    value:{ name:"Cadbury Dairy Milk", pack:"24 g bar · classic", price:"₹40 value", why:"Value-tier pincode → trial-size SKU", color:"#7B4FA8" },
  },
  baselineCohorts:["Chocolate buyers","WhatsApp opt-in"],
};
window.MDLZ = MDLZ;

function MdlzLogo({ size=30, square=false }) {
  return <img src="mdlz/lite-mdlz-logo.png" alt="Mondelez" style={{width:size,height:size,borderRadius:square?8:999,objectFit:"contain",flexShrink:0,background:"#fff",padding:size*0.08}}/>;
}
function FSLogo({ h=26, white=false }) {
  return <img src="mdlz/lite-fs-logo.png" alt="FreeStand" style={{height:h,filter:white?"brightness(0) invert(1)":"none"}}/>;
}

function WABotMsg({ children, tail=true }) {
  return (
    <div style={{display:"flex",justifyContent:"flex-start",marginBottom:8}}>
      <div style={{background:"#fff",borderRadius:tail?"0 10px 10px 10px":"10px",padding:"8px 12px",fontSize:12.5,lineHeight:1.5,color:"#1a1a1a",whiteSpace:"pre-wrap",maxWidth:"85%",boxShadow:"0 1px 1px rgba(0,0,0,0.08)"}}>
        {children}
        <span style={{fontSize:9,color:"#999",float:"right",marginTop:6,marginLeft:8}}>9:41 AM</span>
      </div>
    </div>
  );
}
function WAUserMsg({ children }) {
  return (
    <div style={{display:"flex",justifyContent:"flex-end",marginBottom:8}}>
      <div style={{background:"#DCF8C6",borderRadius:"10px 0 10px 10px",padding:"8px 12px",fontSize:12.5,color:"#1a1a1a",maxWidth:"78%",lineHeight:1.45,whiteSpace:"pre-wrap",boxShadow:"0 1px 1px rgba(0,0,0,0.08)"}}>
        {children}
        <span style={{fontSize:9,color:"#7bA05B",float:"right",marginTop:6,marginLeft:8}}>9:41 AM ✓✓</span>
      </div>
    </div>
  );
}
function WAOptions({ options, picked }) {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:5,marginTop:6}}>
      {options.map((o,i)=>(
        <div key={i} style={{padding:"7px 10px",borderRadius:8,textAlign:"center",
          border:`1.5px solid ${picked===i?MDLZ.gold:MDLZ.purple}`,
          background:picked===i?"#FDF6E3":"#fff",
          color:picked===i?"#8a6d00":MDLZ.purple,
          fontSize:11.5,fontWeight:600,cursor:"pointer"}}>{o}{picked===i?" ✓":""}</div>
      ))}
    </div>
  );
}
function WAPhone({ children, botName="Mondelez India" }) {
  const scrollRef = React.useRef(null);
  const kids = React.Children.toArray(children);
  const last = kids[kids.length-1];
  const lastKey = last && last.key != null ? String(last.key) : "";
  const lastTxt = last && typeof last.props?.children === "string" ? last.props.children.slice(0,80) : "";
  const sig = kids.length+"|"+lastKey+"|"+lastTxt;
  React.useEffect(()=>{
    const pin=()=>{ const el=scrollRef.current; if(el) el.scrollTop=el.scrollHeight; };
    pin();
    const r=requestAnimationFrame(pin);
    const t=setTimeout(pin,80);
    const t2=setTimeout(pin,420);
    return ()=>{ cancelAnimationFrame(r); clearTimeout(t); clearTimeout(t2); };
  },[sig]);
  return (
    <div style={{position:"absolute",left:27,top:43,width:375,height:800,overflow:"hidden",backgroundColor:"#ECE5DD",borderRadius:30,boxShadow:"0 12px 40px rgba(0,0,0,0.3), 0 0 0 6px #111",display:"flex",flexDirection:"column"}}>
      <div style={{height:30,background:"#075E54",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",flexShrink:0}}>
        <span style={{fontSize:11,fontWeight:600,color:"#fff"}}>9:41</span>
        <span style={{fontSize:10,color:"rgba(255,255,255,0.9)"}}>●●●● 100%</span>
      </div>
      <div style={{height:52,background:"#075E54",display:"flex",alignItems:"center",padding:"0 12px",gap:10,flexShrink:0}}>
        <div style={{fontSize:18,color:"#fff",opacity:0.9}}>‹</div>
        <MdlzLogo size={34}/>
        <div style={{flex:1}}>
          <div style={{fontSize:14,fontWeight:700,color:"#fff"}}>{botName}</div>
          <div style={{fontSize:10,color:"rgba(255,255,255,0.75)"}}>✓ Verified business · online</div>
        </div>
        <div style={{fontSize:16,color:"rgba(255,255,255,0.8)",display:"flex",gap:14}}><span>📞</span><span>⋮</span></div>
      </div>
      <div ref={scrollRef} style={{flex:1,overflowY:"auto",padding:"10px 10px",background:"#ECE5DD",scrollBehavior:"smooth"}}>
        <div style={{textAlign:"center",marginBottom:8}}><span style={{fontSize:9,color:"#5a7a75",background:"rgba(255,255,255,0.7)",padding:"3px 10px",borderRadius:8}}>TODAY</span></div>
        <div style={{textAlign:"center",marginBottom:10}}><span style={{fontSize:9,color:"#856404",background:"#FFF3CD",padding:"4px 10px",borderRadius:8,display:"inline-block",lineHeight:1.4}}>🔒 This business uses a secure service from Meta to manage this chat.</span></div>
        {children}
      </div>
      <div style={{height:48,background:"#F0F0F0",display:"flex",alignItems:"center",gap:8,padding:"0 10px",flexShrink:0}}>
        <div style={{fontSize:16,opacity:0.4}}>😊</div>
        <div style={{flex:1,height:32,borderRadius:16,background:"#fff",border:"1px solid #e0e0e0",display:"flex",alignItems:"center",padding:"0 12px",fontSize:11,color:"#aaa"}}>Type a message</div>
        <div style={{width:32,height:32,borderRadius:999,background:"#075E54",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13}}>🎤</div>
      </div>
    </div>
  );
}

/* Deterministic QR visual */
function QRCode({size=150,seed=7}){
  const n=21,cs=size/n;let s=seed*9301+49297;
  const rnd=()=>{s=(s*9301+49297)%233280;return s/233280;};
  const inF=(r,c)=>(r<7&&c<7)||(r<7&&c>=n-7)||(r>=n-7&&c<7);
  const cells=[];
  for(let r=0;r<n;r++)for(let c=0;c<n;c++){const v=rnd();if(!inF(r,c)&&v>0.52)cells.push([r,c]);}
  const F=({r,c})=>(<g>
    <rect x={c*cs} y={r*cs} width={7*cs} height={7*cs} fill="#000"/>
    <rect x={(c+1)*cs} y={(r+1)*cs} width={5*cs} height={5*cs} fill="#fff"/>
    <rect x={(c+2)*cs} y={(r+2)*cs} width={3*cs} height={3*cs} fill="#000"/>
  </g>);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{display:"block"}}>
      <rect width={size} height={size} fill="#fff"/>
      {cells.map(([r,c],i)=><rect key={i} x={c*cs+0.5} y={r*cs+0.5} width={cs-1} height={cs-1} fill="#000"/>)}
      <F r={0} c={0}/><F r={0} c={14}/><F r={14} c={0}/>
    </svg>
  );
}

const panelFrame = {position:"absolute",left:443,top:43,width:807,height:746,borderRadius:12,background:"#fff",border:`5px solid ${MDLZ.purple}`,overflow:"hidden",fontFamily:"'Poppins',Arial,sans-serif"};

function PanelHeader({ icon, title, sub, statusColor, statusText }) {
  return (
    <div style={{height:72,padding:"0 22px",display:"flex",alignItems:"center",gap:14,boxShadow:"0 4px 4px rgba(0,0,0,0.08)",background:"#fff",position:"relative",zIndex:2}}>
      <div style={{width:38,height:38,borderRadius:999,background:MDLZ.cream,border:`1.5px solid ${MDLZ.purple}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17}}>{icon}</div>
      <div>
        <div style={{fontSize:19,fontWeight:600}}>{title}</div>
        <div style={{fontSize:11,color:"#888",marginTop:2}}>{sub}</div>
      </div>
      <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:8}}>
        <div style={{width:8,height:8,borderRadius:999,background:statusColor||"#6BCB77",animation:"blink 1.4s infinite"}}/>
        <div style={{fontSize:10,color:"#666",fontFamily:"monospace"}}>{statusText||"LIVE"}</div>
      </div>
    </div>
  );
}

const tagBg = i => i%3===0?"#F0E4F7":i%3===1?"#FDF3DC":"#DCE8F2";

function ProfilePanel({ state, persona, source="WhatsApp · Mondelez India", photo="mdlz/mini-aarav.png" }) {
  return (
    <div style={panelFrame}>
      <PanelHeader icon="👤" title="User profile" sub={source} statusText="SYNCED"/>
      <div style={{position:"absolute",top:83,left:24,right:24,height:32,display:"flex",gap:20,borderBottom:"1px solid #e4e4e4"}}>
        {["Personal details","Other details","Relevant cohorts"].map((t,i)=>(
          <div key={t} style={{padding:"0 2px 6px",fontSize:13,fontWeight:500,color:i===0?MDLZ.purple:"#666",borderBottom:i===0?`2px solid ${MDLZ.gold}`:"2px solid transparent"}}>{t}</div>
        ))}
      </div>
      <div style={{position:"absolute",left:32,top:128,width:170,height:170,borderRadius:8,border:"2px solid #e2d8ec",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",background:MDLZ.cream}}>
        {state.nameKnown
          ? <img src={photo} alt={persona.name} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top"}}/>
          : <div style={{fontSize:56,fontWeight:500,color:"rgba(79,33,112,0.25)"}}>?</div>}
      </div>
      {[
        {label:"Name",   val:persona.name,  show:state.nameKnown,  top:128},
        {label:"Phone",  val:persona.phone, show:state.phoneKnown, top:184},
        {label:"Address",val:state.address, show:!!state.address,  top:240, small:true},
      ].map((f,i)=>(
        <div key={i} style={{position:"absolute",left:222,top:f.top,width:556,height:56,display:"flex",alignItems:"center",borderBottom:"1px solid #eee",padding:"0 16px",gap:16}}>
          <div style={{fontSize:12,color:"#888",width:100,fontWeight:500}}>{f.label}</div>
          {f.show
            ? <div style={{fontSize:f.small?11.5:13,color:"#1a1a1a",flex:1,fontWeight:500,lineHeight:1.3}}>{f.val}</div>
            : <div style={{flex:1,height:14,background:"linear-gradient(90deg,#f4eef9,#e6dbf0,#f4eef9)",backgroundSize:"200% 100%",borderRadius:4,opacity:0.7,animation:"shimmer 2.2s linear infinite"}}/>}
        </div>
      ))}
      <div style={{position:"absolute",left:32,top:340,fontSize:11,fontWeight:700,color:MDLZ.purple,letterSpacing:0.5,textTransform:"uppercase"}}>Self-declared</div>
      <div style={{position:"absolute",left:420,top:340,fontSize:11,fontWeight:700,color:MDLZ.purple,letterSpacing:0.5,textTransform:"uppercase"}}>Relevant cohorts</div>
      <div style={{position:"absolute",left:32,top:362,width:366,height:300,borderRadius:6,border:"1px solid #e2d8ec",padding:14,display:"flex",flexDirection:"column",gap:6,background:"#fff",overflow:"auto"}}>
        {state.selfTags.length===0&&<div style={{fontSize:11,color:"#bbb",fontStyle:"italic"}}>Collected as user chats with the bot…</div>}
        {state.selfTags.map((t,i)=>(
          <div key={i} style={{padding:"6px 10px",borderRadius:5,fontSize:11,fontWeight:500,whiteSpace:"nowrap",alignSelf:"flex-start",color:"#1a1a1a",background:tagBg(i)}}>{t}</div>
        ))}
      </div>
      <div style={{position:"absolute",left:420,top:362,width:358,height:300,borderRadius:6,border:"1px solid #e2d8ec",padding:14,display:"flex",flexDirection:"column",gap:6,background:"#fff",overflow:"auto"}}>
        {state.cohortTags.map((t,i)=>(
          <div key={i} style={{padding:"6px 10px",borderRadius:5,fontSize:11,fontWeight:500,whiteSpace:"nowrap",alignSelf:"flex-start",color:"#1a1a1a",background:tagBg(i+1)}}>{t}</div>
        ))}
      </div>
    </div>
  );
}

function ScreeningPanel({ rejected }) {
  return (
    <div style={{...panelFrame,border:`5px solid ${rejected?"#C62828":"#2E7D32"}`}}>
      <PanelHeader icon={rejected?"🚫":"✅"} title="Brand screening" sub="Current-brand eligibility check" statusColor={rejected?"#C62828":"#2E7D32"} statusText={rejected?"REJECTED":"APPROVED"}/>
      <div style={{padding:"26px 30px"}}>
        <div style={{padding:"16px 20px",borderRadius:10,background:rejected?"#FDECEA":"#E8F5E9",border:`1px solid ${rejected?"#F5C6C0":"#A5D6A7"}`,display:"flex",alignItems:"center",gap:16,marginBottom:22}}>
          <div style={{width:46,height:46,borderRadius:999,background:rejected?"#C62828":"#2E7D32",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:22,fontWeight:700,flexShrink:0}}>{rejected?"✕":"✓"}</div>
          <div>
            <div style={{fontSize:17,fontWeight:700,color:rejected?"#8B1A12":"#1B5E20"}}>
              {rejected?"Not eligible — existing Silk buyer":"Eligible — competitor-brand user"}
            </div>
            <div style={{fontSize:12,color:rejected?"#B0554C":"#4CAF50",marginTop:3,lineHeight:1.5}}>
              {rejected
                ? "Campaign objective is competitor conversion. Regular Silk buyers are routed to Joy Club instead of free sampling."
                : "User currently buys Amul Dark — a priority conversion target. Proceeding with qualification questions."}
            </div>
          </div>
        </div>
        <div style={{fontSize:12,fontWeight:700,color:MDLZ.purple,letterSpacing:0.5,textTransform:"uppercase",marginBottom:10}}>Screening logic</div>
        {[
          {q:"Which chocolate do you buy most often?", a:rejected?"Cadbury Dairy Milk Silk":"Amul Dark", pass:!rejected},
          {q:"Campaign rule", a:"Exclude regular Silk buyers · target competitor users", pass:true},
          {q:"Decision", a:rejected?"Politely reject + auto-enrol in Joy Club":"Approve + continue to brand questions", pass:!rejected},
        ].map((r,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"11px 14px",borderRadius:8,marginBottom:8,background:i===2?(rejected?"#FDECEA":"#E8F5E9"):"#f8f9fb",border:`1px solid ${i===2?(rejected?"#F5C6C0":"#A5D6A7"):"#e8ecf2"}`}}>
            <div style={{width:24,height:24,borderRadius:999,background:r.pass?"#2E7D32":"#C62828",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:12,fontWeight:700,flexShrink:0}}>{r.pass?"✓":"✕"}</div>
            <div style={{flex:1}}>
              <div style={{fontSize:11,color:"#888"}}>{r.q}</div>
              <div style={{fontSize:13,fontWeight:600,color:"#1a1a1a",marginTop:1}}>{r.a}</div>
            </div>
          </div>
        ))}
        {rejected ? (
          <div style={{marginTop:16,padding:"14px 16px",borderRadius:8,background:MDLZ.cream,border:"1px solid #DCC9EC"}}>
            <div style={{fontSize:12,fontWeight:700,color:MDLZ.purple,marginBottom:6}}>Still captured for the brand 📊</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {["Silk loyalist","Joy Club enrol","Exclude from paid ads","CRM: existing buyer"].map((t,i)=>(
                <div key={i} style={{padding:"5px 10px",borderRadius:5,fontSize:11,fontWeight:500,color:"#1a1a1a",background:tagBg(i)}}>{t}</div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{marginTop:16,padding:"14px 16px",borderRadius:8,background:"#FFF8E8",border:"1px solid #F0DCA8"}}>
            <div style={{fontSize:12,fontWeight:700,color:"#8a6d1a",marginBottom:4}}>Conversion opportunity score</div>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{fontSize:30,fontWeight:900,color:MDLZ.gold}}>8.4</div>
              <div style={{fontSize:11,color:"#8a6d1a",lineHeight:1.4}}>Dark-chocolate buyers show the highest switch rate<br/>after sampling Silk Hazelnut (last campaign: 27%)</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AllocationPanel({ tier }) {
  const premium = tier==="premium";
  const sku = premium ? MDLZ.skus.premium : MDLZ.skus.value;
  const city = premium ? "Bandra West, Mumbai" : "Kamla Nagar, Agra";
  const pin  = premium ? "400050" : "282005";
  return (
    <div style={panelFrame}>
      <PanelHeader icon="📍" title="Pincode → SKU allocation" sub="Geo-affluence lookup decides which sample ships" statusColor={MDLZ.gold} statusText="ALLOCATED"/>
      <div style={{padding:"20px 26px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
        <div>
          <div style={{padding:"12px 16px",borderRadius:8,background:MDLZ.cream,border:"1px solid #DCC9EC",marginBottom:12}}>
            <div style={{fontSize:10,color:"#667",letterSpacing:1,textTransform:"uppercase",fontWeight:600}}>Pincode entered</div>
            <div style={{fontSize:26,fontWeight:900,color:MDLZ.purple,fontFamily:"monospace",marginTop:2}}>{pin}</div>
            <div style={{fontSize:12,color:"#555",marginTop:2}}>{city}</div>
          </div>
          <div style={{padding:"12px 16px",borderRadius:8,background:"#fff",border:"1px solid #e2d8ec",marginBottom:12}}>
            <div style={{fontSize:10,color:"#888",letterSpacing:1,textTransform:"uppercase",fontWeight:600}}>Affluence index</div>
            <div style={{display:"flex",alignItems:"flex-end",gap:8,marginTop:4}}>
              <div style={{fontSize:30,fontWeight:900,color:premium?"#2E7D32":"#B07818",lineHeight:1}}>{premium?"A+":"C"}</div>
              <div style={{fontSize:11,color:"#666",paddingBottom:4}}>{premium?"Top 5% · Metro premium":"Tier-2 · Value segment"}</div>
            </div>
            <div style={{marginTop:8,position:"relative",height:7,borderRadius:4,background:"linear-gradient(90deg,#E8D8C4,#D4B896,#A2C896,#4A8C5C)"}}>
              <div style={{position:"absolute",left:premium?"93%":"30%",top:-4,width:2,height:15,background:MDLZ.purple,borderRadius:1}}/>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:8,color:"#888",marginTop:3,fontFamily:"monospace"}}><span>D</span><span>C</span><span>B</span><span>A</span><span>A+</span></div>
          </div>
          <div style={{padding:"12px 16px",borderRadius:8,background:"#fff",border:"1px solid #e2d8ec"}}>
            <div style={{fontSize:10,color:"#888",letterSpacing:1,textTransform:"uppercase",fontWeight:600}}>Category spend signal</div>
            <div style={{fontSize:18,fontWeight:700,color:"#1a1a1a",marginTop:4}}>{premium?"₹600+/month":"₹80–150/month"}</div>
            <div style={{fontSize:10,color:"#888",marginTop:2}}>{premium?"Premium & gifting formats over-index":"Single bars dominate · price-sensitive"}</div>
          </div>
        </div>
        <div>
          <div style={{fontSize:11,fontWeight:700,color:MDLZ.purple,letterSpacing:0.5,textTransform:"uppercase",marginBottom:8}}>Allocated sample</div>
          <div style={{borderRadius:12,overflow:"hidden",border:`2px solid ${sku.color}`,boxShadow:"0 6px 24px rgba(79,33,112,0.14)"}}>
            <div style={{height:150,background:`linear-gradient(135deg,${sku.color},#2E1145)`,display:"flex",alignItems:"center",justifyContent:"center",gap:14,padding:"0 10px"}}>
              <img src="mdlz/mini-prod-dairymilk.png" alt={sku.name} style={{height:118,objectFit:"contain",filter:"drop-shadow(0 6px 14px rgba(0,0,0,0.35))"}}/>
              <div style={{color:"#fff",fontSize:11,fontWeight:700,letterSpacing:1,textTransform:"uppercase",opacity:0.9}}>{premium?"PREMIUM SKU":"TRIAL SKU"}</div>
            </div>
            <div style={{padding:"14px 16px",background:"#fff"}}>
              <div style={{fontSize:14,fontWeight:700,color:"#1a1a1a",lineHeight:1.35}}>{sku.name}</div>
              <div style={{fontSize:11,color:"#888",marginTop:3}}>{sku.pack}</div>
              <div style={{display:"flex",alignItems:"center",gap:8,marginTop:8}}>
                <div style={{padding:"3px 10px",borderRadius:999,background:"#FDF6E3",border:`1px solid ${MDLZ.gold}`,fontSize:11,fontWeight:700,color:"#8a6d00"}}>{sku.price}</div>
                <div style={{fontSize:10,color:"#888"}}>Free sample</div>
              </div>
            </div>
          </div>
          <div style={{marginTop:12,padding:"11px 14px",borderRadius:8,background:"#FFF8E8",border:"1px solid #F0DCA8",fontSize:11,color:"#8a6d1a",lineHeight:1.5}}>
            <strong>Allocation rule:</strong> {sku.why}. Cold-chain inventory reserved automatically in the nearest fulfilment centre.
          </div>
          <div style={{marginTop:10,display:"flex",gap:8}}>
            {[premium?"Mumbai FC-02":"Agra FC-09","In stock ✓","Ships in 48h"].map((t,i)=>(
              <div key={i} style={{padding:"5px 10px",borderRadius:5,fontSize:10.5,fontWeight:600,color:"#1a1a1a",background:i===1?"#E3F2E5":"#DCE8F2"}}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeliveryPanel({ premium }) {
  return (
    <div style={panelFrame}>
      <PanelHeader icon="📦" title="Delivery tracking" sub={`MDLZ-${premium?"5501-1147":"5501-1152"} · Last-mile confirmation`} statusColor={MDLZ.gold} statusText="DELIVERED"/>
      <div style={{margin:"16px 22px 12px",borderRadius:10,overflow:"hidden",background:"linear-gradient(180deg,#D9C8EC 0%,#EFE6F7 40%,#E8DCC8 40.1%,#D4C8A8 100%)",height:110,position:"relative"}}>
        <div style={{position:"absolute",left:28,bottom:18}}>
          <div style={{width:36,height:28,background:"#D4B896",borderRadius:"4px 4px 0 0",position:"relative"}}>
            <div style={{position:"absolute",top:-12,left:-4,right:-4,height:14,background:"#8B6F5E",clipPath:"polygon(0 100%,50% 0,100% 100%)"}}/>
          </div>
          <div style={{width:36,height:2,background:"#A08060"}}/>
          <div style={{position:"absolute",top:-16,right:-8,width:16,height:16,borderRadius:999,background:"#2E7D32",display:"flex",alignItems:"center",justifyContent:"center",animation:"popIn 0.5s 2.8s both"}}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"><path d="M5 12l5 5L19 7"/></svg>
          </div>
        </div>
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:28,background:"#888"}}/>
        <div style={{position:"absolute",bottom:28,right:"-90px",fontSize:28,animation:"driveTruckRL 3s 0.3s ease-out forwards"}}>🚚</div>
      </div>
      <div style={{padding:"0 22px 12px"}}>
        <div style={{fontSize:12,fontWeight:700,color:MDLZ.purple,marginBottom:10,letterSpacing:0.5,textTransform:"uppercase"}}>Delivery timeline</div>
        <div style={{display:"flex",alignItems:"center"}}>
          {["Ordered","Packed","In transit","Out for delivery","Delivered"].map((s,i,arr)=>(
            <React.Fragment key={i}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",flex:"0 0 auto",width:92}}>
                <div style={{width:26,height:26,borderRadius:999,background:i===4?MDLZ.gold:"#2E7D32",color:"#fff",fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:i===4?"0 0 0 4px rgba(228,164,0,0.25)":"none"}}>✓</div>
                <div style={{fontSize:9.5,marginTop:4,color:"#1a1a1a",textAlign:"center",fontWeight:i===4?700:400}}>{s}</div>
              </div>
              {i<arr.length-1&&<div style={{flex:1,height:2,background:"#2E7D32",marginBottom:14}}/>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{margin:"6px 22px 14px",padding:"14px 16px",borderRadius:10,background:"#FFF8F0",border:"1px solid #FFD094"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
          <div style={{width:34,height:34,borderRadius:999,background:"#FF8F00",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18" strokeWidth="3"/></svg>
          </div>
          <div>
            <div style={{fontSize:13,fontWeight:600,color:"#7a4700"}}>OTP delivery verification</div>
            <div style={{fontSize:10.5,color:"#a06020",marginTop:1}}>Code sent to +91 98210 ***12 on WhatsApp</div>
          </div>
        </div>
        <div style={{display:"flex",gap:9,justifyContent:"center",marginBottom:10}}>
          {["4","7","2","9","✓","✓"].map((d,i)=>(
            <div key={i} style={{width:42,height:50,borderRadius:8,background:i>=4?"#E8F5E9":"#fff",border:i>=4?"2px solid #4A8C5C":"2px solid #FFB74D",display:"flex",alignItems:"center",justifyContent:"center",fontSize:i>=4?16:21,fontWeight:700,color:i>=4?"#2E7D32":"#1a1a1a",fontFamily:"monospace"}}>{d}</div>
          ))}
        </div>
        <div style={{textAlign:"center",fontSize:11.5,fontWeight:700,color:"#2E7D32",padding:"8px",background:"#E8F5E9",borderRadius:8,border:"1px solid #A5D6A7"}}>✓ Identity verified — delivery confirmed</div>
      </div>
      <div style={{margin:"0 22px",padding:"11px 14px",borderRadius:10,background:MDLZ.cream,border:"1px solid #DCC9EC",display:"flex",alignItems:"center",gap:12}}>
        <MdlzLogo size={30}/>
        <div>
          <div style={{fontSize:12.5,fontWeight:700,color:MDLZ.purple}}>{premium?MDLZ.skus.premium.name:MDLZ.skus.value.name}</div>
          <div style={{fontSize:10.5,color:"#888",marginTop:1}}>Free sample delivered!</div>
        </div>
      </div>
    </div>
  );
}

function FeedbackPanel() {
  return (
    <div style={panelFrame}>
      <PanelHeader icon="⭐" title="Feedback captured" sub="Post-trial sentiment feeds the conversion model" statusColor={MDLZ.gold} statusText="RECORDED"/>
      <div style={{padding:"22px 28px"}}>
        <div style={{padding:"16px 20px",borderRadius:10,background:"#E8F5E9",border:"1px solid #A5D6A7",display:"flex",alignItems:"center",gap:16,marginBottom:20}}>
          <div style={{fontSize:36}}>😍</div>
          <div>
            <div style={{fontSize:16,fontWeight:700,color:"#1B5E20"}}>"The hazelnut crunch is unreal"</div>
            <div style={{fontSize:12,color:"#4CAF50",marginTop:2}}>Rated 5/5 · Would buy over Amul Dark: <strong>Yes</strong></div>
          </div>
        </div>
        <div style={{fontSize:12,fontWeight:700,color:MDLZ.purple,letterSpacing:0.5,textTransform:"uppercase",marginBottom:10}}>Profile updated</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:22}}>
          {["Feedback: Positive","High purchase intent","Switch-ready","Retarget: Silk offer","NPS promoter"].map((t,i)=>(
            <div key={i} style={{padding:"6px 12px",borderRadius:5,fontSize:11.5,fontWeight:500,color:"#1a1a1a",background:tagBg(i)}}>{t}</div>
          ))}
        </div>
        <div style={{fontSize:12,fontWeight:700,color:MDLZ.purple,letterSpacing:0.5,textTransform:"uppercase",marginBottom:10}}>Next best action</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {[
            {icon:"🛒",title:"Send purchase nudge",sub:"15% off first full-size Silk Hazelnut — WhatsApp coupon in 3 days"},
            {icon:"🎁",title:"Auto-enrol in Joy Club",sub:"Verified sampler → loyalty membership created on the same profile"},
          ].map((c,i)=>(
            <div key={i} style={{padding:"14px 16px",borderRadius:10,border:"1px solid #e2d8ec",background:"#fff"}}>
              <div style={{fontSize:22,marginBottom:6}}>{c.icon}</div>
              <div style={{fontSize:13,fontWeight:700,color:"#1a1a1a"}}>{c.title}</div>
              <div style={{fontSize:11,color:"#888",marginTop:3,lineHeight:1.5}}>{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Joy Club auto-enrolment panel — closes every sampling journey */
function JoyClubPanel({ persona }) {
  const p = persona||MDLZ.persona;
  return (
    <div style={panelFrame}>
      <PanelHeader icon="🎁" title="Auto-enrolled — Mondelez Joy Club" sub="One parent-level loyalty program · 14 brands" statusColor={MDLZ.gold} statusText="ENROLLED"/>
      <div style={{padding:"20px 26px"}}>
        <div style={{padding:"16px 18px",borderRadius:12,background:`linear-gradient(120deg,#2E1145,${MDLZ.purple} 65%,#5E3A93)`,color:"#fff",display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
          <MdlzLogo size={44}/>
          <div style={{flex:1}}>
            <div style={{fontSize:15,fontWeight:800}}>{p.name} joined Joy Club</div>
            <div style={{fontSize:11.5,opacity:0.8,marginTop:2}}>Member #JC-88412 · created from the same WhatsApp profile — no form, no app download</div>
          </div>
          <div style={{padding:"5px 14px",background:"#F2C94C",color:"#3a2600",borderRadius:999,fontSize:12,fontWeight:800,flexShrink:0}}>+100 pts</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:16}}>
          {[
            {label:"Brands on one wallet",val:"14",sub:"Cadbury · Oreo · Bournvita…"},
            {label:"Samplers auto-enrolled",val:"31,406",sub:"92% of delivered claims"},
            {label:"Est. incremental LTV",val:"₹6.8 Cr",sub:"12-month projection"},
          ].map((k,i)=>(
            <div key={i} style={{background:"#fff",borderRadius:8,padding:"13px 15px",border:"1px solid #e2d8ec"}}>
              <div style={{fontSize:11,color:"#888"}}>{k.label}</div>
              <div style={{fontSize:23,fontWeight:700,marginTop:3,color:MDLZ.purple}}>{k.val}</div>
              <div style={{fontSize:10,color:"#2B8A3E",marginTop:2}}>{k.sub}</div>
            </div>
          ))}
        </div>
        <div style={{fontSize:12,fontWeight:700,color:MDLZ.purple,letterSpacing:0.5,textTransform:"uppercase",marginBottom:10}}>What the membership unlocks</div>
        {[
          {icon:"⭐",title:"Earn on every action",sub:"Feedback +50 · UGC post +150 · receipt upload +190 · referral +100",done:true},
          {icon:"📸",title:"UGC & receipt uploads",sub:"AI-verified in seconds — loyalty becomes a continuous purchase panel",done:true},
          {icon:"🎟️",title:"Redeem across brands",sub:"Coupons, hampers and experiences from any of the 14 Mondelez brands",done:false},
          {icon:"📲",title:"Re-engagement ready",sub:"Segmented, reachable, opted-in — the audience for the next campaign",done:false},
        ].map((s,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"11px 14px",borderRadius:8,marginBottom:8,background:s.done?"#E8F5E9":"#f8f9fb",border:`1px solid ${s.done?"#A5D6A7":"#e8ecf2"}`}}>
            <div style={{fontSize:20,flexShrink:0}}>{s.icon}</div>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:700,color:"#1a1a1a"}}>{s.title}</div>
              <div style={{fontSize:11,color:"#888",marginTop:1}}>{s.sub}</div>
            </div>
            <div style={{padding:"3px 10px",borderRadius:999,fontSize:10,fontWeight:700,background:s.done?"#2E7D32":"#e4e8ee",color:s.done?"#fff":"#888"}}>{s.done?"Active":"Ready"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
Object.assign(window,{MdlzLogo,FSLogo,WAPhone,WABotMsg,WAUserMsg,WAOptions,QRCode,PanelHeader,ProfilePanel,ScreeningPanel,AllocationPanel,DeliveryPanel,FeedbackPanel,JoyClubPanel,panelFrame,tagBg});
