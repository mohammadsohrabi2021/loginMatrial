import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home.jsx";
import HomeStart from '../Pages/HomeStart';
import Todo from "../Pages/Todo";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
            index: true,
            element: <HomeStart/>,
              
        },
        {
            path: "Register",
            element: <Register/>,
              
        },
        {
            path: "Login",
            element: <Login/>,
              
        },
        {
            path: "Todo",
            element: <Todo/>,
              
        },
      ]
        
    },
  ]);
  
  export default router;
  