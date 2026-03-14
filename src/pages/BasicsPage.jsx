export default function BasicsPage({ go }) {
  return (
    <>
      <div className="nla-lh">
        <div className="nla-lh-inner">
          <div className="nla-breadcrumb"><button onClick={()=>go("home")}>Home</button> / Module 1</div>
          <h2>What is a Neural Network?</h2>
          <p>Understand the fundamental building blocks — inspired by the human brain, powered by mathematics.</p>
          <div className="nla-chips">
            {["Intro","Neurons","Layers","Activations"].map((c,i)=><div key={c} className={`nla-chip${i<3?" done":""}`}>{i<3?"✓ ":""}{c}</div>)}
          </div>
        </div>
      </div>
      <div className="nla-body">

        <div className="nla-concept">
          <h3>The Brain Analogy</h3>
          <p>Your brain has ~86 billion biological neurons. Each receives signals, processes them, and fires to the next. Artificial Neural Networks mimic this — instead of biology we use numbers, weights and functions.</p>
          <div className="nla-analogy">
            <div className="nla-analogy-label">Real World Analogy</div>
            <h4>Think of a light-switch panel 💡</h4>
            <p>Each switch (neuron) can be ON or OFF. The final room light (output) depends on which combination is flipped. A neural network learns which switches matter most for each answer.</p>
          </div>
        </div>

        <div className="nla-concept">
          <h3>Biological vs Artificial Neuron</h3>
          <div className="nla-diagram">
            <svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg">
              <text x="170" y="24" textAnchor="middle" fill="#6a7590" fontSize="13" fontFamily="DM Sans">Biological Neuron</text>
              <path d="M30 80 Q60 100 90 110" stroke="#00f5a0" strokeWidth="2" fill="none"/>
              <path d="M25 130 Q60 120 90 115" stroke="#00f5a0" strokeWidth="2" fill="none"/>
              <path d="M30 170 Q60 150 90 120" stroke="#00f5a0" strokeWidth="2" fill="none"/>
              <ellipse cx="120" cy="115" rx="30" ry="25" fill="#172032" stroke="#00f5a0" strokeWidth="2"/>
              <text x="120" y="119" textAnchor="middle" fill="#00f5a0" fontSize="10" fontFamily="DM Sans">Cell</text>
              <path d="M150 115 Q200 115 220 115" stroke="#fdc93a" strokeWidth="3" fill="none"/>
              <circle cx="235" cy="115" r="8" fill="#172032" stroke="#fdc93a" strokeWidth="2"/>
              <text x="55" y="74" fill="#6a7590" fontSize="10" fontFamily="DM Sans">Dendrites</text>
              <text x="185" y="103" fill="#6a7590" fontSize="10" fontFamily="DM Sans">Axon</text>
              <line x1="340" y1="10" x2="340" y2="230" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4 4"/>
              <text x="510" y="24" textAnchor="middle" fill="#6a7590" fontSize="13" fontFamily="DM Sans">Artificial Neuron</text>
              <line x1="370" y1="70" x2="460" y2="115" stroke="#00f5a0" strokeWidth="1.5"/>
              <line x1="370" y1="115" x2="460" y2="115" stroke="#00f5a0" strokeWidth="2.5"/>
              <line x1="370" y1="160" x2="460" y2="115" stroke="#00f5a0" strokeWidth="1.5"/>
              <text x="402" y="83" fill="#6c5ce7" fontSize="10" fontFamily="Space Mono">w₁</text>
              <text x="402" y="113" fill="#6c5ce7" fontSize="10" fontFamily="Space Mono">w₂</text>
              <text x="402" y="153" fill="#6c5ce7" fontSize="10" fontFamily="Space Mono">w₃</text>
              <text x="356" y="74" fill="#6a7590" fontSize="11" fontFamily="Space Mono">x₁</text>
              <text x="356" y="119" fill="#6a7590" fontSize="11" fontFamily="Space Mono">x₂</text>
              <text x="356" y="164" fill="#6a7590" fontSize="11" fontFamily="Space Mono">x₃</text>
              <circle cx="490" cy="115" r="32" fill="#172032" stroke="#6c5ce7" strokeWidth="2"/>
              <text x="490" y="110" textAnchor="middle" fill="#6c5ce7" fontSize="9" fontFamily="Space Mono">Σ(wx)</text>
              <text x="490" y="124" textAnchor="middle" fill="#6c5ce7" fontSize="9" fontFamily="Space Mono">+b</text>
              <rect x="542" y="100" width="56" height="30" rx="8" fill="#172032" stroke="#fd5c5c" strokeWidth="1.5"/>
              <text x="570" y="119" textAnchor="middle" fill="#fd5c5c" fontSize="10" fontFamily="Space Mono">f(x)</text>
              <line x1="522" y1="115" x2="542" y2="115" stroke="#fd5c5c" strokeWidth="1.5"/>
              <defs><marker id="arrB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M2 2L8 5L2 8" fill="none" stroke="#fdc93a" strokeWidth="1.5"/></marker></defs>
              <line x1="598" y1="115" x2="630" y2="115" stroke="#fdc93a" strokeWidth="2" markerEnd="url(#arrB)"/>
              <text x="636" y="119" fill="#fdc93a" fontSize="11" fontFamily="Space Mono">y</text>
            </svg>
          </div>
        </div>

        <div className="nla-concept">
          <h3>The Three Layers</h3>
          <div className="nla-info-grid">
            <div className="nla-info-box" style={{borderColor:"var(--accent)"}}><h4 style={{color:"var(--accent)"}}>🟢 Input Layer</h4><p>Receives raw data — pixels, numbers, embeddings. One neuron per feature. No computation here.</p></div>
            <div className="nla-info-box"><h4>🟣 Hidden Layers</h4><p>Where learning happens. Each layer extracts increasingly abstract patterns. More layers = deeper network.</p></div>
            <div className="nla-info-box" style={{borderColor:"var(--accent4)"}}><h4 style={{color:"var(--accent4)"}}>🟡 Output Layer</h4><p>Produces the final answer — a class probability, a regression value, or a decision.</p></div>
          </div>
        </div>

        <div className="nla-concept">
          <h3>Activation Functions</h3>
          <p>After summing weighted inputs each neuron applies an activation function — adding non-linearity so the network can learn complex patterns.</p>
          <div className="nla-act-grid">
            {[
              { name:"ReLU", formula:"max(0, x)", desc:"Most common. Fast, works great in deep nets.", color:"#00f5a0", pts:"0,50 25,50 55,10 80,10" },
              { name:"Sigmoid", formula:"1/(1+e⁻ˣ)", desc:"Outputs 0–1. Binary classification output.", color:"#6c5ce7", pts:null },
              { name:"Tanh", formula:"tanh(x)", desc:"Outputs -1 to 1. Better than sigmoid for hidden layers.", color:"#fd5c5c", pts:null },
              { name:"Softmax", formula:"eˣⁱ/Σeˣʲ", desc:"Multi-class output. Probabilities sum to 1.", color:"#fdc93a", pts:"0,50 30,50 80,5" },
            ].map(a=>(
              <div key={a.name} className="nla-act-card">
                <svg viewBox="0 0 80 60" width="80" height="60">
                  <line x1="0" y1="30" x2="80" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  {a.pts
                    ? <polyline points={a.pts} fill="none" stroke={a.color} strokeWidth="2.5"/>
                    : <path d={a.name==="Sigmoid"?"M0,55 Q10,50 20,40 Q35,20 40,30 Q45,40 60,20 Q70,10 80,5":"M0,55 Q10,52 20,44 Q35,25 40,30 Q45,35 60,15 Q70,5 80,2"} fill="none" stroke={a.color} strokeWidth="2.5"/>
                  }
                </svg>
                <h4>{a.name}</h4>
                <p>{a.desc}</p>
                <div className="formula" style={{color:a.color}}>{a.formula}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="nla-page-nav">
          <button className="btn btn-primary" onClick={()=>go("howit")}>Next: How It Works →</button>
          <button className="btn btn-ghost" onClick={()=>go("home")}>← Back to Home</button>
        </div>
      </div>
    </>
  );
}
