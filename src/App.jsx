import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Loader from './components/common/Loader';
import NotFound from './pages/public/NotFound';
import ProtectedRoute from './components/common/ProtectedRoute';

// Layouts (Eagerly loaded to prevent layout flashing)
import AuthLayout from './layouts/AuthLayout';
import PublicLayout from './layouts/PublicLayout';
import CustomerLayout from './layouts/CustomerLayout';
import ProviderLayout from './layouts/ProviderLayout';
import AdminLayout from './layouts/AdminLayout';

// Auth Pages (Side 4)
const Login = lazy(() => import('./pages/auth/Login'));
const CustomerRegister = lazy(() => import('./pages/auth/CustomerRegister'));
const ProviderRegister = lazy(() => import('./pages/auth/ProviderRegister'));
const ProviderSuccess = lazy(() => import('./pages/auth/ProviderSuccess'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));

// Public Pages (Side 1)
const Home = lazy(() => import('./pages/public/Home'));
const ProviderProfile = lazy(() => import('./pages/public/ProviderProfile'));
const AboutUs = lazy(() => import('./pages/public/AboutUs'));
const ContactUs = lazy(() => import('./pages/public/ContactUs'));
const Services = lazy(() => import('./pages/public/Services'));
const Doctors = lazy(() => import('./pages/public/Doctors'));

// Customer Pages
const Checkout = lazy(() => import('./pages/customer/Checkout'));
const CustomerDashboard = lazy(() => import('./pages/customer/Dashboard'));

// Provider Pages (Side 2)
const ProviderOnboarding = lazy(() => import('./pages/provider/Onboarding'));
const ProviderDashboard = lazy(() => import('./pages/provider/Dashboard'));
const ProviderSettings = lazy(() => import('./pages/provider/Settings'));
const ProviderStaff = lazy(() => import('./pages/provider/Staff'));
const ProviderSchedule = lazy(() => import('./pages/provider/Schedule'));
const ProviderClients = lazy(() => import('./pages/provider/Clients'));

// Super Admin Pages (Side 3)
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const AdminCategories = lazy(() => import('./pages/admin/Categories'));
const AdminApprovals = lazy(() => import('./pages/admin/Approvals'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader fullScreen />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/provider/:id" element={<ProviderProfile />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
          </Route>

          {/* Authentication Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register/customer" element={<CustomerRegister />} />
            <Route path="/register/provider" element={<ProviderRegister />} />
            <Route path="/register/provider/success" element={<ProviderSuccess />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Customer Portal Routes (PROTECTED) */}
          {/* <Route element={<ProtectedRoute allowedRoles={['CUSTOMER']} />}> */}
          <Route element={<CustomerLayout />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          </Route>
          {/* </Route> */}

          {/* Provider Portal Routes (PROTECTED) */}
          {/* <Route element={<ProtectedRoute allowedRoles={['PROVIDER']} />}> */}
          <Route element={<ProviderLayout />}>
            <Route path="/provider/onboarding" element={<ProviderOnboarding />} />
            <Route path="/provider/dashboard" element={<ProviderDashboard />} />
            <Route path="/provider/schedule" element={<ProviderSchedule />} />
            <Route path="/provider/clients" element={<ProviderClients />} />
            <Route path="/provider/settings" element={<ProviderSettings />} />
            <Route path="/provider/staff" element={<ProviderStaff />} />
          </Route>
          {/* </Route> */}

          {/* Super Admin Portal Routes (PROTECTED) */}
          {/* <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}> */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/categories" element={<AdminCategories />} />
            <Route path="/admin/approvals" element={<AdminApprovals />} />
          </Route>
          {/* </Route> */}

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
