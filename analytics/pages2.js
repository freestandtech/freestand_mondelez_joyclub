/* Statistical Analysis + Data Visualisation + Overview */
const Q1="Which chocolate do you buy most often?", Q2="What type of chocolate do you buy most?", Q3="How often do you buy chocolate?", Q4="What's the usual occasion?", Q5="Where do you usually buy chocolate?";
let stTab="Analysis", segView="Tree";
function pageStats(){
  const drivers=[[Q1,83,"#5B3FD9"],[Q2,10,"#A99AF0"],[Q3,7,"#A99AF0"],[Q5,1,"#A99AF0"]];
  const idx=[
    [Q5,"Rank #0",[["Not answered",5610,"12.9%","+0pp above average",""]]],
    [Q1,"Rank #1",[["Cadbury Dairy Milk",1281,"15.6%","+3pp above average","g"],["Cadbury Silk",268,"14.3%","+1pp above average",""],["Other national brands",510,"13.4%","+1pp above average",""],["Not answered",3181,"12.5%","0pp below average",""],["Regional / local",39,"10.6%","2pp below average",""],["Imported",10,"10.0%","3pp below average",""],["No usual brand",293,"8.9%","4pp below average","r"]]],
    [Q2,"Rank #2",[["Mix of dark & milk",1160,"14.2%","+1pp above average",""],["Dark",333,"13.5%","+1pp above average",""],["Not answered",3181,"12.5%","0pp below average",""],["Milk",936,"12.3%","1pp below average",""]]],
    [Q3,"Rank #3",[["Weekly",1457,"13.6%","+1pp above average",""],["Fortnightly",3597,"12.8%","0pp below average",""],["Monthly",556,"11.9%","1pp below average",""]]],
    [Q4,"Rank #4",[["Self-treat",2428,"13.4%","+0pp above average",""],["Gifting",3182,"12.5%","0pp below average",""]]],
  ];
  const tree=[[1,"All Respondents","12.9%","n=5,610","#FFFBEB","#FBEBC0",""],
    [2,"No usual brand, Imported, Regional",'10.0%',"n=882","#FEF2F2","#F8D4D4","-23%"],
    [2,"Not answered, Other national",'12.6%',"n=3,477","#FFFBEB","#FBEBC0","-2%"],
    [2,"Cadbury Dairy Milk",'15.6%',"n=1,281","#F0FBF4","#CDEFD9","+21%"],
    [3,"Fortnightly",'8.3%',"n=633","#FEF2F2","#F8D4D4","-36%"],
    [3,"Monthly, Weekly",'12.9%',"n=319","#FFFBEB","#FBEBC0","avg"],
    [4,"Dark, Milk",'6.0%',"n=382","#FEF2F2","#F8D4D4","-53%"],
    [4,"Mix of dark & milk",'10.8%',"n=261","#FEF2F2","#F8D4D4","-17%"],
    [4,"Mix, Dark",'9.6%',"n=178","#FEF2F2","#F8D4D4","-26%"],
    [4,"Milk",'17.0%',"n=141","#F0FBF4","#CDEFD9","+32%"]];
  const model=[["chart2","Odds Ratios","10 coefficients",""],["ok","Model Diagnostics","AUC, fit, calibration","AUC 0.54 · Limited"],["warn","Multicollinearity","4 variables","Flagged"],["clipboard","Dropped Levels","3 excluded",""],["dl","Raw Export","Full JSON download",""]];
  return selRow()+timeline()
  +'<div class="sec">'
  +'<div class="tabs">'+["Analysis","AI Summary"].map(t=>'<div class="tab'+(t===stTab?" on":"")+'" onclick="stSet(\''+t+'\')">'+t+'</div>').join("")
  +'<div style="margin-left:auto;display:flex;align-items:center;gap:8px;padding-bottom:6px"><span style="font-size:10px;color:#9CA3AF">Analyzed 148d ago</span><span class="btnO">'+ic("refresh",12,"#2563EB")+'</span></div></div>'
  +(stTab==="AI Summary"
   ?'<div style="font-size:12.5px;line-height:1.75;color:#374151;padding:4px 2px 10px">'
    +'<b>Summary.</b> Purchase intent averages 12.9% across 5,610 respondents. The brand a household already buys is the dominant predictor (83% of predictive power); occasion and format matter far less.<br/><br/>'
    +'<b>Best segment.</b> Dairy Milk households buying weekly for self-treat convert at 17.0% · 1.32× the average.<br/><br/>'
    +'<b>Watch-outs.</b> Fortnightly buyers of dark/milk-only formats sit at 6.0% (0.47× average) · deprioritise in the next wave.<br/><br/>'
    +'<b>Recommendation.</b> Weight sampling toward Dairy Milk and Silk households in A1–A2 pincodes, and route gifting-occasion cohorts to festive packs.</div>'
   :'<div style="display:grid;grid-template-columns:1fr 1.25fr 1.25fr;gap:10px">'
   +'<div class="wcard" style="min-height:96px"><div style="font-size:10px;font-weight:600;letter-spacing:0.6px;color:#6B7280">PURCHASE INTENT</div><div style="font-size:26px;font-weight:700;margin-top:8px">12.9%</div><div style="font-size:10.5px;color:#9CA3AF;margin-top:3px">5,610 respondents</div></div>'
   +'<div class="wcard" style="min-height:96px;background:#F0FBF4;border-color:#CDEFD9"><div style="font-size:10px;font-weight:600;letter-spacing:0.6px;color:#15803D">TOP SEGMENT</div>'
   +'<div style="font-size:10.5px;color:#374151;margin-top:6px;line-height:1.45">'+Q1+' = Cadbury Dairy Milk AND '+Q3+' = Weekly AND '+Q4+' = Self-treat…</div>'
   +'<div style="display:flex;align-items:center;gap:8px;margin-top:7px"><span style="font-size:16px;font-weight:700;color:#15803D">17.0%</span><span class="pillG">1.32x avg</span></div>'
   +'<div style="font-size:10px;color:#9CA3AF;margin-top:3px">n = 141</div></div>'
   +'<div class="wcard" style="min-height:96px;background:#F3F8FF;border-color:#DCE8FB"><div style="font-size:10px;font-weight:600;letter-spacing:0.6px;color:#1D4ED8">KEY DRIVER</div>'
   +'<div style="font-size:10.5px;color:#374151;margin-top:6px;line-height:1.45">'+Q1+' is the strongest predictor of purchase intent (partial pseudo-R²=0.0034, rank #1).</div>'
   +'<div style="margin-top:7px"><span class="pillB">Rank #1</span></div></div></div>'
   +'<div style="background:#FFFBEB;border:1px solid #FBEBC0;border-radius:7px;padding:9px 11px;margin-top:10px">'
   +'<div style="font-size:10px;font-weight:600;letter-spacing:0.6px;color:#92400E;margin-bottom:6px">BELOW AVERAGE SEGMENTS</div>'
   +[[Q1+' = No usual brand | Imported | Regional AND '+Q3+' = Fortnightly AND '+Q2+' = Dark | Milk',"6.0%","(0.47x)"],
     [Q1+' = No usual brand | Imported AND '+Q3+' = Monthly, Weekly AND '+Q2+' = Mix of dark & milk | Dark',"9.6%","(0.74x)"]]
    .map(r=>'<div style="background:#fff;border:1px solid #FBEBC0;border-radius:5px;padding:6px 9px;margin-bottom:5px;font-size:10.5px;color:#374151;display:flex;gap:8px"><span style="flex:1">'+r[0].replace(/&/g,"&amp;")+'</span><b style="color:#B45309">'+r[1]+'</b><span style="color:#C99C4A">'+r[2]+'</span></div>').join("")
   +'</div>'
   +'<div style="margin-top:14px"><div style="font-size:12.5px;font-weight:600">What Drives Purchase Intent</div>'
   +'<div style="font-size:11.5px;color:#374151;margin-top:5px"><b>'+Q1+'</b> is your strongest driver · <b>8.5×</b> the impact of <i>'+Q2+'</i> and accounts for <b>83%</b> of predictive power.</div>'
   +'<div style="border:1px solid #F1F3F6;border-radius:7px;padding:12px 10px;margin-top:9px">'
   +drivers.map(d=>'<div style="display:flex;align-items:center;gap:9px;margin-bottom:9px"><div style="width:150px;font-size:10px;color:#4B5563;text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+d[0]+'</div>'
     +'<div style="flex:1;background:#F6F7FA;border-radius:3px;height:17px"><div style="width:'+d[1]+'%;height:100%;background:'+d[2]+';border-radius:3px"></div></div>'
     +'<div style="width:34px;font-size:10px;color:#4B5563">'+(d[1]<2?"<1%":d[1]+"%")+'</div></div>').join("")
   +'<div style="display:flex;margin-left:159px;color:#9CA3AF;font-size:8.5px;justify-content:space-between">'+["0%","20%","40%","60%","80%","100%"].map(x=>'<span>'+x+'</span>').join("")+'</div></div></div>'
   /* PI rate index */
   +'<div style="margin-top:16px"><div style="font-size:12.5px;font-weight:600">PI Rate Index</div>'
   +'<div style="font-size:10.5px;color:#9CA3AF;margin-top:3px">Purchase intent rate per response option with confidence intervals</div>'
   +idx.map(q=>'<div style="margin-top:11px"><div style="font-size:11.5px;font-weight:600">'+q[0]+' <span style="color:#9CA3AF;font-weight:400">'+q[1]+'</span></div>'
     +'<table class="dt" style="margin-top:5px;border:1px solid #F1F3F6;border-radius:6px;overflow:hidden"><tr><th>Value</th><th class="num">n</th><th class="num">PI Rate</th><th style="text-align:right">vs Average</th></tr>'
     +q[2].map(r=>'<tr><td'+(r[4]?"":' class="mut"')+'>'+r[0].replace(/&/g,"&amp;")+'</td><td class="num'+(r[4]?"":" mut")+'">'+r[1].toLocaleString("en-IN")+'</td><td class="num'+(r[4]?"":" mut")+'">'+r[2]+'</td>'
       +'<td style="text-align:right">'+(r[4]==="g"?'<span class="pillG">↑ '+r[3]+'</span>':r[4]==="r"?'<span class="pillR">↓ '+r[3]+'</span>':'<span class="mut">'+r[3]+'</span>')+'</td></tr>').join("")
     +'</table></div>').join("")+'</div>'
   /* audience segments */
   +'<div style="margin-top:18px;display:flex;align-items:center;gap:10px"><div style="font-size:12.5px;font-weight:600">Audience Segments <span style="color:#9CA3AF;font-weight:400">6 segments</span></div>'
   +'<div style="margin-left:auto;display:flex;gap:6px">'+["Tree","Table"].map(v=>'<span class="btnO" style="cursor:pointer;'+(v===segView?"border-color:#1D4ED8;color:#1D4ED8":"")+'" onclick="segSet(\''+v+'\')">'+ic(v==="Tree"?"tree":"table",12,v===segView?"#1D4ED8":"#6B7280")+v+'</span>').join("")+'</div></div>'
   +'<div style="font-size:10.5px;color:#9CA3AF;margin-top:4px">Who\'s most likely to buy? The tree splits your audience on the variables that matter most for each group.</div>'
   +(segView==="Tree"
     ?'<div style="padding:14px 4px">'
      +[[1],[2],[3],[4]].map(lv=>'<div style="display:flex;gap:10px;justify-content:center;margin-bottom:'+(lv[0]<4?18:0)+'px">'
        +tree.filter(t=>t[0]===lv[0]).map(t=>'<div style="position:relative;background:'+t[4]+';border:1px solid '+t[5]+';border-radius:7px;padding:8px 12px;text-align:center;min-width:120px">'
          +(t[6]?'<span style="position:absolute;top:-8px;right:6px;font-size:8.5px;font-weight:700;color:'+(t[6][0]==="+"?"#15803D":t[6]==="avg"?"#92400E":"#B91C1C")+';background:'+t[4]+';border:1px solid '+t[5]+';border-radius:99px;padding:1px 5px">'+t[6]+'</span>':"")
          +'<div style="font-size:9.5px;color:#4B5563;line-height:1.3">'+t[1].replace(/&/g,"&amp;")+'</div><div style="font-size:15px;font-weight:700;margin-top:3px">'+t[2]+'</div><div style="font-size:8.5px;color:#9CA3AF">'+t[3]+'</div></div>').join("")
        +'</div>'+(lv[0]<4?'<div style="text-align:center;font-size:9px;color:#9CA3AF;margin-bottom:8px">'+[Q1,Q3,Q2][lv[0]-1]+'</div>':"")).join("")
      +'</div>'
     :'<table class="dt" style="margin-top:8px;border:1px solid #F1F3F6"><tr><th>Segment</th><th class="num">PI rate</th><th class="num">n</th><th class="num">vs avg</th></tr>'
      +tree.slice(1).map(t=>'<tr><td>'+t[1].replace(/&/g,"&amp;")+'</td><td class="num">'+t[2]+'</td><td class="num">'+t[3].replace("n=","")+'</td><td class="num">'+t[6]+'</td></tr>').join("")+'</table>')
   /* model details */
   +'<div style="margin-top:16px"><div style="font-size:12.5px;font-weight:600">Model Details</div>'
   +'<div style="display:flex;gap:16px;align-items:center;font-size:10.5px;color:#6B7280;border-bottom:1px solid #F1F3F6;padding:9px 2px">'
   +'<span>AUC <b style="color:#111827">0.544</b></span><span class="pillY">Limited</span><span>Fit <b style="color:#111827">Modest</b> · typical for survey models</span><span>Predictors <b style="color:#111827">4</b></span><span>AIC <b style="color:#111827">4319</b></span></div>'
   +model.map(m=>'<div style="display:flex;align-items:center;gap:10px;padding:11px 4px;border-bottom:1px solid #F5F6F8;font-size:11.5px">'+ic(m[0],13,"#9CA3AF")+'<b style="font-weight:600">'+m[1]+'</b><span style="color:#9CA3AF">'+m[2]+'</span>'
     +'<span style="margin-left:auto;display:flex;align-items:center;gap:8px">'+(m[3]?(m[3]==="Flagged"?'<span class="pillY">Flagged</span>':'<span class="btnO">'+m[3]+'</span>'):"")+ic("chevR",13,"#9CA3AF")+'</span></div>').join("")
   +'</div>')
  +'</div>';
}
function stSet(t){ stTab=t; render(); }
function segSet(v){ segView=v; render(); }

