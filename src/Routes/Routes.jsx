import { createBrowserRouter } from "react-router-dom";
import MainLayOutes from "../Layouts/MainLayOutes";
import HomePage from "../Pages/Home/HomePage/HomePage";
import ErrorHandlePage from "../Pages/Error/ErrorHandlePage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

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