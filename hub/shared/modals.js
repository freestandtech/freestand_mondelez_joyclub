/* Popups over the blurred profile frame: geo · alloc (dynamic courier allocation) · verify (agentic consensus)
   · skumap (SKU allocation animation) · order (+ inventory) · track (delivery tracking page) · gratify.
   window.MODALS.html(kind,C,P) */
window.MODALS=(function(){
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const ok='<span class="md-ok">✓</span>';
const wrap=(cls,inner)=>'<div class="md-ov '+cls+'"><div class="md">'+inner+'</div></div>';
const wide=(cls,inner)=>'<div class="md-ov '+cls+'"><div class="md w">'+inner+'</div></div>';
const head=(t,s)=>'<div class="md-h"><b>'+t+'</b><span class="md-x" data-close="1">×</span></div>'+(s?'<div class="md-sub">'+s+'</div>':"");
const chk=list=>'<div class="md-2 chk">'+list.map(c=>'<div>'+ok+'<div><b>'+esc(c[0])+'</b><span>'+esc(c[1])+'</span></div></div>').join("")+'</div>';

function geo(C,P){ return wrap("frame",head("Geo Verification","Postal code mapped, geocoded and approved for delivery")
 +'<div class="md-map"><span class="md-reg"><b>'+esc(P.area)+'</b><i>'+esc(P.region||"Kanto region")+'</i></span><div class="md-zone"><i class="md-pin"></i><b>〒'+esc(P.postal)+'</b><span>Delivery zone</span></div><span class="md-leg"><i></i>Inside delivery zone</span></div>'
 +'<div class="md-2"><div class="md-stat"><small>DELIVERY ZONE</small><b>Approved</b><span>'+esc(P.carrier||"Yamato Transport")+' · 2–3 day area</span></div><div class="md-stat"><small>CAMPAIGN STATUS</small><b>Approved</b><span>Geography verified</span></div></div>'
 +chk([["Postal code mapping","〒"+P.postal+" verified"],["Geographic zone",P.area],["Delivery eligibility","Serviceable address zone"],["Campaign eligibility","Targeting approved"]])
 +'<div class="md-box"><small>VERIFIED POSTAL CODE</small><b>〒'+esc(P.postal)+'</b><span>'+esc(P.area)+' · Campaign eligible: Yes</span></div>'); }

/* ── dynamic courier allocation: postal code → scored partner ── */
function alloc(C,P){
 const A=C.alloc; const W=A.weights, PT=A.partners, win=A.winnerIdx||0;
 const bestP=Math.min.apply(null,PT.map(p=>p[3])), bestD=Math.min.apply(null,PT.map(p=>p[2]));
 const bar=(v,cls)=>'<span class="al-bar'+(cls?" "+cls:"")+'"><i style="width:'+Math.min(100,v)+'%"></i></span>';
 const rows=PT.map((p,i)=>'<tr class="'+(i===win?"win":"")+'" style="animation-delay:'+(0.5+i*0.18)+'s"><td><b>'+esc(p[0])+'</b>'+(i===win?'<em>ASSIGNED</em>':"")+'</td>'
  +'<td>'+p[1].toFixed(1)+'%'+bar(p[1])+'</td><td>'+p[2]+' days'+bar(bestD/p[2]*100,"b")+'</td><td>¥'+p[3]+bar(bestP/p[3]*100,"c")+'</td>'
  +'<td class="sc">'+p[4].toFixed(1)+'</td></tr>').join("");
 return wide("frame",head("Dynamic delivery-partner allocation",'Postal code <b>〒'+esc(A.postal)+'</b> · '+esc(A.area)+' · FreeStand scores every contracted partner for <b>this</b> pincode, on every claim')
 +'<div class="al-form"><span class="f">Score<sub>partner</sub> =</span>'+W.map((w,i)=>'<span class="t'+(i?" op":"")+'">'+(i?'+ ':'')+'<b>'+w[1]+'%</b> × '+esc(w[0])+'</span>').join("")+'</div>'
 +'<table class="al-t"><thead><tr><th>Partner (live in '+esc(A.area)+')</th><th>On-time · last 90 d</th><th>Delivery time</th><th>Cost / shipment</th><th class="sc">Score</th></tr></thead><tbody>'+rows+'</tbody></table>'
 +'<div class="al-win"><span class="big">✓</span><div><div class="t">'+esc(PT[win][0])+' assigned · score '+PT[win][4].toFixed(1)+'</div><div class="s">'+esc(PT[win][5])+'</div></div><div class="eta"><b>'+PT[win][2]+' days</b><span>promised to the customer</span></div></div>'
 +'<div class="al-note">Re-scored per claim, per pincode · a different postal code on the next claim can route to a different partner. The number the customer sees on screen is the winning partner’s live TAT, not a generic “2–3 business days”.</div>'); }

/* ── address verification: FreeStand Agentic Consensus + similarity score ── */
function verify(C,P){
 const K=C.consensus||{}; const a=P.address.split(",");
 const A=K.agents||[["ChatGPT","Address format matches Japan Post conventions",97.2],["Claude","Cross-referenced with the postal database · valid match",96.4],["Grok","Verified against real-time address records",95.9],["Gemini","Geolocation validation passed successfully",97.5]];
 const score=K.score||(A.reduce((s,x)=>s+x[2],0)/A.length), th=K.threshold||90;
 const canon=K.canonical||P.address;
 return wide("frame",head("FreeStand Agentic Consensus",'<span class="g">✓</span> Four independent AI agents compare the typed address with the postal database · the sample is approved on their consensus similarity score')
 +'<div class="cs-top"><div class="cs-dial" style="--p:'+score.toFixed(1)+'"><b>'+score.toFixed(1)+'%</b><span>SIMILARITY</span></div>'
 +'<div class="cs-cmp"><div><small>AS TYPED BY THE CUSTOMER</small><b>'+esc(P.address)+'</b></div><div><small>'+((C&&C.postal)||"JAPAN POST")+' CANONICAL RECORD</small><b>'+esc(canon)+'</b></div>'
 +'<div class="cs-th">Approval threshold <b>≥ '+th+'%</b> · consensus <b>'+score.toFixed(1)+'%</b> → <em>sample approved</em></div></div></div>'
 +'<div class="md-2 ag">'+A.map((x,i)=>'<div style="animation-delay:'+(0.15+i*0.22)+'s"><div class="h"><b>'+esc(x[0])+'</b><i class="sim">'+x[2].toFixed(1)+'%</i></div><span>'+esc(x[1])+'</span><em>Verified</em></div>').join("")+'</div>'
 +chk([["Postal code ↔ address","Postal database verified"],["Address validity","Valid & deliverable"],["Uniqueness check","No duplicate claim on this household"],["Geolocation","Building-level pin · confidence 98%"]])
 +'<div class="md-box"><small>VERIFIED ADDRESS · SAMPLE APPROVED</small><b>'+esc(a.slice(0,2).join(",").trim())+'</b><span>'+esc(a.slice(2).join(",").trim())+'</span></div>'); }

/* ── SKU allocation: answers wired to the pack that gets shipped ── */
function skumap(C,P){
 const S=C.skumap; const O=S.opts, K=S.packs, M=S.map, sel=S.sel;
 const H=64, GAP=14, X1=250, X2=430, top=18;
 const oy=i=>top+i*(H+GAP), py=j=>top+j*((O.length*(H+GAP)-GAP)/K.length)+((O.length*(H+GAP)-GAP)/K.length-150)/2;
 const paths=O.map((o,i)=>{const y1=oy(i)+H/2, y2=py(M[i])+75, on=i===sel;
  return '<path d="M'+X1+' '+y1+' C'+(X1+70)+' '+y1+' '+(X2-70)+' '+y2+' '+X2+' '+y2+'" fill="none" stroke="'+(on?"#0A49B7":"#C9D3E4")+'" stroke-width="'+(on?2.6:1.6)+'" stroke-dasharray="460" stroke-dashoffset="460" style="animation:mdDash 1s '+(0.35+i*0.18)+'s forwards"/>'
   +(on?'<circle r="4.5" fill="#FA6600"><animateMotion dur="1.5s" begin="1.4s" repeatCount="indefinite" path="M'+X1+' '+y1+' C'+(X1+70)+' '+y1+' '+(X2-70)+' '+y2+' '+X2+' '+y2+'"/></circle>':"");}).join("");
 const opts=O.map((o,i)=>'<div class="sm-opt'+(i===sel?" on":"")+'" style="top:'+oy(i)+'px;animation-delay:'+(i*0.12)+'s"><span class="l">'+String.fromCharCode(65+i)+'</span><div><b>'+esc(o)+'</b><i>'+(i===sel?"customer’s answer":"rule branch")+'</i></div></div>').join("");
 const packs=K.map((k,j)=>'<div class="sm-pack'+(M[sel]===j?" on":"")+'" style="top:'+py(j)+'px;animation-delay:'+(0.4+j*0.15)+'s"><img src="'+k.img+'" alt=""><div><b>'+esc(k.name)+'</b><i>'+esc(k.pack)+'</i>'+(M[sel]===j?'<em>✓ ALLOCATED</em>':'<u>not allocated</u>')+'</div></div>').join("");
 const hgt=O.length*(H+GAP)-GAP+top+10;
 return wide("frame",head("SKU allocation · live rule engine",'Question: <b>'+esc(S.q)+'</b> · the answer alone decides which pack leaves the warehouse')
 +'<div class="sm" style="height:'+hgt+'px"><svg class="sm-svg" viewBox="0 0 680 '+hgt+'">'+paths+'</svg>'+opts+packs+'</div>'
 +'<div class="vf-done" style="animation-delay:1.2s"><span class="big">✓</span><div><div class="t">'+esc(K[M[sel]].name)+' reserved for this claim</div><div class="s">Answer “'+esc(O[sel])+'” → '+esc(K[M[sel]].pack)+' · inventory held at '+esc(P.fc||"the fulfilment centre")+'</div></div></div>'); }

/* ── order management + campaign inventory ── */
function order(C,P){ const O=C.orders||[]; const si=(C.skuSel==null?1:C.skuSel); const prod=(C.skus&&C.skus[si]?C.skus[si].name:C.brand+" sample")+" by FreeStand"; const I=C.inventory;
 const row=(o,n)=>'<div class="md-ord'+(n?" new":"")+'">'+(n?'<span class="md-new">✦ NEW ORDER</span>':"")+'<div class="h"><span class="md-oi">▣</span><div><b>'+o[0]+'</b><i>'+o[1]+'</i></div><em class="'+(n?"pr":"tr")+'">'+(n?"Processing":"Delivered")+'</em></div><div class="g"><div><small>Customer</small>'+esc(o[2])+'</div><div><small>Phone</small>'+esc(o[3])+'</div><div><small>Address</small>'+esc(o[4])+'</div><div><small>Product</small>'+esc(o[5])+'</div><div><small>Delivery partner</small>'+esc(o[6])+(n?'<u>✓ Highest dynamic-allocation score for this pincode</u>':"")+'</div><div><small>Ships from</small>'+esc(P.fc||"")+'</div></div></div>';
 const inv=I?'<div class="inv"><div class="h"><b>Campaign inventory · '+esc(I.sku||prod.replace(" by FreeStand",""))+'</b><span>'+esc(I.wh||P.fc||"")+'</span></div>'
  +'<div class="bar"><i style="width:'+(I.claimed/I.allocated*100).toFixed(1)+'%"></i><u style="width:'+((I.claimed+1)/I.allocated*100).toFixed(1)+'%"></u></div>'
  +'<div class="n">'+[[I.claimed.toLocaleString("en-US"),"samples claimed"],[(I.allocated-I.claimed).toLocaleString("en-US"),"still available"],[I.allocated.toLocaleString("en-US"),"allocated to this campaign"]].map(x=>'<div><b>'+x[0]+'</b><span>'+x[1]+'</span></div>').join("")+'</div>'
  +'<div class="f">This claim is sample <b>#'+I.claimed.toLocaleString("en-US")+'</b> · stock is decremented at the moment of allocation, so the campaign can never over-promise. At 90% FreeStand alerts the brand to re-stock '+esc(I.wh||P.fc||"the warehouse")+'.</div></div>':"";
 return wide("frame",head("FreeStand Order Management","Orders, delivery-partner assignment and live sample inventory")+inv+'<div class="md-list">'+O.map(o=>row(o,false)).join("")+row(["ORD-2026-"+(O.length+1).toString().padStart(3,"0"),P.orderDate||"Sep 12, 2026",P.name,P.phone,P.address,prod,P.carrier||"Yamato Transport"],true)+'</div>'
 +'<div class="md-f"><span>'+(O.length+1)+' orders today · <b>New order created successfully</b></span><span class="md-btn o" data-close="1">Close</span><span class="md-btn p" data-close="1">Order Created</span></div>'); }

/* ── delivery tracking page (opened from the LINE tracking link) ── */
function track(C,P){ const T=C.track||{};
 const acts=(T.activity||[]).map((a,i)=>'<div class="tk-act'+(i===0?" on":"")+'" style="animation-delay:'+(0.2+i*0.12)+'s"><div class="d">'+esc(a[0])+'<span>'+esc(a[1])+'</span></div><span class="dot"></span><div class="v"><b>'+esc(a[2])+'</b><span>'+esc(a[3])+'</span></div></div>').join("");
 return wide("frame",'<div class="md-h"><b>Delivery tracking</b><span class="md-x" data-close="1">×</span></div>'
 +'<div class="tk-url"><span class="lock"></span>'+esc(T.url||"track.freestand.jp")+'</div>'
 +'<div class="tk"><div class="tk-hd"><img src="../shared/assets/fs-logo.png" alt="FreeStand"><span>Tracking '+esc(P.trackId||"")+' · '+esc(P.carrier||"")+'</span></div>'
 +'<div class="tk-cols"><div class="tk-l"><small>'+esc(T.statusLabel||"Arriving on")+'</small><div class="day">'+esc(T.day||"Monday")+'</div><div class="mon">'+esc(T.month||"September")+'</div><div class="num">'+esc(T.date||"14")+'<i>'+esc(T.year||"2026")+'</i></div>'
 +'<div class="st"><small>Status:</small><b>'+esc(T.status||"Out for delivery")+'</b></div>'
 +'<div class="map"><span class="pin"></span><span class="cap">'+esc(P.area||"")+'</span><span class="rt"></span></div>'
 +'<div class="cour"><span class="lg">'+esc((P.carrier||"Y").split(" ").map(w=>w[0]).join("")) +'</span><div><b>'+esc(P.carrier||"")+'</b><span>Assigned by dynamic allocation</span></div><div class="tid"><small>Tracking ID</small>'+esc(P.trackId||"")+'</div></div>'
 +'<div class="acts">'+acts+'</div></div>'
 +'<div class="tk-r"><div class="bx"><b>Order details</b><div class="row"><span>Order ID</span><b>'+esc(T.orderId||"ORD-2026-003")+'</b></div><div class="row"><span>Order placed on</span><b>'+esc(P.orderDate||"")+'</b></div><div class="row"><span>Ships from</span><b>'+esc(P.fc||"")+'</b></div><div class="row"><span>Contents</span><b>'+esc(T.item||"")+'</b></div></div>'
 +'<div class="bx"><b>How was your delivery experience?</b><div class="faces">'+["TERRIBLE","BAD","OKAY","GOOD","EXCELLENT"].map((f,i)=>'<span class="'+(i===3?"on":"")+'"><i>'+["😠","🙁","😐","🙂","😄"][i]+'</i>'+f+'</span>').join("")+'</div><div class="sub">Submit</div></div>'
 +'<div class="bx"><b>How likely are you to recommend Free Sample to friends &amp; family?</b><div class="nps">'+[0,1,2,3,4,5,6,7,8,9,10].map(n=>'<span class="'+(n<=3?"r":n<=6?"y":"g")+(n===9?" on":"")+'">'+n+'</span>').join("")+'</div><div class="lbl"><span>Not at all likely</span><span>Extremely likely</span></div><div class="sub">Submit</div></div></div></div></div>'
 +'<div class="al-note">The tracking page is FreeStand’s · so the delivery experience score and the NPS come back onto the same customer profile as the claim, the answers and the feedback.</div>'); }

/* ── brand screening: competitor-brand user ── */
function screening(C,P){ const S=C.screening||{};
 const rows=S.rows||[];
 return wide("frame",head("Brand screening","Which brand she buys today · and whether this campaign wants her")
 +'<div class="bs-v"><span class="tick">✓</span><div><b>'+esc(S.verdict||"Eligible · competitor-brand user")+'</b><span>'+esc(S.sub||"")+'</span></div><em>APPROVED</em></div>'
 +'<div class="bs-cmp"><div><small>BUYS TODAY</small><b>'+esc(S.now||"")+'</b></div><span class="ar">→</span><div class="w"><small>CAMPAIGN TARGETS</small><b>'+esc(S.want||"")+'</b></div></div>'
 +'<div class="bs-rows">'+rows.map((r,i)=>'<div style="animation-delay:'+(0.1+i*0.16)+'s"><span class="ok">✓</span><div><small>'+esc(r[0])+'</small><b>'+esc(r[1])+'</b></div></div>').join("")+'</div>'
 +'<div class="bs-sc"><div class="n">'+(S.score||0)+'<i>/10</i></div><div class="d"><b>'+esc(S.scoreLabel||"Switch likelihood")+'</b><div class="bar"><i style="width:'+((S.score||0)*10)+'%"></i></div><span>'+esc(S.note||"")+'</span></div></div>'
 +'<div class="bs-tags">'+(S.tags||[]).map(t=>'<span>'+esc(t)+'</span>').join("")+'</div>'); }

/* ── existing customer → enrolled in the loyalty program ── */
function enrol(C,P){ const E=C.enrol||{};
 return wide("frame",head("Existing customer detected","She already buys the brand · so the offer changes")
 +'<div class="bs-v"><span class="tick">★</span><div><b>'+esc(E.verdict||"Already a LACTOGROW family")+'</b><span>'+esc(E.sub||"")+'</span></div><em>'+esc(E.badge||"ENROLLED")+'</em></div>'
 +'<div class="bs-cmp"><div class="off"><small>NOT SENT</small><b>'+esc(E.skip||"Free trial pack")+'</b></div><span class="ar">→</span><div class="w"><small>SENT INSTEAD</small><b>'+esc(E.give||"Nestlé Familyness membership")+'</b></div></div>'
 +'<div class="bs-rows">'+(E.rows||[]).map((r,i)=>'<div style="animation-delay:'+(0.1+i*0.16)+'s"><span class="ok">✓</span><div><small>'+esc(r[0])+'</small><b>'+esc(r[1])+'</b></div></div>').join("")+'</div>'
 +'<div class="en-card"><span class="lg"'+(C.avatar&&C.avatar.img?' style="background-image:url('+C.avatar.img+')"':"")+'></span><div><small>'+esc(E.program||"NESTLÉ FAMILYNESS")+'</small><b>'+esc(P.name)+'</b><i>'+esc(E.member||"")+'</i></div><div class="pts"><b>'+esc(E.pts||"250")+'</b><span>welcome points · '+esc(E.tier||"Bronze")+'</span></div></div>'
 +'<div class="bs-tags">'+(E.tags||[]).map(t=>'<span>'+esc(t)+'</span>').join("")+'</div>'); }

/* ── inventory exhausted → waitlist ── */
function soldout(C,P){ const I=C.inventory||{}, W=C.waitlist||{};
 return wide("frame",head("FreeStand Order Management","Stock is decremented at allocation · so the campaign can never over-promise")
 +'<div class="inv out"><div class="h"><b>Campaign inventory · '+esc(I.sku||"")+'</b><span>'+esc(I.wh||P.fc||"")+'</span></div>'
  +'<div class="bar"><i style="width:100%"></i></div>'
  +'<div class="n"><div><b>'+(I.allocated||0).toLocaleString("en-US")+'</b><span>samples claimed</span></div><div class="z"><b>0</b><span>still available</span></div><div><b>'+(I.allocated||0).toLocaleString("en-US")+'</b><span>allocated to this campaign</span></div></div></div>'
 +'<div class="so-v"><span class="tick">!</span><div><b>'+esc(W.verdict||"Campaign stock exhausted")+'</b><span>'+esc(W.sub||"")+'</span></div><em>WAITLISTED</em></div>'
 +'<div class="bs-cmp"><div class="off"><small>NOT POSSIBLE</small><b>'+esc(W.skip||"Free trial pack")+'</b></div><span class="ar">→</span><div class="w"><small>SENT INSTEAD</small><b>'+esc(W.give||"Waitlist + membership + coupon")+'</b></div></div>'
 +'<div class="bs-rows">'+(W.rows||[]).map((r,i)=>'<div style="animation-delay:'+(0.1+i*0.16)+'s"><span class="ok">✓</span><div><small>'+esc(r[0])+'</small><b>'+esc(r[1])+'</b></div></div>').join("")+'</div>'
 +'<div class="so-q"><div><small>WAITLIST POSITION</small><b>'+esc(W.pos||"")+'</b></div><div><small>NEXT RESTOCK</small><b>'+esc(W.restock||"")+'</b></div><div><small>OFFERED NOW</small><b>'+esc(W.coupon||"")+'</b></div></div>'
 +'<div class="bs-tags">'+(W.tags||[]).map(t=>'<span>'+esc(t)+'</span>').join("")+'</div>'
 +'<div class="md-f"><span>No order created · <b>customer queued, not disappointed</b></span><span class="md-btn p" data-close="1">Add to waitlist</span></div>'); }

/* ── pincode outside the campaign geography → geo waitlist ── */
function geowait(C,P){ const G=C.geowait||{};
 return wide("frame",head("Geo verification failed","The postal code resolves · but it is outside the campaign’s serviced geography")
 +'<div class="gw-map"><span class="md-reg"><b>'+esc(P.area)+'</b><i>'+esc(G.region||"")+'</i></span><div class="gw-zone"><i class="md-pin"></i><b>〒'+esc(P.postal)+'</b><span>Not serviced yet</span></div><span class="gw-leg"><i></i>Outside delivery zone</span></div>'
 +'<div class="so-v"><span class="tick">!</span><div><b>'+esc(G.verdict||"Not in the campaign geography")+'</b><span>'+esc(G.sub||"")+'</span></div><em>GEO WAITLIST</em></div>'
 +'<div class="bs-rows">'+(G.rows||[]).map((r,i)=>'<div style="animation-delay:'+(0.1+i*0.16)+'s"><span class="ok">✓</span><div><small>'+esc(r[0])+'</small><b>'+esc(r[1])+'</b></div></div>').join("")+'</div>'
 +'<div class="so-q"><div><small>WAITING IN 〒'+esc(P.postal)+'</small><b>'+esc(G.waiting||"")+'</b></div><div><small>ACTIVATION THRESHOLD</small><b>'+esc(G.threshold||"")+'</b></div><div><small>DECISION OWNER</small><b>'+esc(G.owner||"")+'</b></div></div>'
 +'<div class="bs-tags">'+(G.tags||[]).map(t=>'<span>'+esc(t)+'</span>').join("")+'</div>'
 +'<div class="md-f"><span>No order created · <b>demand recorded against this postal code</b></span><span class="md-btn p" data-close="1">Add to geo waitlist</span></div>'); }

/* ── the brand switches the postal code on ── */
function geoon(C,P){ const G=C.geoon||{};
 return wide("frame",head("Postal code activated","The brand opened the area · everyone waiting is messaged automatically")
 +'<div class="bs-v"><span class="tick">✓</span><div><b>'+esc(G.verdict||"〒"+P.postal+" is now serviced")+'</b><span>'+esc(G.sub||"")+'</span></div><em>ACTIVE</em></div>'
 +'<div class="bs-cmp"><div class="off"><small>'+esc(G.beforeLabel||"BEFORE")+'</small><b>'+esc(G.before||"")+'</b></div><span class="ar">→</span><div class="w"><small>'+esc(G.afterLabel||"NOW")+'</small><b>'+esc(G.after||"")+'</b></div></div>'
 +'<div class="bs-rows">'+(G.rows||[]).map((r,i)=>'<div style="animation-delay:'+(0.1+i*0.16)+'s"><span class="ok">✓</span><div><small>'+esc(r[0])+'</small><b>'+esc(r[1])+'</b></div></div>').join("")+'</div>'
 +'<div class="so-q"><div><small>WAITING, NOW MESSAGED</small><b>'+esc(G.messaged||"")+'</b></div><div><small>COURIER SCORED</small><b>'+esc(G.carrier||"")+'</b></div><div><small>DAYS ON WAITLIST</small><b>'+esc(G.days||"")+'</b></div></div>'
 +'<div class="bs-tags">'+(G.tags||[]).map(t=>'<span>'+esc(t)+'</span>').join("")+'</div>'); }

function gratify(){ return '<div class="md-ov all"><div class="md-note">A 7-day gratification period is given to the consumer before feedback is triggered.</div></div>'; }
return {html:(k,C,P)=>({geo,alloc,verify,skumap,order,track,gratify,screening,enrol,soldout,geowait,geoon})[k](C,P)};
})();
