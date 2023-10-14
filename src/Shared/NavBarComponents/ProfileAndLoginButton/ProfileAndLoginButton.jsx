import { Link } from 'react-router-dom';
import userLogo from '../../../assets/images/user.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
const ProfileAndLoginButton = () => {
   const { user, logOut } = useContext(AuthContext)

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
                     <p className='text-gray-400'>{user?.displayName || 'user name'}</p>
                  </div>
                  <Link onClick={handleSignOut}
                     to='/' >
                     <button className='px-8 py-[6px] bg-[#403F3F] text-white rounded' >Log Out</button>
                  </Link>
               </div>
               : <Link to='/login'>
                  <button className='px-8 py-[6px] bg-[#403F3F] text-white rounded' >Login</button>
               </Link>
         }
         </div>
   );
};

export default ProfileAndLoginButton;