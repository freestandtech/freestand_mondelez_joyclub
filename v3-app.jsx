/* v3 app shell — arrow keys walk every tab inside every section */
const MZ3_SECTIONS = [
  { id:"cover", t:"Cover", steps:1 },
  { id:"acquire", t:"01 · Acquire", steps:5 },
  { id:"enrich", t:"02 · Enrich", steps:2 },
  { id:"engage", t:"03 · Engage", steps:13 },
  { id:"club", t:"04 · Joy Club", steps:5 },
  { id:"outcomes", t:"Outcomes", steps:1 },
];
function MZ3App(){
  const [sec,setSec] = React.useState(()=>{ try{ return localStorage.getItem("mz3.sec")||"cover"; }catch(e){ return "cover"; } });
  const [sub,setSub] = React.useState(0);
  const go = (s,k=0) => { setSec(s); setSub(k); try{ localStorage.setItem("mz3.sec",s); }catch(e){} };
  React.useEffect(()=>{
    const h = e => {
      if (e.key!=="ArrowRight" && e.key!=="ArrowLeft") return;
      const i = MZ3_SECTIONS.findIndex(x=>x.id===sec);
      const st = MZ3_SECTIONS[i].steps;
      if (e.key==="ArrowRight"){
        if (sub<st-1) setSub(sub+1);
        else if (i<MZ3_SECTIONS.length-1) go(MZ3_SECTIONS[i+1].id,0);
      } else {
        if (sub>0) setSub(sub-1);
        else if (i>0) go(MZ3_SECTIONS[i-1].id, MZ3_SECTIONS[i-1].steps-1);
      }
    };
    window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h);
  },[sec,sub]);
  const body = sec==="acquire"?<MZ3Acquire sub={sub} setSub={setSub}/>:sec==="enrich"?<MZ3Enrich sub={sub} setSub={setSub}/>:sec==="engage"?<MZ3Engage sub={sub} setSub={setSub}/>:sec==="club"?<MZ3Club sub={sub} setSub={setSub}/>:sec==="outcomes"?<MZ3Outcomes/>:null;
  return (
    <div style={{width:1360,margin:"0 auto",minHeight:"100vh",display:"flex",flexDirection:"column",background:"#F7F6FA"}}>
      <div style={{height:58,flex:"none",display:"flex",alignItems:"center",gap:10,padding:"0 24px",background:"#fff",borderBottom:"1px solid #e8e8f0"}}>
        <MdlzMark size={13}/>
        <span style={{fontSize:12.5,fontWeight:800,color:"#333",marginLeft:2}}>Always-On Ecosystem</span>
        <div style={{display:"flex",gap:6,margin:"0 auto"}}>
          {MZ3_SECTIONS.map(s=>(
            <button key={s.id} onClick={()=>go(s.id)} style={{cursor:"pointer",fontFamily:"inherit",border:"none",borderRadius:999,padding:"7px 16px",fontSize:12,fontWeight:800,background:sec===s.id?CAD_PURPLE:"transparent",color:sec===s.id?"#fff":"#777"}}>{s.t}</button>
          ))}
        </div>
        <span style={{fontSize:10.5,color:"#bbb"}}>← → walks every tab</span>
        <FSMark h={16}/>
      </div>
      <div style={{flex:1,position:"relative",minHeight:820}}>
        {sec==="cover"
          ? <MZ3Cover3 onStart={()=>go("acquire")}/>
          : <div key={sec} style={{position:"absolute",inset:0,padding:"22px 28px 26px",animation:"stageIn .4s both"}}>{body}</div>}
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<MZ3App/>);
