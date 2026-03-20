import { useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Brain-friendly palette:
   • Warm cream background  → easy on eyes, no harsh white
   • Soft sage green        → section headers (calming)
   • Dusty rose             → answer highlights
   • Warm amber             → concept boxes
   • Slate blue             → math / formula accents
   • All at low saturation  → reduces cognitive load
───────────────────────────────────────────────────────────── */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Source+Sans+3:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

.ma-root {
  --bg:       #f7f4ee;
  --bg2:      #efeae0;
  --bg3:      #e8e2d5;
  --surface:  #faf8f4;
  --border:   #ddd8cc;
  --border2:  #c9c3b5;

  --text:     #3a3530;
  --muted:    #7a7468;
  --faint:    #a8a298;

  --sage:     #5c7a6a;
  --sage-bg:  #eaf2ec;
  --sage-bd:  #b8d4bf;

  --amber:    #8a6a2a;
  --amber-bg: #fdf3dc;
  --amber-bd: #e0c882;

  --rose:     #8a4455;
  --rose-bg:  #fdeef1;
  --rose-bd:  #e0b0bc;

  --blue:     #3a5a8a;
  --blue-bg:  #eaf0fa;
  --blue-bd:  #aec4e0;

  --teal:     #2e6e7a;
  --teal-bg:  #e4f4f6;
  --teal-bd:  #a0d0d8;

  --lavender:    #5a4a7a;
  --lavender-bg: #f0edf8;
  --lavender-bd: #c4b8e0;

  background: var(--bg);
  color: var(--text);
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  line-height: 1.75;
  min-height: 100vh;
}

/* ── NAV ── */
.ma-nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(247,244,238,0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  padding: 0 1.5rem;
}
.ma-nav-inner {
  max-width: 1100px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 56px; gap: 1rem;
}
.ma-logo {
  font-family: 'Lora', serif; font-size: 1rem; font-weight: 600;
  color: var(--sage); white-space: nowrap;
}
.ma-nav-tabs {
  display: flex; gap: 2px; flex-wrap: wrap; overflow-x: auto;
}
.ma-nav-tabs button {
  background: none; border: none; cursor: pointer;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.8rem; font-weight: 500;
  color: var(--muted); padding: 0.35rem 0.85rem;
  border-radius: 20px; transition: all 0.18s; white-space: nowrap;
}
.ma-nav-tabs button:hover { background: var(--bg2); color: var(--text); }
.ma-nav-tabs button.active {
  background: var(--sage-bg);
  color: var(--sage); border: 1px solid var(--sage-bd);
}
.ma-ham {
  display: none; flex-direction: column; gap: 4px;
  cursor: pointer; background: none; border: none; padding: 4px;
}
.ma-ham span {
  display: block; width: 20px; height: 2px;
  background: var(--muted); border-radius: 2px;
}
@media(max-width:680px){
  .ma-nav-tabs {
    display: none; position: absolute; top: 56px; left: 0; right: 0;
    background: var(--surface); border-bottom: 1px solid var(--border);
    padding: 0.6rem; flex-direction: column;
  }
  .ma-nav-tabs.open { display: flex; }
  .ma-nav-tabs button { text-align: left; border-radius: 6px; padding: 0.6rem 1rem; }
  .ma-ham { display: flex; }
}

/* ── PAGE ── */
.ma-page {
  max-width: 860px; margin: 0 auto;
  padding: 2.5rem 1.5rem 5rem;
}

/* ── HERO ── */
.ma-hero {
  background: linear-gradient(135deg, var(--sage-bg), var(--blue-bg));
  border: 1px solid var(--sage-bd);
  border-radius: 18px; padding: 2.5rem 2rem;
  margin-bottom: 2.5rem; text-align: center;
}
.ma-hero-tag {
  display: inline-block;
  background: var(--sage); color: #fff;
  font-size: 0.7rem; font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.1em; padding: 0.25rem 0.85rem;
  border-radius: 20px; margin-bottom: 1rem; text-transform: uppercase;
}
.ma-hero h1 {
  font-family: 'Lora', serif; font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 600; line-height: 1.2; margin-bottom: 0.6rem; color: var(--text);
}
.ma-hero p { color: var(--muted); font-size: 0.95rem; max-width: 500px; margin: 0 auto; }
.ma-meta {
  display: flex; gap: 1rem; justify-content: center;
  flex-wrap: wrap; margin-top: 1.5rem;
}
.ma-meta-pill {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 20px; padding: 0.3rem 0.9rem;
  font-size: 0.8rem; color: var(--muted);
}

/* ── SECTION HEADER ── */
.ma-sec-header {
  display: flex; align-items: center; gap: 1rem;
  margin-bottom: 1.75rem; padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--bg3);
}
.ma-sec-num {
  width: 42px; height: 42px; flex-shrink: 0;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-family: 'Lora', serif; font-size: 1.1rem; font-weight: 600;
}
.ma-sec-header h2 { font-family: 'Lora', serif; font-size: 1.5rem; font-weight: 600; }
.ma-sec-header p { font-size: 0.85rem; color: var(--muted); margin-top: 0.1rem; }

