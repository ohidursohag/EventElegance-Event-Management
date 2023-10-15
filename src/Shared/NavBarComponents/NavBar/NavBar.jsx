import NavLinks from "../NavLinks/NavLinks";
import navLogo from '../../../assets/logo/Color logo.png'
import ProfileAndLoginButton from "../ProfileAndLoginButton/ProfileAndLoginButton";
import { Link } from "react-router-dom";
const NavBar = () => {
   return (
      <div className="flex flex-col lg:flex-row items-center sm:items-stretch lg:items-center justify-between pt-5 gap-4 backdrop-blur-sm bg-white/5">
         <div className="sm:flex sm:justify-between sm:items-center ">
            <Link to='/'>
               <img className="w-[250px] mb-5" src={navLogo} alt="logo" />
            </Link>
            <div className="hidden sm:block lg:hidden">
               <ProfileAndLoginButton></ProfileAndLoginButton>
            </div>
         </div>
         <div>
            <NavLinks></NavLinks>
         </div>
         <div className="sm:hidden lg:block">
            <ProfileAndLoginButton></ProfileAndLoginButton>
         </div>
      </div>
   );
};

export default NavBar;