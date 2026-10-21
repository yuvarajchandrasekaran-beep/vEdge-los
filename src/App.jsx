import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/layout/Layout';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import LOSListPage from './pages/los/LOSListPage';
import LOSDetailPage from './pages/los/LOSDetailPage';
import ActionPlansPage from './pages/action-plans/ActionPlansPage';
import WorkflowTasksPage from './pages/workflow-tasks/WorkflowTasksPage';
import ReportsPage from './pages/reports/ReportsPage';
import RiskLibraryPage from './pages/admin/RiskLibraryPage';
import ControlsLibraryPage from './pages/admin/ControlsLibraryPage';
import KRILibraryPage from './pages/admin/KRILibraryPage';
import UsersPage from './pages/admin/UsersPage';
import RolesPage from './pages/admin/RolesPage';
import SystemSettingsPage from './pages/admin/SystemSettingsPage';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={currentUser ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="market-los" element={<LOSListPage type="Market" />} />
        <Route path="market-los/:losId" element={<LOSDetailPage />} />
        <Route path="group-los" element={<LOSListPage type="Group" />} />
        <Route path="group-los/:losId" element={<LOSDetailPage />} />
        <Route path="action-plans" element={<ActionPlansPage />} />
        <Route path="workflow-tasks" element={<WorkflowTasksPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="risk-library" element={<RiskLibraryPage />} />
        <Route path="controls-library" element={<ControlsLibraryPage />} />
        <Route path="kri-library" element={<KRILibraryPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="roles" element={<RolesPage />} />
        <Route path="settings" element={<SystemSettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </BrowserRouter>
    </AuthProvider>
  );
}
