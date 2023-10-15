import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavBar from "../Shared/NavBarComponents/NavBar/NavBar";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
import { useEffect } from "react";
import toSentenceCase from "../Utilities/toSentenceCase";

const MainLayOutes = () => {
   const navigation = useNavigation()

   const loc = useLocation()

   useEffect(() => {
      if (loc.pathname === '/') {
         document.title = `EventElegance | Home`
      } else if (loc.state) {
         document.title = loc.state
      }
      else {
         document.title = `${toSentenceCase(loc.pathname.replace('/', ''))}`
      }
   }, [loc.pathname, loc.state])
   
   return (
      <div className="">
         <div className="container mx-auto absolute z-50 inset-x-0">
            <NavBar></NavBar>
         </div>
         <div >
            {
               navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet></Outlet>
            }
         </div>
      </div>
   );
};

export default MainLayOutes;