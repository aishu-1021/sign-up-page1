// jest-dom adds custom jest matchers for asserting on DOM nodes.
import "@testing-library/jest-dom/extend-expect";

// Mock fetch globally for tests
global.fetch = require("jest-fetch-mock");

// Mock axios globally
jest.mock("axios");
