import React, { useEffect, useState } from "react";
import apiClient from "../../api/apiClient";
import { useNavigate } from "react-router-dom";

export default function TechnicalTest() {
  const [questions, setQuestions] = useState([]);
  const [cutoff, setCutoff] = useState(85);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await apiClient.get("/rounds/technical");
        setQuestions(res.data.questions);
        setCutoff(res.data.cutoff);
      } catch {
        alert("Failed to load questions");
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, []);

  const handleChange = (questionIndex, value) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions");
      return;
    }
    setSubmitting(true);
    try {
      const ansArray = questions.map((_, idx) => answers[idx] || "");
      const res = await apiClient.post("/rounds/technical/submit", { answers: ansArray });
      setResult(res.data);
      if (res.data.passed) {
        alert("You passed! Proceeding to Interview round.");
        navigate("/interview");
      }
    } catch {
      alert("Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading questions...</div>;

  if (result)
    return (
      <div>
        <h3>Test Result</h3>
        <p>Your Score: {result.score}%</p>
        <p>Status: {result.passed ? "Passed" : "Failed"}</p>
        <details>
          <summary>Feedback</summary>
          <pre>{result.feedback}</pre>
        </details>
        {!result.passed && (
          <p>
            Please check your email for detailed analysis and improvement resources.
          </p>
        )}
      </div>
    );

  return (
    <section>
      <h2>Technical Test</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, idx) => (
          <fieldset key={q.id} style={{ marginBottom: "1rem" }}>
            <legend>
              {idx + 1}. {q.question}
            </legend>
            {q.options.map((opt) => (
              <label key={opt} style={{ display: "block", margin: "0.25rem 0" }}>
                <input
                  type="radio"
                  name={`question-${idx}`}
                  value={opt}
                  checked={answers[idx] === opt}
                  onChange={() => handleChange(idx, opt)}
                  required
                />{" "}
                {opt}
              </label>
            ))}
          </fieldset>
        ))}
        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Test"}
        </button>
      </form>
      <p>Cutoff to pass: {cutoff}%</p>
    </section>
  );
}
