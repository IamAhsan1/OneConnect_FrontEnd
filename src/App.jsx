import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import PublicLayout from './layouts/PublicLayout';
import CustomerLayout from './layouts/CustomerLayout';
import ProviderLayout from './layouts/ProviderLayout';

// Auth Pages (Side 4)
import Login from './pages/auth/Login';
import CustomerRegister from './pages/auth/CustomerRegister';
import ProviderRegister from './pages/auth/ProviderRegister';
import ProviderSuccess from './pages/auth/ProviderSuccess';
import ForgotPassword from './pages/auth/ForgotPassword';

// Public Pages (Side 1)
import Home from './pages/public/Home';
import ProviderProfile from './pages/public/ProviderProfile';

// Customer Pages
import Checkout from './pages/customer/Checkout';
import CustomerDashboard from './pages/customer/Dashboard';

// Provider Pages (Side 2)
import ProviderOnboarding from './pages/provider/Onboarding';
import ProviderDashboard from './pages/provider/Dashboard';
import ProviderSettings from './pages/provider/Settings';
import ProviderStaff from './pages/provider/Staff';

// Super Admin Pages (Side 3)
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminCategories from './pages/admin/Categories';
import AdminApprovals from './pages/admin/Approvals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/provider/:id" element={<ProviderProfile />} />
        </Route>

        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register/customer" element={<CustomerRegister />} />
          <Route path="/register/provider" element={<ProviderRegister />} />
          <Route path="/register/provider/success" element={<ProviderSuccess />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        
        {/* Customer Portal Routes */}
        <Route element={<CustomerLayout />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        </Route>
        
        {/* Provider Portal Routes */}
        <Route element={<ProviderLayout />}>
          <Route path="/provider/onboarding" element={<ProviderOnboarding />} />
          <Route path="/provider/dashboard" element={<ProviderDashboard />} />
          <Route path="/provider/settings" element={<ProviderSettings />} />
          <Route path="/provider/staff" element={<ProviderStaff />} />
        </Route>

        {/* Super Admin Portal Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/approvals" element={<AdminApprovals />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
