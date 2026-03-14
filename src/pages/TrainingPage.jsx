export default function TrainingPage({ go }) {
  return (
    <>
      <div className="nla-lh">
        <div className="nla-lh-inner">
          <div className="nla-breadcrumb"><button onClick={()=>go("home")}>Home</button> / Module 3</div>
          <h2>Training &amp; Backpropagation</h2>
          <p>Discover how a neural network actually learns — adjusting millions of weights through backprop.</p>
        </div>
      </div>
      <div className="nla-body">
        <div className="nla-concept">
          <h3>The Training Loop</h3>
          <div className="nla-timeline">
            {[
              ["STEP 1","Forward Pass","Feed data through the network. Get a prediction ŷ."],
              ["STEP 2","Compute Loss","Measure how wrong the prediction is. L = loss(ŷ, y)."],
              ["STEP 3","Backpropagation","Calculate the gradient of the loss w.r.t. every weight using the chain rule."],
              ["STEP 4","Update Weights","Move each weight: w = w − η·∂L/∂w"],
              ["REPEAT","Many Epochs","Cycle through all training data many times until loss converges."],
            ].map(([yr,h,p])=>(
              <div key={yr} className="nla-tl">
                <div className="nla-tl-year">{yr}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="nla-concept">
          <h3>Key Hyperparameters</h3>
          <div className="nla-info-grid">
            <div className="nla-info-box"><h4>Learning Rate η</h4><p>Step size of each weight update. Too high = overshoot. Too low = slow. Typical: 0.001–0.01</p></div>
            <div className="nla-info-box" style={{borderColor:"var(--accent3)"}}><h4 style={{color:"var(--accent3)"}}>Epochs</h4><p>Full passes through training data. More = more learning, but risks overfitting.</p></div>
            <div className="nla-info-box" style={{borderColor:"var(--accent4)"}}><h4 style={{color:"var(--accent4)"}}>Batch Size</h4><p>Samples processed before each weight update. Mini-batches (32–256) balance speed &amp; stability.</p></div>
            <div className="nla-info-box" style={{borderColor:"var(--accent5)"}}><h4 style={{color:"var(--accent5)"}}>Optimizer</h4><p>Algorithm performing weight updates. Adam, SGD, RMSProp are popular choices.</p></div>
          </div>
        </div>

        <div className="nla-concept">
          <h3>Overfitting vs Underfitting</h3>
          <div className="nla-diagram">
            <svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg">
              <text x="110" y="22" textAnchor="middle" fill="#fd5c5c" fontSize="13" fontFamily="DM Sans">Underfitting</text>
              <line x1="30" y1="170" x2="190" y2="30" stroke="#6c5ce7" strokeWidth="2.5"/>
              {[[50,150],[70,120],[90,140],[110,90],[130,110],[150,70],[170,85]].map(([cx,cy])=><circle key={cx} cx={cx} cy={cy} r="4" fill="#00f5a0"/>)}
              <text x="110" y="190" textAnchor="middle" fill="#6a7590" fontSize="11" fontFamily="DM Sans">Model too simple</text>
              <text x="340" y="22" textAnchor="middle" fill="#00f5a0" fontSize="13" fontFamily="DM Sans">Good Fit ✓</text>
              <path d="M260 150 Q300 100 340 90 Q380 80 420 70" stroke="#00f5a0" strokeWidth="2.5" fill="none"/>
              {[[270,145],[295,108],[315,94],[340,88],[365,82],[390,73],[415,71]].map(([cx,cy])=><circle key={cx} cx={cx} cy={cy} r="4" fill="#00f5a0"/>)}
              <text x="340" y="190" textAnchor="middle" fill="#6a7590" fontSize="11" fontFamily="DM Sans">Generalises well</text>
              <text x="580" y="22" textAnchor="middle" fill="#fdc93a" fontSize="13" fontFamily="DM Sans">Overfitting</text>
              <path d="M490 160 Q510 80 520 140 Q540 60 550 130 Q565 50 580 120 Q600 40 620 80 Q640 30 650 60" stroke="#fdc93a" strokeWidth="2.5" fill="none"/>
              {[[500,152],[520,138],[545,128],[565,118],[590,80],[615,75],[638,62]].map(([cx,cy])=><circle key={cx} cx={cx} cy={cy} r="4" fill="#00f5a0"/>)}
              <text x="580" y="190" textAnchor="middle" fill="#6a7590" fontSize="11" fontFamily="DM Sans">Memorised training data</text>
            </svg>
          </div>
          <p>Solutions: Dropout, L1/L2 Regularisation, Early Stopping, More data, Data Augmentation.</p>
        </div>

        <div className="nla-concept">
          <h3>Sample Keras Code</h3>
          <div className="nla-code">
            <pre>
{``}<span className="cm"># Build and train a simple neural network</span>{`
`}<span className="kw">from</span>{` tensorflow `}<span className="kw">import</span>{` keras

`}<span className="cm"># Define the model</span>{`
model = keras.Sequential([
    keras.layers.`}<span className="fn">Dense</span>{`(`}<span className="nm">64</span>{`, activation=`}<span className="st">'relu'</span>{`, input_shape=(`}<span className="nm">10</span>{`,)),
    keras.layers.`}<span className="fn">Dropout</span>{`(`}<span className="nm">0.2</span>{`),
    keras.layers.`}<span className="fn">Dense</span>{`(`}<span className="nm">32</span>{`, activation=`}<span className="st">'relu'</span>{`),
    keras.layers.`}<span className="fn">Dense</span>{`(`}<span className="nm">1</span>{`, activation=`}<span className="st">'sigmoid'</span>{`)
])

`}<span className="cm"># Compile</span>{`
model.`}<span className="fn">compile</span>{`(optimizer=`}<span className="st">'adam'</span>{`,
           loss=`}<span className="st">'binary_crossentropy'</span>{`,
           metrics=[`}<span className="st">'accuracy'</span>{`])

`}<span className="cm"># Train</span>{`
model.`}<span className="fn">fit</span>{`(X_train, y_train,
    epochs=`}<span className="nm">50</span>{`, batch_size=`}<span className="nm">32</span>{`,
    validation_split=`}<span className="nm">0.2</span>{`)`}
            </pre>
          </div>
        </div>

        <div className="nla-page-nav">
          <button className="btn btn-primary" onClick={()=>go("types")}>Next: Network Types →</button>
          <button className="btn btn-ghost" onClick={()=>go("howit")}>← Previous</button>
        </div>
      </div>
    </>
  );
}
