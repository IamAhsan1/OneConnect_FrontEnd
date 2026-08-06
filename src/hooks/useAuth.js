import { useState } from 'react';
import useAuthStore from '../store/authStore';
import { AuthService } from '../services/api';

/**
 * Custom hook to abstract away authentication logic.
 * Components can use this hook instead of calling Zustand and API services directly.
 */
export const useAuth = () => {
  const { user, isAuthenticated, login, logout, token } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = async (credentials) => {
    setIsLoading(true);
    setError(null);
    try {
      // 1. Call API
      const response = await AuthService.login(credentials);
      
      // 2. Save to Zustand (which persists to localStorage)
      login(response.user, response.token);
      
      return response.user;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed. Please check your credentials.';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logoutUser = () => {
    logout();
  };

  return {
    user,
    isAuthenticated,
    token,
    isLoading,
    error,
    loginUser,
    logoutUser
  };
};

export default useAuth;
