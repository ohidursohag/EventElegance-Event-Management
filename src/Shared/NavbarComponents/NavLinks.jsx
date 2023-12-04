import { NavLink } from "react-router-dom";


const NavLinks = () => {
   return(
      <>
         <NavLink to="/" className={({ isActive }) => isActive ? 'btn  bg-[#DCB342]/70 rounded-[4px] text-lg hover:bg-[#DCB342] text-black border-none btn-sm  normal-case' : 'btn btn-ghost rounded-[4px] text-lg btn-sm normal-case text-white'}>
            Home
         </NavLink>
         <NavLink to="/about-us" className={({ isActive }) => isActive ? 'btn bg-[#DCB342]/70 text-lg hover:bg-[#DCB342] text-black border-none btn-primary btn-sm rounded-[4px] normal-case' : 'btn rounded-[4px] btn-ghost btn-sm text-lg normal-case text-white'}>
            About Us
         </NavLink>
         {/* <NavLink to="/blog" className={({ isActive }) => isActive ? 'btn btn-primary bg-[#DCB342]/70 text-lg hover:bg-[#DCB342] text-black border-none btn-sm rounded-[4px] normal-case' : 'btn rounded-[4px] btn-ghost btn-sm text-lg normal-case text-white'}>
            Blog
         </NavLink>         */}
      </>
   )}
export default NavLinks;