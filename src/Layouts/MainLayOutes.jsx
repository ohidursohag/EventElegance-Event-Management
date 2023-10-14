import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Shared/NavBarComponents/NavBar/NavBar";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";

const MainLayOutes = () => {
   const navigation = useNavigation()
   console.log(navigation.state);
   return (
      <div className="container mx-auto">
         <NavBar></NavBar>
         <div >
            {
               navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet></Outlet>
            }
         </div>
      </div>
   );
};

export default MainLayOutes;