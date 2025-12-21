import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add JWT token to headers if present
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("mockjob_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle response errors globally if needed
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("mockjob_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiClient;
