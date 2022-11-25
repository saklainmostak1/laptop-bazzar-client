import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryCard from "../../Pages/Home/Category/CategoryCard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

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
               path: '/laptops/:id',
               element: <CategoryCard></CategoryCard>,
               loader: ({params}) => fetch(`http://localhost:5000/laptops/${params.id}`)
            },
        ]
    }
])