function pageDataviz(){
  const navy="#3F5C8F",mag="#9B4F8C",pink="#C4649A",orange="#E8845E",amber="#F0A35E",teal="#4F8C8C";
  const charts=[
   {t:"[Q1] "+Q1,s:"Share of claimants by the brand they buy most often",type:"pie",d:[{l:"Cadbury Dairy Milk",l2:"1,281",v:1281,c:navy},{l:"Cadbury Silk",l2:"268",v:268,c:mag},{l:"Other national",l2:"510",v:510,c:pink},{l:"Regional / local",l2:"39",v:39,c:orange},{l:"Not answered",l2:"3,181",v:3181,c:amber}]},
   {t:"[Q2] "+Q2,s:"Format preference across claimants",type:"pie",d:[{l:"Mix of dark & milk",l2:"1,160",v:1160,c:mag},{l:"Dark",l2:"333",v:333,c:navy},{l:"Milk",l2:"936",v:936,c:pink},{l:"Not answered",l2:"3,181",v:3181,c:amber}]},
   {t:"[Q3] "+Q3,s:"Purchase frequency declared in the chat",type:"bar",d:[["Weekly",1457],["Fortnightly",3597],["Monthly",556]]},
   {t:"[Q4] "+Q4,s:"Occasion mix · self-treat vs gifting",type:"pie",d:[{l:"Self-treat",l2:"2,428",v:2428,c:navy},{l:"Gifting",l2:"3,182",v:3182,c:mag}]},
   {t:"[Q5] "+Q5,s:"Channel where the household usually buys",type:"pie",d:[{l:"Quick-commerce",l2:"2,102",v:2102,c:navy},{l:"Supermarket",l2:"1,640",v:1640,c:mag},{l:"Kirana",l2:"1,208",v:1208,c:pink},{l:"Online marketplace",l2:"660",v:660,c:amber}]},
   {t:"[Feedback Q1] Rate your experience",s:"Overall rating of the sample received",type:"bar",d:[["5 ★",4302],["4 ★",1373],["3 ★",384],["2 ★",128],["1 ★",99]]},
   {t:"[Intent PI Q2] Did you purchase after trying the sample?",s:"Declared purchase between 3 and 7 days",type:"pie",d:[{l:"Yes",l2:"3,595",v:3595,c:navy},{l:"No",l2:"2,089",v:2089,c:mag}]},
   {t:"[Feedback Q3] What went wrong?",s:"Declared reason where feedback was negative",type:"pie",d:[{l:"Melted in transit",l2:"301",v:301,c:navy},{l:"Too sweet",l2:"96",v:96,c:mag},{l:"Pack damaged",l2:"56",v:56,c:pink}]},
   {t:"[Purchase Intent Q4] Which platform do you plan to buy from?",s:"Where intent will convert",type:"pie",d:[{l:"Quick-commerce",l2:"1,684",v:1684,c:navy},{l:"Nearest store",l2:"1,002",v:1002,c:mag},{l:"Marketplace",l2:"909",v:909,c:pink}]},
   {t:"Top 10 Claimant Pincodes",s:"Where claims concentrate",type:"bar",d:[["400050",1416],["400053",714],["560034",512],["110024",492],["500034",455],["600028",442],["411001",422],["302001",409],["700019",401],["380015",398]]},
   {t:"Top 5 Claimant Cities",s:"City-level claim volume",type:"bar",d:[["Mumbai",7416],["Bengaluru",5814],["Delhi",3820],["Hyderabad",3715],["Chennai",2884]]},
   {t:"How did you hear about the sample?",s:"Self-declared discovery source",type:"pie",d:[{l:"Saw an ad",l2:"3,346",v:3346,c:navy},{l:"Brand website",l2:"1,242",v:1242,c:mag},{l:"Friend or family",l2:"640",v:640,c:pink}]},
  ];
  const funnelStages=[["OTP triggered",1],["OTP verified",0.86],["Claims",0.62],["Deliveries",0.54],["Feedbacks",0.19],["Purchase intent",0.12]];
  function funnel(name){
    const W=180,H=150;
    return '<div class="wcard" style="min-height:190px;padding:9px 10px"><div class="wt" style="font-size:10.5px">'+name+'</div>'
    +'<svg width="100%" viewBox="0 0 '+W+' '+H+'" style="margin-top:4px">'
    +funnelStages.map((s,i)=>{
      const w0=s[1]*W*0.92, w1=(funnelStages[i+1]?funnelStages[i+1][1]:s[1]*0.7)*W*0.92;
      const yTop=i*(H/funnelStages.length), yB=yTop+(H/funnelStages.length)-1.5;
      const cols=["#2F4D80","#3D6099","#4E76B4","#63A0D4","#77C6E8","#8FE0F2"];
      return '<g><path d="M'+((W-w0)/2)+' '+yTop+' L'+((W+w0)/2)+' '+yTop+' L'+((W+w1)/2)+' '+yB+' L'+((W-w1)/2)+' '+yB+' Z" fill="'+cols[i]+'"/>'
       +'<text x="'+(W/2)+'" y="'+(yTop+(H/funnelStages.length)/2+3)+'" font-size="7" fill="#fff" text-anchor="middle">'+s[0]+'</text></g>';
    }).join("")+'</svg>'
    +'<div style="position:absolute;right:9px;bottom:8px">'+ic("gift",12,"#1D4ED8")+'</div></div>';
  }
  return selRow('<div style="margin-left:auto;display:flex;gap:8px;align-items:center"><div class="btnO">'+ic("refresh",13,"#2563EB")+'</div><div class="btnO" style="color:#9CA3AF">Duplicate Orders</div><div class="btnO">'+ic("cal2",12,"#6B7280")+'All time '+ic("chevD",12,"#9CA3AF")+'</div></div>')
  +timeline()
  +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">'
  +charts.map(c=>'<div class="wcard" style="min-height:212px">'+wTools(2)+'<div class="wt" style="font-size:10.5px;padding-right:34px">'+c.t.replace(/&/g,"&amp;")+'</div><div class="ws">'+c.s+'</div>'
    +(c.type==="pie"?'<div style="display:flex;align-items:center;gap:10px;margin-top:8px;justify-content:center">'+pie(c.d,126)+legend(c.d)+'</div>'
      :barsChart(c.d,330,160,"#3F5C8F"))
    +'<div style="position:absolute;right:9px;bottom:8px">'+ic("gift",12,"#1D4ED8")+'</div></div>').join("")
  +'</div>'
  +'<div style="font-size:12px;font-weight:600;color:#6B7280;margin:16px 2px 8px">UTM sources</div>'
  +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">'
  +["phonepe","dv360","unknown","ig","instagram","insta","ig_feed_post_permalink","chatgpt.com","gpay","paytm","google","gravy-form","wishlink"].map(funnel).join("")
  +'</div>'
  +'<div style="font-size:12px;font-weight:600;color:#6B7280;margin:16px 2px 8px">UTM Platforms</div>'
  +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">'
  +["google","meta","meta#gravy-form","unknown","sa360","cm360","google#gravy-form"].map(funnel).join("")
  +'</div>';
}

