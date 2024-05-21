import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import RegisterPage from './pages/RegisterPage';
import VideoPage from './pages/VideoPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdmPage from './pages/AdmPage';
import CatalogAdmPage from './pages/CatalogAdmPage';
import AddFilme from './pages/AddFilme';
import UserList from './pages/UserListPage';
import { UserIdProvider } from './context/UserId';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/video",
    element: <VideoPage/>
  },
  {
    path: "/home",
    element: <HomePage/>
  },
  {
    path: "/home_adm",
    element: <AdmPage/>
  },
  {
    path: "/catalog",
    element: <CatalogAdmPage/>
  },
  {
    path: "/AddMovie",
    element: <AddFilme/>
  }, 
  {
    path: "/user_list",
    element: <UserList/>
  } 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserIdProvider>
      <RouterProvider router={router} />
    </UserIdProvider>
  </React.StrictMode>,
)
