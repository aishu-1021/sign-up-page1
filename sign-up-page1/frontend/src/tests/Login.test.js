import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../components/Auth/Login";
import { BrowserRouter } from "react-router-dom";
import apiClient from "../api/apiClient";

jest.mock("../api/apiClient");

describe("Login Component", () => {
  const loginMock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders login form", () => {
    render(
      <BrowserRouter>
        <Login login={loginMock} />
      </BrowserRouter>
    );
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test("shows validation errors on empty submit", async () => {
    render(
      <BrowserRouter>
        <Login login={loginMock} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText(/login/i));
    await waitFor(() => {
      expect(screen.getAllByText(/required/i).length).toBeGreaterThan(0);
    });
  });

  test("successful login calls login prop and stores token", async () => {
    apiClient.post.mockResolvedValue({
      data: { token: "token123", user: { id: "1", name: "Test", email: "test@example.com" } },
    });

    render(
      <BrowserRouter>
        <Login login={loginMock} />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "password123" } });

    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalledWith("/auth/login", {
        email: "test@example.com",
        password: "password123",
      });
      expect(localStorage.getItem("mockjob_token")).toBe("token123");
      expect(loginMock).toHaveBeenCalledWith({
        id: "1",
        name: "Test",
        email: "test@example.com",
      });
    });
  });

  test("failed login shows alert", async () => {
    apiClient.post.mockRejectedValue({ response: { data: { message: "Invalid credentials" } } });
    window.alert = jest.fn();

    render(
      <BrowserRouter>
        <Login login={loginMock} />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "wrong@example.com" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "wrongpass" } });

    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Invalid credentials");
    });
  });
});
