import { useState } from "react";
import { QUESTIONS } from "../../data/questions";

export default function QuizPage({ go }) {
  const [stage, setStage] = useState("gate"); // gate | quiz | results
  const [userName, setUserName] = useState("");
  const [consent, setConsent] = useState(false);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [current, setCurrent] = useState(0);

  function startQuiz() {
    if (!userName.trim()) { alert("Please enter your name to continue."); return; }
    if (!consent) { alert("Please tick the consent checkbox to proceed."); return; }
    setAnswers(Array(QUESTIONS.length).fill(null));
    setCurrent(0);
    setStage("quiz");
  }

  function selectAnswer(i) {
    if (answers[current] !== null) return;
    const next = [...answers];
    next[current] = i;
    setAnswers(next);
  }

  function nextQ() {
    if (answers[current] === null) { alert("Please select an answer to continue."); return; }
    if (current === QUESTIONS.length - 1) { setStage("results"); return; }
    setCurrent(c => c + 1);
  }

  function prevQ() { if (current > 0) setCurrent(c => c - 1); }

  if (stage === "gate") {
    return (
      <div className="nla-gate-wrap">
        <div className="nla-gate">
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✦</div>
          <h2>Mock Exam</h2>
          <p>Test your knowledge across all modules. 20 questions, multiple choice, instant graded results.</p>
          <div className="nla-input-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your full name" value={userName} onChange={e => setUserName(e.target.value)} autoComplete="name" />
          </div>
          <div className="nla-checkbox">
            <input type="checkbox" id="consent" checked={consent} onChange={e => setConsent(e.target.checked)} />
            <label htmlFor="consent">I consent to sharing my name and exam results for record-keeping. Results will be submitted with my name attached.</label>
          </div>
          <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={startQuiz}>Begin Exam →</button>
          <p className="nla-gate-note">20 questions · All topics covered · Certificate on 60%+</p>
        </div>
      </div>
    );
  }

  if (stage === "quiz") {
    const q = QUESTIONS[current];
    const pct = Math.round((current / QUESTIONS.length) * 100);
    const answered = answers[current] !== null;
    return (
      <div className="nla-quiz-wrap">
        <div className="nla-qprogress">
          <div className="nla-qpbar"><div className="nla-qpfill" style={{ width: `${pct}%` }} /></div>
          <div className="nla-qcount">{current + 1} / {QUESTIONS.length}</div>
        </div>
        <div className="nla-qcard">
          <div className="nla-qcat">{q.c}</div>
          <div className="nla-qtext">Q{current + 1}. {q.q}</div>
          <div className="nla-options">
            {q.o.map((opt, i) => {
              let cls = "nla-option";
              if (answered) {
                if (i === q.a) cls += " correct";
                else if (i === answers[current] && i !== q.a) cls += " wrong";
              } else if (answers[current] === i) cls += " sel";
              return (
                <button key={i} className={cls} onClick={() => selectAnswer(i)} disabled={answered}>
                  <span className="nla-opt-letter">{["A", "B", "C", "D"][i]}</span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
          {answered && <div className="nla-explanation">{q.e}</div>}
        </div>
        <div className="nla-quiz-nav">
          {current > 0 && <button className="btn btn-ghost" onClick={prevQ}>← Prev</button>}
          <button className="btn btn-primary" onClick={nextQ}>
            {current === QUESTIONS.length - 1 ? "Submit Exam" : "Next →"}
          </button>
        </div>
      </div>
    );
  }

  /* ── RESULTS ── */
  const correct = answers.filter((a, i) => a === QUESTIONS[i].a).length;
  const pct = Math.round((correct / QUESTIONS.length) * 100);
  const grade = pct >= 90 ? "A+" : pct >= 80 ? "A" : pct >= 70 ? "B" : pct >= 60 ? "C" : "Needs Review";
  const gradeColor = pct >= 80 ? "var(--accent)" : pct >= 60 ? "var(--accent4)" : "var(--accent3)";
  const msg = pct >= 80 ? "Excellent! You have a strong grasp of neural networks." : pct >= 60 ? "Good effort! Review the weaker modules and try again." : "Keep studying — go through the learning modules and retake!";

  const cats = {};
  QUESTIONS.forEach((q, i) => {
    if (!cats[q.c]) cats[q.c] = { t: 0, c: 0 };
    cats[q.c].t++;
    if (answers[i] === q.a) cats[q.c].c++;
  });

  const circum = 2 * Math.PI * 68;
  const dashOffset = circum * (1 - pct / 100);

  // Log results (simulates form submission)
  console.log("📋 Exam submitted:", { name: userName, correct, total: QUESTIONS.length, pct, grade, date: new Date().toISOString() });

  return (
    <div className="nla-results">
      <div className="nla-score-ring">
        <svg width="158" height="158">
          <circle cx="79" cy="79" r="68" fill="none" stroke="var(--surf2)" strokeWidth="10" transform="rotate(-90 79 79)" />
          <circle cx="79" cy="79" r="68" fill="none" stroke={gradeColor} strokeWidth="10"
            strokeDasharray={circum} strokeDashoffset={dashOffset}
            strokeLinecap="round" transform="rotate(-90 79 79)"
            style={{ transition: "stroke-dashoffset 1.2s ease" }} />
        </svg>
        <div className="nla-score-num" style={{ color: gradeColor }}>
          {pct}%
          <div className="nla-score-sub">{grade}</div>
        </div>
      </div>

      <div className="nla-results-title">Results for {userName}</div>
      <div className="nla-results-msg">{msg}</div>

      <div className="nla-res-grid">
        <div className="nla-res-stat"><div className="rv" style={{ color: "var(--accent)" }}>{correct}</div><div className="rl">Correct</div></div>
        <div className="nla-res-stat"><div className="rv" style={{ color: "var(--accent3)" }}>{QUESTIONS.length - correct}</div><div className="rl">Incorrect</div></div>
        <div className="nla-res-stat"><div className="rv" style={{ color: "var(--accent4)" }}>{pct}%</div><div className="rl">Score</div></div>
      </div>

      <div style={{ background: "var(--surf)", border: "1px solid var(--border)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2rem", textAlign: "left" }}>
        <h4 style={{ marginBottom: "1rem", fontSize: "0.93rem" }}>Performance by Category</h4>
        {Object.entries(cats).map(([name, { t, c }]) => {
          const p = Math.round((c / t) * 100);
          return (
            <div key={name} className="nla-cat-row">
              <div className="nla-cat-label">
                <span>{name}</span>
                <span style={{ color: p >= 70 ? "var(--accent)" : "var(--accent3)" }}>{c}/{t}</span>
              </div>
              <div className="nla-cat-bar">
                <div className="nla-cat-fill" style={{ width: `${p}%`, background: p >= 70 ? "var(--accent)" : "var(--accent3)" }} />
              </div>
            </div>
          );
        })}
      </div>

      {pct >= 60 ? (
        <div className="nla-cert">
          <div className="nla-cert-orb1" /><div className="nla-cert-orb2" />
          <div className="nla-cert-title">Certificate of Completion</div>
          <div className="nla-cert-name">{userName}</div>
          <div className="nla-cert-text">
            has completed the <strong>NeuroLearn Academy</strong> Neural Networks &amp; Machine Learning Mock Exam<br />
            scoring <strong>{correct}/{QUESTIONS.length} ({pct}%)</strong> — Grade: <strong>{grade}</strong><br />
            {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </div>
        </div>
      ) : (
        <div style={{ background: "rgba(253,92,92,0.08)", border: "1px solid rgba(253,92,92,0.25)", borderRadius: "14px", padding: "1.5rem", margin: "1.75rem 0", textAlign: "center" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>📚</div>
          <div style={{ fontWeight: 600, marginBottom: "0.4rem" }}>Keep Learning!</div>
          <div style={{ color: "var(--muted)", fontSize: "0.87rem" }}>Score 60% or above to earn your certificate. Review the modules and retake the exam.</div>
        </div>
      )}

      <form action="https://api.web3forms.com/submit" method="POST" style={{ background: "var(--surf)", border: "1px solid var(--border)", borderRadius: "14px", padding: "1.5rem", marginBottom: "2rem", textAlign: "left" }}>
        <h4 style={{ marginBottom: "1rem", fontSize: "0.93rem" }}>Save Your Results</h4>
        <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1.25rem" }}>Submit your score to be emailed directly to you (using Web3Forms).</p>

        {/* REPLACE THIS with your Access Key from https://web3forms.com/ */}
        <input type="hidden" name="access_key" value="86df6893-5172-47d5-be15-57938c483298" />

        {/* Web3Forms settings */}
        <input type="hidden" name="subject" value="New Exam Submission - NeuroLearn Academy" />
        <input type="hidden" name="from_name" value="NeuroLearn Academy" />

        {/* Form Fields for the email */}
        <input type="hidden" name="Student Name" value={userName} />
        <input type="hidden" name="Correct Answers" value={correct} />
        <input type="hidden" name="Total Questions" value={QUESTIONS.length} />
        <input type="hidden" name="Score" value={`${pct}%`} />
        <input type="hidden" name="Grade" value={grade} />

        <input type="hidden" name="Detailed Answers" value={JSON.stringify(answers.map((a, i) => ({
          Q: i + 1,
          Ans: a !== null ? QUESTIONS[i].o[a] : 'None',
          Correct: a === QUESTIONS[i].a
        })))} />

        <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
          Send Results to Email
        </button>
      </form>

      <h4 style={{ textAlign: "left", marginBottom: "0.9rem" }}>Question Review</h4>
      <div className="nla-review-list">
        {QUESTIONS.map((q, i) => {
          const ok = answers[i] === q.a;
          return (
            <div key={i} className={`nla-review-item ${ok ? "cr" : "wr"}`}>
              <div className="nla-review-q">{ok ? "✓" : "✗"} Q{i + 1}: {q.q}</div>
              {!ok && (
                <div style={{ marginTop: "0.35rem" }}>
                  <div className="nla-review-yours">Your answer: {answers[i] != null ? q.o[answers[i]] : "Not answered"}</div>
                  <div className="nla-review-correct-ans">Correct: {q.o[q.a]}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button className="btn btn-primary" onClick={() => { setAnswers(Array(QUESTIONS.length).fill(null)); setCurrent(0); setConsent(false); setStage("gate"); }}>Retake Exam</button>
        <button className="btn btn-outline" onClick={() => go("basics")}>Review Modules</button>
      </div>
    </div>
  );
}
