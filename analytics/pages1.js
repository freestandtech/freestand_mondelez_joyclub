/* Campaign Performance Overview + Live Analytics */
function pagePerf(){
  const K1=[["Total Interactions","Total number of people who started the sampling journey","47,141","Claimant Count"],
            ["Total Claimants","People who completed their journey or received delivery","31,962","Claimant Count"],
            ["Samples Delivered","Total number of samples successfully delivered","28,571","Claimant Count"]];
  const K2=[["Feedback Rate","Percentage of delivered claimants who provided feedback","19.89%","Feedback Rate","Feedback Count: 5,684 / Delivered Claimants: 28,571"],
            ["Positive Feedback Rate","Percentage of feedback that was positive","17.76%","Positive Feedback Rate","Positive Feedback Count: 5,073 / Delivered Claimants: 28,571"],
            ["Purchase Intent Rate","Percentage of delivered claimants who expressed purchase intent","12.58%","Purchase Intent Rate","Purchase Intent Count: 3,595 / Delivered Claimants: 28,571"]];
  const statusPie=[{l:"Delivered",l2:"28,571",v:28571,c:"#3F5C8F"},{l:"Rejected",l2:"10,823",v:10823,c:"#9B4F8C"},{l:"Journey Incomplete",l2:"4,351",v:4351,c:"#C4649A"},{l:"Journey Completed",l2:"3,391",v:3391,c:"#E8725E"},{l:"In Review",l2:"5",v:5,c:"#F0A35E"}];
  const sentPie=[{l:"Positive",l2:"5,073",v:5073,c:"#3F5C8F"},{l:"Negative",l2:"453",v:453,c:"#9B4F8C"},{l:"No Feedback",l2:"158",v:158,c:"#C4649A"}];
  const wk=["2026-W02","2026-W06","2026-W13","2026-W21","2026-W29","2026-W37"];
  const acq=[1200,2100,1750,2400,900,120,80,9500,4200,3100,1400,700,520,410,660,900,1150,760,520,440,380,300,260,210];
  const fbr=[19,20,18,21,55,2,1,22,21,20,19,21,20,22,50,4,20,22,23,26,27,25,24,2];
  const pir=[13,14,12,15,33,1,1,14,15,13,12,14,15,13,15,2,11,13,14,16,13,15,14,1];
  const pfr=[19,21,18,20,56,3,1,21,20,19,20,21,19,50,5,20,21,22,23,24,22,23,21,2];
  const card=(k,f)=>'<div class="wcard">'+wTools(f?4:3)+'<div class="wt">'+k[0]+'</div><div class="ws">'+k[1]+'</div>'
    +'<div class="bignum"><div class="v">'+k[2]+'</div><div class="l">'+k[3]+'</div>'+(k[4]?'<div class="f">'+k[4]+'</div>':"")+'</div></div>';
  return selRow('<div style="margin-left:auto;display:flex;gap:8px"><button class="btnB">'+ic("plus",13,"#fff")+'New '+ic("chevD",12,"#fff")+'</button></div>')
  +timeline()
  +'<div style="display:flex;align-items:flex-start;gap:10px;margin:0 2px 10px"><div><div style="font-size:14.5px;font-weight:600">Campaign Performance Overview</div>'
  +'<div style="font-size:11px;color:#6B7280;margin-top:2px">Executive summary: is this campaign performing? Key metrics, conversion, and trends.</div></div>'
  +'<div style="margin-left:auto;display:flex;align-items:center;gap:7px">'
  +'<span class="chip" style="border-color:#DDE3EC;color:#4B5563;background:#fff;display:flex;align-items:center;gap:5px">'+ic("ai",11,"#4B5563")+'Ask AI</span>'
  +'<span class="chip" style="border-color:#CDEFD9;color:#15803D;background:#F0FBF4">• Live</span>'
  +'<span class="chip" style="border-color:#F8D4D4;color:#B91C1C;background:#fff">Unpublish</span>'
  +ic("trash",13,"#9CA3AF")+'</div></div>'
  /* section 1 */
  +'<div class="sec"><div class="sh"><div><div class="t">Campaign Health at a Glance</div><div class="s">Key metrics that define campaign success</div></div>'+secTools()+'</div>'
  +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">'+K1.map(k=>card(k)).join("")+'</div>'
  +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:10px">'+K2.map(k=>card(k,1)).join("")+'</div></div>'
  /* section 2 */
  +'<div class="sec"><div class="sh"><div><div class="t">Full Funnel: Where Every Interaction Went</div><div class="s">Complete accountability of every interaction across lifecycle stages</div></div>'+secTools()+'</div>'
  +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'
  +'<div class="wcard" style="min-height:250px">'+wTools(3)+'<div class="wt">Claimant Status Distribution</div><div class="ws">Relative share of claimants across lifecycle statuses</div>'
  +'<div style="display:flex;align-items:center;gap:14px;margin-top:12px;justify-content:center">'+pie(statusPie,168)+legend(statusPie)+'</div>'
  +'<div style="position:absolute;right:10px;bottom:9px">'+ic("gift",13,"#1D4ED8")+'</div></div>'
  +'<div class="wcard" style="min-height:250px">'+wTools(3)+'<div class="wt">Claimant Count by Status</div><div class="ws">Absolute claimant volume at each lifecycle stage</div>'
  +barsChart([["Delivered",28571],["Rejected",10823],["Journey Incomplete",4351],["Journey Completed",3391],["In Review",5]],470,208,"#3F5C8F")
  +'<div style="position:absolute;right:10px;bottom:9px">'+ic("gift",13,"#1D4ED8")+'</div></div></div></div>'
  /* section 3 */
  +'<div class="sec"><div class="sh"><div><div class="t">Conversion Snapshot</div><div class="s">Feedback sentiment and response volumes</div></div>'+secTools()+'</div>'
  +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">'
  +'<div class="wcard" style="min-height:210px">'+wTools(4)+'<div class="wt">Feedback Sentiment Split</div><div class="ws">Distribution of positive vs negative feedback</div>'
  +'<div style="display:flex;align-items:center;gap:12px;margin-top:10px;justify-content:center">'+pie(sentPie,138)+legend(sentPie)+'</div></div>'
  +'<div class="wcard" style="min-height:210px">'+wTools(4)+'<div class="wt">Total Feedback Responses</div><div class="ws">Total number of feedback responses received</div>'
  +'<div class="bignum" style="padding-top:42px"><div class="v">5,684</div><div class="l">Feedback Count</div></div></div>'
  +'<div class="wcard" style="min-height:210px">'+wTools(4)+'<div class="wt">Total Purchase Intent Responses</div><div class="ws">Total number of purchase intent responses</div>'
  +'<div class="bignum" style="padding-top:42px"><div class="v">3,595</div><div class="l">Purchase Intent Count</div></div></div></div></div>'
  /* section 4 */
  +'<div class="sec"><div class="sh"><div><div class="t">Campaign Trend Over Time</div><div class="s">Weekly trajectory · are we accelerating or decelerating?</div></div>'+secTools()+'</div>'
  +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'
  +[["Weekly Claimant Acquisition","Claimant volume trend over time",acq,"#3B5FAD"],["Weekly Feedback Rate","Feedback engagement trend over time",fbr,"#3B5FAD"],
    ["Weekly Purchase Intent Rate","Purchase intent trend over time",pir,"#3B5FAD"],["Weekly Positive Feedback Rate","Positive feedback trend over time",pfr,"#3B5FAD"]]
   .map(c=>'<div class="wcard" style="min-height:200px">'+wTools(4)+'<div class="wt">'+c[0]+'</div><div class="ws">'+c[1]+'</div>'+lineChart(c[2],470,168,c[3],wk)+'</div>').join("")
  +'</div></div>'
  +'<button class="addsec">'+'+ Add Section'+'</button>';
}

