import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Register from './pages/register'
import Login from './pages/login'
import PasswordGenerator from './pages/passwordGenerator';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },

  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/password",
    element: <PasswordGenerator/>,
  }
]);



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
