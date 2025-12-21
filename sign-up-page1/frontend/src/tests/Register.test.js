import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Register from "../components/Auth/Register";
import { BrowserRouter } from "react-router-dom";
import apiClient from "../api/apiClient";

jest.mock("../api/apiClient");

describe("Register Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders register form", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    expect(screen.getByText(/register/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
  });

  test("shows validation errors on empty submit", async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText(/register/i));
    await waitFor(() => {
      expect(screen.getAllByText(/required/i).length).toBeGreaterThan(0);
    });
  });

  test("successful registration shows alert and redirects", async () => {
    apiClient.post.mockResolvedValue({});
    window.alert = jest.fn();
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText(/^email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/^password$/i), { target: { value: "password123" } });
    fireEvent.change(screen.getByLabelText(/confirm password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText(/register/i));

    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalledWith("/auth/register", {
        name: "Test User",
        email: "test@example.com",
        password: "password123",
        confirmPassword: "password123",
      });
      expect(window.alert).toHaveBeenCalledWith("Registration successful. Please log in.");
    });
  });

  test("failed registration shows alert", async () => {
    apiClient.post.mockRejectedValue({ response: { data: { message: "Email exists" } } });
    window.alert = jest.fn();

    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText(/^email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/^password$/i), { target: { value: "password123" } });
    fireEvent.change(screen.getByLabelText(/confirm password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText(/register/i));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Email exists");
    });
  });
});