/* ── QUESTION BLOCK ── */
.ma-q {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px; overflow: hidden;
  margin-bottom: 1.25rem;
  transition: box-shadow 0.2s;
}
.ma-q:hover { box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
.ma-q-header {
  display: flex; align-items: center; justify-content: space-between;
  gap: 1rem; padding: 1.1rem 1.4rem; cursor: pointer;
  user-select: none;
}
.ma-q-header:hover { background: var(--bg2); }
.ma-q-title {
  display: flex; align-items: center; gap: 0.85rem; flex: 1;
}
.ma-q-badge {
  flex-shrink: 0; font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem; padding: 0.2rem 0.6rem;
  border-radius: 5px; font-weight: 500;
}
.ma-q-text { font-size: 0.93rem; font-weight: 500; color: var(--text); }
.ma-q-pts {
  flex-shrink: 0; font-size: 0.75rem; color: var(--faint);
  font-family: 'JetBrains Mono', monospace;
}
.ma-chevron {
  flex-shrink: 0; width: 20px; height: 20px;
  display: flex; align-items: center; justify-content: center;
  color: var(--faint); transition: transform 0.25s; font-size: 0.75rem;
}
.ma-chevron.open { transform: rotate(180deg); }

.ma-q-body { padding: 0 1.4rem 1.4rem; border-top: 1px solid var(--border); }

/* ── CONTENT ELEMENTS ── */
.ma-concept {
  background: var(--amber-bg); border: 1px solid var(--amber-bd);
  border-radius: 10px; padding: 1rem 1.1rem; margin: 1rem 0;
}
.ma-concept-label {
  font-size: 0.67rem; font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--amber); margin-bottom: 0.4rem;
}
.ma-concept p { font-size: 0.88rem; color: var(--text); line-height: 1.65; }

.ma-answer {
  background: var(--rose-bg); border: 1px solid var(--rose-bd);
  border-left: 4px solid var(--rose);
  border-radius: 0 10px 10px 0; padding: 1rem 1.1rem; margin: 1rem 0;
}
.ma-answer-label {
  font-size: 0.67rem; font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--rose); margin-bottom: 0.5rem;
}
.ma-answer-label.teal { color: var(--teal); }
.ma-answer.teal { background: var(--teal-bg); border-color: var(--teal-bd); border-left-color: var(--teal); }

.ma-formula {
  background: var(--blue-bg); border: 1px solid var(--blue-bd);
  border-radius: 10px; padding: 1rem 1.25rem; margin: 1rem 0;
  font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;
  color: var(--blue); line-height: 2;
  overflow-x: auto;
}

.ma-note {
  background: var(--lavender-bg); border: 1px solid var(--lavender-bd);
  border-radius: 8px; padding: 0.8rem 1rem; margin: 0.75rem 0;
  font-size: 0.85rem; color: var(--lavender);
}

.ma-step {
  display: flex; gap: 0.85rem; align-items: flex-start;
  margin: 0.7rem 0;
}
.ma-step-num {
  flex-shrink: 0; width: 24px; height: 24px;
  background: var(--sage); color: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.72rem; font-weight: 600; margin-top: 0.1rem;
}
.ma-step-body { font-size: 0.9rem; color: var(--text); }
.ma-step-body strong { color: var(--sage); }

.ma-matrix {
  display: inline-flex; align-items: center; gap: 0;
  font-family: 'JetBrains Mono', monospace; font-size: 0.82rem;
  line-height: 1.9; color: var(--blue);
}
.ma-matrix-bracket {
  font-size: 2.8rem; line-height: 1; color: var(--blue-bd);
  font-weight: 200;
}
.ma-matrix-inner { display: flex; flex-direction: column; padding: 0 0.3rem; }
.ma-matrix-row { display: flex; gap: 1.1rem; justify-content: center; }
.ma-matrix-row span { min-width: 2.8rem; text-align: right; }

.ma-grid-2 {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin: 0.9rem 0;
}
@media(max-width:560px){ .ma-grid-2 { grid-template-columns: 1fr; } }

.ma-box {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 8px; padding: 0.9rem 1rem;
}
.ma-box h4 { font-size: 0.82rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem; }
.ma-box p { font-size: 0.82rem; color: var(--muted); }

.ma-inline-code {
  background: var(--bg3); border-radius: 4px;
  font-family: 'JetBrains Mono', monospace; font-size: 0.82em;
  padding: 0.1em 0.4em; color: var(--blue);
}

