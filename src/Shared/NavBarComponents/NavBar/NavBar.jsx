import NavLinks from "../NavLinks/NavLinks";
import navLogo from '../../../assets/logo/Color logo.png'
import ProfileAndLoginButton from "../ProfileAndLoginButton/ProfileAndLoginButton";
const NavBar = () => {
   return (
      <div className="flex items-center justify-between ">
         <figure>
            <img className="w-[250px]" src={navLogo} alt="logo" />
         </figure>
         <NavLinks></NavLinks>
         <ProfileAndLoginButton></ProfileAndLoginButton>
      </div>
   );
};

export default NavBar;