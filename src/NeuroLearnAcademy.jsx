import { useState } from "react";
import "./NeuroLearnAcademy.css";
import HomePage from "./pages/HomePage";
import BasicsPage from "./pages/BasicsPage";
import HowItPage from "./pages/HowItPage";
import TrainingPage from "./pages/TrainingPage";
import TypesPage from "./pages/TypesPage";
import AppsPage from "./pages/AppsPage";
import ResourcesPage from "./pages/ResourcesPage";
import QuizPage from "./pages/QuizPage";

export default function NeuroLearnAcademy() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  function go(p) { setPage(p); setMenuOpen(false); window.scrollTo(0,0); }

  const navItems = [
    { id:"home",   label:"Home" },
    { id:"basics", label:"Basics" },
    { id:"howit",  label:"How It Works" },
    { id:"types",  label:"Network Types" },
    { id:"training",label:"Training" },
    { id:"apps",   label:"Applications" },
    { id:"resources",label:"Resources" },
    { id:"quiz",   label:"Mock Exam ✦", exam:true },
  ];

  return (
    <div className="nla-root">
      <nav className="nla-nav">
        <div className="nla-nav-inner">
          <div className="nla-logo" onClick={()=>go("home")}>Neuro<span>Learn</span></div>
          <button className="nla-hamburger" onClick={()=>setMenuOpen(o=>!o)} aria-label="Menu">
            <span/><span/><span/>
          </button>
          <div className={`nla-nav-links${menuOpen?" open":""}`}>
            {navItems.map(n=>(
              <button key={n.id} className={`${page===n.id?"active":""}${n.exam?" exam-btn":""}`} onClick={()=>go(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="nla-page">
        {page==="home"      && <HomePage go={go}/>}
        {page==="basics"    && <BasicsPage go={go}/>}
        {page==="howit"     && <HowItPage go={go}/>}
        {page==="training"  && <TrainingPage go={go}/>}
        {page==="types"     && <TypesPage go={go}/>}
        {page==="apps"      && <AppsPage go={go}/>}
        {page==="resources" && <ResourcesPage go={go}/>}
        {page==="quiz"      && <QuizPage go={go}/>}
      </div>
    </div>
  );
}
