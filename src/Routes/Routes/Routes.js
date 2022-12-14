import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/DashBoard/AddProducts/AddProducts";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyBuyers from "../../Pages/DashBoard/MyBuyers/MyBuyers";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import MyWishList from "../../Pages/DashBoard/MyWishList/MyWishList";
import Orders from "../../Pages/DashBoard/Orders/Orders";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import RepotedItems from "../../Pages/DashBoard/RepotedItems/RepotedItems";
import AllLaptops from "../../Pages/Home/allLapytops/AllLaptops";
import Home from "../../Pages/Home/Home/Home";
import ReportToAdmin from "../../Pages/Home/ReportToAdmin/ReportToAdmin";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
               loader: ({params}) => fetch(`https://used-product-resale-server-vert.vercel.app/category/${params.id}`)
               
            },
            {
               path: '/reportadmin/:id',
               element: <ReportToAdmin></ReportToAdmin>,
               loader: ({params}) => fetch(`https://used-product-resale-server-vert.vercel.app/laptops/${params.id}`)

            },
            
           
        ]
    },
    {
      path: '/dashboard',
      element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
      errorElement: <DisplayError></DisplayError>,
      children: [
         {
            path: '/dashboard',
            element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
         },
         {
            path: '/dashboard/order',
            element: <BuyerRoute><Orders></Orders></BuyerRoute>
         },
         {
            path: '/dashboard/allusers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
         },
         {
            path: '/dashboard/addproducts',
            element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
         },
         {
            path: '/dashboard/myproducts',
            element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
         },
         {
            path: '/dashboard/wishlist',
            element: <BuyerRoute><MyWishList></MyWishList></BuyerRoute>
         },
         {
            path: '/dashboard/buyers',
            element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
         },
         {
            path: '/dashboard/report',
            element: <AdminRoute><RepotedItems></RepotedItems></AdminRoute>
            

         },
       
         {
            path: '/dashboard/payment/:id',
            element: <BuyerRoute><Payment></Payment></BuyerRoute>,
            loader: ({params}) => fetch(`https://used-product-resale-server-vert.vercel.app/bookings/${params.id}`)
         },
      ]
    }
])