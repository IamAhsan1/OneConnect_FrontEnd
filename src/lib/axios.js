import axios from 'axios';
import useAuthStore from '../store/authStore';

// Create a configured Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach JWT Token
axiosInstance.interceptors.request.use(
  (config) => {
    // Read token directly from Zustand store
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle Global 401s
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Force logout if token is expired or invalid
      const logout = useAuthStore.getState().logout;
      logout();

      // ProtectedRoutes will naturally catch this state change and redirect to /login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
