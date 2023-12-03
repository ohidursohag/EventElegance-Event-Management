import useAuth from "../../Hooks/useAuth";
import useHandleLogOut from "../../Hooks/useHandleLogOut";
import LoginAndProfile from "./LoginAndProfile";
import NavLinks from "./NavLinks";


const SideBar = () => {
   const { user } = useAuth()
   const handleLogOut = useHandleLogOut()
   return (
      <div className="drawer-side z-50">
         <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay  ">
         </label>

         <div className="menu p-4 w-[200px] space-y-3 sm:w-[250px] md:w-80 min-h-full bg-gray-700/50 backdrop-blur-sm">
            {/* Sidebar content here */}
            <LoginAndProfile></LoginAndProfile>
            <NavLinks></NavLinks>
            {
               user && <div className="">
                  <button onClick={handleLogOut} className='btn  bg-[#DCB342]/70 text-lg hover:bg-[#DCB342] text-black border-none btn-sm  normal-case w-full rounded-[4px]'>
                     Log Out
                  </button>
               </div>
            }
         </div>
         <div>

         </div>
      </div>
   )
}
export default SideBar;