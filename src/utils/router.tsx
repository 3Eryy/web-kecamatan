import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AuthMiddleware from "../middleware/Auth";
import GuestMiddleware from "../middleware/Guest";

const router = createBrowserRouter([
    {
        path : '/',
        element : <AuthMiddleware><App /></AuthMiddleware>
    },
    {
        path : '/login',
        element : <GuestMiddleware> <Login/></GuestMiddleware>
    },
    {
        path : '/register',
        element : <GuestMiddleware><Register/></GuestMiddleware> 
    },
]);
export default router
