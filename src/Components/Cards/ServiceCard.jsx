
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({ service,index }) => {
   AOS.init({
      duration: 1500,
   })
//   console.log(service);
   return (
      <div data-aos={(index + 1) % 2 === 0 ? 'fade-left' :'fade-right'} className=" flex flex-col sm:flex-row sm:p-4  bg-white shadow-md border border-[#D79E70]/20 rounded-xl text-gray-700 bg-clip-border mb-7">
         <div className="overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border h-[350px] sm:w-[40%]">
            <img className='w-full h-full object-cover object-center' src={service?.thumbnailImage} alt="profile-picture" />
         </div>
         <div className="p-5 flex-1 flex flex-col  sm:w-[60%]">
            <div className='flex-1'>
               <h2 className="block mb-2 text-3xl antialiased font-bold leading-snug tracking-normal text-[#D79E70]">
                  {service?.CategoryName}
               </h2>
               <div className='text-xl  text-gray-500 font-medium mb-4'>
                  {service?.shortDescription}
               </div>
            </div>
            <div className='flex gap-3 items-center justify-between'>
               <Link to={`/service-details/${service?.id}`} className='btn btn-ghost bg-[#D79E70] hover:bg-[#D79E70] text-white sm:px-10 text-lg'>Details</Link>
               <div><span className='text-lg font-bold '></span> <span className='text-xl font-extrabold text-[#D79E70]'>{service?.price}</span></div>
            </div>       
         </div>

      </div>
   )
}



import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
ServiceCard.propTypes = {
   service: PropTypes.object,
   index: PropTypes.number
}
export default ServiceCard;