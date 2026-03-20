import { useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   7COM1033 — Formative Assessment Solutions
   Brain-friendly warm palette · Full step-by-step answers
═══════════════════════════════════════════════════════════════ */

import "./Home.css";
/* ═══════════════════════════════════════════════════════════════
   PRIMITIVE COMPONENTS
═══════════════════════════════════════════════════════════════ */
const IC = ({ c }) => <span className="ic">{c}</span>;

const Fbox = ({ children }) => <div className="fbox">{children}</div>;

const Cbox = ({ label, children }) => (
    <div className="cbox">
        <div className="cbox-lbl">{label || "Key Concept"}</div>
        {typeof children === "string" ? <p>{children}</p> : children}
    </div>
);

const Abox = ({ children }) => (
    <div className="abox">
        <div className="abox-lbl">Final Answer</div>
        {children}
    </div>
);

const NoteBox = ({ children }) => <div className="note-box">Note: {children}</div>;

const QText = ({ children }) => <div className="q-text-box">{children}</div>;

const Steps = ({ children }) => <div className="steps">{children}</div>;

const Step = ({ n, children }) => (
    <div className="step">
        <div className="step-n">{n}</div>
        <div className="step-b">{children}</div>
    </div>
);

const Mx = ({ rows }) => (
    <span className="mx-wrap">
        <span className="mx-brk">[</span>
        <span className="mx-inner">
            {rows.map((r, i) => (
                <span key={i} className="mx-row">
                    {r.map((cell, j) => <span key={j}>{cell}</span>)}
                </span>
            ))}
        </span>
        <span className="mx-brk">]</span>
    </span>
);

/* ═══════════════════════════════════════════════════════════════
   QUESTION ACCORDION
   Each Q has its OWN useState - completely independent
═══════════════════════════════════════════════════════════════ */
function Q({ id, pts, title, sub, color, children }) {
    const [open, setOpen] = useState(true);

    const PAL = {
        sage: { bg: "var(--sage-l)", c: "var(--sage)", bd: "var(--sage-b)" },
        amber: { bg: "var(--amber-l)", c: "var(--amber)", bd: "var(--amber-b)" },
        blue: { bg: "var(--blue-l)", c: "var(--blue)", bd: "var(--blue-b)" },
        teal: { bg: "var(--teal-l)", c: "var(--teal)", bd: "var(--teal-b)" },
        plum: { bg: "var(--plum-l)", c: "var(--plum)", bd: "var(--plum-b)" },
        rose: { bg: "var(--rose-l)", c: "var(--rose)", bd: "var(--rose-b)" },
    };
    const p = PAL[color] || PAL.sage;

    return (
        <div className="qa">
            <div className="qa-hd" onClick={() => setOpen(o => !o)}>
                <span className="qa-badge" style={{ background: p.bg, color: p.c, border: `1px solid ${p.bd}` }}>
                    {id}
                </span>
                <div className="qa-right">
                    <span className="qa-title">{title}</span>
                    {sub && <span className="qa-sub">{sub}</span>}
                </div>
                <div className="qa-meta">
                    {pts && <span className="qa-pts">[{pts} pts]</span>}
                    <span className={`qa-arrow${open ? " open" : ""}`}>▼</span>
                </div>
            </div>
            {open && <div className="qa-body">{children}</div>}
        </div>
    );
}

/* Section header */
function SH({ n, title, sub, color }) {
    const COLS = {
        sage: "var(--sage)",
        blue: "var(--blue)",
        amber: "var(--amber)",
        plum: "var(--plum)",
    };
    const c = COLS[color] || COLS.sage;
    return (
        <div className="sh">
            <div className="sh-num" style={{ color: c }}>{n}</div>
            <div>
                <h2 style={{ color: c }}>{title}</h2>
                {sub && <p>{sub}</p>}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════
   OVERVIEW
═══════════════════════════════════════════════════════════════ */
function OverviewPage() {
    return (
        <>
            <div className="hero">
                <div className="hero-tag">7COM1033 Neural Networks &amp; ML</div>
                <h1>Formative Assessment — Full Solutions</h1>
                <p>Essential Mathematics · Semester B 2025 · Complete step-by-step worked answers</p>
                <div className="pills">
                    <span className="pill">90 minutes</span>
                    <span className="pill">77 marks + 2 bonus</span>
                    <span className="pill">4 sections</span>
                    <span className="pill">Full working shown</span>
                </div>
            </div>
            <Cbox label="How to use this guide">
                <ul>
                    <li>Click any question bar to expand or collapse it</li>
                    <li>Each answer shows: <strong>full question text</strong> → <strong>key concept</strong> → <strong>numbered steps</strong> → <strong>final answer</strong></li>
                    <li>Use the navigation tabs at the top to jump between sections</li>
                    <li>The <strong>Summary tab</strong> has a quick-reference formula sheet for revision</li>
                </ul>
            </Cbox>
            <table className="stbl">
                <thead>
                    <tr><th>Section</th><th>Topic</th><th>Key Skills</th><th>Marks</th></tr>
                </thead>
                <tbody>
                    {[
                        ["Q1", "Vectors & Matrices", "Matrix multiply, dot product, angle between vectors", "18"],
                        ["Q2", "Lines & Hyperplanes", "Gradients, normal vectors, distance, parametric lines", "24 (+2 bonus)"],
                        ["Q3", "Differentiation", "Power rule, chain rule, function composition", "22"],
                        ["Q4", "Partial Derivatives", "Gradient vector, Jacobian, polar coordinates", "14"],
                    ].map(([q, t, k, m]) => (
                        <tr key={q}><td><strong>{q}</strong></td><td>{t}</td><td>{k}</td><td>{m}</td></tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

/* ═══════════════════════════════════════════════════════════════
   Q1 — VECTORS & MATRICES
═══════════════════════════════════════════════════════════════ */
function Q1Page() {
    return (
        <>
            <SH n="1" title="Vectors & Matrices" sub="Matrix multiplication · dot products · angles between vectors" color="sage" />

            <Q id="1(a)(i)" pts="3" color="sage"
                title="Find AB"
                sub="A = [[1,2],[−1,4]]   B = [[5,0,1],[3,−2,0]]">
                <QText>
                    Given A (2×2) and B (2×3), compute the matrix product AB.
                </QText>
                <Cbox label="Matrix Multiplication Rule">
                    <p>A (m×n) times B (n×p) gives a result of size (m×p). The <strong>inner dimensions must match</strong>.</p>
                    <p style={{ marginTop: "0.3rem" }}>Each entry: AB<sub>ij</sub> = (row i of A) · (col j of B) = sum of pairwise products.</p>
                </Cbox>
                <p style={{ fontSize: "0.87rem", color: "var(--muted)", margin: "0.8rem 0 0.3rem" }}>
                    A is 2×<strong>2</strong>, B is <strong>2</strong>×3 → inner dimension = 2 ✓ → result is <strong>2×3</strong>
                </p>
                <Steps>
                    <Step n="1"><strong>Row 1 of A = (1, 2)</strong> dot each column of B:</Step>
                </Steps>
                <Fbox>
                    {`Row 1, Col 1: (1)(5) + (2)(3)  =  5 + 6  =  11
Row 1, Col 2: (1)(0) + (2)(−2) =  0 − 4  =  −4
Row 1, Col 3: (1)(1) + (2)(0)  =  1 + 0  =   1`}
                </Fbox>
                <Steps>
                    <Step n="2"><strong>Row 2 of A = (−1, 4)</strong> dot each column of B:</Step>
                </Steps>
                <Fbox>
                    {`Row 2, Col 1: (−1)(5)  + (4)(3)  = −5 + 12 =   7
Row 2, Col 2: (−1)(0)  + (4)(−2) =  0 −  8  =  −8
Row 2, Col 3: (−1)(1)  + (4)(0)  = −1 +  0  =  −1`}
                </Fbox>
                <Abox>
                    <div>AB = <Mx rows={[["11", "−4", "1"], ["7", "−8", "−1"]]} /></div>
                </Abox>
            </Q>

            <Q id="1(a)(ii)" pts="1" color="sage"
                title="Is BA possible? If not, why not?"
                sub="Same matrices — reversed order">
                <QText>Using the same A (2×2) and B (2×3), can we compute BA?</QText>
                <Cbox label="Dimension Check">
                    For BA: B is on the left (2×<strong>3</strong>) and A is on the right (<strong>2</strong>×2).
                    Inner dimensions = 3 and 2. Since <strong>3 ≠ 2</strong>, the product is NOT defined.
                </Cbox>
                <Steps>
                    <Step n="1">B has <strong>3 columns</strong> (2×3)</Step>
                    <Step n="2">A has <strong>2 rows</strong> (2×2)</Step>
                    <Step n="3">3 ≠ 2 → inner dimensions do not match → <strong>BA is undefined</strong></Step>
                </Steps>
                <Abox>
                    <p><span className="cr">BA is NOT possible.</span></p>
                    <p>B has 3 columns but A only has 2 rows, so the inner dimensions (3 and 2) do not match.</p>
                </Abox>
            </Q>

            <Q id="1(b)" pts="1" color="amber"
                title="What is W₂,₃?"
                sub="W is the 5×4 matrix given in the question">
                <QText>
                    Given the 5×4 matrix W with rows:
                    Row 1: (2, 2, −3, 0),  Row 2: (−1, −1, −1, −1),  Row 3: (1, 0, 1, 0),
                    Row 4: (0, 1, −1/5, 5),  Row 5: (1, −1, −3, 0).
                    Find the element W₂,₃.
                </QText>
                <Cbox label="Index Notation W(row, column)">
                    W<sub>a,b</sub> = element at <strong>row a, column b</strong>. Always row first, column second.
                </Cbox>
                <Steps>
                    <Step n="1">Go to <strong>Row 2</strong>: the entries are (−1, −1, −1, −1)</Step>
                    <Step n="2">Pick <strong>Column 3</strong>: the 3rd entry in row 2 is −1</Step>
                </Steps>
                <Abox><p><strong>W₂,₃ = −1</strong></p></Abox>
            </Q>

            <Q id="1(c)" pts="2" color="amber"
                title="Which elements of W equal −3? Use correct notation."
                sub="Scan every row systematically">
                <QText>Find all elements of W that equal −3. Report them using W(row,col) notation.</QText>
                <Cbox label="Systematic Search Method">
                    Check each row left to right. Record position using subscript notation W<sub>row,col</sub>.
                </Cbox>
                <Steps>
                    <Step n="1"><strong>Row 1:</strong> (2, 2, <strong>−3</strong>, 0) → W₁,₃ = −3 <span className="ck">✓</span></Step>
                    <Step n="2"><strong>Row 2:</strong> (−1, −1, −1, −1) → no −3</Step>
                    <Step n="3"><strong>Row 3:</strong> (1, 0, 1, 0) → no −3</Step>
                    <Step n="4"><strong>Row 4:</strong> (0, 1, −1/5, 5) → no −3</Step>
                    <Step n="5"><strong>Row 5:</strong> (1, −1, <strong>−3</strong>, 0) → W₅,₃ = −3 <span className="ck">✓</span></Step>
                </Steps>
                <Abox>
                    <p><strong>W₁,₃ = −3</strong> and <strong>W₅,₃ = −3</strong></p>
                    <p className="note">Both are in column 3 — rows 1 and 5.</p>
                </Abox>
            </Q>

            <Q id="1(d)" pts="3" color="teal"
                title="Dot product of the last two columns of W + angle"
                sub="Does this relationship have a special name?">
                <QText>
                    Compute the dot product of column 3 and column 4 of W.
                    What is the angle between these vectors? Does this relationship have a special name?
                </QText>
                <Cbox label="Dot Product">
                    u · v = Σ uᵢvᵢ = u₁v₁ + u₂v₂ + ... Multiply corresponding entries, then sum everything.
                </Cbox>
                <Steps>
                    <Step n="1">
                        <strong>Extract the vectors:</strong>
                        <Fbox>
                            {`Column 3 (c₃) = (−3,  −1,  1,  −1/5,  −3)
Column 4 (c₄) = ( 0,  −1,  0,    5,    0)`}
                        </Fbox>
                    </Step>
                    <Step n="2">
                        <strong>Multiply corresponding entries and sum:</strong>
                        <Fbox>
                            {`c₃ · c₄ = (−3)(0)  +  (−1)(−1)  +  (1)(0)  +  (−1/5)(5)  +  (−3)(0)
         =    0     +      1      +    0     +      −1      +     0
         =  0`}
                        </Fbox>
                    </Step>
                </Steps>
                <Abox>
                    <p>Dot product = <strong>0</strong></p>
                    <p>A dot product of zero means the vectors are <strong>orthogonal (perpendicular)</strong>.</p>
                    <p>The angle between them is <strong>90°</strong>.</p>
                    <p className="note">This is called orthogonality. In ML, orthogonal features carry completely independent information — very useful property.</p>
                </Abox>
            </Q>

            <Q id="1(e)" pts="5" color="teal"
                title="Compute the angle between rows 2 and 3 of W"
                sub="r₂ = (−1,−1,−1,−1)  |  r₃ = (1,0,1,0)">
                <QText>
                    Compute the angle θ between the vectors comprising the 2nd and 3rd rows of W.
                    Hint: take the dot product.
                </QText>
                <Cbox label="Angle Between Two Vectors">
                    <p>cos θ = (u · v) / (|u| × |v|)  →  θ = arccos( u·v / (|u||v|) )</p>
                    <p style={{ marginTop: "0.3rem" }}>|u| = √(u₁² + u₂² + ... + uₙ²) is the vector's length (magnitude).</p>
                </Cbox>
                <Steps>
                    <Step n="1">
                        <strong>Write out the vectors:</strong>
                        <Fbox>
                            {`r₂ = (−1, −1, −1, −1)
r₃ = ( 1,  0,  1,  0)`}
                        </Fbox>
                    </Step>
                    <Step n="2">
                        <strong>Compute the dot product r₂ · r₃:</strong>
                        <Fbox>
                            {`r₂ · r₃ = (−1)(1) + (−1)(0) + (−1)(1) + (−1)(0)
         =  −1   +    0   +   −1   +    0
         = −2`}
                        </Fbox>
                    </Step>
                    <Step n="3">
                        <strong>Compute the magnitude of r₂:</strong>
                        <Fbox>
                            {`|r₂| = √((−1)² + (−1)² + (−1)² + (−1)²)
      = √(1 + 1 + 1 + 1)
      = √4 = 2`}
                        </Fbox>
                    </Step>
                    <Step n="4">
                        <strong>Compute the magnitude of r₃:</strong>
                        <Fbox>
                            {`|r₃| = √(1² + 0² + 1² + 0²)
      = √(1 + 0 + 1 + 0)
      = √2`}
                        </Fbox>
                    </Step>
                    <Step n="5">
                        <strong>Apply the angle formula:</strong>
                        <Fbox>
                            {`cos θ = (r₂ · r₃) / (|r₂| × |r₃|)
       = −2 / (2 × √2)
       = −2 / (2√2)
       = −1/√2  ≈  −0.7071`}
                        </Fbox>
                    </Step>
                    <Step n="6">
                        <strong>Find θ using inverse cosine:</strong>
                        <Fbox>{`θ = arccos(−1/√2) = 135°`}</Fbox>
                    </Step>
                </Steps>
                <Abox>
                    <p>The angle between rows 2 and 3 is <strong>θ = 135°</strong></p>
                    <p className="note">cos(135°) = −1/√2. An angle above 90° means the vectors point in broadly opposite directions.</p>
                </Abox>
            </Q>

            <Q id="1(f)" pts="3" color="sage"
                title="Compute yₐ = Σ(b=1 to 4) Wₐᵦ xᵦ  where x = (1, −1, 0, 1)ᵀ"
                sub="How many coordinates? Row or column vector?">
                <QText>
                    Compute the matrix-vector product y = Wx where x = (1, −1, 0, 1)ᵀ.
                    How many coordinates does y have, and is it a row or column vector?
                </QText>
                <Cbox label="Matrix–Vector Product">
                    <p>y = Wx: each output element yₐ = (row a of W) · x</p>
                    <p style={{ marginTop: "0.3rem" }}>W is 5×4, x is 4×1 → y is <strong>5×1</strong> (a column vector with 5 entries).</p>
                </Cbox>
                <Steps>
                    <Step n="1">
                        <strong>Row 1 · x:</strong>
                        <Fbox>{`(2)(1) + (2)(−1) + (−3)(0) + (0)(1) = 2 − 2 + 0 + 0 = 0`}</Fbox>
                    </Step>
                    <Step n="2">
                        <strong>Row 2 · x:</strong>
                        <Fbox>{`(−1)(1) + (−1)(−1) + (−1)(0) + (−1)(1) = −1 + 1 + 0 − 1 = −1`}</Fbox>
                    </Step>
                    <Step n="3">
                        <strong>Row 3 · x:</strong>
                        <Fbox>{`(1)(1) + (0)(−1) + (1)(0) + (0)(1) = 1 + 0 + 0 + 0 = 1`}</Fbox>
                    </Step>
                    <Step n="4">
                        <strong>Row 4 · x:</strong>
                        <Fbox>{`(0)(1) + (1)(−1) + (−1/5)(0) + (5)(1) = 0 − 1 + 0 + 5 = 4`}</Fbox>
                    </Step>
                    <Step n="5">
                        <strong>Row 5 · x:</strong>
                        <Fbox>{`(1)(1) + (−1)(−1) + (−3)(0) + (0)(1) = 1 + 1 + 0 + 0 = 2`}</Fbox>
                    </Step>
                </Steps>
                <Abox>
                    <div>y = <Mx rows={[["0"], ["−1"], ["1"], ["4"], ["2"]]} /></div>
                    <p style={{ marginTop: "0.65rem" }}>y has <strong>5 coordinates</strong> and is a <strong>column vector</strong> (5×1).</p>
                    <p className="note">The output always has as many rows as the matrix (W has 5 rows → y has 5 entries).</p>
                </Abox>
            </Q>
        </>
    );
}

/* ═══════════════════════════════════════════════════════════════
   Q2 — LINES & HYPERPLANES
═══════════════════════════════════════════════════════════════ */
function Q2Page() {
    return (
        <>
            <SH n="2" title="Lines & Hyperplanes" sub="Gradients · normal vectors · distances · parametric equations" color="blue" />

            <Q id="2(a)" pts="2" color="blue"
                title="y-intercept and gradient of y = 5x − 17">
                <QText>What is the y-intercept and gradient of the line y = 5x − 17?</QText>
                <Cbox label="Standard Line Form y = mx + c">
                    m = gradient (steepness). c = y-intercept (where line crosses the y-axis when x = 0).
                </Cbox>
                <Steps>
                    <Step n="1">Compare y = 5x − 17 with y = mx + c</Step>
                    <Step n="2">The coefficient of x gives the gradient: <strong>m = 5</strong></Step>
                    <Step n="3">The constant term is the y-intercept: <strong>c = −17</strong></Step>
                </Steps>
                <Abox>
                    <p><strong>Gradient = 5</strong>  |  <strong>y-intercept = −17</strong></p>
                    <p className="note">The line rises 5 units for every 1 unit to the right, crossing the y-axis at y = −17.</p>
                </Abox>
            </Q>

            <Q id="2(b)" pts="2" color="blue"
                title="Equation of the line through (0, 3) and (4, 0)">
                <QText>Find the equation of the line in ℝ² passing through the points (0, 3) and (4, 0).</QText>
                <Cbox label="Two-Point Method">
                    Step 1: Gradient = (y₂−y₁)/(x₂−x₁).  Step 2: Use one point to find the y-intercept c.
                </Cbox>
                <Steps>
                    <Step n="1">
                        <strong>Calculate gradient:</strong>
                        <Fbox>{`m = (0 − 3) / (4 − 0) = −3/4`}</Fbox>
                    </Step>
                    <Step n="2"><strong>y-intercept:</strong> The point (0, 3) means when x=0, y=3, so directly c = 3.</Step>
                    <Step n="3">
                        <strong>Write the full equation:</strong>
                        <Fbox>{`y = −(3/4)x + 3`}</Fbox>
                    </Step>
                </Steps>
                <Abox><p><strong>y = −(3/4)x + 3</strong></p></Abox>
            </Q>

            <Q id="2(c)" pts="2" color="blue"
                title="General equation of the line through (x₁,y₁) and (x₂,y₂)">
                <QText>Give the general formula for the equation of the line through two arbitrary points.</QText>
                <Steps>
                    <Step n="1">Gradient: m = (y₂ − y₁) / (x₂ − x₁)</Step>
                    <Step n="2">Point-slope form using point (x₁, y₁):</Step>
                </Steps>
                <Abox>
                    <Fbox>{`y − y₁ = [(y₂ − y₁) / (x₂ − x₁)] × (x − x₁)`}</Fbox>
                    <p className="note">Rearrange to get y = mx + c form by expanding and collecting terms.</p>
                </Abox>
            </Q>

            <Q id="2(d)" pts="2" color="teal"
                title="Normal vector to y = 5x − 17 as a hyperplane in ℝ². Is it unique?">
                <QText>
                    Provide a normal vector to the line y = 5x − 17 when considered as a hyperplane in ℝ².
                    Is it unique?
                </QText>
                <Cbox label="Normal Vector of a Hyperplane in ℝ²">
                    Rewrite as ax + by = c. The normal vector is n = (a, b) — just the coefficients of the variables.
                    A normal vector is perpendicular to the hyperplane and points away from it.
                </Cbox>
                <Steps>
                    <Step n="1">Rearrange y = 5x − 17 to standard form: <IC c="5x − y = 17" /></Step>
                    <Step n="2">Coefficient of x = 5, coefficient of y = −1</Step>
                    <Step n="3">Normal vector n = (5, −1)</Step>
                </Steps>
                <Abox>
                    <p>Normal vector: <strong>n = (5, −1)</strong></p>
                    <p><strong>Not unique</strong> — any scalar multiple λ(5,−1), e.g. (10,−2) or (−5,1), is also a valid normal. Only the direction is fixed.</p>
                </Abox>
            </Q>

            <Q id="2(e)" pts="2" color="teal"
                title="Normal vector to y = 5x − 17 as a hyperplane in ℝ³">
                <QText>What is the normal vector of the same equation y = 5x − 17, but treated as a hyperplane in ℝ³?</QText>
                <Cbox label="Hyperplane in ℝ³">
                    In ℝ³ there are three variables x, y, z. The equation y = 5x − 17 contains no z,
                    so it becomes 5x − y + 0z = 17. The normal picks up all three coefficients including the 0.
                </Cbox>
                <Steps>
                    <Step n="1">Rewrite with z explicitly: <IC c="5x − y + 0·z = 17" /></Step>
                    <Step n="2">Normal vector = (coeff of x, coeff of y, coeff of z) = (5, −1, 0)</Step>
                </Steps>
                <Abox>
                    <p><strong>n = (5, −1, 0)</strong></p>
                    <p className="note">The zero z-component means the normal lies in the xy-plane. The hyperplane extends infinitely in the z-direction.</p>
                </Abox>
            </Q>

            <Q id="2(f) BONUS" pts="2" color="amber"
                title="Two linearly independent vectors lying on the plane y = 5x − 17 in ℝ³">
                <QText>Write down two linearly independent vectors that lie on the plane y = 5x − 17 in ℝ³.</QText>
                <Cbox label="Vectors ON a Plane">
                    A vector v = (a,b,c) lies ON the plane if it is perpendicular to the normal n = (5,−1,0).
                    Condition: n · v = 5a − b + 0c = 0, meaning b = 5a. The c component is completely free.
                    Two vectors are linearly independent if neither is a scalar multiple of the other.
                </Cbox>
                <Steps>
                    <Step n="1">Condition to satisfy: 5a − b = 0, so b = 5a; c can be anything</Step>
                    <Step n="2">
                        <strong>Choose v₁:</strong> let a=1, so b=5, c=0 → v₁ = (1, 5, 0)
                        <br />Check: 5(1)−(5) = 0 <span className="ck">✓</span>
                    </Step>
                    <Step n="3">
                        <strong>Choose v₂:</strong> let a=0, b=0, c=1 → v₂ = (0, 0, 1)
                        <br />Check: 5(0)−(0) = 0 <span className="ck">✓</span>
                    </Step>
                    <Step n="4">v₂ is not a scalar multiple of v₁ → linearly independent <span className="ck">✓</span></Step>
                </Steps>
                <Abox>
                    <p><strong>v₁ = (1, 5, 0)</strong> and <strong>v₂ = (0, 0, 1)</strong></p>
                    <p className="note">Many valid answers exist. Any two non-parallel vectors with b = 5a work.</p>
                </Abox>
            </Q>

            <Q id="2(g)" pts="2" color="blue"
                title="Normal vector in ℝ⁵: 2x₁+4x₂−x₃+7x₄+x₅−10=0">
                <QText>What is the normal vector to the hyperplane 2x₁ + 4x₂ − x₃ + 7x₄ + x₅ − 10 = 0 in ℝ⁵?</QText>
                <Cbox label="Normal Vector in ℝⁿ">
                    For a₁x₁ + a₂x₂ + ... + aₙxₙ = c, the normal vector is n = (a₁, a₂, ..., aₙ).
                    Simply read off the coefficient in front of each variable.
                </Cbox>
                <Steps>
                    <Step n="1">Coefficient of x₁ = <strong>2</strong></Step>
                    <Step n="2">Coefficient of x₂ = <strong>4</strong></Step>
                    <Step n="3">Coefficient of x₃ = <strong>−1</strong></Step>
                    <Step n="4">Coefficient of x₄ = <strong>7</strong></Step>
                    <Step n="5">Coefficient of x₅ = <strong>1</strong></Step>
                </Steps>
                <Abox><p><strong>n = (2, 4, −1, 7, 1)</strong></p></Abox>
            </Q>

            <Q id="2(h)" pts="2" color="blue"
                title="Which point lies on the hyperplane: E=(−1,−1,−10,1,−1) or F=(0,0,0,0,0)?">
                <QText>
                    Hyperplane: 2x₁+4x₂−x₃+7x₄+x₅=10.
                    Which of E=(−1,−1,−10,1,−1) or F=(0,0,0,0,0) lies on it? Explain.
                </QText>
                <Cbox label="Membership Test">
                    Substitute each point's coordinates into the left-hand side.
                    If the result equals 10, the point is ON the hyperplane.
                </Cbox>
                <Steps>
                    <Step n="1">
                        <strong>Test E = (−1, −1, −10, 1, −1):</strong>
                        <Fbox>
                            {`2(−1) + 4(−1) − (−10) + 7(1) + (−1)
=  −2  +  −4  +   10   +  7  +  −1
=  10  ✓`}
                        </Fbox>
                    </Step>
                    <Step n="2">
                        <strong>Test F = (0, 0, 0, 0, 0):</strong>
                        <Fbox>
                            {`2(0) + 4(0) − (0) + 7(0) + (0)
= 0 ≠ 10  ✗`}
                        </Fbox>
                    </Step>
                </Steps>
                <Abox>
                    <p><span className="ck">✓ Point E lies on the hyperplane</span> (gives 10).</p>
                    <p><span className="cr">✗ Point F does not lie on it</span> (gives 0, not 10).</p>
                </Abox>
            </Q>

            <Q id="2(i)" pts="3" color="teal"
                title="Distance between C=(2,4,9) and D=(0,1,3) in ℝ³">
                <QText>Find the Euclidean distance between C=(2,4,9) and D=(0,1,3) in ℝ³.</QText>
                <Cbox label="Euclidean Distance Formula">
                    d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]
                    This is Pythagoras' theorem extended into three (or more) dimensions.
                </Cbox>
                <Steps>
                    <Step n="1"><strong>Compute differences:</strong>  Δx = 0−2 = −2,  Δy = 1−4 = −3,  Δz = 3−9 = −6</Step>
                    <Step n="2">
                        <strong>Square each difference and sum:</strong>
                        <Fbox>{`(−2)² + (−3)² + (−6)²  =  4 + 9 + 36  =  49`}</Fbox>
                    </Step>
                    <Step n="3">
                        <strong>Take the square root:</strong>
                        <Fbox>{`d = √49 = 7`}</Fbox>
                    </Step>
                </Steps>
                <Abox><p><strong>Distance = 7</strong></p></Abox>
            </Q>

            <Q id="2(j)" pts="4" color="teal"
                title="Parametric equation of the line through C=(2,4,9) and D=(0,1,3)">
                <QText>
                    In ℝⁿ a line is x⃗ = λv⃗ + d⃗ where λ ∈ ℝ.
                    Give the equation of the line through C=(2,4,9) and D=(0,1,3).
                </QText>
                <Cbox label="Parametric Line Equation">
                    <p>x⃗ = λv⃗ + d⃗ where:</p>
                    <ul>
                        <li><strong>v⃗</strong> = direction vector = difference between any two points on the line</li>
                        <li><strong>d⃗</strong> = any fixed point on the line</li>
                        <li><strong>λ ∈ ℝ</strong> sweeps through every point on the line (λ=0 gives d⃗)</li>
                    </ul>
                </Cbox>
                <Steps>
                    <Step n="1">
                        <strong>Direction vector</strong> v⃗ = D − C:
                        <Fbox>{`v⃗ = (0−2, 1−4, 3−9) = (−2, −3, −6)`}</Fbox>
                    </Step>
                    <Step n="2"><strong>Choose d⃗ = D = (0, 1, 3)</strong> as the base point</Step>
                    <Step n="3"><strong>Write the parametric equation:</strong></Step>
                </Steps>
                <Abox>
                    <Fbox>
                        {`x⃗ = λ(−2, −3, −6) + (0, 1, 3),   λ ∈ ℝ

Component form:
  x = −2λ
  y = −3λ + 1
  z = −6λ + 3

Verify: λ = 0  →  (0, 1, 3) = D  ✓
        λ = −1 →  (2, 4, 9) = C  ✓`}
                    </Fbox>
                </Abox>
            </Q>
        </>
    );
}

/* ═══════════════════════════════════════════════════════════════
   Q3 — DIFFERENTIATION
═══════════════════════════════════════════════════════════════ */
function Q3Page() {
    return (
        <>
            <SH n="3" title="Differentiation" sub="Power rule · chain rule · function composition" color="amber" />

            <Cbox label="Differentiation Rules — Quick Reference">
                <div className="rule-grid" style={{ marginTop: "0.4rem" }}>
                    {[
                        ["Power Rule", "d/dx xⁿ = n·xⁿ⁻¹"],
                        ["Constant Factor", "d/dx a·f(x) = a·f′(x)"],
                        ["Chain Rule", "d/dx f(g(x)) = f′(g(x))·g′(x)"],
                        ["Exponential", "d/dx eˣ = eˣ"],
                        ["Natural Log", "d/dx ln(x) = 1/x"],
                        ["Sine", "d/dx sin(x) = cos(x)"],
                        ["Cosine", "d/dx cos(x) = −sin(x)"],
                        ["Sum Rule", "d/dx (f+g) = f′ + g′"],
                    ].map(([r, f]) => (
                        <div key={r} className="rule-card"><h4>{r}</h4><p>{f}</p></div>
                    ))}
                </div>
            </Cbox>

            <Q id="3(a)" pts="2" color="amber" title="Differentiate y = 2x⁷">
                <QText>Find dy/dx for y = 2x⁷.</QText>
                <Cbox label="Power Rule">
                    d/dx(axⁿ) = a·n·xⁿ⁻¹  →  bring the exponent down as a factor, reduce the power by 1.
                </Cbox>
                <Steps>
                    <Step n="1">Exponent is 7 — bring it down: 2 × 7 = 14</Step>
                    <Step n="2">Reduce the power by 1: 7 − 1 = 6</Step>
                </Steps>
                <Fbox>{`dy/dx = 14x⁶`}</Fbox>
                <Abox><p><strong>dy/dx = 14x⁶</strong></p></Abox>
            </Q>

            <Q id="3(b)" pts="2" color="amber" title="Differentiate y = (5x+1)³ + eˣ">
                <QText>Find dy/dx for y = (5x+1)³ + eˣ.</QText>
                <Cbox label="Chain Rule + Sum Rule">
                    For (5x+1)³: outer function = u³, inner function = 5x+1.
                    Chain rule: outer′ × inner′ = 3(5x+1)² × 5 = 15(5x+1)².
                    For eˣ: the derivative is always just eˣ.
                </Cbox>
                <Steps>
                    <Step n="1">
                        <strong>Differentiate (5x+1)³ using chain rule:</strong>
                        <br />Outer derivative: 3(5x+1)²
                        <br />Inner derivative: d/dx(5x+1) = 5
                        <br />Multiply: 3(5x+1)² × 5 = <strong>15(5x+1)²</strong>
                    </Step>
                    <Step n="2"><strong>Differentiate eˣ:</strong> d/dx eˣ = <strong>eˣ</strong></Step>
                    <Step n="3">Add both parts (sum rule):</Step>
                </Steps>
                <Fbox>{`dy/dx = 15(5x+1)² + eˣ`}</Fbox>
                <Abox><p><strong>dy/dx = 15(5x+1)² + eˣ</strong></p></Abox>
            </Q>

            <Q id="3(c)" pts="2" color="amber" title="Differentiate y = 1/x − 2ln(x)">
                <QText>Find dy/dx for y = 1/x − 2ln(x).</QText>
                <Cbox label="Rewrite Before Differentiating">
                    1/x = x⁻¹ (rewrite as a negative power to use the power rule).
                    d/dx ln(x) = 1/x.
                </Cbox>
                <Steps>
                    <Step n="1">Rewrite: y = x⁻¹ − 2ln(x)</Step>
                    <Step n="2"><strong>Differentiate x⁻¹:</strong> power rule → −1·x⁻² = <strong>−1/x²</strong></Step>
                    <Step n="3"><strong>Differentiate −2ln(x):</strong> −2 × (1/x) = <strong>−2/x</strong></Step>
                    <Step n="4">Combine using sum rule:</Step>
                </Steps>
                <Fbox>{`dy/dx = −1/x² − 2/x`}</Fbox>
                <Abox><p><strong>dy/dx = −1/x² − 2/x</strong></p></Abox>
            </Q>

            <Q id="3(d)" pts="2" color="amber" title="Differentiate y = √(2x²−5x+8)">
                <QText>Find dy/dx for y = √(2x²−5x+8).</QText>
                <Cbox label="Chain Rule on Square Root">
                    Write √u = u^(1/2). Outer: (1/2)u^(−1/2). Inner: du/dx.
                    Full result: du/dx ÷ (2√u).
                </Cbox>
                <Steps>
                    <Step n="1">Rewrite: y = (2x²−5x+8)^(1/2)</Step>
                    <Step n="2"><strong>Outer derivative:</strong> (1/2)(2x²−5x+8)^(−1/2)</Step>
                    <Step n="3"><strong>Inner derivative:</strong> d/dx(2x²−5x+8) = 4x − 5</Step>
                    <Step n="4"><strong>Multiply outer × inner:</strong></Step>
                </Steps>
                <Fbox>
                    {`dy/dx = (1/2)(2x²−5x+8)^(−1/2) × (4x−5)

       = (4x−5) / [2√(2x²−5x+8)]`}
                </Fbox>
                <Abox><p><strong>dy/dx = (4x−5) / [2√(2x²−5x+8)]</strong></p></Abox>
            </Q>

            <Q id="3(e)" pts="2" color="plum"
                title="g(x)=sin(x), h(x)=4x — find g∘h(x) and h∘g(x)"
                sub="Composition means: apply one function, then feed its output into the other">
                <QText>
                    Given g(x)=sin(x) and h(x)=4x, find g∘h(x) and h∘g(x) for x ∈ ℝ.
                </QText>
                <Cbox label="Function Composition">
                    g∘h(x) = g(h(x)) — apply h first, then g to the result.
                    h∘g(x) = h(g(x)) — apply g first, then h to the result.
                    Composition is generally NOT commutative: g∘h ≠ h∘g.
                </Cbox>
                <Steps>
                    <Step n="1">
                        <strong>g∘h(x) = g(h(x)):</strong> put h(x) = 4x into g(·) = sin(·)
                        <Fbox>{`g∘h(x) = g(4x) = sin(4x)`}</Fbox>
                    </Step>
                    <Step n="2">
                        <strong>h∘g(x) = h(g(x)):</strong> put g(x) = sin(x) into h(·) = 4·(·)
                        <Fbox>{`h∘g(x) = h(sin x) = 4 × sin(x) = 4sin(x)`}</Fbox>
                    </Step>
                </Steps>
                <Abox>
                    <p><strong>g∘h(x) = sin(4x)</strong></p>
                    <p><strong>h∘g(x) = 4sin(x)</strong></p>
                    <p className="note">sin(4x) ≠ 4sin(x). These are different functions — order of composition always matters.</p>
                </Abox>
            </Q>

            <Q id="3(f)" pts="4" color="plum"
                title="State the chain rule. Find (g∘h)′(x) and (h∘g)′(x)">
                <QText>
                    Carefully state the chain rule. Then find the derivatives (g∘h)′(x) and (h∘g)′(x)
                    for g(x)=sin(x), h(x)=4x.
                </QText>
                <Cbox label="Chain Rule — Formal Statement">
                    <p>If F(x) = f(g(x)), then: <strong>F′(x) = f′(g(x)) · g′(x)</strong></p>
                    <p style={{ marginTop: "0.3rem" }}>In words: "derivative of outer function evaluated at the inner, times derivative of the inner."</p>
                </Cbox>
                <div className="div" />
                <Steps>
                    <Step n="1">
                        <strong>(g∘h)′(x)</strong> — differentiate sin(4x):
                        <br />Outer = sin(u)  →  outer′ = cos(u)  →  cos(4x)
                        <br />Inner = 4x  →  inner′ = 4
                        <Fbox>{`(g∘h)′(x) = cos(4x) × 4 = 4cos(4x)`}</Fbox>
                    </Step>
                    <Step n="2">
                        <strong>(h∘g)′(x)</strong> — differentiate 4sin(x):
                        <br />Outer = 4u  →  outer′ = 4
                        <br />Inner = sin(x)  →  inner′ = cos(x)
                        <Fbox>{`(h∘g)′(x) = 4 × cos(x) = 4cos(x)`}</Fbox>
                    </Step>
                </Steps>
                <Abox>
                    <p><strong>(g∘h)′(x) = 4cos(4x)</strong></p>
                    <p><strong>(h∘g)′(x) = 4cos(x)</strong></p>
                </Abox>
            </Q>

            <Q id="3(g)" pts="4" color="plum"
                title="For f(x)=x¹⁰, find f∘f∘f(x). Is it equal to [f(x)]³? Explain."
                sub="Composition vs raising to a power — a critical distinction">
                <QText>
                    For f(x) = x¹⁰, what is f∘f∘f(x)? Is it the same as [f(x)]³? Explain your answer.
                </QText>
                <Cbox label="Composition vs Power — they are DIFFERENT">
                    <p><strong>f∘f∘f(x):</strong> apply f three times in sequence. Exponents multiply.</p>
                    <p><strong>[f(x)]³:</strong> compute f(x) once, then cube the result. Exponent multiplies by 3.</p>
                </Cbox>
                <Steps>
                    <Step n="1">f(x) = x¹⁰</Step>
                    <Step n="2">
                        f∘f(x) = f(f(x)) = f(x¹⁰) = (x¹⁰)¹⁰ = <strong>x¹⁰⁰</strong>
                        <br /><em>(raising a power to a power: exponents multiply: 10 × 10 = 100)</em>
                    </Step>
                    <Step n="3">
                        f∘f∘f(x) = f(x¹⁰⁰) = (x¹⁰⁰)¹⁰ = <strong>x¹⁰⁰⁰</strong>
                        <br /><em>(again: 100 × 10 = 1000)</em>
                    </Step>
                    <Step n="4">
                        [f(x)]³ = (x¹⁰)³ = <strong>x³⁰</strong>
                        <br /><em>(cube the output: exponent × 3 = 10 × 3 = 30)</em>
                    </Step>
                </Steps>
                <Abox>
                    <p>f∘f∘f(x) = <strong>x¹⁰⁰⁰</strong></p>
                    <p>[f(x)]³ = <strong>x³⁰</strong></p>
                    <p><span className="cr">They are NOT equal.</span> x¹⁰⁰⁰ ≠ x³⁰.</p>
                    <p className="note">Composition chains exponent multiplications (10×10×10=1000). Cubing the output multiplies the exponent by 3 (10×3=30). Completely different operations.</p>
                </Abox>
            </Q>

            <Q id="3(h)" pts="4" color="plum"
                title="Find the derivatives of f∘f∘f(x) and [f(x)]³">
                <QText>Using results from 3(g): differentiate f∘f∘f(x) = x¹⁰⁰⁰ and [f(x)]³ = x³⁰.</QText>
                <Steps>
                    <Step n="1">
                        <strong>Differentiate x¹⁰⁰⁰</strong> (power rule — bring down 1000, reduce power by 1):
                        <Fbox>{`d/dx x¹⁰⁰⁰ = 1000x⁹⁹⁹`}</Fbox>
                    </Step>
                    <Step n="2">
                        <strong>Differentiate x³⁰</strong> (power rule — bring down 30, reduce power by 1):
                        <Fbox>{`d/dx x³⁰ = 30x²⁹`}</Fbox>
                    </Step>
                </Steps>
                <Abox>
                    <p><strong>d/dx [f∘f∘f(x)] = 1000x⁹⁹⁹</strong></p>
                    <p><strong>d/dx [f(x)]³ = 30x²⁹</strong></p>
                </Abox>
            </Q>
        </>
    );
}

/* ═══════════════════════════════════════════════════════════════
   Q4 — PARTIAL DERIVATIVES
═══════════════════════════════════════════════════════════════ */
function Q4Page() {
    return (
        <>
            <SH n="4" title="Partial Derivatives" sub="Gradient vectors · Jacobian matrix · polar coordinates" color="plum" />

            <Cbox label="Partial Derivative Rule">
                ∂f/∂x means: differentiate f with respect to x while treating ALL other variables as constants.
                The gradient ∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z) is the vector of all partial derivatives.
            </Cbox>

            <Q id="4(a)" pts="4" color="plum"
                title="Compute ∇f for f(x,y,z) = xyz + 5sin(xy) + ln(3z)">
                <QText>
                    Given f: ℝ³→ℝ with f(x,y,z) = xyz + 5sin(xy) + ln(3z),
                    compute ∇f — the vector of all partial derivatives.
                </QText>
                <Steps>
                    <Step n="1">
                        <strong>∂f/∂x</strong> — treat y and z as constants, differentiate each term:
                        <Fbox>
                            {`Term xyz:      ∂/∂x[xyz]      = yz        (y,z are constants; d/dx[x] = 1)
Term 5sin(xy): ∂/∂x[5sin(xy)] = 5cos(xy)·y  (chain rule; inner = xy, d/dx = y)
Term ln(3z):   ∂/∂x[ln(3z)]   = 0           (no x present)

Therefore: ∂f/∂x = yz + 5y·cos(xy)`}
                        </Fbox>
                    </Step>
                    <Step n="2">
                        <strong>∂f/∂y</strong> — treat x and z as constants:
                        <Fbox>
                            {`Term xyz:      ∂/∂y[xyz]      = xz
Term 5sin(xy): ∂/∂y[5sin(xy)] = 5cos(xy)·x  (chain rule; inner = xy, d/dy = x)
Term ln(3z):   ∂/∂y[ln(3z)]   = 0

Therefore: ∂f/∂y = xz + 5x·cos(xy)`}
                        </Fbox>
                    </Step>
                    <Step n="3">
                        <strong>∂f/∂z</strong> — treat x and y as constants:
                        <Fbox>
                            {`Term xyz:      ∂/∂z[xyz]      = xy
Term 5sin(xy): ∂/∂z[5sin(xy)] = 0           (no z present)
Term ln(3z):   ∂/∂z[ln(3z)]   = (1/3z)·3 = 1/z  (chain rule; inner = 3z, d/dz = 3)

Therefore: ∂f/∂z = xy + 1/z`}
                        </Fbox>
                    </Step>
                </Steps>
                <Abox>
                    <Fbox>
                        {`∇f = ( yz + 5y·cos(xy),   ← ∂f/∂x
        xz + 5x·cos(xy),   ← ∂f/∂y
        xy + 1/z        )  ← ∂f/∂z`}
                    </Fbox>
                </Abox>
            </Q>

            <Q id="4(b)" pts="4" color="teal"
                title="Compute all partial derivatives of x=r·cosθ, y=r·sinθ. Write the Jacobian.">
                <QText>
                    Given x = r·cosθ and y = r·sinθ, compute ∂x/∂r, ∂y/∂r, ∂x/∂θ, and ∂y/∂θ.
                    Write down the Jacobian matrix ∂(x,y)/∂(r,θ).
                </QText>
                <Cbox label="Jacobian Matrix">
                    <p>The Jacobian arranges all partial derivatives in a grid:</p>
                    <p>Row i = output variable,  Column j = input variable.</p>
                    <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.82rem", marginTop: "0.3rem" }}>J = [[∂x/∂r, ∂x/∂θ], [∂y/∂r, ∂y/∂θ]]</p>
                </Cbox>
                <Steps>
                    <Step n="1">
                        <strong>∂x/∂r:</strong> differentiate r·cosθ with respect to r (cosθ is constant)
                        <Fbox>{`∂x/∂r = cosθ`}</Fbox>
                    </Step>
                    <Step n="2">
                        <strong>∂x/∂θ:</strong> differentiate r·cosθ with respect to θ (r is constant)
                        <Fbox>{`∂x/∂θ = r·(−sinθ) = −r·sinθ`}</Fbox>
                    </Step>
                    <Step n="3">
                        <strong>∂y/∂r:</strong> differentiate r·sinθ with respect to r (sinθ is constant)
                        <Fbox>{`∂y/∂r = sinθ`}</Fbox>
                    </Step>
                    <Step n="4">
                        <strong>∂y/∂θ:</strong> differentiate r·sinθ with respect to θ (r is constant)
                        <Fbox>{`∂y/∂θ = r·cosθ`}</Fbox>
                    </Step>
                </Steps>
                <Abox>
                    <p>Jacobian J = ∂(x,y)/∂(r,θ):</p>
                    <div style={{ marginTop: "0.5rem" }}>
                        <Mx rows={[["cosθ", "−r·sinθ"], ["sinθ", "r·cosθ"]]} />
                    </div>
                </Abox>
            </Q>

            <Q id="4(c)" pts="2" color="teal"
                title="Determinant of the Jacobian">
                <QText>What is the determinant of the Jacobian found in 4(b)?</QText>
                <Cbox label="2×2 Determinant Formula">
                    det [[a,b],[c,d]] = ad − bc
                    (top-left × bottom-right) minus (top-right × bottom-left)
                </Cbox>
                <Steps>
                    <Step n="1">
                        Identify entries: a = cosθ,  b = −r·sinθ,  c = sinθ,  d = r·cosθ
                    </Step>
                    <Step n="2">
                        <strong>Apply the formula:</strong>
                        <Fbox>
                            {`det(J) = (cosθ)(r·cosθ)  −  (−r·sinθ)(sinθ)
        = r·cos²θ        +   r·sin²θ
        = r·(cos²θ + sin²θ)
        = r × 1
        = r`}
                        </Fbox>
                        <em>Using the Pythagorean identity: cos²θ + sin²θ = 1</em>
                    </Step>
                </Steps>
                <Abox>
                    <p><strong>det(J) = r</strong></p>
                    <p className="note">This is why polar coordinate integrals use dA = r·dr·dθ — the Jacobian determinant r is the area-scaling factor when switching from Cartesian to polar coordinates.</p>
                </Abox>
            </Q>

            <Q id="4(d)" pts="4" color="plum"
                title="Express r and θ in terms of x and y (inverse transformation)"
                sub="Going from Cartesian coordinates back to polar">
                <QText>
                    Given x = r·cosθ and y = r·sinθ, express r and θ in terms of x and y.
                </QText>
                <Steps>
                    <Step n="1">
                        <strong>Find r</strong> — square both equations and add them together:
                        <Fbox>
                            {`x²      = (r·cosθ)²     = r²·cos²θ
y²      = (r·sinθ)²     = r²·sin²θ

x² + y² = r²·cos²θ + r²·sin²θ
        = r²·(cos²θ + sin²θ)
        = r² × 1 = r²

Therefore:  r = √(x² + y²)`}
                        </Fbox>
                    </Step>
                    <Step n="2">
                        <strong>Find θ</strong> — divide y by x:
                        <Fbox>
                            {`y/x = (r·sinθ) / (r·cosθ) = sinθ/cosθ = tanθ

Therefore:  θ = arctan(y/x)`}
                        </Fbox>
                    </Step>
                </Steps>
                <Abox>
                    <Fbox>
                        {`r = √(x² + y²)

θ = arctan(y/x)`}
                    </Fbox>
                    <p className="note">In code, use atan2(y, x) to correctly handle all four quadrants. The simple arctan formula gives wrong results when x is negative (e.g. for points in the 2nd and 3rd quadrants).</p>
                </Abox>
            </Q>
        </>
    );
}

/* ═══════════════════════════════════════════════════════════════
   SUMMARY
═══════════════════════════════════════════════════════════════ */
function SummaryPage() {
    return (
        <>
            <SH n="★" title="Summary & Key Formulas" sub="Quick-reference sheet for revision" color="sage" />
            <table className="stbl">
                <thead>
                    <tr><th>Q</th><th>Topic</th><th>Key Formula / Rule</th></tr>
                </thead>
                <tbody>
                    {[
                        ["1a", "Matrix Multiply", "AB_ij = Σ A_ik·B_kj  |  A(m×n) · B(n×p) → result(m×p)"],
                        ["1d", "Dot Product = 0", "Vectors are orthogonal → angle = 90°"],
                        ["1e", "Angle Formula", "cos θ = (u·v)/(|u|·|v|)  →  θ = arccos(...)"],
                        ["2a", "Line Form", "y = mx + c  |  m = gradient,  c = y-intercept"],
                        ["2d", "Normal Vector ℝ²", "Rewrite ax+by=c  →  n=(a,b).  Not unique (λn is also valid)"],
                        ["2g", "Normal Vector ℝⁿ", "Just read off the variable coefficients as a vector"],
                        ["2i", "Distance ℝ³", "d = √((Δx)²+(Δy)²+(Δz)²)"],
                        ["2j", "Parametric Line", "x⃗ = λv⃗ + d⃗,  λ∈ℝ,  v⃗ = direction,  d⃗ = point on line"],
                        ["3b,d", "Chain Rule", "d/dx f(g(x)) = f′(g(x)) · g′(x)"],
                        ["3g", "Composition vs Power", "f∘f∘f: exponents multiply (10³=1000). [f]³: exponent ×3 (=30)"],
                        ["4a", "Gradient ∇f", "∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)  (vector of all partial derivatives)"],
                        ["4b", "Jacobian", "Matrix of all ∂(outputs)/∂(inputs) partial derivatives"],
                        ["4c", "det Jacobian (polar)", "det(J) = r   (from identity cos²θ+sin²θ=1)"],
                        ["4d", "Polar ↔ Cartesian", "r=√(x²+y²),  θ=arctan(y/x)"],
                    ].map(([q, t, f]) => (
                        <tr key={q}>
                            <td><strong>{q}</strong></td>
                            <td>{t}</td>
                            <td><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.79rem", color: "var(--blue)" }}>{f}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Cbox label="Exam Tips">
                <ul>
                    <li><strong>Matrix multiply:</strong> always check that inner dimensions match before starting.</li>
                    <li><strong>Dot product = 0</strong> always means orthogonal (90°).</li>
                    <li><strong>Normal vectors:</strong> just read off the variable coefficients — no calculation.</li>
                    <li><strong>Chain rule:</strong> outer′(inner) × inner′ — say it aloud as you work.</li>
                    <li><strong>Partial derivatives:</strong> mentally "freeze" all variables except the one you are differentiating.</li>
                    <li><strong>Composition vs power:</strong> f∘f∘f multiplies exponents; [f]ⁿ multiplies exponent by n.</li>
                    <li><strong>Jacobian determinant:</strong> use cos²θ+sin²θ=1 to simplify polar results.</li>
                    <li><strong>Show all working</strong> — marks are awarded for correct method, not just the final number.</li>
                </ul>
            </Cbox>
            <NoteBox>
                For the actual exam, write every intermediate step clearly on paper.
                Even if the final answer is simple, examiners award marks for correct method at each stage.
            </NoteBox>
        </>
    );
}

/* ═══════════════════════════════════════════════════════════════
   ROOT COMPONENT — navigation state lives here only
═══════════════════════════════════════════════════════════════ */
export default function MathAnswers() {
    const [page, setPage] = useState("overview");
    const [menuOpen, setMenuOpen] = useState(false);

    const TABS = [
        { id: "overview", label: "Overview" },
        { id: "q1", label: "Q1 · Vectors & Matrices" },
        { id: "q2", label: "Q2 · Lines & Hyperplanes" },
        { id: "q3", label: "Q3 · Differentiation" },
        { id: "q4", label: "Q4 · Partial Derivatives" },
        { id: "summary", label: "★ Summary" },
    ];

    function go(id) { setPage(id); setMenuOpen(false); window.scrollTo(0, 0); }

    return (
        <div className="r">            <nav className="nav">
                <div className="nav-inner">
                    <div className="nav-logo">7COM1033 · Solutions</div>
                    <button className="ham" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
                        <span /><span /><span />
                    </button>
                    <div className={`nav-tabs${menuOpen ? " open" : ""}`}>
                        {TABS.map(t => (
                            <button key={t.id}
                                className={`nav-tab${page === t.id ? " on" : ""}`}
                                onClick={() => go(t.id)}>
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            <div className="pg">
                {page === "overview" && <OverviewPage />}
                {page === "q1" && <Q1Page />}
                {page === "q2" && <Q2Page />}
                {page === "q3" && <Q3Page />}
                {page === "q4" && <Q4Page />}
                {page === "summary" && <SummaryPage />}
                <footer className="ft">
                    7COM1033 Neural Networks &amp; Machine Learning · Formative Assessment · Semester B 2025
                </footer>
            </div>
        </div>
    );
}