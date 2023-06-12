import axios from "axios";

// Set base URL
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

// Set default headers
axios.defaults.headers.common["Authorization"] = "Bearer your-token";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Set default timeout
axios.defaults.timeout = 5000; // milliseconds

// Add an interceptor for requests
axios.interceptors.request.use(
  (config) => {
    // Modify request config
    // For example, you can add headers, modify data, etc.
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add an interceptor for responses
axios.interceptors.response.use(
  (response) => {
    // Modify response data
    // For example, you can transform data, handle errors, etc.
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default axios;
