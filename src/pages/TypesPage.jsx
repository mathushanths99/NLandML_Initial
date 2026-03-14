export default function TypesPage({ go }) {
  const nets = [
    { icon:"🖼️", title:"CNN — Convolutional Neural Network", desc:"Designed for images. Convolutional filters detect edges, shapes, and features regardless of position.", when:"Image, video, audio spectrograms", color:"var(--accent)" },
    { icon:"🔁", title:"RNN — Recurrent Neural Network", desc:"Has memory — previous outputs feed back in. LSTMs solve the vanishing gradient problem for long sequences.", when:"Text, time series, speech, music", color:"var(--accent2)" },
    { icon:"🤖", title:"Transformer", desc:"Attention mechanism relates every token to every other. Powers GPT, BERT, and virtually all modern LLMs.", when:"NLP, code, multi-modal AI", color:"var(--accent4)" },
    { icon:"🎨", title:"GAN — Generative Adversarial Network", desc:"Generator creates fake data; Discriminator spots fakes. The competition drives photorealistic image generation.", when:"Image generation, deepfakes, augmentation", color:"var(--accent5)" },
    { icon:"🗜️", title:"Autoencoder", desc:"Compresses data into a small latent code (encoder) then reconstructs it (decoder). Great for anomaly detection.", when:"Unsupervised learning, denoising, compression", color:"var(--accent3)" },
    { icon:"🕹️", title:"Reinforcement Learning", desc:"Agent learns by trial and error — rewards for good actions, penalties for bad. Beats human Go and Dota champions.", when:"Games, robotics, autonomous systems", color:"#ff9f43" },
  ];
  const history = [
    ["1943","McCulloch-Pitts Neuron","First mathematical model of a neuron."],
    ["1958","Perceptron","Frank Rosenblatt's first trainable neural network."],
    ["1986","Backpropagation","Rumelhart, Hinton & Williams popularise backprop for multi-layer networks."],
    ["1998","LeNet (CNN)","Yann LeCun's CNN reliably reads handwritten digits."],
    ["2012","AlexNet — The Deep Learning Boom","Wins ImageNet by a huge margin using GPUs. Deep learning goes mainstream."],
    ["2017","'Attention Is All You Need'","Google introduces the Transformer — foundation of all modern LLMs."],
    ["2022+","ChatGPT / LLM Era","Large language models go public. AI becomes accessible to everyone."],
  ];
  return (
    <>
      <div className="nla-lh">
        <div className="nla-lh-inner">
          <div className="nla-breadcrumb"><button onClick={()=>go("home")}>Home</button> / Module 4</div>
          <h2>Types of Neural Networks</h2>
          <p>Different problems need different architectures. Here's the complete map.</p>
        </div>
      </div>
      <div className="nla-body">
        <div className="nla-grid-2" style={{marginBottom:"2rem"}}>
          {nets.map(n=>(
            <div key={n.title} className="nla-card" style={{"--card-accent":n.color, cursor:"default"}}>
              <div className="nla-card-icon">{n.icon}</div>
              <h3>{n.title}</h3>
              <p>{n.desc}</p>
              <div style={{background:"var(--surf2)",borderRadius:"8px",padding:"0.85rem",marginTop:"1rem"}}>
                <div style={{fontSize:"0.72rem",color:n.color,fontFamily:"Space Mono,monospace",marginBottom:"0.25rem"}}>USE WHEN:</div>
                <div style={{fontSize:"0.84rem",color:"var(--muted)"}}>{n.when}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="nla-concept">
          <h3>Brief History of Deep Learning</h3>
          <div className="nla-timeline">
            {history.map(([yr,h,p])=>(
              <div key={yr} className="nla-tl">
                <div className="nla-tl-year">{yr}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="nla-page-nav">
          <button className="btn btn-primary" onClick={()=>go("apps")}>Next: Applications →</button>
          <button className="btn btn-ghost" onClick={()=>go("training")}>← Previous</button>
        </div>
      </div>
    </>
  );
}
