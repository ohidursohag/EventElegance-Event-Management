import { NavLink } from "react-router-dom";

const NavLinks = () => {
   return (
      <div>
         <ul className="flex justify-center gap-10 font-medium text-xl text-[#a1a0a0]">
            <li>
               <NavLink className={({ isActive }) => isActive ? 'text-[#D79E70] underline' : ''} to='/'>Home</NavLink>
            </li>
            <li>
               <NavLink className={({ isActive }) => isActive ? 'text-[#D79E70] underline' : ''} to='/about'>About</NavLink>
            </li>
            <li>
               <NavLink className={({ isActive }) => isActive ? 'text-[#D79E70] underline' : ''} to='/career'>Career</NavLink>
            </li>
           
         </ul>
      </div>
   );
};

export default NavLinks;