import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import AptitudeTest from "./components/Tests/AptitudeTest";
import TechnicalTest from "./components/Tests/TechnicalTest";
import InterviewRound from "./components/Tests/InterviewRound";
import HRRound from "./components/Tests/HRRound";
import Navbar from "./components/Layout/Navbar";
import useAuth from "./hooks/useAuth";

export default function App() {
  const { user, loading, login, logout } = useAuth();

  // Protect routes that require authentication
  const RequireAuth = ({ children }) => {
    if (loading) return <div>Loading...</div>;
    if (!user) return <Navigate to="/login" replace />;
    return children;
  };

  return (
    <>
      <Navbar user={user} logout={logout} />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
          <Route path="/login" element={!user ? <Login login={login} /> : <Navigate to="/dashboard" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/aptitude"
            element={
              <RequireAuth>
                <AptitudeTest />
              </RequireAuth>
            }
          />
          <Route
            path="/technical"
            element={
              <RequireAuth>
                <TechnicalTest />
              </RequireAuth>
            }
          />
          <Route
            path="/interview"
            element={
              <RequireAuth>
                <InterviewRound />
              </RequireAuth>
            }
          />
          <Route
            path="/hr"
            element={
              <RequireAuth>
                <HRRound />
              </RequireAuth>
            }
          />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
    </>
  );
}
