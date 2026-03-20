import NetworkSVG from '../../components/NetworkSVG';

export default function HomePage({ go }) {
  const modules = [
    { icon:"🧠", title:"What is a Neural Network?", desc:"Understand neurons, layers, weights and activations — the core building blocks.", tag:"MODULE 1 · BEGINNER", page:"basics", color:"var(--accent)" },
    { icon:"⚙️", title:"How Neural Networks Work", desc:"Forward pass, loss functions, and how the network computes a prediction step-by-step.", tag:"MODULE 2 · BEGINNER", page:"howit", color:"var(--accent2)" },
    { icon:"📉", title:"Training & Backpropagation", desc:"Gradient descent, backprop, learning rate and overfitting — how networks actually learn.", tag:"MODULE 3 · INTERMEDIATE", page:"training", color:"var(--accent3)" },
    { icon:"🌐", title:"Types of Neural Networks", desc:"CNNs, RNNs, Transformers, GANs — when to use which architecture.", tag:"MODULE 4 · INTERMEDIATE", page:"types", color:"var(--accent4)" },
    { icon:"🚀", title:"Real-World Applications", desc:"Self-driving cars, medical AI, ChatGPT, image generation and more.", tag:"MODULE 5 · ALL LEVELS", page:"apps", color:"var(--accent5)" },
    { icon:"📚", title:"Resources & Next Steps", desc:"Best books, courses, and interactive tools to deepen your knowledge.", tag:"BONUS · FREE", page:"resources", color:"#ff9f43" },
  ];
  return (
    <>
      <div className="nla-hero">
        <div className="nla-badge">✦ FREE NEURAL NETWORK COURSE</div>
        <h1 className="nla-hero-h1">Learn Neural Networks<br/>&amp; Machine Learning</h1>
        <p className="nla-hero-p">From neurons to deep learning — a complete visual guide with diagrams, interactive examples and a graded mock exam.</p>
        <div className="nla-hero-cta">
          <button className="btn btn-primary" onClick={()=>go("basics")}>Start Learning →</button>
          <button className="btn btn-outline" onClick={()=>go("quiz")}>Take Mock Exam</button>
        </div>
        <div className="nla-network-wrap"><NetworkSVG/></div>
      </div>

      <div className="nla-section">
        <div className="nla-section-title">Learning Modules</div>
        <div className="nla-section-sub">Start from the basics or jump straight to what you need.</div>
        <div className="nla-grid-3">
          {modules.map(m=>(
            <div key={m.page} className="nla-card" style={{"--card-accent":m.color}} onClick={()=>go(m.page)}>
              <div className="nla-card-icon">{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <div className="nla-card-tag">{m.tag}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="nla-section" style={{paddingTop:0}}>
        <div className="nla-stats">
          <div className="nla-stat"><div className="v" style={{color:"var(--accent)"}}>6</div><div className="l">Modules</div></div>
          <div className="nla-stat"><div className="v" style={{color:"var(--accent2)"}}>20</div><div className="l">Exam Questions</div></div>
          <div className="nla-stat"><div className="v" style={{color:"var(--accent4)"}}>∞</div><div className="l">Free Forever</div></div>
          <div className="nla-stat"><div className="v" style={{color:"var(--accent5)"}}>100%</div><div className="l">Visual Learning</div></div>
        </div>
      </div>

      <footer className="nla-footer">
        Content inspired by <a href="https://www.deeplearningbook.org/" target="_blank" rel="noreferrer">Deep Learning Book</a>,{" "}
        <a href="https://playground.tensorflow.org/" target="_blank" rel="noreferrer">TF Playground</a> &amp;{" "}
        <a href="https://machinelearningmastery.com/" target="_blank" rel="noreferrer">ML Mastery</a>
      </footer>
    </>
  );
}
