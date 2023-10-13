import { Link } from 'react-router-dom';
import userLogo from '../../../assets/images/user.png'
const ProfileAndLoginButton = () => {
   return (
      <div>
         <div className='flex gap-2 items-center '>
            <div className='flex flex-col items-center'>
               <figure className='w-10 h-10 border border-gray-400 rounded-full'>
                  <img className='w-10 rounded-full' src={userLogo} alt="" />
               </figure>
               <p className='text-gray-400'>{'user name'}</p>
            </div>
            <Link to='/login' >
               <button className='px-8 py-[6px] bg-[#403F3F] text-white rounded' >Log In</button>
            </Link>
         </div>
      </div>
   );
};

export default ProfileAndLoginButton;