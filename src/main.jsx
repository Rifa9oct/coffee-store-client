import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import AuthProvider from './provider/AuthProvider';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Users from './components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("https://coffee-store-server-gzz93wejl-kohinur-akthers-projects.vercel.app/coffees")
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-gzz93wejl-kohinur-akthers-projects.vercel.app/coffees/${params.id}`)
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader:() => fetch("https://coffee-store-server-gzz93wejl-kohinur-akthers-projects.vercel.app/users")
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
