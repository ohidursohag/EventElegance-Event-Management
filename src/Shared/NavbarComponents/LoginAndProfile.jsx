import { NavLink } from "react-router-dom";
import Profile from "./Profile";


import useAuth from "../../Hooks/useAuth";


const LoginAndProfile = () => {
   const { user } = useAuth()
   // console.log(user);

   return (
      <>
         {
            user
               ? <>
                  <div className="flex justify-center items-center mt-5 md:mt-0">
                     <Profile></Profile>
                  </div>
               </>
               : <NavLink to='/login' className='btn btn-ghost rounded-[4px] text-lg btn-sm normal-case text-white'>
                  Login
               </NavLink>
         }
      </>
   )
}
export default LoginAndProfile;