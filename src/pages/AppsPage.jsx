export default function AppsPage({ go }) {
  const apps = [
    { icon:"🏥", title:"Medical Imaging", desc:"CNNs detect tumours, diabetic retinopathy, and pneumonia from X-rays and MRIs — often matching specialist accuracy.", tag:"tag-cv", tagTxt:"Computer Vision" },
    { icon:"🚗", title:"Self-Driving Cars", desc:"CNNs for perception, RNNs for planning, RL for navigation. Tesla and Waymo use these daily on public roads.", tag:"tag-cv", tagTxt:"CV + RL" },
    { icon:"💬", title:"Language Models (ChatGPT)", desc:"Transformers trained on billions of documents. They write code, answer questions, translate and summarise.", tag:"tag-nlp", tagTxt:"NLP" },
    { icon:"🎵", title:"Music & Art Generation", desc:"Diffusion models and GANs generate photorealistic images (Midjourney, DALL·E) and AI-composed music.", tag:"tag-gen", tagTxt:"Generative AI" },
    { icon:"🎮", title:"Game-Playing AI", desc:"AlphaGo beat the world Go champion. OpenAI Five beat professional Dota 2 teams using deep RL.", tag:"tag-rl", tagTxt:"Reinforcement Learning" },
    { icon:"🔍", title:"Search & Recommendations", desc:"YouTube, Netflix, Spotify all use deep networks to predict what you'll engage with next.", tag:"tag-nlp", tagTxt:"NLP + CV" },
    { icon:"🌐", title:"Machine Translation", desc:"Google Translate's transformer networks handle 100+ languages in real time.", tag:"tag-nlp", tagTxt:"NLP" },
    { icon:"💊", title:"Drug Discovery", desc:"AlphaFold solved the 50-year-old protein folding problem, predicting 3D structure from amino acid sequences.", tag:"tag-gen", tagTxt:"Scientific AI" },
  ];
  return (
    <>
      <div className="nla-lh">
        <div className="nla-lh-inner">
          <div className="nla-breadcrumb"><button onClick={()=>go("home")}>Home</button> / Module 5</div>
          <h2>Real-World Applications</h2>
          <p>Deep learning is transforming every industry. Here are the most impactful use cases.</p>
        </div>
      </div>
      <div className="nla-body">
        <div className="nla-grid-2">
          {apps.map(a=>(
            <div key={a.title} className="nla-app-card">
              <div className="nla-app-icon">{a.icon}</div>
              <div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
                <span className={`nla-tag ${a.tag}`}>{a.tagTxt}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="nla-page-nav">
          <button className="btn btn-primary" onClick={()=>go("resources")}>Next: Resources →</button>
          <button className="btn btn-ghost" onClick={()=>go("types")}>← Previous</button>
        </div>
      </div>
    </>
  );
}
