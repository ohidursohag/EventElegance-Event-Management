import { Link, NavLink, useLocation } from 'react-router-dom';
import userLogo from '../../../assets/images/user.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
const ProfileAndLoginButton = () => {
   const { user, logOut } = useContext(AuthContext)
   const location = useLocation()
   console.log(location);
   const handleSignOut = () => {
      logOut()
         .then(() => {
            Swal.fire({
               icon: 'success',
               title: 'Sucessfully logged Out',
            })
         })
         .catch(err => {console.error(err.message) })
   }
   console.log(user);
   return (
      <div>
         {
            user
               ? <div className='flex gap-2 items-center '>
                  <div className='flex flex-col items-center'>
                     <figure className='w-10 h-10 border border-gray-400 rounded-full'>
                        <img className='w-10 rounded-full' src={user?.photoURL || userLogo} alt="" />
                     </figure>
                     <p className='text-gray-400'>{user?.displayName.slice(0,16) || 'user name'}</p>
                  </div>
                  <Link onClick={handleSignOut}
                     to='/' >
                     <button className='px-8 py-[6px] text-xl font-medium  text-[#D79E70] rounded' >Log Out</button>
                  </Link>
               </div>
               : <NavLink to={location.pathname === '/login' ? '/signup' : location.pathname === '/signup' ? '/login' : '/login'}>
                  <button className={`px-8 py-[6px] font-medium text-xl  text-[#D79E70] rounded `} >{location.pathname === '/login' ? 'SignUp' : location.pathname === '/signup'? 'Login': 'Login'}</button>
               </NavLink>
         }
         </div>
   );
};

export default ProfileAndLoginButton;