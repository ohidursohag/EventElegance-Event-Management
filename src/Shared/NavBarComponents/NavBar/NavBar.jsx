import NavLinks from "../NavLinks/NavLinks";
import navLogo from '../../../assets/logo/Color logo.png'
import ProfileAndLoginButton from "../ProfileAndLoginButton/ProfileAndLoginButton";
import { Link } from "react-router-dom";
const NavBar = () => {
   return (
      <div className="flex items-center justify-between ">
         <Link to='/'>
            <img className="w-[250px]" src={navLogo} alt="logo" />
         </Link>
         <NavLinks></NavLinks>
         <ProfileAndLoginButton></ProfileAndLoginButton>
      </div>
   );
};

export default NavBar;