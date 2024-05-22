import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import RegisterPage from './pages/RegisterPage';
import VideoPage from './pages/VideoPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdmPage from './pages/AdmPage';
import CatalogAdmPage from './pages/CatalogAdmPage';
import AddFilme from './pages/AddFilme';
import UserList from './pages/UserListPage';
import { UserIdProvider } from './context/UserId';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/video/:TitleVideo",
    element: (
      <ProtectedRoute>
        <VideoPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/home_adm",
    element: (
      <ProtectedRoute>
        <AdmPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/catalog",
    element: (
      <ProtectedRoute>
        <CatalogAdmPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/AddMovie",
    element: (
      <ProtectedRoute>
        <AddFilme />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user_list",
    element: (
      <ProtectedRoute>
        <UserList />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <UserIdProvider>
        <RouterProvider router={router} />
      </UserIdProvider>
    </AuthProvider>
  </React.StrictMode>,
);
