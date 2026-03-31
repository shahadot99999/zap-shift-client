
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";
import ProvateRoute from "./routes/ProvateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout, 
    children: [
      {
        index: true,
        Component: Home 
      },
      {
        path: 'coverage',
        Component: Coverage,
        loader: ()=>fetch('./../../public/data/warehouses.json')
      },
      {
        path: 'sendParcel',
        element: <ProvateRoute><SendParcel></SendParcel></ProvateRoute>,
        loader: ()=>fetch('./../../public/data/warehouses.json')
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children:[
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  }
]);