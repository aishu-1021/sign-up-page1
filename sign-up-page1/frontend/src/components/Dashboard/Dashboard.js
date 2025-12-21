import React, { useEffect, useState } from "react";
import apiClient from "../../api/apiClient";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProgress() {
      try {
        const res = await apiClient.get("/dashboard");
        setProgress(res.data);
      } catch (err) {
        alert("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    }
    fetchProgress();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;

  if (!progress) return <div>No progress data available.</div>;

  const rounds = [
    { key: "aptitude", label: "Aptitude Round", path: "/aptitude" },
    { key: "technical", label: "Technical Round", path: "/technical" },
    { key: "interview", label: "Interview Round", path: "/interview" },
    { key: "hr", label: "HR Round", path: "/hr" },
  ];

  const getStatus = (roundKey) => {
    const data = progress[roundKey];
    if (!data) return "Not attempted";
    if (data.passed) return "Passed";
    if (data.passed === false) return "Failed";
    return "Pending";
  };

  return (
    <section>
      <h2>Your Progress</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Round</th>
            <th>Status</th>
            <th>Score (%)</th>
            <th>Feedback</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rounds.map(({ key, label, path }) => {
            const data = progress[key];
            const status = getStatus(key);
            return (
              <tr key={key}>
                <td>{label}</td>
                <td>{status}</td>
                <td>{data?.score ?? "N/A"}</td>
                <td>
                  {data?.feedback ? (
                    <details>
                      <summary>View Feedback</summary>
                      <pre>{data.feedback}</pre>
                    </details>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>
                  {status === "Not attempted" || status === "Passed" ? (
                    <Link to={path}>Start / Retake</Link>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