function pageOverview(){
  const nums=[["47,137","Interactions"],["32,658","Claimants"],["28,597","Delivered"],["20% <span style=\"font-size:14px;color:#6B7280\">(5,684)</span>","Feedback Rate"],["13% <span style=\"font-size:14px;color:#6B7280\">(3,796)</span>","Purchase Intent"]];
  const src=[["phonepe",9068,7927,5442,5070,980,618,"12%","69%"],["dv360",5,4,2,1,0,0,"0%","50%"],["unknown",13597,11116,7736,6264,1176,705,"11%","70%"],
   ["google",10155,8131,6305,4602,863,677,"15%","65%"],["wishlink",1,1,1,1,1,0,"0%","100%"],["paytm",8015,7127,4899,4603,908,547,"12%","69%"],
   ["gravy-form",8,8,3,3,0,0,"0%","38%"],["gpay",1927,1719,1428,1321,303,268,"18%","83%"],["ig",4483,3831,2430,2024,484,257,"13%","63%"],
   ["instagram",8296,7232,6379,4978,882,689,"13%","74%"],["chatgpt.com",18,13,8,6,2,0,"0%","62%"],["insta",28,28,26,21,5,2,"10%","92%"],["ig_text_post_permalink",3,2,1,1,0,0,"0%","50%"]];
  const plat=[["sa360",1685,1271,704,414,94,53,"13%","55%"],["unknown",39566,35112,25015,21856,4298,2677,"12%","71%"],["meta",7216,6059,4265,4053,763,529,"13%","70%"],
   ["google",6172,4663,2668,2488,548,353,"15%","57%"],["meta#gravy-form",10,7,3,2,1,1,"52%","43%"],["cm360",5,4,2,1,0,0,"0%","50%"],["google#gravy-form",2,1,1,1,0,0,"0%","100%"]];
  const med=[["paid_pmax",8911,6860,4601,4088,859,624,"15%","67%"],["rewards",10976,9833,6859,6382,1263,826,"13%","71%"],["scratchcard",2236,2007,1480,1390,272,182,"12%","74%"],
   ["deals",5801,5120,3419,3213,686,385,"12%","67%"],["social",4483,3831,2430,2024,464,257,"13%","63%"],["unknown",13640,11152,7759,6263,1178,705,"11%","70%"],
   ["paid_search",1685,1271,704,414,94,53,"13%","55%"],["cpa",28,26,24,21,5,2,"10%","92%"],["paid_social",8296,7232,5379,4578,882,635,"13%","74%"]];
  const tbl=(title,note,rows,head)=>'<div class="sec"><div class="sh"><div class="t">'+title+'</div><div class="tools"><span style="font-size:10px;color:#9CA3AF">'+note+'</span></div></div>'
   +'<table class="dt"><tr><th>'+head+'</th><th class="num">OTP Triggered</th><th class="num">OTP Verified</th><th class="num">Claims</th><th class="num">Deliveries</th><th class="num">Feedbacks</th><th class="num">Purchase Intent</th><th class="num">Conversion</th></tr>'
   +rows.map(r=>'<tr><td style="display:flex;align-items:center;gap:6px">'+ic("globe",11,"#9CA3AF")+r[0]+'</td>'
     +'<td class="num">'+r[1].toLocaleString("en-IN")+'</td><td class="num">'+r[2].toLocaleString("en-IN")+'</td><td class="num">'+r[3].toLocaleString("en-IN")+'</td>'
     +'<td class="num">'+r[4].toLocaleString("en-IN")+'</td><td class="num">'+r[5].toLocaleString("en-IN")+'</td>'
     +'<td class="num">'+r[6].toLocaleString("en-IN")+' <span class="pillB">'+r[7]+'</span></td><td class="num"><span class="pillG">'+r[8]+'</span></td></tr>').join("")
   +'<tr><td><b>Total</b></td><td class="num">'+rows.reduce((a,r)=>a+r[1],0).toLocaleString("en-IN")+'</td><td class="num">47,137</td><td class="num">32,658</td><td class="num">28,795</td><td class="num">5,684</td><td class="num">3,653</td><td class="num mut">–</td></tr>'
   +'</table></div>';
  return selRow('<div style="margin-left:auto;display:flex;gap:8px;align-items:center"><div class="btnO">'+ic("refresh",13,"#2563EB")+'</div><div class="btnO" style="color:#9CA3AF">Duplicate Orders</div><div class="btnO">'+ic("cal2",12,"#6B7280")+'All time '+ic("chevD",12,"#9CA3AF")+'</div></div>')
  +timeline()
  +'<div class="sec"><div class="sh"><div class="t">Live Numbers</div></div><div style="display:flex">'
  +nums.map((x,i)=>'<div style="flex:1;text-align:center;border-right:'+(i<4?"1px solid #F1F3F6":"none")+'"><div style="font-size:21px;font-weight:700">'+x[0]+'</div><div style="font-size:10.5px;color:#6B7280;margin-top:4px">'+x[1]+' ⓘ</div></div>').join("")+'</div></div>'
  +'<div class="sec"><div class="sh"><div class="t">Purchase Intent Drivers</div></div>'
  +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">'
  +'<div style="background:#F3F8FF;border:1px solid #DCE8FB;border-radius:7px;padding:10px 12px"><div style="font-size:10px;font-weight:600;color:#1D4ED8;letter-spacing:0.6px">KEY DRIVER</div>'
  +'<div style="font-size:11px;color:#374151;margin-top:6px;line-height:1.5">'+Q1+' is the strongest predictor of purchase intent (partial pseudo-R²=0.0034, rank #1).</div><div style="margin-top:7px"><span class="pillB">Rank #1</span></div></div>'
  +'<div><div style="font-size:10px;font-weight:600;color:#6B7280;letter-spacing:0.6px">TOP VARIABLES</div>'
  +[[Q1,96,"#1"],[Q2,22,"#2"],[Q3,14,"#3"]].map(v=>'<div style="display:flex;align-items:center;gap:8px;margin-top:7px"><div style="width:150px;font-size:10px;color:#4B5563;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+v[0]+'</div>'
    +'<div style="flex:1;height:8px;background:#F1F3F6;border-radius:99px"><div style="width:'+v[1]+'%;height:100%;background:#5B3FD9;border-radius:99px"></div></div><span style="font-size:9.5px;color:#9CA3AF">'+v[2]+'</span></div>').join("")+'</div></div>'
  +'<div style="margin-top:10px;font-size:11px"><a href="#3">View full analysis →</a></div></div>'
  +'<div class="sec"><div class="sh"><div class="t">Target Audiences <span style="color:#9CA3AF;font-weight:400;font-size:11px">6 segments · 12.9% overall PI</span></div></div>'
  +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">'
  +[["TARGET","#15803D","#F0FBF4","#CDEFD9",Q1+" = Cadbury Dairy Milk AND "+Q3+" = Weekly AND "+Q4+" = Self-treat","17.0%","1.32x avg","n = 141"],
    ["TARGET","#15803D","#F0FBF4","#CDEFD9",Q1+" = Cadbury Dairy Milk","15.6%","1.21x avg","n = 1,281"],
    ["DEPRIORITISE","#B45309","#FFFBEB","#FBEBC0",Q1+" = No usual brand | Imported AND "+Q3+" = Fortnightly AND "+Q2+" = Dark","6.0%","0.47x avg","n = 382"]]
   .map(s=>'<div style="background:'+s[2]+';border:1px solid '+s[3]+';border-radius:7px;padding:10px 12px"><div style="font-size:9.5px;font-weight:700;letter-spacing:0.6px;color:'+s[1]+'">'+s[0]+'</div>'
     +'<div style="font-size:10.5px;color:#374151;margin-top:6px;line-height:1.45;min-height:44px">'+s[4]+'</div>'
     +'<div style="display:flex;align-items:baseline;gap:8px;margin-top:6px"><span style="font-size:17px;font-weight:700;color:'+s[1]+'">'+s[5]+'</span><span style="font-size:10px;color:#6B7280">PI rate</span></div>'
     +'<div style="display:flex;gap:8px;margin-top:5px;font-size:9.5px;color:#6B7280"><span class="'+(s[0]==="TARGET"?"pillG":"pillY")+'">'+s[6]+'</span>'+s[7]+'</div></div>').join("")+'</div>'
  +'<div style="background:#F3F8FF;border:1px solid #DCE8FB;border-radius:7px;padding:9px 12px;margin-top:10px;font-size:11px;color:#374151"><b>AI INSIGHT</b> · Focus sampling on Dairy Milk and Silk households buying weekly for self-treat · they show 32% higher purchase intent than the campaign average.</div>'
  +'<div style="margin-top:10px;font-size:11px"><a href="#3">Explore full segmentation →</a></div></div>'
  +tbl("UTM Source Breakdown","13 sources tracked",src,"Source")
  +tbl("UTM Platform Breakdown","7 platforms tracked",plat,"Platform")
  +tbl("UTM Medium Breakdown","12 mediums tracked",med,"Medium");
}
