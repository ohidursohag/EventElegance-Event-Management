import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBarComponents/NavBar/NavBar";

const MainLayOutes = () => {
   return (
      <div className="container mx-auto">
         <NavBar></NavBar>
         <Outlet></Outlet>
      </div>
   );
};

export default MainLayOutes;