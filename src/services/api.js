import axiosInstance from '../lib/axios';

export const AuthService = {
  login: async (credentials) => {
    const { data } = await axiosInstance.post('/auth/login', credentials);
    return data;
  },
  registerCustomer: async (userData) => {
    const { data } = await axiosInstance.post('/auth/register/customer', userData);
    return data;
  },
  registerProvider: async (providerData) => {
    const { data } = await axiosInstance.post('/auth/register/provider', providerData);
    return data;
  },
};

export const ProviderService = {
  getProfile: async (id) => {
    const { data } = await axiosInstance.get(`/providers/${id}`);
    return data;
  },
  searchProviders: async (params) => {
    const { data } = await axiosInstance.get('/providers', { params });
    return data;
  },
  // Future endpoints...
};

export const CategoryService = {
  getAll: async () => {
    const { data } = await axiosInstance.get('/categories');
    return data;
  },
};
