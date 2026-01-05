import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./features/catalog/HomePage";
import AdminLayout from "./features/admin/AdminLayout";
import AdminProductsPage from "./features/admin/AdminProductsPage";
import AdminBatchPage from "./features/admin/AdminBatchPage";
import AdminLoginPage from "./features/admin/AdminLoginPage";
import MediCartModule4 from "./features/payment/MediCartModule4";
import AddressPage from "./features/delivery/AddressPage";
import MyOrdersPage from "./order/MyOrdersPage";
import OrderDetailsPage from "./order/OrderDetailsPage";


import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import Changepassword from "./features/auth/pages/Changepassword";
import Prescription from "./features/auth/pages/Prescription";
import Orders from "./features/auth/pages/Orders";
import ClientCart from "./features/auth/pages/ClientCart";
import Accounts from "./features/auth/pages/Accounts";
import General from "./features/auth/layout/General";
import ClientDashboard from "./features/auth/layout/ClientDashboard";
import Dashboard from "./features/admin/analyticsSecction/Dashboard.jsx";
import Reports from "./features/admin/analyticsSecction/Reports.jsx";
import CartPage from "./components/cart/CartPage.jsx";

export default function App() {
  return (
    <Routes>

      <Route element={<General />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="change-password" element={<Changepassword />} />
      </Route>

      <Route path="dashboard/client" element={<ClientDashboard />}>
        <Route path="account" element={<Accounts />} />
        <Route path="prescription" element={<Prescription />} />
        <Route path="orders" element={<Orders />} />
        <Route path="cart" element={<ClientCart />} />
        <Route path="*" element={<h1 className="text-center mt-5">Path not defined</h1>} />
      </Route>

      {/* CUSTOMER */}
      <Route path="/" element={<HomePage />} />
      <Route path="/address" element={<AddressPage />} />
      <Route path="/cart" element={<CartPage />} />

      <Route path="/orders" element={<MyOrdersPage />} />
      <Route path="/orders/:orderId" element={<OrderDetailsPage />} />

      {/* ADMIN LOGIN */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/payment" element={<MediCartModule4 />} />

      {/* ADMIN PROTECTED ROUTES */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="products" />} />
        <Route path="products" element={<AdminProductsPage />} />
        <Route path="batches" element={<AdminBatchPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
