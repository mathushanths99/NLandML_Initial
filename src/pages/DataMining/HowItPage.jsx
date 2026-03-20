export default function HowItPage({ go }) {
  return (
    <>
      <div className="nla-lh">
        <div className="nla-lh-inner">
          <div className="nla-breadcrumb"><button onClick={()=>go("home")}>Home</button> / Module 2</div>
          <h2>How Neural Networks Work</h2>
          <p>Follow data through the network — from raw input to a confident prediction.</p>
        </div>
      </div>
      <div className="nla-body">
        <div className="nla-concept">
          <h3>Step 1 — Forward Pass</h3>
          <p>Data flows left → right. Each neuron multiplies inputs by weights, adds a bias, then applies its activation function.</p>
          <div className="nla-diagram">
            <svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg">
              <defs><marker id="arrF" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M2 2L8 5L2 8" fill="none" stroke="#6a7590" strokeWidth="1.5"/></marker></defs>
              {[
                {x:20, color:"#00f5a0", label:"Input", line1:"x = [0.5,", line2:"0.8, 0.2]"},
                {x:160, color:"#6c5ce7", label:"Weighted Sum", line1:"z = Σ(wᵢ·xᵢ)+b", line2:"z = 1.24"},
                {x:320, color:"#fd5c5c", label:"Activation", line1:"a = ReLU(z)", line2:"a = 1.24"},
                {x:480, color:"#fdc93a", label:"Output", line1:"ŷ = 0.82", line2:"(82% cat)"},
              ].map((s,i)=>(
                <g key={i}>
                  <rect x={s.x} y="50" width={i===0?110:130} height="80" rx="12" fill="#172032" stroke={s.color} strokeWidth="1.5"/>
                  <text x={s.x+(i===0?55:65)} y="78" textAnchor="middle" fill={s.color} fontSize="11" fontFamily="DM Sans" fontWeight="600">{s.label}</text>
                  <text x={s.x+(i===0?55:65)} y="97" textAnchor="middle" fill="#6a7590" fontSize="10" fontFamily="Space Mono">{s.line1}</text>
                  <text x={s.x+(i===0?55:65)} y="112" textAnchor="middle" fill="#6a7590" fontSize="10" fontFamily="Space Mono">{s.line2}</text>
                  {i<3 && <line x1={s.x+(i===0?110:130)} y1="90" x2={s.x+(i===0?130:150)} y2="90" stroke="#6a7590" strokeWidth="1.5" markerEnd="url(#arrF)"/>}
                </g>
              ))}
            </svg>
          </div>
        </div>

        <div className="nla-concept">
          <h3>Step 2 — Loss Function</h3>
          <p>After the forward pass we compare prediction (ŷ) to ground truth (y). The difference is the <strong>loss</strong> — lower is better.</p>
          <div className="nla-info-grid">
            <div className="nla-info-box"><h4>Mean Squared Error</h4><p>Regression tasks. Loss = mean of (ŷ − y)²</p></div>
            <div className="nla-info-box" style={{borderColor:"var(--accent3)"}}><h4 style={{color:"var(--accent3)"}}>Cross-Entropy</h4><p>Classification. Penalises wrong confident predictions heavily.</p></div>
            <div className="nla-info-box" style={{borderColor:"var(--accent4)"}}><h4 style={{color:"var(--accent4)"}}>Binary CE</h4><p>Yes/no problems — spam detection, cat/not-cat classification.</p></div>
          </div>
        </div>

        <div className="nla-concept">
          <h3>Step 3 — Gradient Descent</h3>
          <p>To reduce loss we nudge each weight in the direction that reduces the error. This is gradient descent — rolling a ball downhill on a loss landscape.</p>
          <div className="nla-diagram">
            <svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
              <defs><marker id="arrG" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M2 2L8 5L2 8" fill="none" stroke="#fdc93a" strokeWidth="1.5"/></marker></defs>
              <path d="M40 50 Q120 190 200 170 Q240 160 280 200 Q360 240 440 160 Q520 80 640 40" stroke="rgba(0,245,160,0.35)" strokeWidth="2.5" fill="none"/>
              <path d="M40 50 Q120 190 200 170 Q240 160 280 200 Q360 240 440 160 Q520 80 640 40 L640 220 L40 220 Z" fill="rgba(0,245,160,0.03)"/>
              <line x1="30" y1="215" x2="650" y2="215" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <line x1="30" y1="215" x2="30" y2="20" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
              <text x="648" y="213" fill="#6a7590" fontSize="11" fontFamily="DM Sans">weights</text>
              <text x="34" y="18" fill="#6a7590" fontSize="11" fontFamily="DM Sans">loss</text>
              <circle cx="200" cy="170" r="5" fill="#fd5c5c"/>
              <text x="200" y="156" textAnchor="middle" fill="#fd5c5c" fontSize="10" fontFamily="DM Sans">local min</text>
              <circle cx="440" cy="157" r="8" fill="#00f5a0"/>
              <text x="440" y="143" textAnchor="middle" fill="#00f5a0" fontSize="10" fontFamily="DM Sans">global min ✓</text>
              <circle cx="320" cy="197" r="14" fill="#172032" stroke="#fdc93a" strokeWidth="2"/>
              <text x="320" y="201" textAnchor="middle" fill="#fdc93a" fontSize="9" fontFamily="Space Mono">w</text>
              <path d="M334 195 Q380 175 420 162" stroke="#fdc93a" strokeWidth="1.5" fill="none" strokeDasharray="4 3" markerEnd="url(#arrG)"/>
              <text x="378" y="185" fill="#fdc93a" fontSize="10" fontFamily="DM Sans">gradient descent</text>
            </svg>
          </div>
          <div className="nla-analogy">
            <div className="nla-analogy-label">Analogy</div>
            <h4>Blindfolded hiker ⛰️</h4>
            <p>You can't see the whole landscape but you can feel which direction is downhill. You take small careful steps downhill — that's gradient descent finding minimum loss.</p>
          </div>
        </div>

        <div className="nla-page-nav">
          <button className="btn btn-primary" onClick={()=>go("training")}>Next: Training →</button>
          <button className="btn btn-ghost" onClick={()=>go("basics")}>← Previous</button>
        </div>
      </div>
    </>
  );
}
