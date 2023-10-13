import { NavLink } from "react-router-dom";

const NavLinks = () => {
   return (
      <div>
         <ul className="flex justify-center gap-10 font-medium text-lg text-[#706F6F]">
            <li>
               <NavLink className={({ isActive }) => isActive ? 'text-pink-500 underline' : ''} to='/'>Home</NavLink>
            </li>
            <li>
               <NavLink className={({ isActive }) => isActive ? 'text-pink-500 underline' : ''} to='/about'>About</NavLink>
            </li>
            <li>
               <NavLink className={({ isActive }) => isActive ? 'text-pink-500 underline' : ''} to='/career'>Career</NavLink>
            </li>
            <li>
               <NavLink className={({ isActive }) => isActive ? 'text-pink-500 underline' : ''} to='/login'>Login</NavLink>
            </li>
            <li>
               <NavLink className={({ isActive }) => isActive ? 'text-pink-500 underline' : ''} to='/signup'>Register</NavLink>
            </li>
         </ul>
      </div>
   );
};

export default NavLinks;