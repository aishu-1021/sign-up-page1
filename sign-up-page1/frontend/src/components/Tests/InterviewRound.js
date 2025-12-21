import React, { useEffect, useState } from "react";
import apiClient from "../../api/apiClient";

export default function InterviewRound() {
  const [questions, setQuestions] = useState([]);
  const [cutoff, setCutoff] = useState(70);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await apiClient.get("/rounds/interview");
        setQuestions(res.data.questions);
        setCutoff(res.data.cutoff);
        setAnswers(new Array(res.data.questions.length).fill(""));
      } catch {
        alert("Failed to load questions");
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, []);

  const handleChange = (index, value) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (answers.some((a) => !a.trim())) {
      alert("Please answer all questions");
      return;
    }
    setSubmitting(true);
    try {
      const res = await apiClient.post("/rounds/interview/submit", { answers });
      setResult(res.data);
    } catch {
      alert("Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading interview questions...</div>;

  if (result)
    return (
      <div>
        <h3>Interview Result</h3>
        <p>Your Overall Score: {result.score}%</p>
        <p>Status: {result.passed ? "Passed" : "Failed"}</p>
        <details>
          <summary>AI Feedback</summary>
          <pre>{result.feedback}</pre>
        </details>
        {!result.passed && (
          <p>
            Please check your email for detailed interview feedback and suggestions.
          </p>
        )}
      </div>
    );

  return (
    <section>
      <h2>Interview Round Simulation</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, idx) => (
          <div key={idx} style={{ marginBottom: "1rem" }}>
            <label>
              <strong>Q{idx + 1}:</strong> {q}
              <textarea
                rows="3"
                style={{ width: "100%", marginTop: "0.25rem" }}
                value={answers[idx]}
                onChange={(e) => handleChange(idx, e.target.value)}
                required
              />
            </label>
          </div>
        ))}
        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Interview"}
        </button>
      </form>
      <p>Cutoff to pass: {cutoff}%</p>
    </section>
  );
}
