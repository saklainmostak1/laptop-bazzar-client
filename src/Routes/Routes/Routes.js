import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import Orders from "../../Pages/DashBoard/Orders/Orders";
import AllLaptops from "../../Pages/Home/allLapytops/AllLaptops";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               path: '/',
               element: <Home></Home> 
            },
            {
               path: '/login',
               element: <Login></Login>
            },
            {
               path: '/register',
               element: <Register></Register>
            },
            {
               path: '/blog',
               element: <Blog></Blog>
            },
            {
               path: '/allLaptops/:id',
               element: <AllLaptops></AllLaptops>,
               loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
               
            },
            
           
        ]
    },
    {
      path: '/dashboard',
      element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
      children: [
         {
            path: '/dashboard',
            element: <Orders></Orders>
         },
         {
            path: '/dashboard/allusers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
         },
      ]
    }
])