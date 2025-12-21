import React from "react";
import { useForm } from "react-hook-form";
import apiClient from "../../api/apiClient";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      await apiClient.post("/auth/register", data);
      alert("Registration successful. Please log in.");
      navigate("/login");
    } catch (err) {
      alert(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section className="auth-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          Name
          <input type="text" {...register("name")} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </label>
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
        <label>
          Confirm Password
          <input type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>.
      </p>
    </section>
  );
}
