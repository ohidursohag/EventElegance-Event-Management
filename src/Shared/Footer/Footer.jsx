import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Color_logo.png';
import Container from '../Container';

const Footer = () => {
   return (
      <div className=' bg-black text-white'>
         <Container>
            <footer className=" mx-auto flex flex-col lg:flex-row justify-between  py-10  items-center">
               <aside className='mx-auto'>
                  <div className="w-64 space-y-3  md:mx-0 mx-auto text-center md:text-left">
                     <div>
                        <img src={logo} alt="" />
                     </div>
                     <div className=''>
                        <h1 className='text-xl  font-semibold  text-white'>Connect with Us</h1>
                        <form className='space-y-5 '>
                           <input type="text" name="name" id="name" placeholder="Name" className=" h-10 w-full mt-1  bg-white px-4 text-sm outline-none" />
                           <input type="email" name="email" id="email" placeholder="email" className=" h-10 w-full mt-1  bg-white px-4 text-sm outline-none" />
                           <textarea name="message" id="message" className='w-full h-[100px] pl-2' placeholder='your message here'></textarea>
                           <button className='font-Rancho text-xl px-2 py-2 border-[2px] border-[#D79E70] duration-300 text-[#D79E70] hover:border-orange-300 hover:text-orange-300  rounded-lg' type="button">Send Message</button>
                        </form>
                     </div>
                  </div>
               </aside>
               <div className='flex flex-1 justify-between flex-col md:flex-row gap-10 lg:gap-0 mt-10'>
                  <nav className='lg:mx-auto flex gap-1 flex-col'>
                     <header className="text-lg font-semibold text-[#D79E70]">Services</header>
                     <Link to='/' className="text-gray-300 hover:text-white duration-300">Weddings</Link>
                     <Link to='' className="text-gray-300 hover:text-white duration-300">Birthday Parties</Link>
                     <Link to='' className="text-gray-300 hover:text-white duration-300">Anniversaries</Link>
                     <Link to='/' className="text-gray-300 hover:text-white duration-300">Engagement Parties</Link>
                     <Link to='' className="text-gray-300 hover:text-white duration-300">Retirement Parties</Link>
                     <Link to='' className="text-gray-300 hover:text-white duration-300">Baby Shower</Link>
                  </nav>
                  <nav className='lg:mx-auto flex gap-1 flex-col'>
                     <header className="text-lg font-semibold text-[#D79E70]">Company</header>
                     <Link to='' className="text-gray-300 hover:text-white duration-300">Our Story</Link>
                     <Link to='' className="text-gray-300 hover:text-white duration-300">Contact Us</Link>
                     <Link to='' className="text-gray-300 hover:text-white duration-300">Career</Link>
                     <Link to='' className="text-gray-300 hover:text-white duration-300">FAQs</Link>

                  </nav>
                  <nav className='lg:mx-auto flex gap-1 flex-col'>
                     <header className="text-lg font-semibold text-[#D79E70]">Legal</header>
                     <Link to='' className="text-gray-300 hover:text-white duration-300">Terms of Service</Link>
                     <Link to='' className="text-gray-300 hover:text-white duration-300">Privacy policy</Link>

                  </nav>
                  <nav className='lg:mx-auto'>
                     <header className="text-lg font-semibold text-[#D79E70] mb-2">Connect Us</header>
                     <p className='text-gray-300'>347 Ankunding Harbors, Alicastad, <br /> CA 09976-9266</p>
                     <div className='space-y-2 mb-5'>
                        <p className="text-gray-300 "><span className='text-[#D79E70]'>Email:</span> support@event-elegance.com</p>
                        <p className="text-gray-300 "><span className='text-[#D79E70]'>Call Us:</span> +880 9642 500 500</p>
                     </div>
                     <div className="flex gap-4 hover:cursor-pointer">
                        <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                        <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                        <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                     </div>

                  </nav>
               </div>
            </footer>
         </Container>

         <div className=' py-4 text-center '>
            <h3 className='font-Rancho text-white'>&copy; 2023 <Link className='underline text-[#D79E70] duration-300 hover:text-orange-300' to='/'>Event Elegance</Link> ! All Rights Reserved</h3>
         </div>
      </div>
   );
};

export default Footer;