.ma-check { color: #3a8a5a; font-weight: 600; }
.ma-cross { color: #8a3a3a; font-weight: 600; }

.ma-divider {
  border: none; border-top: 1px dashed var(--border2);
  margin: 1.1rem 0;
}

/* summary table */
.ma-table {
  width: 100%; border-collapse: collapse;
  font-size: 0.85rem; margin: 1.25rem 0;
}
.ma-table th {
  background: var(--sage-bg); color: var(--sage);
  font-weight: 600; padding: 0.6rem 0.9rem;
  border: 1px solid var(--sage-bd); text-align: left;
}
.ma-table td {
  padding: 0.55rem 0.9rem; border: 1px solid var(--border);
  color: var(--text); vertical-align: top;
}
.ma-table tr:nth-child(even) td { background: var(--bg2); }

/* footer */
.ma-footer {
  text-align: center; padding: 2rem 1.5rem;
  border-top: 1px solid var(--border);
  color: var(--faint); font-size: 0.82rem; margin-top: 3rem;
}

/* animations */
@keyframes fadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
.ma-page { animation: fadeIn 0.35s ease; }
`;

/* ─────────────────────────────────────────────────────────────
   SMALL HELPERS
───────────────────────────────────────────────────────────── */
function Code({ children }) {
    return <span className="ma-inline-code">{children}</span>;
}
function Formula({ children }) {
    return <div className="ma-formula">{children}</div>;
}
function Concept({ title, children }) {
    return (
        <div className="ma-concept">
            <div className="ma-concept-label">💡 {title || "Key Concept"}</div>
            <p>{children}</p>
        </div>
    );
}
function Answer({ children, teal }) {
    return (
        <div className={`ma-answer${teal ? " teal" : ""}`}>
            <div className={`ma-answer-label${teal ? " teal" : ""}`}>✓ Answer</div>
            {children}
        </div>
    );
}
function Note({ children }) {
    return <div className="ma-note">📝 {children}</div>;
}
function Step({ n, children }) {
    return (
        <div className="ma-step">
            <div className="ma-step-num">{n}</div>
            <div className="ma-step-body">{children}</div>
        </div>
    );
}
function Matrix({ rows }) {
    return (
        <span className="ma-matrix">
            <span className="ma-matrix-bracket">[</span>
            <span className="ma-matrix-inner">
                {rows.map((row, i) => (
                    <span key={i} className="ma-matrix-row">
                        {row.map((cell, j) => <span key={j}>{cell}</span>)}
                    </span>
                ))}
            </span>
            <span className="ma-matrix-bracket">]</span>
        </span>
    );
}

/* ─────────────────────────────────────────────────────────────
   ACCORDION QUESTION
───────────────────────────────────────────────────────────── */
function Q({ label, pts, text, color, children, defaultOpen }) {
    const [open, setOpen] = useState(!!defaultOpen);
    const colors = {
        sage: { bg: "var(--sage-bg)", color: "var(--sage)", border: "var(--sage-bd)" },
        amber: { bg: "var(--amber-bg)", color: "var(--amber)", border: "var(--amber-bd)" },
        rose: { bg: "var(--rose-bg)", color: "var(--rose)", border: "var(--rose-bd)" },
        blue: { bg: "var(--blue-bg)", color: "var(--blue)", border: "var(--blue-bd)" },
        teal: { bg: "var(--teal-bg)", color: "var(--teal)", border: "var(--teal-bd)" },
        lavender: { bg: "var(--lavender-bg)", color: "var(--lavender)", border: "var(--lavender-bd)" },
    };
    const c = colors[color] || colors.sage;
    return (
        <div className="ma-q">
            <div className="ma-q-header" onClick={() => setOpen(o => !o)}>
                <div className="ma-q-title">
                    <span className="ma-q-badge" style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}>
                        {label}
                    </span>
                    <span className="ma-q-text">{text}</span>
                </div>
                {pts && <span className="ma-q-pts">{pts} pts</span>}
                <span className={`ma-chevron${open ? " open" : ""}`}>▼</span>
            </div>
            {open && <div className="ma-q-body">{children}</div>}
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────────────────────── */
function SecHeader({ num, title, sub, color }) {
    const cols = {
        sage: { bg: "var(--sage)", numBg: "var(--sage-bg)", numC: "var(--sage)" },
        blue: { bg: "var(--blue)", numBg: "var(--blue-bg)", numC: "var(--blue)" },
        amber: { bg: "var(--amber)", numBg: "var(--amber-bg)", numC: "var(--amber)" },
        lavender: { bg: "var(--lavender)", numBg: "var(--lavender-bg)", numC: "var(--lavender)" },
    };
    const c = cols[color] || cols.sage;
    return (
        <div className="ma-sec-header">
            <div className="ma-sec-num" style={{ background: c.numBg, color: c.numC, border: `2px solid currentColor` }}>
                {num}
            </div>
            <div>
                <h2 style={{ color: c.numC }}>{title}</h2>
                {sub && <p>{sub}</p>}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────
   PAGES
───────────────────────────────────────────────────────────── */

function OverviewPage() {
    return (
        <>
            <div className="ma-hero">
                <div className="ma-hero-tag">7COM1033</div>
                <h1>Neural Networks &amp; Machine Learning<br />Formative Assessment — Solutions</h1>
                <p>Essential Mathematics · Semester B 2025 · Step-by-step worked solutions</p>
                <div className="ma-meta">
                    <span className="ma-meta-pill">⏱ 90 minutes</span>
                    <span className="ma-meta-pill">📝 77 marks (+ 2 bonus)</span>
                    <span className="ma-meta-pill">📋 4 questions</span>
                </div>
            </div>

            <table className="ma-table">
                <thead>
                    <tr>
                        <th>Section</th><th>Topic</th><th>Key Skills</th><th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ["Q1", "Vectors & Matrices", "Matrix multiply, dot product, angle between vectors", "18"],
                        ["Q2", "Lines & Hyperplanes", "Gradients, normal vectors, distance, parametric lines", "24 (+2)"],
                        ["Q3", "Differentiation", "Power rule, chain rule, composition vs powers", "22"],
                        ["Q4", "Partial Derivatives", "Gradients, Jacobian, polar coordinates", "14"],
                    ].map(([q, t, k, m]) => (
                        <tr key={q}>
                            <td><strong>{q}</strong></td><td>{t}</td><td>{k}</td><td>{m}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Note>Click any question to expand its full worked solution. Start from Q1 or jump to the section you need using the top navigation.</Note>
        </>
    );
}

function Q1Page() {
    return (
        <>
            <SecHeader num="1" title="Vectors & Matrices" sub="Matrix multiplication, dot products, angles" color="sage" />

            <Q label="1a-i" pts="3" text="Find AB" color="sage" defaultOpen>
                <Concept title="Matrix Multiplication Rule">
                    A is m×n and B is n×p → result AB is m×p. Inner dimensions must match. Each element AB_ij = sum of (row i of A) × (col j of B).
                </Concept>
                <p style={{ fontSize: "0.9rem", color: "var(--muted)", margin: "0.9rem 0 0.4rem" }}>A is 2×2, B is 2×3 → AB is <strong>2×3</strong></p>
                <Formula>
                    {"Row 1, Col 1: (1)(5) + (2)(3)  = 5 + 6  = 11\n"}
                    {"Row 1, Col 2: (1)(0) + (2)(−2) = 0 − 4  = −4\n"}
                    {"Row 1, Col 3: (1)(1) + (2)(0)  = 1 + 0  = 1\n"}
                    {"Row 2, Col 1: (−1)(5) + (4)(3)  = −5 + 12 = 7\n"}
                    {"Row 2, Col 2: (−1)(0) + (4)(−2) = 0 − 8  = −8\n"}
                    {"Row 2, Col 3: (−1)(1) + (4)(0)  = −1 + 0 = −1"}
                </Formula>
                <Answer>
                    <Matrix rows={[["11", "-4", "1"], ["7", "-8", "-1"]]} />
                </Answer>
            </Q>

            <Q label="1a-ii" pts="1" text="Is BA possible? Why?" color="sage">
                <Concept title="Dimension Check">
                    For BA to work: B (2×3) × A (2×2). The inner dimensions must match — B has 3 columns but A has 2 rows. 3 ≠ 2.
                </Concept>
                <Answer>
                    <p style={{ fontSize: "0.9rem" }}><span className="ma-cross">✗ No, BA is NOT possible.</span><br />B is 2×3 and A is 2×2. The inner dimensions (3 columns of B vs 2 rows of A) do not match.</p>
                </Answer>
            </Q>

            <Q label="1b" pts="1" text="What is W₂,₃?" color="amber">
                <Concept title="Matrix Notation W_{row, column}">
                    W_{a, b} means: row a, column b. Always row first, then column.
                </Concept>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: "0.9rem 0 0.4rem" }}>Row 2: (−1, −1, <strong>−1</strong>, −1) → column 3 entry:</p>
                <Answer><Code>W₂,₃ = −1</Code></Answer>
            </Q>

            <Q label="1c" pts="2" text="Which elements of W equal −3?" color="amber">
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: "0.9rem 0" }}>Scanning each row systematically:</p>
                <div className="ma-formula">
                    {"Row 1: (2, 2, −3, 0)     → W₁,₃ = −3  ✓\n"}
                    {"Row 2: (−1,−1,−1,−1)    → none\n"}
                    {"Row 3: (1, 0, 1, 0)      → none\n"}
                    {"Row 4: (0, 1, −1/5, 5)   → none\n"}
                    {"Row 5: (1,−1,−3, 0)     → W₅,₃ = −3  ✓"}
                </div>
                <Answer><Code>W₁,₃ = −3</Code> and <Code>W₅,₃ = −3</Code></Answer>
            </Q>

            <Q label="1d" pts="3" text="Dot product of last two columns of W + angle" color="teal">
                <Concept title="Dot Product">
                    u · v = Σ uᵢvᵢ (multiply element-by-element, then sum all products).
                </Concept>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: "0.9rem 0 0.4rem" }}>Column 3: (−3, −1, 1, −1/5, −3) &nbsp;|&nbsp; Column 4: (0, −1, 0, 5, 0)</p>
                <Formula>
                    {"c₃ · c₄ = (−3)(0) + (−1)(−1) + (1)(0) + (−1/5)(5) + (−3)(0)\n"}
                    {"       =   0    +    1    +   0   +   (−1)   +   0\n"}
                    {"       = 0"}
                </Formula>
                <Answer teal>
                    <p style={{ fontSize: "0.9rem" }}>Dot product = <strong>0</strong><br />The vectors are <strong>orthogonal (perpendicular)</strong>. The angle between them is <strong>90°</strong>. A dot product of zero always indicates orthogonality.</p>
                </Answer>
            </Q>

            <Q label="1e" pts="5" text="Angle between rows 2 and 3 of W" color="teal">
                <Concept title="Angle Formula">
                    cos θ = (u · v) / (|u| × |v|)   →   θ = arccos(u·v / |u||v|)
                </Concept>
                <Step n="1"><strong>Vectors:</strong> r₂ = (−1, −1, −1, −1) &nbsp;|&nbsp; r₃ = (1, 0, 1, 0)</Step>
                <Step n="2">
                    <strong>Dot product:</strong>
                    <Formula>r₂ · r₃ = (−1)(1) + (−1)(0) + (−1)(1) + (−1)(0) = −1 + 0 − 1 + 0 = −2</Formula>
                </Step>
                <Step n="3">
                    <strong>Magnitudes:</strong>
                    <Formula>
                        {"|r₂| = √(1² + 1² + 1² + 1²) = √4 = 2\n"}
                        {"|r₃| = √(1² + 0² + 1² + 0²) = √2"}
                    </Formula>
                </Step>
                <Step n="4">
                    <strong>Compute cosine:</strong>
                    <Formula>cos θ = −2 / (2 × √2) = −1/√2</Formula>
                </Step>
                <Answer teal>θ = arccos(−1/√2) = <strong>135°</strong></Answer>
            </Q>

            <Q label="1f" pts="3" text="Compute yₐ = Σ Wₐᵦ xᵦ where x = (1,−1,0,1)ᵀ" color="sage">
                <Concept title="Matrix-Vector Product">
                    y = Wx means: each output element yₐ is the dot product of row a of W with x.
                </Concept>
                <Formula>
                    {"Row 1: (2)(1) + (2)(−1) + (−3)(0) + (0)(1)     = 2 − 2 + 0 + 0 = 0\n"}
                    {"Row 2: (−1)(1)+(−1)(−1)+(−1)(0)+(−1)(1)        = −1+1+0−1     = −1\n"}
                    {"Row 3: (1)(1) + (0)(−1) + (1)(0) + (0)(1)       = 1             = 1\n"}
                    {"Row 4: (0)(1) + (1)(−1) + (−1/5)(0) + (5)(1)   = 0−1+0+5      = 4\n"}
                    {"Row 5: (1)(1) + (−1)(−1) + (−3)(0) + (0)(1)    = 1+1+0+0      = 2"}
                </Formula>
                <Answer>
                    <Matrix rows={[["0"], ["-1"], ["1"], ["4"], ["2"]]} />
                    <p style={{ fontSize: "0.88rem", marginTop: "0.6rem", color: "var(--muted)" }}>5 coordinates — it is a <strong>column vector</strong> (5×1)</p>
                </Answer>
            </Q>
        </>
    );
}

function Q2Page() {
    return (
        <>
            <SecHeader num="2" title="Lines & Hyperplanes" sub="Gradients, normal vectors, distances, parametric equations" color="blue" />

            <Q label="2a" pts="2" text="y-intercept and gradient of y = 5x − 17" color="blue" defaultOpen>
                <Concept title="Standard Line Form: y = mx + c">
                    m = gradient (slope), c = y-intercept (value where line crosses y-axis)
                </Concept>
                <Answer><p style={{ fontSize: "0.9rem" }}>Gradient = <strong>5</strong> &nbsp;|&nbsp; y-intercept = <strong>−17</strong></p></Answer>
            </Q>

            <Q label="2b" pts="2" text="Line through (0,3) and (4,0)" color="blue">
                <Step n="1"><strong>Gradient:</strong> m = (0−3)/(4−0) = −3/4</Step>
                <Step n="2"><strong>y-intercept:</strong> point (0,3) directly gives c = 3</Step>
                <Answer><Formula>y = −(3/4)x + 3</Formula></Answer>
            </Q>

            <Q label="2c" pts="2" text="General line through (x₁,y₁) and (x₂,y₂)" color="blue">
                <Concept title="Two-Point Form">First compute gradient, then substitute one point to find the full equation.</Concept>
                <Answer>
                    <Formula>
                        {"m = (y₂ − y₁) / (x₂ − x₁)\n\n"}
                        {"y − y₁ = [(y₂ − y₁)/(x₂ − x₁)] · (x − x₁)"}
                    </Formula>
                </Answer>
            </Q>

            <Q label="2d" pts="2" text="Normal vector to y = 5x − 17 as a hyperplane in ℝ²" color="teal">
                <Concept title="Normal Vector of a Hyperplane">
                    Rewrite as ax + by = c. The normal vector is n = (a, b) — the coefficients of the variables.
                </Concept>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: "0.9rem 0 0.4rem" }}>Rewrite: <Code>5x − y − 17 = 0</Code> → coefficients are (5, −1)</p>
                <Answer teal>
                    <p style={{ fontSize: "0.9rem" }}>n = (5, −1)</p>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.4rem" }}><span className="ma-cross">Not unique</span> — any scalar multiple λ(5,−1) is also a valid normal. Only the <em>direction</em> is unique.</p>
                </Answer>
            </Q>

            <Q label="2e" pts="2" text="Normal vector of y = 5x − 17 as hyperplane in ℝ³" color="teal">
                <Concept title="Hyperplane in Higher Dimensions">
                    In ℝ³ the equation y = 5x − 17 means 5x − y + 0·z = 17. The z coefficient is 0.
                </Concept>
                <Answer teal>n = (5, −1, 0)</Answer>
            </Q>

            <Q label="2f" pts="2" text="BONUS: Two linearly independent vectors on the plane in ℝ³" color="amber">
                <Concept title="Vectors ON a plane are perpendicular to the normal">
                    Any vector v lying on the plane must satisfy n · v = 0, i.e. 5a − b + 0·c = 0.
                </Concept>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: "0.9rem 0 0.4rem" }}>Need 5a − b = 0 for each vector:</p>
                <Formula>
                    {"v₁ = (1, 5, 0)   check: 5(1) − 5 = 0  ✓\n"}
                    {"v₂ = (0, 0, 1)   check: 5(0) − 0 = 0  ✓\n\n"}
                    {"v₁ and v₂ are not scalar multiples → linearly independent ✓"}
                </Formula>
                <Answer>v₁ = (1, 5, 0) and v₂ = (0, 0, 1)</Answer>
            </Q>

            <Q label="2g" pts="2" text="Normal vector in ℝ⁵: 2x₁+4x₂−x₃+7x₄+x₅−10=0" color="blue">
                <Concept title="Read off the coefficients directly">
                    For a hyperplane a₁x₁ + a₂x₂ + ... + aₙxₙ = c, the normal vector is n = (a₁, a₂, ..., aₙ).
                </Concept>
                <Answer><Formula>n = (2, 4, −1, 7, 1)</Formula></Answer>
            </Q>

            <Q label="2h" pts="2" text="Which of E=(−1,−1,−10,1,−1) or F=(0,0,0,0,0) lies on the hyperplane?" color="blue">
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: "0.9rem 0 0.4rem" }}>Equation: 2x₁ + 4x₂ − x₃ + 7x₄ + x₅ = 10</p>
                <Step n="1">
                    <strong>Test E = (−1,−1,−10,1,−1):</strong>
                    <Formula>2(−1) + 4(−1) − (−10) + 7(1) + (−1) = −2 − 4 + 10 + 7 − 1 = 10  ✓</Formula>
                </Step>
                <Step n="2">
                    <strong>Test F = (0,0,0,0,0):</strong>
                    <Formula>2(0) + 4(0) − 0 + 7(0) + 0 = 0 ≠ 10  ✗</Formula>
                </Step>
                <Answer><span className="ma-check">E lies on the hyperplane.</span> F does not (gives 0, not 10).</Answer>
            </Q>

            <Q label="2i" pts="3" text="Distance between C=(2,4,9) and D=(0,1,3) in ℝ³" color="sage">
                <Concept title="Euclidean Distance in ℝⁿ">
                    d = √( (x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)² )
                </Concept>
                <Formula>
                    {"d = √( (0−2)² + (1−4)² + (3−9)² )\n"}
                    {"  = √( 4 + 9 + 36 )\n"}
                    {"  = √49 = 7"}
                </Formula>
                <Answer>d = <strong>7</strong></Answer>
            </Q>

            <Q label="2j" pts="4" text="Parametric line through C and D" color="sage">
                <Concept title="Parametric Line: x = λv + d">
                    v is the direction vector (difference between two points). d is any point on the line. λ ∈ ℝ sweeps the whole line.
                </Concept>
                <Step n="1">
                    <strong>Direction vector</strong> (D − C):
                    <Formula>v = (0−2, 1−4, 3−9) = (−2, −3, −6)</Formula>
                </Step>
                <Step n="2"><strong>Use point D as starting point d = (0,1,3)</strong></Step>
                <Answer>
                    <Formula>
                        {"x = λ(−2, −3, −6) + (0, 1, 3),   λ ∈ ℝ\n\n"}
                        {"Check: λ=0  → (0,1,3) = D  ✓\n"}
                        {"       λ=−1 → (2,4,9)  = C  ✓"}
                    </Formula>
                </Answer>
            </Q>
        </>
    );
}

function Q3Page() {
    return (
        <>
            <SecHeader num="3" title="Differentiation" sub="Power rule, chain rule, function composition" color="amber" />

            <div className="ma-concept" style={{ marginBottom: "1.5rem" }}>
                <div className="ma-concept-label">📐 Key Rules Reference</div>
                <div className="ma-grid-2" style={{ marginTop: "0.5rem" }}>
                    {[
                        ["Power rule", "d/dx xⁿ = n·xⁿ⁻¹"],
                        ["Chain rule", "d/dx f(g(x)) = f′(g(x))·g′(x)"],
                        ["Exponential", "d/dx eˣ = eˣ"],
                        ["Natural log", "d/dx ln(x) = 1/x"],
                        ["Sine", "d/dx sin(x) = cos(x)"],
                        ["Cosine", "d/dx cos(x) = −sin(x)"],
                    ].map(([r, f]) => (
                        <div key={r} className="ma-box"><h4>{r}</h4><p><Code>{f}</Code></p></div>
                    ))}
                </div>
            </div>

            <Q label="3a" pts="2" text="Differentiate y = 2x⁷" color="amber" defaultOpen>
                <Concept title="Power Rule">Bring the exponent down, reduce power by 1: d/dx axⁿ = a·n·xⁿ⁻¹</Concept>
                <Formula>dy/dx = 2 × 7 × x⁶ = 14x⁶</Formula>
                <Answer>dy/dx = <strong>14x⁶</strong></Answer>
            </Q>

            <Q label="3b" pts="2" text="Differentiate y = (5x+1)³ + eˣ" color="amber">
                <Step n="1"><strong>Chain rule on (5x+1)³:</strong> outer = 3(5x+1)², inner derivative = 5</Step>
                <Step n="2"><strong>d/dx eˣ = eˣ</strong></Step>
                <Formula>dy/dx = 3(5x+1)² · 5 + eˣ = 15(5x+1)² + eˣ</Formula>
                <Answer>dy/dx = <strong>15(5x+1)² + eˣ</strong></Answer>
            </Q>

            <Q label="3c" pts="2" text="Differentiate y = 1/x − 2ln(x)" color="amber">
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: "0.9rem 0 0.4rem" }}>Rewrite: y = x⁻¹ − 2ln(x)</p>
                <Formula>
                    {"d/dx x⁻¹  = −1·x⁻² = −1/x²\n"}
                    {"d/dx 2ln(x) = 2/x\n\n"}
                    {"dy/dx = −1/x² − 2/x"}
                </Formula>
                <Answer>dy/dx = <strong>−1/x² − 2/x</strong></Answer>
            </Q>

            <Q label="3d" pts="2" text="Differentiate y = √(2x²−5x+8)" color="amber">
                <Concept title="Chain Rule on Square Root">
                    Write as (2x²−5x+8)^(1/2). Outer: (1/2)(...)^(−1/2). Inner: d/dx(2x²−5x+8) = 4x−5.
                </Concept>
                <Formula>
                    {"dy/dx = (1/2)(2x²−5x+8)^(−1/2) · (4x−5)\n\n"}
                    {"      = (4x−5) / [2√(2x²−5x+8)]"}
                </Formula>
                <Answer>dy/dx = <strong>(4x−5) / [2√(2x²−5x+8)]</strong></Answer>
            </Q>

            <Q label="3e" pts="2" text="g(x)=sin(x), h(x)=4x — find g∘h and h∘g" color="rose">
                <Concept title="Function Composition">
                    g∘h means: apply h first, then g. So g∘h(x) = g(h(x)).
                    h∘g means: apply g first, then h. So h∘g(x) = h(g(x)).
                </Concept>
                <Formula>
                    {"g∘h(x) = g(h(x)) = g(4x)    = sin(4x)\n\n"}
                    {"h∘g(x) = h(g(x)) = h(sin x) = 4sin(x)"}
                </Formula>
                <Answer>
                    <p style={{ fontSize: "0.9rem" }}>g∘h(x) = <strong>sin(4x)</strong> &nbsp;|&nbsp; h∘g(x) = <strong>4sin(x)</strong></p>
                </Answer>
                <Note>These are different functions! Composition is generally NOT commutative: g∘h ≠ h∘g</Note>
            </Q>

            <Q label="3f" pts="4" text="State the chain rule. Find (g∘h)′(x) and (h∘g)′(x)" color="rose">
                <div className="ma-concept">
                    <div className="ma-concept-label">📐 Chain Rule (formal statement)</div>
                    <p>If F(x) = f(g(x)), then F′(x) = f′(g(x)) · g′(x)<br />
                        <em>"Derivative of the outer function (evaluated at the inner) times derivative of the inner function."</em></p>
                </div>
                <hr className="ma-divider" />
                <Step n="1">
                    <strong>(g∘h)′(x)</strong> — differentiate sin(4x):
                    <Formula>d/dx sin(4x) = cos(4x) · 4 = 4cos(4x)</Formula>
                </Step>
                <Step n="2">
                    <strong>(h∘g)′(x)</strong> — differentiate 4sin(x):
                    <Formula>d/dx 4sin(x) = 4cos(x)</Formula>
                </Step>
                <Answer>
                    <p style={{ fontSize: "0.9rem" }}>(g∘h)′(x) = <strong>4cos(4x)</strong> &nbsp;|&nbsp; (h∘g)′(x) = <strong>4cos(x)</strong></p>
                </Answer>
            </Q>

            <Q label="3g" pts="4" text="For f(x)=x¹⁰, find f∘f∘f(x). Is it the same as [f(x)]³?" color="lavender">
                <Concept title="Composition vs Power — a critical distinction!">
                    f∘f∘f applies f three times (exponents MULTIPLY).
                    [f(x)]³ cubes the output (exponent multiplies by 3).
                </Concept>
                <Step n="1">f(x) = x¹⁰</Step>
                <Step n="2">f∘f(x) = f(x¹⁰) = (x¹⁰)¹⁰ = x¹⁰⁰</Step>
                <Step n="3">f∘f∘f(x) = f(x¹⁰⁰) = (x¹⁰⁰)¹⁰ = x¹⁰⁰⁰</Step>
                <hr className="ma-divider" />
                <Step n="4">[f(x)]³ = (x¹⁰)³ = x³⁰</Step>
                <Answer>
                    <p style={{ fontSize: "0.9rem" }}>f∘f∘f(x) = <strong>x¹⁰⁰⁰</strong> &nbsp;&nbsp; [f(x)]³ = <strong>x³⁰</strong></p>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.4rem" }}><span className="ma-cross">NOT the same.</span> Composition multiplies exponents (10×10×10=1000). Cubing multiplies by 3 (10×3=30).</p>
                </Answer>
            </Q>

            <Q label="3h" pts="4" text="Find derivatives of f∘f∘f(x) and [f(x)]³" color="lavender">
                <Step n="1">
                    <strong>d/dx x¹⁰⁰⁰</strong> — power rule:
                    <Formula>d/dx x¹⁰⁰⁰ = 1000x⁹⁹⁹</Formula>
                </Step>
                <Step n="2">
                    <strong>d/dx x³⁰</strong> — power rule:
                    <Formula>d/dx x³⁰ = 30x²⁹</Formula>
                </Step>
                <Answer>
                    <p style={{ fontSize: "0.9rem" }}>(f∘f∘f)′(x) = <strong>1000x⁹⁹⁹</strong> &nbsp;|&nbsp; d/dx [f(x)]³ = <strong>30x²⁹</strong></p>
                </Answer>
            </Q>
        </>
    );
}

function Q4Page() {
    return (
        <>
            <SecHeader num="4" title="Partial Derivatives" sub="Gradient vectors, Jacobians, polar coordinates" color="lavender" />

            <div className="ma-concept" style={{ marginBottom: "1.5rem" }}>
                <div className="ma-concept-label">💡 Partial Derivative Rule</div>
                <p>∂f/∂x means: differentiate f with respect to x while treating ALL other variables as constants.</p>
            </div>

            <Q label="4a" pts="4" text="Compute ∇f for f(x,y,z) = xyz + 5sin(xy) + ln(3z)" color="lavender" defaultOpen>
                <Step n="1">
                    <strong>∂f/∂x</strong> (treat y,z as constants):
                    <Formula>
                        {"∂/∂x [xyz]    = yz      (z and y are constants)\n"}
                        {"∂/∂x [5sin(xy)] = 5cos(xy)·y  (chain rule, y is const)\n"}
                        {"∂/∂x [ln(3z)] = 0       (no x in this term)\n\n"}
                        {"∂f/∂x = yz + 5y·cos(xy)"}
                    </Formula>
                </Step>
                <Step n="2">
                    <strong>∂f/∂y</strong> (treat x,z as constants):
                    <Formula>
                        {"∂/∂y [xyz]    = xz\n"}
                        {"∂/∂y [5sin(xy)] = 5cos(xy)·x\n"}
                        {"∂/∂y [ln(3z)] = 0\n\n"}
                        {"∂f/∂y = xz + 5x·cos(xy)"}
                    </Formula>
                </Step>
                <Step n="3">
                    <strong>∂f/∂z</strong> (treat x,y as constants):
                    <Formula>
                        {"∂/∂z [xyz]    = xy\n"}
                        {"∂/∂z [5sin(xy)] = 0   (no z)\n"}
                        {"∂/∂z [ln(3z)] = (1/3z)·3 = 1/z\n\n"}
                        {"∂f/∂z = xy + 1/z"}
                    </Formula>
                </Step>
                <Answer>
                    <p style={{ fontSize: "0.88rem", marginBottom: "0.5rem", color: "var(--muted)" }}>Gradient vector ∇f:</p>
                    <Matrix rows={[["yz + 5y·cos(xy)"], ["xz + 5x·cos(xy)"], ["xy + 1/z"]]} />
                </Answer>
            </Q>

            <Q label="4b" pts="4" text="Partial derivatives of x=rcosθ, y=rsinθ — write the Jacobian" color="teal">
                <Concept title="Jacobian Matrix">
                    The Jacobian ∂(x,y)/∂(r,θ) collects all partial derivatives into a matrix. Row i = output variable, Column j = input variable.
                </Concept>
                <Formula>
                    {"∂x/∂r = cos θ        ∂x/∂θ = −r·sin θ\n"}
                    {"∂y/∂r = sin θ        ∂y/∂θ =  r·cos θ"}
                </Formula>
                <Answer teal>
                    <p style={{ fontSize: "0.88rem", marginBottom: "0.6rem", color: "var(--muted)" }}>Jacobian J = ∂(x,y)/∂(r,θ):</p>
                    <Matrix rows={[["cos θ", "−r·sin θ"], ["sin θ", "r·cos θ"]]} />
                </Answer>
            </Q>

            <Q label="4c" pts="2" text="Determinant of the Jacobian" color="teal">
                <Concept title="2×2 Determinant">det[[a,b],[c,d]] = ad − bc</Concept>
                <Formula>
                    {"det(J) = (cos θ)(r·cos θ) − (−r·sin θ)(sin θ)\n"}
                    {"       = r·cos²θ + r·sin²θ\n"}
                    {"       = r(cos²θ + sin²θ)\n"}
                    {"       = r × 1 = r"}
                </Formula>
                <Answer teal>
                    <p style={{ fontSize: "0.9rem" }}>det(J) = <strong>r</strong></p>
                    <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: "0.35rem" }}>This is why area elements in polar integration become <Code>r·dr·dθ</Code> — the Jacobian determinant scales area correctly.</p>
                </Answer>
            </Q>

            <Q label="4d" pts="4" text="Express r and θ in terms of x and y (inverse transformation)" color="lavender">
                <Step n="1">
                    <strong>Find r</strong> — square both equations and add:
                    <Formula>
                        {"x² + y² = (r·cosθ)² + (r·sinθ)²\n"}
                        {"        = r²cos²θ + r²sin²θ\n"}
                        {"        = r²(cos²θ + sin²θ) = r²\n\n"}
                        {"→  r = √(x² + y²)"}
                    </Formula>
                </Step>
                <Step n="2">
                    <strong>Find θ</strong> — divide y by x:
                    <Formula>
                        {"y/x = r·sinθ / r·cosθ = tanθ\n\n"}
                        {"→  θ = arctan(y/x)"}
                    </Formula>
                </Step>
                <Answer>
                    <Formula>
                        {"r = √(x² + y²)\n\n"}
                        {"θ = arctan(y/x)"}
                    </Formula>
                    <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: "0.35rem" }}>In practice use <Code>atan2(y, x)</Code> to correctly determine the quadrant of θ.</p>
                </Answer>
            </Q>
        </>
    );
}

function SummaryPage() {
    return (
        <>
            <SecHeader num="★" title="Summary & Key Formulas" sub="Quick reference for all topics" color="sage" />

            <table className="ma-table">
                <thead>
                    <tr><th>Q</th><th>Topic</th><th>Key Formula / Concept</th></tr>
                </thead>
                <tbody>
                    {[
                        ["1a", "Matrix Multiplication", "AB_ij = Σ A_ik · B_kj   (dimensions: m×n · n×p → m×p)"],
                        ["1d", "Dot Product = 0", "Vectors are orthogonal (perpendicular), angle = 90°"],
                        ["1e", "Angle Between Vectors", "cos θ = (u·v) / (|u|·|v|)"],
                        ["2d", "Normal Vector (ℝ²)", "ax + by = c  →  n = (a, b)"],
                        ["2i", "Distance in ℝ³", "d = √((Δx)² + (Δy)² + (Δz)²)"],
                        ["2j", "Parametric Line", "x = λv + d,  λ ∈ ℝ"],
                        ["3b,d", "Chain Rule", "d/dx f(g(x)) = f′(g(x)) · g′(x)"],
                        ["3g", "Composition vs Power", "f∘f∘f(x) ≠ [f(x)]³  (exponents multiply vs ×3)"],
                        ["4a", "Gradient ∇f", "Vector of all partial derivatives (∂f/∂x, ∂f/∂y, ∂f/∂z)"],
                        ["4b", "Jacobian", "Matrix of all ∂(output)/∂(input) partial derivatives"],
                        ["4c", "det Jacobian (polar)", "det(J) = r   (scales area in polar integration)"],
                        ["4d", "Polar ↔ Cartesian", "r = √(x²+y²),   θ = arctan(y/x)"],
                    ].map(([q, t, f]) => (
                        <tr key={q}>
                            <td><strong>{q}</strong></td><td>{t}</td>
                            <td><code style={{ fontSize: "0.8rem", fontFamily: "'JetBrains Mono',monospace", color: "var(--blue)" }}>{f}</code></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="ma-concept" style={{ marginTop: "1.5rem" }}>
                <div className="ma-concept-label">🎯 Top Tips for the Exam</div>
                <p>
                    1. Always check matrix dimensions before multiplying (inner dimensions must match).<br />
                    2. For hyperplane normal vectors — just read off the variable coefficients.<br />
                    3. Chain rule: outer′(inner) × inner′ — say it out loud as you work.<br />
                    4. Partial derivatives: cover up all other variables mentally and differentiate just the one you need.<br />
                    5. f∘f∘f ≠ [f]³ — composition multiplies exponents, powers multiply by n.
                </p>
            </div>
        </>
    );
}

/* ─────────────────────────────────────────────────────────────
   ROOT APP
───────────────────────────────────────────────────────────── */
export default function MathAnswers() {
    const [page, setPage] = useState("overview");
    const [menuOpen, setMenuOpen] = useState(false);

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "q1", label: "Q1 · Vectors" },
        { id: "q2", label: "Q2 · Lines" },
        { id: "q3", label: "Q3 · Differentiation" },
        { id: "q4", label: "Q4 · Partial Derivatives" },
        { id: "summary", label: "★ Summary" },
    ];

    function go(p) { setPage(p); setMenuOpen(false); window.scrollTo(0, 0); }

    return (
        <div className="ma-root">
            <style>{CSS}</style>

            <nav className="ma-nav">
                <div className="ma-nav-inner">
                    <div className="ma-logo">7COM1033 · Solutions</div>
                    <button className="ma-ham" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
                        <span /><span /><span />
                    </button>
                    <div className={`ma-nav-tabs${menuOpen ? " open" : ""}`}>
                        {tabs.map(t => (
                            <button key={t.id} className={page === t.id ? "active" : ""} onClick={() => go(t.id)}>
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            <div className="ma-page">
                {page === "overview" && <OverviewPage />}
                {page === "q1" && <Q1Page />}
                {page === "q2" && <Q2Page />}
                {page === "q3" && <Q3Page />}
                {page === "q4" && <Q4Page />}
                {page === "summary" && <SummaryPage />}

                <footer className="ma-footer">
                    7COM1033 Neural Networks &amp; Machine Learning · Formative Assessment · Semester B 2025
                </footer>
            </div>
        </div>
    );
}