function pageLive(){
  const nums=[["52,504","OTP Triggered"],["47,137","OTP Verified"],["32,658","Claimants"],["28,597","Delivered"],["20% <span style=\"font-size:15px;color:#6B7280\">(5,684)</span>","Feedback Rate"],["13% <span style=\"font-size:15px;color:#6B7280\">(3,796)</span>","Purchase Intent"]];
  const days=["8 Jan, 2026","26 Jan, 2026","13 Feb, 2026","3 Mar, 2026","23 Mar, 2026","11 Apr, 2026","29 Apr, 2026","17 May, 2026","4 Jun, 2026","22 Jun, 2026","10 Jul, 2026","28 Jul, 2026","15 Aug, 2026","2 Sep, 2026"];
  const claims=[42,124,243,363,294,230,222,155,117,193,132,109,419,493,260,311,68,55,232,111,99,299,519,580,1045,2471,1142,1085,1006,936,833,748,626,682,542,496,463,397,440,341,265,302,544,569,512,477,411,196,124,83,117,131,110,93,76,411,66,121,52,76,88,153];
  const dels=[20,60,140,200,180,150,140,100,80,120,90,70,640,1260,669,778,52,40,180,90,70,210,380,430,720,1100,880,860,760,700,620,560,470,520,410,380,350,300,330,260,200,230,420,1093,1054,1019,869,729,160,100,90,140,105,88,70,60,340,55,100,45,66,72,130];
  const fbs=[4,10,22,30,28,24,22,16,12,20,14,11,60,90,55,68,8,6,28,14,11,32,58,64,110,181,140,135,120,112,99,90,75,82,66,60,56,48,52,42,32,36,66,181,170,160,140,117,26,16,14,22,17,14,11,10,540,9,16,7,10,12,21];
  window.LVSERIES={claims:claims,dels:dels,fbs:fbs,days:days};
  const chart=lvChart(claims,dels,fbs,days,false);
  return selRow('<div style="margin-left:auto;display:flex;gap:8px;align-items:center"><div class="btnO">'+ic("refresh",13,"#2563EB")+'</div><div class="btnO" style="color:#9CA3AF">Duplicate Orders</div><div class="btnO">'+ic("cal2",12,"#6B7280")+'All time '+ic("chevD",12,"#9CA3AF")+'</div></div>')
  +timeline()
  +'<div class="sec" style="padding:18px 14px"><div style="display:flex">'
  +nums.map((x,i)=>'<div style="flex:1;text-align:center;border-right:'+(i<5?"1px solid #F1F3F6":"none")+'"><div style="font-size:24px;font-weight:700;color:#1E3A8A">'+x[0]+'</div>'
   +'<div style="font-size:11px;color:#6B7280;margin-top:5px;display:flex;align-items:center;justify-content:center;gap:5px">'+x[1]+'<span style="width:12px;height:12px;border-radius:99px;border:1px solid #D1D5DB;font-size:8px;display:inline-flex;align-items:center;justify-content:center;color:#9CA3AF">?</span></div></div>').join("")
  +'</div></div>'
  +'<div class="sec"><div class="sh"><div class="t">Live analytics</div>'
  +'<div class="tools">'+ic("line",13,"#6B7280")+ic("bars",13,"#6B7280")+ic("refresh",13,"#6B7280")+ic("dl",13,"#6B7280")+ic("page",13,"#6B7280")+'</div></div>'
  +'<div style="display:flex;gap:10px"><div style="flex:1;min-width:0" id="lvchart">'+chart+'</div>'
  +'<div style="width:92px;flex-shrink:0;display:flex;flex-direction:column;gap:7px;justify-content:center">'
  +[["Claims","#4C63C7"],["Deliveries","#5FC77E"],["Feedbacks","#F0B429"]].map(l=>'<div style="display:flex;align-items:center;gap:6px;font-size:10px;color:#4B5563"><span style="width:14px;height:9px;border-radius:2px;background:'+l[1]+'"></span>'+l[0]+'</div>').join("")
  +'</div></div>'
  +'<div style="margin:6px 44px 0;height:22px;border:1px solid #DCE8FB;border-radius:3px;background:#F3F8FF"></div>'
  +'<div class="sw"><button class="on" onclick="lvToggle(this,1)">Day wise claims</button><button onclick="lvToggle(this,0)">Cumulative claims</button></div>'
  +'</div>';
}
function lvChart(claims,dels,fbs,days,cum){
  const W=1020,H=330,PL=44,PB=34,PT=16;
  const run=a=>{let s=0;return a.map(v=>s+=v);};
  const C=cum?run(claims):claims, D=cum?run(dels):dels, F=cum?run(fbs):fbs;
  const max=Math.max(...C,...D,...F)*1.12;
  const n=C.length, bw=(W-PL-14)/n;
  const y=v=>H-PB-(v/max)*(H-PB-PT);
  const ticks=[0,0.25,0.5,0.75,1].map(f=>Math.round(max*f/100)*100);
  const fbLine=F.map((v,i)=>(i?"L":"M")+(PL+i*bw+bw/2)+" "+y(v)).join(" ");
  return '<svg width="100%" viewBox="0 0 '+W+' '+H+'">'
   +ticks.map(v=>'<g><line x1="'+PL+'" x2="'+(W-8)+'" y1="'+y(v)+'" y2="'+y(v)+'" stroke="#F1F3F6"/><text x="'+(PL-6)+'" y="'+(y(v)+3)+'" font-size="8" fill="#9CA3AF" text-anchor="end">'+v.toLocaleString("en-IN")+'</text></g>').join("")
   +(cum
     ?'<path d="'+C.map((v,i)=>(i?"L":"M")+(PL+i*bw+bw/2)+" "+y(v)).join(" ")+' L'+(PL+(n-1)*bw+bw/2)+' '+(H-PB)+' L'+(PL+bw/2)+' '+(H-PB)+' Z" fill="#4C63C7" fill-opacity="0.18"/>'
      +'<path d="'+D.map((v,i)=>(i?"L":"M")+(PL+i*bw+bw/2)+" "+y(v)).join(" ")+' L'+(PL+(n-1)*bw+bw/2)+' '+(H-PB)+' L'+(PL+bw/2)+' '+(H-PB)+' Z" fill="#5FC77E" fill-opacity="0.2"/>'
      +'<path d="'+C.map((v,i)=>(i?"L":"M")+(PL+i*bw+bw/2)+" "+y(v)).join(" ")+'" fill="none" stroke="#4C63C7" stroke-width="1.8"/>'
      +'<path d="'+D.map((v,i)=>(i?"L":"M")+(PL+i*bw+bw/2)+" "+y(v)).join(" ")+'" fill="none" stroke="#5FC77E" stroke-width="1.8"/>'
      +'<text x="'+(PL+(n-1)*bw-4)+'" y="'+(y(C[n-1])-6)+'" font-size="9" fill="#4C63C7" text-anchor="end">'+C[n-1].toLocaleString("en-IN")+' claims</text>'
      +'<text x="'+(PL+(n-1)*bw-4)+'" y="'+(y(D[n-1])+12)+'" font-size="9" fill="#3E9E5C" text-anchor="end">'+D[n-1].toLocaleString("en-IN")+' delivered</text>'
     :C.map((v,i)=>'<rect x="'+(PL+i*bw+bw*0.08)+'" y="'+y(v)+'" width="'+(bw*0.4)+'" height="'+(H-PB-y(v))+'" fill="#4C63C7"/>').join("")
      +D.map((v,i)=>'<rect x="'+(PL+i*bw+bw*0.5)+'" y="'+y(v)+'" width="'+(bw*0.4)+'" height="'+(H-PB-y(v))+'" fill="#5FC77E"/>').join(""))
   +'<path d="'+fbLine+'" fill="none" stroke="#F0B429" stroke-width="1.2"/>'
   +days.map((d,i)=>'<text x="'+(PL+(i*(n-1)/(days.length-1))*bw+bw/2)+'" y="'+(H-PB+14)+'" font-size="7.5" fill="#9CA3AF" text-anchor="middle">'+d+'</text>').join("")
   +'</svg>';
}
function lvToggle(el,day){
  [...el.parentNode.children].forEach(b=>b.className="");
  el.className="on";
  const s=window.LVSERIES; if(!s)return;
  document.getElementById("lvchart").innerHTML=lvChart(s.claims,s.dels,s.fbs,s.days,!day);
}
