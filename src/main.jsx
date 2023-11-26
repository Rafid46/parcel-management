import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/Mainlayout/MainLayout";
import Home from "./Components/Home/Homepage/Home";
import Login from "./Components/User/Login";
import AuthProvider from "./Components/Provider/AuthProvider";
import Register from "./Components/User/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
import AllUsers from "./Components/Dashboard/allUsers";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import BookParcel from "./Components/Dashboard/UserDashboard/BookParcel";
import MyParcels from "./Components/Dashboard/UserDashboard/MyParcels";
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // user
      {
        path: "bookParcel",
        element: <BookParcel></BookParcel>,
      },
      {
        path: "myParcels",
        element: <MyParcels></MyParcels>,
      },
      // admin
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
