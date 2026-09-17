/* ACT 4 — Joy Club: professional loyalty portal (FreeStand-style) with Mondelēz branding */
const MZ3C = window.__resources||{};
const MZ3_PDM = MZ3C["prodDM"]||"mdlz/prod-dairymilk.png";
const MZ3_PBIS = MZ3C["prodBiscoff"]||"mdlz/prod-biscoff.png";
const MZ3_PTWL = MZ3C["prodTwirl"]||"mdlz/prod-twirl.png";
const MZ3_RTIF = MZ3C["recipeTiffin"]||"mdlz/recipe-tiffin.png";
const MZ3_GBDAY = MZ3C["giftBday"]||"mdlz/gift-birthday.png";
const MZ3_SRKA = MZ3C["srkAd"]||"mdlz/srk-ad.png";
const MZ3_MDLZ = (window.__resources||{})["mdlzLogo"]||"mdlz/mdlz-logo.png";
function MZ3CIcon({ d, size=17 }){
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={d}></path></svg>;
}
const MZ3_ICO = {
  home:"M3 11 12 4l9 7M5.5 9.5V20h13V9.5",
  shop:"M6 8h12l1 13H5L6 8zM9 10V6a3 3 0 0 1 6 0v4",
  gift:"M4 8.5h16V12H4zM5 12h14v9H5zM12 8.5V21M12 8.5S8 8.5 8 6a2 2 0 0 1 4 0M12 8.5s4 0 4-2.5a2 2 0 0 0-4 0",
  book:"M5 4a2 2 0 0 1 2-2h12v18H7a2 2 0 0 0-2 2V4zM19 2v18",
  user:"M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.8-6 8-6s8 2 8 6",
};
const MZ3_TABS = [["home","home","Home"],["shop","shop","Shop"],["rewards","gift","Rewards"],["recipes","book","Recipes"],["profile","user","Profile"]];
function MZ3ClubNav({ tab, setSub }){
  return (
    <div style={{flex:"none",display:"flex",background:"#fff",borderTop:"1px solid #ececf0",padding:"7px 8px 10px",gap:4}}>
      {MZ3_TABS.map(([k,ic,t],i)=>(
        <button key={k} onClick={()=>setSub(i)} style={{flex:1,cursor:"pointer",fontFamily:"inherit",border:"none",borderRadius:12,padding:"7px 0 5px",background:tab===k?CAD_PURPLE:"transparent",color:tab===k?"#fff":"#8a8a94",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
          <MZ3CIcon d={MZ3_ICO[ic]}/>
          <span style={{fontSize:8.5,fontWeight:800}}>{t}</span>
        </button>
      ))}
    </div>
  );
}
function MZ3StatusPill({ t, tone }){
  const c = tone==="green"?{bg:"#E9F6EC",fg:"#1d6b2f"}:{bg:"#FCF1DE",fg:"#9a6200"};
  return <span style={{background:c.bg,color:c.fg,fontSize:9,fontWeight:800,borderRadius:999,padding:"3px 9px"}}>{t}</span>;
}
function MZ3ProdRow({ img, t, s, r, i, pos="center" }){
  return (
    <div style={{background:"#fff",border:"1px solid #ececf0",borderRadius:12,padding:"8px 10px",display:"flex",gap:10,alignItems:"center",animation:`fadeInUp .3s ${i*0.07}s both`}}>
      <img src={img} alt={t} style={{width:42,height:42,flex:"none",borderRadius:9,objectFit:"cover",objectPosition:pos,border:"1px solid #f0f0f4"}}/>
      <span style={{minWidth:0,flex:1}}>
        <span style={{display:"block",fontSize:11.5,fontWeight:800,color:"#26262e",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{t}</span>
        {s && <span style={{display:"block",fontSize:9.5,color:"#8a8a94",marginTop:1}}>{s}</span>}
      </span>
      {r}
    </div>
  );
}
function MZ3ClubBody({ tab }){
  const wrap = { flex:1, minHeight:0, overflow:"hidden", background:"#F6F5F8", padding:"11px 12px", display:"flex", flexDirection:"column", gap:8 };
  if (tab==="home") return (
    <div style={wrap}>
      <div style={{fontSize:10.5,color:"#8a8a94"}}>Welcome back, Meena</div>
      <div style={{fontSize:17,fontWeight:800,marginTop:-4}}>Your Joy Club</div>
      <div style={{background:`linear-gradient(140deg,${CAD_PURPLE},#5E3D96)`,borderRadius:14,padding:"12px 14px",color:"#fff"}}>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:9.5,opacity:0.85,letterSpacing:0.6}}><span>GOLD MEMBER</span><span>NEXT: BLISS</span></div>
        <div style={{fontSize:24,fontWeight:800,marginTop:3}}>1,625 pts</div>
        <div style={{height:5,background:"rgba(255,255,255,0.25)",borderRadius:999,marginTop:7}}><div style={{width:"72%",height:"100%",background:CAD_GOLD,borderRadius:999}}></div></div>
        <div style={{fontSize:9,opacity:0.8,marginTop:4}}>625 pts to Bliss — free festive hamper</div>
      </div>
      <div style={{fontSize:10,fontWeight:800,letterSpacing:0.8,color:"#8a8a94",textTransform:"uppercase",marginTop:2}}>Sample history</div>
      <MZ3ProdRow img={MZ3_PDM} t="Dairy Milk sample" s="Claimed 12 Jan 2026" r={<MZ3StatusPill t="Delivered" tone="green"/>} i={0}/>
      <MZ3ProdRow img={MZ3_PBIS} t="Cadbury &More Biscoff" s="New launch trial · 28 Aug" r={<MZ3StatusPill t="In progress" tone="amber"/>} i={1}/>
      <div style={{fontSize:10,fontWeight:800,letterSpacing:0.8,color:"#8a8a94",textTransform:"uppercase",marginTop:2}}>Participate & earn</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        {[["Post UGC","+250 pts"],["Refer a friend","+200 pts"],["Upload receipt","+80 / item"],["Play a quiz","+50 / round"]].map(([t,p],i)=>(
          <div key={t} style={{background:"#fff",border:"1px solid #ececf0",borderRadius:10,padding:"7px 10px",display:"flex",justifyContent:"space-between",alignItems:"center",animation:`fadeInUp .3s ${0.2+i*0.06}s both`}}>
            <span style={{fontSize:10,fontWeight:700,color:"#3a3a44"}}>{t}</span><span style={{fontSize:9,fontWeight:800,color:CAD_PURPLE}}>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
  if (tab==="shop") return (
    <div style={wrap}>
      <div style={{background:"linear-gradient(150deg,#241145,#3B1E78)",borderRadius:14,padding:"13px 14px",color:"#fff"}}>
        <div style={{fontSize:9,fontWeight:800,letterSpacing:1,color:CAD_GOLD}}>CURATED SHOPPING</div>
        <div style={{fontSize:15,fontWeight:800,marginTop:3,lineHeight:1.3}}>Find your favourites again</div>
        <div style={{fontSize:9.5,opacity:0.8,marginTop:3,lineHeight:1.5}}>Official brand stores & trusted quick-commerce — straight to the products you sampled.</div>
      </div>
      <MZ3ProdRow img={MZ3_PDM} t="Dairy Milk 50g" s="₹45 · sampled ✓" r={<span style={{background:CAD_PURPLE,color:"#fff",fontSize:9,fontWeight:800,borderRadius:999,padding:"5px 11px"}}>Buy</span>} i={0}/>
      <MZ3ProdRow img={MZ3_PBIS} t="Cadbury &More Biscoff" s="₹120 · new launch" r={<span style={{background:CAD_PURPLE,color:"#fff",fontSize:9,fontWeight:800,borderRadius:999,padding:"5px 11px"}}>Buy</span>} i={1}/>
      <MZ3ProdRow img={MZ3_PTWL} t="Twirl Golden Dipped" s="₹85 · limited edition" r={<span style={{background:CAD_PURPLE,color:"#fff",fontSize:9,fontWeight:800,borderRadius:999,padding:"5px 11px"}}>Buy</span>} i={2}/>
      <MZ3ProdRow img={MZ3_SRKA} t="Celebrations Premium" s="₹499 · festive gifting" pos="top" r={<span style={{background:CAD_PURPLE,color:"#fff",fontSize:9,fontWeight:800,borderRadius:999,padding:"5px 11px"}}>Buy</span>} i={3}/>
      <div style={{fontSize:9,color:"#a5a5ae",textAlign:"center"}}>BigBasket · Blinkit · Amazon · official store</div>
    </div>
  );
  if (tab==="rewards") return (
    <div style={wrap}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{fontSize:16,fontWeight:800}}>Rewards</div>
        <span style={{background:CAD_GOLD,color:"#3a2600",fontSize:10,fontWeight:800,borderRadius:999,padding:"4px 12px"}}>1,625 pts</span>
      </div>
      <div style={{position:"relative",borderRadius:14,overflow:"hidden",height:96,flex:"none"}}>
        <img src={MZ3_GBDAY} alt="Cadbury gift hampers" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,rgba(26,10,54,0.85) 30%,transparent)"}}></div>
        <div style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:"#fff"}}>
          <div style={{fontSize:9,fontWeight:800,letterSpacing:1,color:CAD_GOLD}}>FEATURED</div>
          <div style={{fontSize:13,fontWeight:800,marginTop:2}}>Festive hamper</div>
          <div style={{fontSize:10,opacity:0.85}}>1,500 pts · Diwali edition</div>
        </div>
      </div>
      {[["Rakhi gift card ₹250","500 pts","Festival"],["Movie voucher ×2","800 pts","Partner"],["Silk personalised pack","600 pts","Cadbury"],["Gold early access — festive sale","Tier perk","Festival"]].map(([t,p,tag],i)=>(
        <div key={t} style={{background:"#fff",border:"1px solid #ececf0",borderRadius:12,padding:"9px 11px",display:"flex",alignItems:"center",gap:9,animation:`fadeInUp .3s ${i*0.07}s both`}}>
          <span style={{minWidth:0,flex:1}}>
            <span style={{display:"block",fontSize:11.5,fontWeight:800,color:"#26262e"}}>{t}</span>
            <span style={{display:"block",fontSize:9,color:"#8a8a94",marginTop:1}}>{tag}</span>
          </span>
          <span style={{color:CAD_PURPLE,fontSize:10.5,fontWeight:800,whiteSpace:"nowrap"}}>{p}</span>
        </div>
      ))}
    </div>
  );
  if (tab==="recipes") return (
    <div style={wrap}>
      <div style={{fontSize:16,fontWeight:800}}>Recipes</div>
      <div style={{borderRadius:14,overflow:"hidden",background:"#fff",border:"1px solid #ececf0",flex:"none"}}>
        <div style={{height:130,overflow:"hidden"}}><img src={MZ3_RTIF} alt="Tiffin cake made with Dairy Milk" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/></div>
        <div style={{padding:"10px 13px"}}>
          <div style={{fontSize:12.5,fontWeight:800}}>Cheryl's Tiffin Cake</div>
          <div style={{fontSize:9.5,color:"#8a8a94",marginTop:2}}>15 mins · 8 servings · Dairy Milk</div>
          <div style={{display:"inline-block",background:`linear-gradient(90deg,${CAD_GOLD},#f5d98a)`,color:"#3a2600",fontSize:10,fontWeight:800,borderRadius:999,padding:"5px 14px",marginTop:8}}>View recipe</div>
        </div>
      </div>
      {[["Cold Coffee Dairy Milk Shake","5 mins · summer special"],["Biscoff-stuffed brownies","40 mins · with &More bar"],["Celebrations barfi remix","25 mins · festive"]].map(([t,s],i)=>(
        <div key={t} style={{background:"#fff",border:"1px solid #ececf0",borderRadius:12,padding:"9px 11px",animation:`fadeInUp .3s ${i*0.07}s both`}}>
          <div style={{fontSize:11.5,fontWeight:800,color:"#26262e"}}>{t}</div>
          <div style={{fontSize:9,color:"#8a8a94",marginTop:1}}>{s}</div>
        </div>
      ))}
      <div style={{fontSize:9,color:"#a5a5ae",textAlign:"center"}}>Post your bake with #JoyInTheKitchen — earn 250 pts</div>
    </div>
  );
  return (
    <div style={wrap}>
      <div style={{fontSize:16,fontWeight:800}}>Profile</div>
      <div style={{fontSize:10,color:"#8a8a94",marginTop:-6}}>Your account and privacy controls.</div>
      <div style={{background:"#fff",border:"1px solid #ececf0",borderRadius:12,overflow:"hidden"}}>
        {[["Name","Meena Sharma"],["Email","meena.s@gmail.com"],["Phone","+91 98765 43210"],["Language","हिन्दी"]].map(([k,v],i)=>(
          <div key={k} style={{padding:"8px 12px",borderBottom:i<3?"1px solid #f2f2f5":"none",animation:`fadeInUp .3s ${i*0.06}s both`}}>
            <div style={{fontSize:9,color:"#a5a5ae"}}>{k}</div>
            <div style={{fontSize:11.5,fontWeight:700,marginTop:1}}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#fff",border:"1px solid #ececf0",borderRadius:12,padding:"9px 12px",fontSize:11,fontWeight:700,color:"#3a3a44"}}>Log out</div>
      <div style={{fontSize:10,fontWeight:800,letterSpacing:0.8,color:"#8a8a94",textTransform:"uppercase",marginTop:2}}>Manage your data</div>
      <div style={{background:"#fff",border:"1px solid #ececf0",borderRadius:12,padding:"9px 12px"}}>
        <div style={{fontSize:11,fontWeight:700}}>Export data</div>
        <div style={{fontSize:9,color:"#8a8a94",marginTop:1}}>Request a copy of the data linked to this account.</div>
      </div>
      <div style={{background:"#fff",border:"1px solid #f3d7d7",borderRadius:12,padding:"9px 12px"}}>
        <div style={{fontSize:11,fontWeight:700,color:"#c0392b"}}>Request data deletion</div>
        <div style={{fontSize:9,color:"#8a8a94",marginTop:1}}>DPDP-compliant erasure of your profile.</div>
      </div>
    </div>
  );
}
function MZ3Club({ sub=0, setSub }){
  const tab = MZ3_TABS[Math.min(sub,4)][0];
  return (
    <div style={{display:"flex",gap:24,height:"100%"}}>
      <div style={{width:280,flex:"none",display:"flex",flexDirection:"column",gap:12}}>
        <div>
          <MZ3Kicker color={CAD_PURPLE}>Pillar 4 · Joy Club</MZ3Kicker>
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.25,marginTop:4}}>The loyalty home every campaign leads to</div>
        </div>
        <div style={{fontSize:12.5,color:"#555",lineHeight:1.7}}>A persistent customer portal — not a microsite that dies with the campaign. Customers log in with <b>phone + OTP</b>, track their samples, shop the SKUs they tasted, redeem festival rewards, cook with the brands, and control their own data.</div>
        <MZ3Panel style={{flex:"none"}}>
          <MZ3DataGrid label="Why brands need it" items={[{i:"↻",t:"Repeat visits without media spend"},{i:"⇢",t:"Sample → purchase closed loop"},{i:"✓",t:"DPDP consent & trust"},{i:"◔",t:"Every click = profile signal"}]} cols={1}/>
        </MZ3Panel>
        <div style={{marginTop:"auto",background:"#FDF3DC",borderRadius:12,padding:"11px 14px",fontSize:11.5,color:"#6a4a00",lineHeight:1.5}}><b>Live today</b> for L'Oréal & other FreeStand programs — reskinned for Joy Club in weeks, not quarters.</div>
      </div>
      <div style={{flex:"none",height:"100%",display:"grid",placeItems:"center",position:"relative"}}>
        <MZ3ClickHint t="Click the tabs below" style={{bottom:30,left:"50%",transform:"translateX(-50%)"}}/>
        <MZ3Phone h={660} w={315}>
          <div style={{flex:"none",padding:"24px 13px 9px",display:"flex",alignItems:"center",gap:9,borderBottom:"1px solid #ececf0",background:"#fff"}}>
            <img src={MZ3_MDLZ} alt="Mondelēz" style={{height:20,width:"auto"}}/>
            <div style={{marginLeft:"auto",textAlign:"right"}}>
              <div style={{fontSize:12,fontWeight:800,fontFamily:"'Lobster Two',cursive",color:CAD_PURPLE}}>Joy Club</div>
              <div style={{fontSize:8,color:"#a5a5ae"}}>Customer portal · joy.cadbury.in</div>
            </div>
          </div>
          <MZ3ClubBody tab={tab}/>
          <MZ3ClubNav tab={tab} setSub={setSub}/>
        </MZ3Phone>
      </div>
      <div style={{flex:1,minWidth:0,height:"100%",display:"flex",flexDirection:"column",gap:12}}>
        <MZ3Panel title="Shop — sampled SKUs become carts" style={{flex:1,justifyContent:"center"}}>
          <div style={{fontSize:12,color:"#555",lineHeight:1.65}}>Every SKU a customer sampled or scanned appears with <b>direct buy links</b> to official stores and quick-commerce. Clicks are tracked — sample → repurchase attribution, per SKU, per pincode.</div>
        </MZ3Panel>
        <MZ3Panel title="Rewards — festival-first catalogue" style={{flex:1,justifyContent:"center"}}>
          <div style={{fontSize:12,color:"#555",lineHeight:1.65}}>Diwali hampers, Rakhi cards, Silk personalised packs, movie nights. Redemption choice itself is a signal — <b>reward elasticity per cohort</b> feeds the next campaign's budget.</div>
        </MZ3Panel>
        <MZ3Panel title="Recipes & participation keep it alive" style={{flex:1,justifyContent:"center"}}>
          <div style={{fontSize:12,color:"#555",lineHeight:1.65}}>Recipes, UGC contests, referrals, receipt upload and quizzes run between campaigns. Receipt upload alone turns loyalty into a <b>continuous purchase panel</b>.</div>
        </MZ3Panel>
      </div>
    </div>
  );
}
Object.assign(window, { MZ3Club });
