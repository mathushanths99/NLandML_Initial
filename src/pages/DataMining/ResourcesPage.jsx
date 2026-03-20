export default function ResourcesPage({ go }) {
  const open = url => window.open(url, "_blank", "noreferrer");
  return (
    <>
      <div className="nla-lh">
        <div className="nla-lh-inner">
          <div className="nla-breadcrumb"><button onClick={()=>go("home")}>Home</button> / Resources</div>
          <h2>Resources &amp; Next Steps</h2>
          <p>The best free and paid resources to continue your neural network journey.</p>
        </div>
      </div>
      <div className="nla-body">
        <div className="nla-concept" style={{padding:"1.5rem"}}>
          <h3>📚 Books</h3>
          <div className="nla-resource" onClick={()=>open("https://www.deeplearningbook.org/")}>
            <span className="r-icon">📖</span><div><h4>Deep Learning — Goodfellow, Bengio &amp; Courville</h4><p>The definitive textbook. Free online at deeplearningbook.org</p></div><span className="arrow">↗</span>
          </div>
          <div className="nla-resource" onClick={()=>open("https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/")}>
            <span className="r-icon">📗</span><div><h4>Hands-On Machine Learning with Scikit-Learn, Keras &amp; TensorFlow</h4><p>Aurélien Géron — practical, code-first approach</p></div><span className="arrow">↗</span>
          </div>
        </div>
        <div className="nla-concept" style={{padding:"1.5rem",marginTop:"1.25rem"}}>
          <h3>🎓 Free Courses</h3>
          {[
            ["🔵","Google ML Crash Course","Free, beginner-friendly. ML & neural network fundamentals.","https://developers.google.com/machine-learning/crash-course"],
            ["🎓","Deep Learning Specialisation — Andrew Ng","5-course series. Industry gold standard for deep learning.","https://www.coursera.org/specializations/deep-learning"],
            ["⚡","Fast.ai — Practical Deep Learning for Coders","Top-down, hands-on, free. Highly recommended.","https://course.fast.ai/"],
          ].map(([icon,h,p,url])=>(
            <div key={h} className="nla-resource" onClick={()=>open(url)}>
              <span className="r-icon">{icon}</span><div><h4>{h}</h4><p>{p}</p></div><span className="arrow">↗</span>
            </div>
          ))}
        </div>
        <div className="nla-concept" style={{padding:"1.5rem",marginTop:"1.25rem"}}>
          <h3>🛠️ Hands-On Tools</h3>
          {[
            ["🔬","TensorFlow Playground","Interactive browser tool — build & train a network with sliders. No code!","https://playground.tensorflow.org/"],
            ["💻","Google Colab","Free Jupyter notebooks with GPU. Run neural network code instantly.","https://colab.research.google.com/"],
            ["🐍","First Neural Network with Keras — ML Mastery","Step-by-step tutorial to build your first network in Python.","https://machinelearningmastery.com/tutorial-first-neural-network-python-keras/"],
          ].map(([icon,h,p,url])=>(
            <div key={h} className="nla-resource" onClick={()=>open(url)}>
              <span className="r-icon">{icon}</span><div><h4>{h}</h4><p>{p}</p></div><span className="arrow">↗</span>
            </div>
          ))}
        </div>
        <div className="nla-page-nav">
          <button className="btn btn-primary" onClick={()=>go("quiz")}>Take the Mock Exam ✦</button>
          <button className="btn btn-ghost" onClick={()=>go("apps")}>← Previous</button>
        </div>
      </div>
    </>
  );
}
