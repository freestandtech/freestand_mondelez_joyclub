/* ACT 1 — Acquire: five entry points, uniform visual frames */
const MZ3_CHANNELS = [
  { id:"qr", n:"01", t:"On-Pack QR", s:"Every pack becomes owned media", vol:"1.2M scans / mo" },
  { id:"claim", n:"02", t:"WhatsApp Sample Claim", s:"Vernacular bot for Tier 2/3", vol:"300K chats / mo" },
  { id:"web", n:"03", t:"Website Sampling", s:"Claim widget on cadbury.in", vol:"140K visits / mo" },
  { id:"field", n:"04", t:"Promoter & Retail", s:"Stalls + modern trade, scan-verified", vol:"150K interactions / mo" },
  { id:"ads", n:"05", t:"Digital Ads", s:"Click-to-WhatsApp from Meta & Google", vol:"18M impressions / mo" },
];
function MZ3Right({ children }){
  return <div style={{flex:1,minWidth:0,height:"100%",display:"flex",flexDirection:"column",gap:12}}>{children}</div>;
}
function MZ3StepPhone({ icon, t, i }){
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:7,animation:`fadeInUp .35s ${i*0.13}s both`}}>
      <div style={{width:52,height:88,borderRadius:12,border:"3px solid #26262e",background:"linear-gradient(170deg,#F3EFFB,#fff)",position:"relative",display:"grid",placeItems:"center"}}>
        <div style={{position:"absolute",top:4,left:"50%",transform:"translateX(-50%)",width:18,height:4,borderRadius:3,background:"#26262e"}}></div>
        <span style={{fontSize:21}}>{icon}</span>
      </div>
      <div style={{fontSize:10.5,fontWeight:800,color:"#444",textAlign:"center",lineHeight:1.35}}>{t}</div>
    </div>
  );
}
function MZ3PackQR(){
  return (<>
    <MZ3Visual label="Live pack scan">
      <div style={{width:300,height:560,borderRadius:30,border:"7px solid #1c1c22",overflow:"hidden",position:"relative",boxShadow:"0 18px 40px rgba(20,10,50,0.25)",background:"#000"}}>
        <img src={MZ3_SCAN} alt="Customer scanning Dairy Milk Silk pack QR" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
        <div style={{position:"absolute",inset:"12% 14% auto",height:0}}></div>
        <div style={{position:"absolute",left:"12%",right:"12%",height:2,background:`linear-gradient(90deg,transparent,${CAD_GOLD},transparent)`,animation:"scanLine 2.6s ease-in-out infinite",boxShadow:`0 0 12px ${CAD_GOLD}`}}></div>
        {[["12%","12%","borderTop","borderLeft"],["12%","auto","borderTop","borderRight"],["auto","12%","borderBottom","borderLeft"],["auto","auto","borderBottom","borderRight"]].map((c,i)=>(
          <div key={i} style={{position:"absolute",top:c[0]==="auto"?"auto":c[0],bottom:c[0]==="auto"?"14%":"auto",left:c[1]==="auto"?"auto":c[1],right:c[1]==="auto"?"12%":"auto",width:26,height:26,[c[2]]:`3px solid ${CAD_GOLD}`,[c[3]]:`3px solid ${CAD_GOLD}`,borderRadius:3}}></div>
        ))}
        <div style={{position:"absolute",left:12,right:12,bottom:12,background:"rgba(255,255,255,0.96)",borderRadius:12,padding:"9px 12px"}}>
          <div style={{display:"flex",gap:9,alignItems:"center"}}>
            <span style={{width:28,height:28,flex:"none",borderRadius:8,background:"#E6F6EA",display:"grid",placeItems:"center",fontSize:13}}>✓</span>
            <span style={{fontSize:11.5,fontWeight:800,color:"#1a1a1a"}}>QR detected — Dairy Milk Silk 60g</span>
          </div>
          <div style={{display:"flex",gap:6,marginTop:8,alignItems:"center"}}>
            <span style={{fontSize:9,fontWeight:800,color:"#999",letterSpacing:0.5}}>ROUTES TO</span>
            <span style={{background:"#E9F7EE",border:"1px solid #bfe3cc",color:"#0a7c5c",fontSize:10,fontWeight:800,borderRadius:999,padding:"3px 10px"}}>WhatsApp chatbot</span>
            <span style={{fontSize:9.5,color:"#bbb",fontWeight:800}}>or</span>
            <span style={{background:"#F3EFFB",border:"1px solid #ddd2f0",color:CAD_PURPLE,fontSize:10,fontWeight:800,borderRadius:999,padding:"3px 10px"}}>Web claim form</span>
          </div>
          <div style={{fontSize:9,color:"#999",marginTop:5}}>Destination set per campaign — both land in the same profile.</div>
        </div>
      </div>
    </MZ3Visual>
    <MZ3Right>
      <MZ3Panel title="500M+ packs a year = a media channel Mondelēz already owns" style={{flex:1.15,justifyContent:"center"}}>
        <div style={{fontSize:13,color:"#555",lineHeight:1.7}}>A unique QR per SKU/batch links the physical pack to a digital claim. One scan opens WhatsApp with context pre-filled — <b>which product, which batch, which plant, when and roughly where it was bought</b> — before the customer types a word.</div>
        <div style={{display:"flex",gap:34,marginTop:4}}>
          <MZ3Stat v="1.2M" l="scans / month (est.)" i={0}/><MZ3Stat v="34%" l="scan → verified profile" i={1}/><MZ3Stat v="₹0" l="incremental media cost" i={2}/>
        </div>
      </MZ3Panel>
      <MZ3Panel style={{flex:1.1,justifyContent:"center"}}>
        <MZ3DataGrid items={[{i:"📱",t:"Verified phone (OTP)"},{i:"🙋",t:"Name"},{i:"📍",t:"Pincode"},{i:"🍫",t:"SKU + batch code"},{i:"🏭",t:"Plant + dispatch region"},{i:"🕐",t:"Scan timestamp"},{i:"✅",t:"Marketing consent"}]}/>
      </MZ3Panel>
      <MZ3Panel title="From scan to profile in 3 taps" style={{flex:1,justifyContent:"center"}}>
        <div style={{display:"flex",gap:6,alignItems:"flex-start"}}>
          {[["📷","Scan pack QR"],["💬","WhatsApp opens, context attached"],["🔐","OTP verifies phone"],["👤","Profile created + Joy points"]].map((s,i)=>(
            <React.Fragment key={i}>
              <MZ3StepPhone icon={s[0]} t={s[1]} i={i}/>
              {i<3 && <span style={{color:CAD_GOLD,fontWeight:800,fontSize:17,marginTop:34}}>→</span>}
            </React.Fragment>
          ))}
        </div>
      </MZ3Panel>
    </MZ3Right>
  </>);
}
function MZ3ClaimBot(){
  const [lang,setLang] = React.useState("hi");
  const L = lang==="hi";
  return (<>
    <MZ3Visual label="WhatsApp Joy Bot">
      <MZ3Phone h={580} w={300}>
        <MZ3WAHead title="Cadbury Joy Bot"/>
        <MZ3WABody>
          <MZ3Bub delay={0}>{L?<span>नमस्ते Meena ji! 👋 आपका <b>free Dairy Milk sample</b> तैयार है। बस 2 सवाल — आपका pincode क्या है?</span>:<span>Hi Meena! 👋 Your <b>free Dairy Milk sample</b> is ready. Just 2 questions — what's your pincode?</span>}</MZ3Bub>
          <MZ3Bub me delay={0.15}>482002</MZ3Bub>
          <MZ3Bub delay={0.3}>{L?<span>Jabalpur! 🎉 घर में chocolate कौन सबसे ज़्यादा खाता है?</span>:<span>Jabalpur! 🎉 Who enjoys chocolate most at home?</span>}</MZ3Bub>
          <MZ3QuickBtns delay={0.45} opts={L?["मैं खुद","बच्चे","पूरा परिवार"]:["Me","Kids","Whole family"]}/>
          <MZ3Bub me delay={0.6}>{L?"बच्चे":"Kids"}</MZ3Bub>
          <MZ3Bub delay={0.75}>{L?<span>धन्यवाद! आपका sample 3 दिन में पहुँचेगा 🚚 + <b>50 Joy points</b> मिले!</span>:<span>Thank you! Sample arrives in 3 days 🚚 + you earned <b>50 Joy points</b>!</span>}</MZ3Bub>
        </MZ3WABody>
      </MZ3Phone>
    </MZ3Visual>
    <MZ3Right>
      <MZ3Panel title="Vernacular chatbot — built for Tier 2 & 3" style={{flex:1.25,justifyContent:"center",position:"relative"}}>
        <MZ3ClickHint t="Click — see it in English / हिन्दी" style={{top:-13,right:16}}/>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          {[["hi","हिन्दी"],["en","English"]].map(([k,t])=><MZ3Chip key={k} t={t} on={lang===k} onClick={()=>setLang(k)}/>)}
          {["தமிழ்","తెలుగు","বাংলা","मराठी","+4"].map(t=><MZ3Chip key={t} t={t} small/>)}
        </div>
        <div style={{fontSize:13,color:"#555",lineHeight:1.7}}>Language auto-selected from the <b>pincode's dominant language</b>, switchable any time. Every question is a micro-survey: declared data lands directly in the CRM-ready profile.</div>
        <div style={{display:"flex",gap:34}}>
          <MZ3Stat v="9" l="languages live" i={0}/><MZ3Stat v="2.3×" l="Tier-2/3 completion vs English-only" i={1}/><MZ3Stat v="78%" l="chat completion rate" i={2}/>
        </div>
      </MZ3Panel>
      <MZ3Panel style={{flex:1,justifyContent:"center"}}>
        <MZ3DataGrid items={[{i:"🙋",t:"Name"},{i:"📱",t:"Verified phone"},{i:"🏠",t:"Full address"},{i:"📍",t:"Pincode"},{i:"🗣",t:"Language preference"},{i:"👨‍👩‍👧",t:"Household composition"},{i:"🍫",t:"Consumption context"},{i:"✅",t:"Consent"}]} cols={4}/>
      </MZ3Panel>
    </MZ3Right>
  </>);
}
function MZ3Website(){
  return (<>
    <MZ3Visual label="cadbury.in + FreeStand claim widget">
      <div style={{position:"relative",width:"100%",height:"100%"}}>
        <div style={{position:"absolute",left:0,right:0,top:36,borderRadius:12,overflow:"hidden",border:"1px solid #d8d2e6",boxShadow:"0 14px 34px rgba(42,20,88,0.18)",background:"#fff"}}>
          <div style={{background:"#f2f1f6",borderBottom:"1px solid #e4e2ec",padding:"7px 12px",display:"flex",alignItems:"center",gap:9}}>
            <span style={{display:"flex",gap:5}}>{["#ff5f57","#febc2e","#28c840"].map(c=><span key={c} style={{width:9,height:9,borderRadius:"50%",background:c}}></span>)}</span>
            <span style={{flex:1,background:"#fff",border:"1px solid #e4e2ec",borderRadius:999,padding:"3px 12px",fontSize:10.5,color:"#666"}}>🔒 cadbury.in/free-sample</span>
          </div>
          <img src={MZ3_SITE} alt="cadbury.in giveaway page" style={{width:"100%",display:"block"}}/>
        </div>
        <div style={{position:"absolute",right:2,bottom:30,width:205,borderRadius:14,overflow:"hidden",border:`2px solid ${CAD_PURPLE}`,boxShadow:"0 18px 40px rgba(20,10,50,0.3)",background:"#fff",animation:"fadeInUp .5s .25s both"}}>
          <div style={{background:CAD_PURPLE,color:"#fff",fontSize:9.5,fontWeight:800,letterSpacing:0.8,padding:"6px 11px"}}>CLAIM YOUR FREE SAMPLE</div>
          <img src={MZ3_FORM} alt="FreeStand claim form — name, WhatsApp number, DOB, email" style={{width:"100%",display:"block"}}/>
        </div>
        <svg style={{position:"absolute",left:70,top:210,width:200,height:130,overflow:"visible"}} viewBox="0 0 200 130">
          <path d="M20,10 C90,40 150,60 165,105" fill="none" stroke={CAD_GOLD} strokeWidth="2.5" strokeDasharray="6 6" style={{animation:"dashMove 1.2s linear infinite"}}></path>
          <path d="M165,105 l-10,-4 M165,105 l-2,-11" stroke={CAD_GOLD} strokeWidth="2.5" fill="none"></path>
        </svg>
        <div style={{position:"absolute",left:14,bottom:44,background:"rgba(255,255,255,0.95)",border:"1px solid #e5ddf3",borderRadius:10,padding:"7px 11px",fontSize:10,fontWeight:800,color:CAD_PURPLE,maxWidth:160,lineHeight:1.4}}>“Enter now” opens the FreeStand widget — 40-second claim</div>
      </div>
    </MZ3Visual>
    <MZ3Right>
      <MZ3Panel title="The website becomes a sampling storefront" style={{flex:1.25,justifyContent:"center"}}>
        <div style={{fontSize:13,color:"#555",lineHeight:1.7}}>A FreeStand claim widget embeds on cadbury.in and every campaign microsite. Address is <b>geo-validated at entry</b> (no fake claims), OTP verifies the phone, and the visitor's on-site behaviour — pages, products browsed — attaches to the profile.</div>
        <div style={{display:"flex",gap:34}}>
          <MZ3Stat v="140K" l="monthly claim-page visits" i={0}/><MZ3Stat v="52%" l="form completion" i={1}/><MZ3Stat v="0%" l="undeliverable addresses" i={2}/>
        </div>
      </MZ3Panel>
      <MZ3Panel style={{flex:1,justifyContent:"center"}}>
        <MZ3DataGrid items={[{i:"🙋",t:"Name"},{i:"📱",t:"Verified phone"},{i:"✉️",t:"Email"},{i:"🏠",t:"Address (geo-validated)"},{i:"🎂",t:"Date of birth"},{i:"🖱",t:"Browsing behaviour"},{i:"🔗",t:"UTM source"},{i:"✅",t:"Consent"}]} cols={4}/>
      </MZ3Panel>
    </MZ3Right>
  </>);
}
function MZ3Field(){
  return (<>
    <MZ3Visual label="Stall + scan-verified handover">
      <div style={{display:"flex",flexDirection:"column",gap:14,width:"100%",height:"100%",justifyContent:"center"}}>
        <MZ3Stall h={252}/>
        <div style={{display:"flex",gap:12,alignItems:"stretch"}}>
          <div style={{width:196,flex:"none",borderRadius:22,border:"6px solid #1c1c22",overflow:"hidden",position:"relative",boxShadow:"0 14px 30px rgba(20,10,50,0.25)",background:"#000"}}>
            <img src={MZ3_SCAN} alt="Promoter phone scanning pack QR to verify the claim" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",minHeight:250}}/>
            <div style={{position:"absolute",left:"14%",right:"14%",height:2,background:`linear-gradient(90deg,transparent,${CAD_GOLD},transparent)`,animation:"scanLine 2.6s ease-in-out infinite",boxShadow:`0 0 10px ${CAD_GOLD}`}}></div>
            <div style={{position:"absolute",left:8,right:8,bottom:8,background:"#E6F6EA",borderRadius:9,padding:"6px 9px",fontSize:9.5,fontWeight:800,color:"#1d6b2f",textAlign:"center"}}>✓ Claim verified — QR ↔ phone matched</div>
          </div>
          <div style={{flex:1,background:"#fff",border:"1px solid #e8e8f0",borderRadius:14,padding:"11px 13px",display:"flex",flexDirection:"column",gap:7,justifyContent:"center"}}>
            <div style={{fontSize:9.5,fontWeight:800,letterSpacing:1.2,color:"#999",textTransform:"uppercase"}}>FreeStand promoter app</div>
            {[["Customer OTP","✓ 4821 verified"],["Sample handed","Dairy Milk 50g · scanned"],["Location","Phoenix Mall · MT-114"]].map(([k,v],i)=>(
              <div key={i} style={{border:"1px solid #eee",borderRadius:8,padding:"5px 9px",animation:`fadeInUp .3s ${i*0.12}s both`}}>
                <div style={{fontSize:8.5,fontWeight:800,letterSpacing:0.8,textTransform:"uppercase",color:"#999"}}>{k}</div>
                <div style={{fontSize:11,fontWeight:700,color:"#333",marginTop:1}}>{v}</div>
              </div>
            ))}
            <div style={{fontSize:10.5,color:"#666",lineHeight:1.5}}>📄 Retail add-on: <b>receipt upload</b> → OCR reads basket, store & spend.</div>
          </div>
        </div>
      </div>
    </MZ3Visual>
    <MZ3Right>
      <MZ3Panel title="Human touch, digital capture — from mall stall to kirana counter" style={{flex:1.25,justifyContent:"center"}}>
        <div style={{fontSize:13,color:"#555",lineHeight:1.7}}>Promoters at malls, colleges and modern-trade endcaps hand samples only against an <b>OTP-verified phone</b>; the pack QR is <b>scanned at handover</b> so distribution, identity and location are all verified. In-store standees add spin-the-wheel wins, and <b>receipt upload</b> verifies real purchase — revealing the whole basket.</div>
        <div style={{display:"flex",gap:34}}>
          <MZ3Stat v="80%" l="interaction → profile" i={0}/><MZ3Stat v="100%" l="samples accounted for" i={1}/><MZ3Stat v="basket-level" l="purchase data via OCR" i={2}/>
        </div>
      </MZ3Panel>
      <MZ3Panel style={{flex:1,justifyContent:"center"}}>
        <MZ3DataGrid items={[{i:"📱",t:"Verified phone"},{i:"🙋",t:"Name"},{i:"📍",t:"Stall / store geo"},{i:"🍫",t:"Sample SKU (scanned)"},{i:"🧾",t:"Receipt line items"},{i:"🛒",t:"Basket adjacencies"},{i:"💳",t:"Spend band"},{i:"🤝",t:"Face-to-face verified"}]} cols={4}/>
      </MZ3Panel>
    </MZ3Right>
  </>);
}
function MZ3Ads(){
  return (<>
    <MZ3Visual label="Instagram · sponsored">
      <div style={{width:330,background:"#fff",borderRadius:14,overflow:"hidden",boxShadow:"0 18px 40px rgba(20,10,50,0.22)",border:"1px solid #ececf2"}}>
        <div style={{padding:"10px 12px",display:"flex",alignItems:"center",gap:9}}>
          <div style={{width:32,height:32,borderRadius:"50%",padding:2,background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"}}>
            <div style={{width:"100%",height:"100%",borderRadius:"50%",background:CAD_PURPLE,display:"grid",placeItems:"center",color:"#fff",fontSize:12,fontWeight:800,fontFamily:"'Lobster Two',cursive"}}>C</div>
          </div>
          <div><div style={{fontSize:12,fontWeight:700}}>cadburydairymilk <span style={{color:"#3897f0"}}>✓</span></div><div style={{fontSize:10,color:"#8e8e8e"}}>Sponsored</div></div>
          <div style={{marginLeft:"auto",fontSize:15,color:"#666",letterSpacing:1}}>•••</div>
        </div>
        <div style={{width:"100%",aspectRatio:"1/1",overflow:"hidden",background:"#0e0618"}}>
          <img src={MZ3_AD} alt="Cadbury Dairy Milk ad creative" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
        </div>
        <div style={{background:"#0a7cff",color:"#fff",padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:12.5,fontWeight:700}}>
          <span>Send message on WhatsApp</span><span>›</span>
        </div>
        <div style={{padding:"9px 12px 4px",display:"flex",gap:13,fontSize:17,alignItems:"center"}}>
          <span style={{color:"#ed4956"}}>♥</span><span>💬</span><span>➤</span><span style={{marginLeft:"auto"}}>🔖</span>
        </div>
        <div style={{padding:"2px 12px 12px"}}>
          <div style={{fontSize:11.5,fontWeight:700}}>2.1M likes</div>
          <div style={{fontSize:11,color:"#333",marginTop:2,lineHeight:1.5}}><b>cadburydairymilk</b> Kuch achha ho jaaye 🍫 Claim your free Silk sample on WhatsApp — 3 days delivery.</div>
        </div>
      </div>
    </MZ3Visual>
    <MZ3Right>
      <MZ3Panel title="Paid media that ends in a profile, not just a view" style={{flex:1.25,justifyContent:"center"}}>
        <div style={{fontSize:13,color:"#555",lineHeight:1.7}}>Meta & Google click-to-WhatsApp ads drop straight into the same Joy Bot. The ad's <b>interest signal</b> (creative, audience, placement) attaches to the profile — so acquisition source and declared data live in one record, and lookalike audiences improve every month.</div>
        <div style={{display:"flex",gap:34}}>
          <MZ3Stat v="₹14–22" l="cost per verified profile" i={0}/><MZ3Stat v="41%" l="click → chat completion" i={1}/><MZ3Stat v="+27%" l="lookalike CTR after 3 months" i={2}/>
        </div>
      </MZ3Panel>
      <MZ3Panel style={{flex:1,justifyContent:"center"}}>
        <MZ3DataGrid items={[{i:"🎯",t:"Campaign + creative ID"},{i:"✨",t:"Interest signal"},{i:"📱",t:"Verified phone"},{i:"🙋",t:"Name"},{i:"📍",t:"Pincode"},{i:"♻️",t:"Retargeting audience seed"},{i:"✅",t:"Consent"}]}/>
      </MZ3Panel>
    </MZ3Right>
  </>);
}
function MZ3Acquire({ sub=0, setSub }){
  const ch = MZ3_CHANNELS[sub].id;
  const Views = { qr:MZ3PackQR, claim:MZ3ClaimBot, web:MZ3Website, field:MZ3Field, ads:MZ3Ads };
  const V = Views[ch];
  return (
    <div style={{display:"flex",gap:22,height:"100%"}}>
      <div style={{width:264,flex:"none",display:"flex",flexDirection:"column",gap:7,height:"100%",position:"relative"}}>
        <MZ3Kicker color={CAD_PURPLE}>Pillar 1 · Acquire</MZ3Kicker>
        <div style={{fontSize:20,fontWeight:800,lineHeight:1.25,marginBottom:4}}>Five always-open doors into one profile</div>
        <MZ3ClickHint t="Click a door to explore" style={{top:66,right:-8}}/>
        {MZ3_CHANNELS.map((c,ci)=>(
          <button key={c.id} onClick={()=>setSub(ci)} style={{textAlign:"left",cursor:"pointer",fontFamily:"inherit",border:ch===c.id?`1.5px solid ${CAD_PURPLE}`:"1.5px solid #e8e8f0",background:ch===c.id?"#F3EFFB":"#fff",borderRadius:12,padding:"11px 13px",display:"flex",gap:10,alignItems:"center"}}>
            <span style={{fontSize:11,fontWeight:800,color:ch===c.id?CAD_PURPLE:"#bbb"}}>{c.n}</span>
            <span style={{minWidth:0}}>
              <span style={{display:"block",fontSize:12.5,fontWeight:800,color:ch===c.id?CAD_PURPLE:"#333"}}>{c.t}</span>
              <span style={{display:"block",fontSize:10,color:"#888",marginTop:1}}>{c.s}</span>
            </span>
            <span style={{marginLeft:"auto",fontSize:9,fontWeight:800,color:"#999",whiteSpace:"nowrap"}}>{c.vol}</span>
          </button>
        ))}
        <div style={{marginTop:"auto",background:"#FDF3DC",borderRadius:12,padding:"11px 14px",fontSize:11.5,color:"#6a4a00",lineHeight:1.5}}><b>One schema, five doors.</b> Whichever gate a customer walks through, the record lands in the same CRM-ready profile.</div>
      </div>
      <div key={ch} style={{flex:1,minWidth:0,height:"100%",display:"flex",gap:24,animation:"stageIn .4s both"}}><V/></div>
    </div>
  );
}
Object.assign(window, { MZ3Acquire, MZ3_CHANNELS });
