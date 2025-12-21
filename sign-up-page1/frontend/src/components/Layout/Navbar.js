import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({ user, logout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Mock Job Simulator</div>
      <div className="navbar-links">
        {user ? (
          <>
            <NavLink to="/dashboard" className="navlink">
              Dashboard
            </NavLink>
            <button onClick={handleLogout} className="btn-link">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="navlink">
              Login
            </NavLink>
            <NavLink to="/register" className="navlink">
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
