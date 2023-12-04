import { createBrowserRouter } from "react-router-dom";
import MainLayOutes from "../Layouts/MainLayOutes";
import HomePage from "../Pages/Home/HomePage/HomePage";
import ErrorHandlePage from "../Pages/Error/ErrorHandlePage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivaeRoute from "./PrivaeRoute";
import AboutUS from "../Pages/AboutUS/AboutUS";

const myCreatedRoutes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayOutes />,
      errorElement: <ErrorHandlePage></ErrorHandlePage>,
      children: [
         {
            index:true,
            element: <HomePage />,
         },
         {
            path: 'service-details/:id',
            element: <PrivaeRoute>
               <ServiceDetails />
            </PrivaeRoute>
         },
         {
            path: 'about-us',
            element:<AboutUS/>
         }
      ],
   },
   {
      path: "/signup",
      element: <SignUpPage />
   },
   {
      path: "/login",
      element: <LoginPage />
   },
])

export default myCreatedRoutes;