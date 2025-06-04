import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />
    },
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/register',
        element : <Register/>
    },
]);
export default router
