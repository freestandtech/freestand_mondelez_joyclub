/* Shared scaffold for Mondelez strategy pages. Page defines window.PAGE = {title, accent, steps:[...]} */
(function(){
  var A=function(){return (window.PAGE&&window.PAGE.accent)||"#4F2170";};
  window.SC={navy:"#052762",blue:"#0A49B7",gold:"#E4A400",green:"#128C4A",purple:"#4F2170",orange:"#B4591B",pink:"#C9487E",plum:"#92549A"};

  window.wa=function(o){
    var name=o.name||"Mondelez India", sub=o.sub||"Verified business · WhatsApp", av=o.avatar;
    var msgs=(o.msgs||[]).map(function(m){
      return m[0]==="u" ? '<div class="usr"><div>'+m[1]+'</div></div>' : '<div class="bot"><div>'+m[1]+'</div></div>';
    }).join("");
    return '<div class="phone"><div class="nt"></div><div class="scr">'
      +'<div class="wah"><div class="av">'+(av?'<img src="'+av+'" alt=""/>':'')+'</div>'
      +'<div><div class="n">'+name+'</div><div class="s">'+sub+'</div></div></div>'
      +'<div class="wab">'+msgs+'</div>'
      +'<div class="wain"><div class="f">Message…</div><div class="b">➤</div></div>'
      +'</div></div>';
  };
  window.imgPhone=function(src,label,scan){
    return '<div class="phone"><div class="nt"></div><div class="scr">'
      +'<img class="full" src="'+src+'" alt=""/>'
      +(scan?'<div style="position:absolute;inset:0"><div style="position:absolute;left:30%;right:28%;top:40%;bottom:40%;border-radius:8px;box-shadow:0 0 0 999px rgba(6,10,22,0.35);border:2px solid #F2C94C"></div>'
        +'<div style="position:absolute;left:31%;right:29%;height:3px;border-radius:2px;background:linear-gradient(90deg,transparent,#F2C94C,transparent);box-shadow:0 0 14px rgba(242,201,76,0.9);animation:scanline 2.1s ease-in-out infinite"></div></div>':'')
      +(label?'<div style="position:absolute;left:0;right:0;bottom:0;padding:26px 14px 12px;background:linear-gradient(transparent,rgba(8,6,20,0.85));color:#fff;font-size:12.5px;font-weight:700;line-height:1.4">'+label+'</div>':'')
      +'</div></div>';
  };
  window.chk=function(rows,color){
    return rows.map(function(r,i){
      return '<div class="chk"><div class="d" style="background:'+(color||A())+'1a">'
        +'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="'+(color||A())+'" stroke-width="3.4"><polyline points="20 6 9 17 4 12"></polyline></svg></div>'
        +'<div><div class="t">'+r[0]+'</div>'+(r[1]?'<div class="s">'+r[1]+'</div>':'')+'</div></div>';
    }).join("");
  };
  window.kvs=function(rows,hiN){
    return rows.map(function(r,i){
      return '<div class="kv" style="background:'+(i<(hiN||0)?"#FDF3DC":"transparent")+'"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>';
    }).join("");
  };
  window.chips=function(list,c,bg){
    return '<div class="chips">'+list.map(function(t){return '<span style="background:'+bg+';color:'+c+'">'+t+'</span>';}).join("")+'</div>';
  };
  window.stat4=function(rows){
    return '<div class="stat4">'+rows.map(function(r,i){
      return '<div class="s" style="animation-delay:'+(i*0.07)+'s;border-top:3px solid '+(r[3]||A())+'"><div class="v" style="color:'+(r[3]||A())+'">'+r[0]+'</div><div class="l">'+r[1]+'</div>'+(r[2]?'<div class="d">'+r[2]+'</div>':'')+'</div>';
    }).join("")+'</div>';
  };
  window.bars=function(rows,max,unit){
    return '<div class="bars">'+rows.map(function(r){
      return '<div class="r"><span class="n">'+r[0]+'</span><span class="t"><i style="width:'+(r[1]/max*100)+'%;background:'+(r[2]||SC.navy)+'"></i></span><span class="v">'+r[1].toLocaleString("en-IN")+(unit||"")+'</span></div>';
    }).join("")+'</div>';
  };
  window.pie=function(data){
    var acc=0, stops=data.map(function(d){var s=acc;acc+=d.v;return d.c+" "+s+"% "+acc+"%";}).join(", ");
    return '<div class="pie"><div class="c" style="background:conic-gradient('+stops+')"></div><div class="lg">'
      +data.map(function(d){return '<div><i style="background:'+d.c+'"></i>'+d.l+'<b>'+d.v+'%</b></div>';}).join("")+'</div></div>';
  };
  window.feed=function(rows){
    return '<div class="feed">'+rows.map(function(r){return '<div class="e"><i></i>'+r[0]+'<span class="tm">'+r[1]+'</span></div>';}).join("")+'</div>';
  };
  window.geo=function(pins,note){
    return '<div class="geo"><svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">'
      +'<path d="M0 62h400M0 138h400M110 0v200M250 14v186M330 0v200" stroke="#fff" stroke-width="10"/>'
      +'<path d="M0 62h400M0 138h400M110 0v200M250 14v186M330 0v200" stroke="#C3D2BC" stroke-width="1.2"/></svg>'
      +pins.map(function(p){return '<div class="pin" style="left:'+p[1]+'%;top:'+p[2]+'%">'+p[0]+'</div>';}).join("")
      +(note?'<div style="position:absolute;left:8px;bottom:8px;background:rgba(18,16,30,0.78);color:#fff;font-size:9px;font-weight:600;border-radius:6px;padding:4px 9px">'+note+'</div>':'')
      +'</div>';
  };
  window.tbl=function(head,rows){
    return '<table class="tbl"><thead><tr>'+head.map(function(h){return '<th>'+h+'</th>';}).join("")+'</tr></thead><tbody>'
      +rows.map(function(r){return '<tr>'+r.map(function(c,i){return '<td'+(i===0?' class="n"':'')+'>'+c+'</td>';}).join("")+'</tr>';}).join("")
      +'</tbody></table>';
  };
  window.console5=function(active,title,filter,inner){
    var nav=["Campaigns","Planner","Audience","Reengage","Analytics","Reports","Inventory"];
    return '<div class="cons"><div class="nav">'
      +nav.map(function(l){return '<div class="l'+(l===active?" on":"")+'"><span></span>'+l+'</div>';}).join("")
      +'</div><div class="main"><div class="bar"><div class="t">'+title+'</div><div class="f">'+filter+'</div></div>'
      +'<div class="in">'+inner+'</div></div></div>';
  };
  window.pan=function(h,inner,style){
    return '<div class="pan"'+(style?' style="'+style+'"':'')+'><div class="h">'+h+'</div>'+inner+'</div>';
  };
  window.k4=function(rows){
    return '<div class="k4">'+rows.map(function(r){
      return '<div class="b"><div class="l">'+r[0]+'</div><div class="v">'+r[1]+'</div>'+(r[2]?'<div class="d">'+r[2]+'</div>':'')+'</div>';
    }).join("")+'</div>';
  };

  function show(){
    var S=window.PAGE.steps;
    var i=Math.max(0,Math.min(S.length-1,parseInt(location.hash.slice(1)||"0",10)||0));
    var s=S[i];
    var rail=document.getElementById("rail");
    rail.style.gridTemplateColumns="repeat("+S.length+",1fr)";
    rail.innerHTML=S.map(function(x,j){
      return '<div class="st'+(j===i?" on":(j<i?" past":""))+'" onclick="location.hash='+j+'" style="'+(j===i?"background:"+window.PAGE.accent+";border-color:"+window.PAGE.accent+";color:#fff":"")+'"><b>'+(j+1)+'</b>'+x.label+'</div>';
    }).join("");
    var st=document.getElementById("stage");
    if(s.full){ st.innerHTML=s.full(); }
    else {
      st.innerHTML=(s.left?s.left():"")
        +'<div id="rcol"><div class="kick" style="color:'+window.PAGE.accent+'">'+(s.kick||"")+'</div>'
        +'<div class="head">'+(s.title||"")+'</div>'
        +(s.sub?'<div class="sub">'+s.sub+'</div>':'')
        +'<div class="body">'+(s.body?s.body():"")+'</div></div>';
    }
    document.getElementById("cap-tag").textContent=s.cap[0];
    document.getElementById("cap-t").textContent=s.cap[1];
    document.getElementById("cap-s").textContent=s.cap[2]||"";
  }
  window.mountStrat=function(){
    document.getElementById("bar-title").textContent=window.PAGE.title;
    window.addEventListener("hashchange",show); show();
  };
})();
