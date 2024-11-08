import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";


export const router = createBrowserRouter([
        {
            path: '/',
            element: <Main/>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/menu',
                    element: <Menu></Menu>
                },
                {
                    path: '/order',
                    element: <Order></Order>
                },
                {
                    path: '/order/:category',
                    element: <Order></Order>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path:'/signup',
                    element:<Signup></Signup>
                }
            ]
        }
])