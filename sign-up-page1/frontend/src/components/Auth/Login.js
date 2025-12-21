import React from "react";
import { useForm } from "react-hook-form";
import apiClient from "../../api/apiClient";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login({ login }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await apiClient.post("/auth/login", data);
      localStorage.setItem("mockjob_token", res.data.token);
      login(res.data.user);
      navigate("/dashboard");
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          Email
          <input type="email" {...register("email")} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </label>
        <label>
          Password
          <input type="password" {...register("password")} />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>.
      </p>
    </section>
  );
}
