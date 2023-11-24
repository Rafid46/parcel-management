import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/Mainlayout/MainLayout";
import Home from "./Components/Home/Homepage/Home";
import Login from "./Components/User/Login";
import AuthProvider from "./Components/Provider/AuthProvider";
import Register from "./Components/User/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
