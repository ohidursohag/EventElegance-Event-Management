import { Outlet, useLocation, useNavigation } from "react-router-dom";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
import { useEffect } from "react";
import toSentenceCase from "../Utilities/toSentenceCase";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavbarComponents/NavBar";
import SideBar from "../Shared/NavbarComponents/SideBar";

const MainLayOutes = () => {
   const navigation = useNavigation()
 
   return (
      <div className="drawer text-white drawer-end font-roboto-slab">
         <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
         <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <NavBar />
            {/* Page content here */}
            <div>
               {
                  navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet></Outlet>
               }
            </div>
            <Footer />
         </div>
         <SideBar></SideBar>
      </div>
   );
};

export default MainLayOutes;