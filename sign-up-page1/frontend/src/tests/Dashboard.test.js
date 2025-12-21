import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Dashboard from "../components/Dashboard/Dashboard";
import apiClient from "../api/apiClient";
import { BrowserRouter } from "react-router-dom";

jest.mock("../api/apiClient");

describe("Dashboard Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading initially", () => {
    apiClient.get.mockReturnValue(new Promise(() => {})); // Never resolves
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    expect(screen.getByText(/loading dashboard/i)).toBeInTheDocument();
  });

  test("renders dashboard data after fetch", async () => {
    apiClient.get.mockResolvedValue({
      data: {
        aptitude: { score: 90, passed: true, feedback: "Good", date: "2023-01-01T00:00:00Z" },
        technical: { score: 75, passed: false, feedback: "Needs work", date: "2023-01-02T00:00:00Z" },
        interview: null,
        hr: null,
      },
    });

    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/aptitude round/i)).toBeInTheDocument();
      expect(screen.getByText(/passed/i)).toBeInTheDocument();
      expect(screen.getByText(/90/i)).toBeInTheDocument();
      expect(screen.getByText(/failed/i)).toBeInTheDocument();
      expect(screen.getByText(/75/i)).toBeInTheDocument();
      expect(screen.getAllByText(/not attempted/i).length).toBeGreaterThanOrEqual(1);
    });
  });

  test("shows alert on fetch failure", async () => {
    apiClient.get.mockRejectedValue(new Error("Network error"));
    window.alert = jest.fn();

    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Failed to load dashboard");
    });
  });
});
