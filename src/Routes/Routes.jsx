import { createBrowserRouter } from "react-router-dom";
import MainLayOutes from "../Layouts/MainLayOutes";
import HomePage from "../Pages/Home/HomePage/HomePage";
import SignUpPage from "../Pages/SignUp/SignUpPage/SignUpPage";
import LoginPage from "../Pages/LogIn/LoginPage/LoginPage";
import ErrorHandlePage from "../Pages/Error/ErrorHandlePage";

const myCreatedRoutes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayOutes />,
      errorElement: <ErrorHandlePage></ErrorHandlePage>,
      children: [
         {
            path: "/",
            element: <HomePage/>
         },
         {
            path: "/signup",
            element: <SignUpPage/>
         },
         {
            path: "/login",
            element: <LoginPage/>
         },
      ]
   }
])

export default myCreatedRoutes;