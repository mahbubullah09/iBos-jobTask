import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Homepage/Home.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import AuthProvider from './ContexApi/AuthProvider.jsx';
import Login from './Pages/Login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
