
// import { NavLink } from 'react-router-dom';
import avaterPlaceHolder from '../../assets/Icon/avater.png'
import useAuth from '../../Hooks/useAuth';
import useHandleLogOut from '../../Hooks/useHandleLogOut';

const Profile = () => {
   const { user } = useAuth();
   const handleLogOut = useHandleLogOut()

   return (
      <div id='profileDropdown' tabIndex={0} className="dropdown flex flex-col justify-center items-center ">
         <button className="btn btn-circle border-[3px] border-[#282531] focus:border-[#DCB342] hover:border-[#DCB342] md:btn-md p-0 mx-auto">
            <img className='rounded-full' src={user?.photoURL || avaterPlaceHolder} />
         </button>
         <div className='md:hidden mt-2 space-y-3'>
            <div className='text-lg text-white text-center'>{user?.displayName}</div>
         </div>
         <div tabIndex={0} className="dropdown-content w-[200px] bg-gray-700/50 backdrop-blur-sm  z-[1] menu  md:shadow hidden md:block rounded-b-lg  md:-right-2 top-[68px] space-y-4">
            <div className='text-lg text-white text-center'>{user?.displayName}</div>
            <div className="">
               <button onClick={handleLogOut} className='btn  bg-[#DCB342]/70 text-lg hover:bg-[#DCB342] text-black border-none btn-sm  normal-case w-full rounded-[4px]'>
                  Log Out
               </button>
            </div>

            {/* <NavLink to="/user/my-food-cart" className={({ isActive }) => isActive ? 'btn  bg-[#DCB342]/70 hover:bg-[#DCB342] rounded-[4px] text-black border-none btn-sm  normal-case' : 'btn btn-ghost rounded-[4px] btn-sm normal-case'}>
               My Cart
            </NavLink> */}
         </div>

      </div>
   )
}
export default Profile;