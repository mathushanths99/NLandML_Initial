export default function NetworkSVG() {
  return (
    <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g stroke="rgba(0,245,160,0.12)" strokeWidth="1.2" fill="none">
        {[[80,70,240,60],[80,70,240,120],[80,70,240,180],[80,130,240,60],[80,130,240,120],[80,130,240,180],[80,190,240,60],[80,190,240,120],[80,190,240,180],[80,250,240,60],[80,250,240,120],[80,250,240,180],[250,60,410,90],[250,60,410,170],[250,120,410,90],[250,120,410,170],[250,180,410,90],[250,180,410,170],[430,90,600,80],[430,90,600,130],[430,90,600,180],[430,170,600,80],[430,170,600,130],[430,170,600,180]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>
        ))}
      </g>
      <g stroke="rgba(0,245,160,0.65)" strokeWidth="2" fill="none">
        <line x1="80" y1="130" x2="240" y2="120"/>
        <line x1="250" y1="120" x2="410" y2="170"/>
        <line x1="430" y1="170" x2="600" y2="130"/>
      </g>
      <g fill="#0f1624" filter="url(#glow)">
        {[70,130,190,250].map(cy=>(
          <circle key={cy} cx="80" cy={cy} r="18" stroke="#00f5a0" strokeWidth={cy===130?2.5:1.5}/>
        ))}
      </g>
      {[["x1",70],["x2",130],["x3",190],["x4",250]].map(([lbl,cy])=>(
        <text key={cy} x="80" y={cy+5} textAnchor="middle" fill="#00f5a0" fontSize="11" fontFamily="Space Mono">{lbl}</text>
      ))}
      <g fill="#0f1624">
        {[60,120,180].map(cy=><circle key={cy} cx="250" cy={cy} r="18" stroke="#6c5ce7" strokeWidth={cy===120?2.5:1.5}/>)}
        {[90,170].map(cy=><circle key={cy} cx="430" cy={cy} r="18" stroke="#6c5ce7" strokeWidth={cy===170?2.5:1.5}/>)}
      </g>
      <g fill="#0f1624">
        {[80,130,180].map(cy=><circle key={cy} cx="610" cy={cy} r="18" stroke="#fdc93a" strokeWidth={cy===130?3:1}/>)}
      </g>
      <text x="80" y="28" textAnchor="middle" fill="#6a7590" fontSize="11" fontFamily="DM Sans">Input</text>
      <text x="250" y="28" textAnchor="middle" fill="#6a7590" fontSize="11" fontFamily="DM Sans">Hidden</text>
      <text x="430" y="28" textAnchor="middle" fill="#6a7590" fontSize="11" fontFamily="DM Sans">Hidden</text>
      <text x="610" y="28" textAnchor="middle" fill="#6a7590" fontSize="11" fontFamily="DM Sans">Output</text>
    </svg>
  );
}
