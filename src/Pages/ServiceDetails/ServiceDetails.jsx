import { useParams } from "react-router-dom";
import useServicesData from "../../Hooks/useServicesData";
import Container from "../../Shared/Container";
import EventWeOrganized from "../../Components/EventWeOrganized/EventWeOrganized";
import Title from "../../Components/Utilities/Title";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceDetails = () => {
   AOS.init()
   const { id } = useParams();
   // console.log(id);
   const serviceData = useServicesData();
   const selectedService = serviceData?.find(service => service?.id === Number(id))
   // console.log(selectedService);
   // console.log(serviceData);
return(
   <div className={`min-h-screen`}>
      <div  style={{ backgroundImage: `url(${selectedService?.image})`}} className={`h-screen bg-no-repeat bg-fixed bg-cover bg-center bg-black/40 bg-blend-overlay flex justify-center items-center`}>
         <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className=" py-16 px-5  mx-auto bg-gray-700/40 backdrop-blur-[2px] flex flex-col justify-center gap-2 items-center rounded-lg ">
            <div  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#fdba84]">{selectedService?.CategoryName}</div>
            <p  className=" font-medium sm:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] text-center text-white text-base lg:text-lg">{selectedService?.shortDescription}</p>
         </div>
      </div>
      <Container className={``}>
         <div className="my-10">
            <Title>{selectedService?.CategoryName}</Title>
            <div className="flex flex-col lg:flex-row gap-5">
               <figure data-aos="fade-up-right" data-aos-duration="3000" className=" rounded-lg overflow-auto max-h-[700px] lg:w-[40%]">
                  <img className="object-cover h-full w-full" src={selectedService?.thumbnailImage} />
               </figure>
               <div data-aos="fade-down-left" data-aos-duration="3000" className="text-gray-500  flex flex-col  lg:w-[60%]">
                  <div className="text-xl font-bold lg:order-2 mb-5">
                     Price Range: <span className="text-[#fdba84] text-3xl font-bold">{selectedService?.price}</span>
                  </div>
                  <div className="mb-10 ">
                     <div className="text-gray-500 text-lg">{selectedService?.detailsDescription}</div>
                     <div className="text-gray-500 text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet illo id quam sint saepe, eligendi asperiores hic aut doloremque reiciendis. Amet enim ratione, consectetur praesentium eius cum ad rem nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, distinctio soluta fugit magni pariatur reiciendis. Facere saepe deleniti ratione perspiciatis consequatur similique et suscipit veniam reiciendis doloremque. Blanditiis sed quis nostrum. Unde totam, ipsum similique explicabo sequi expedita tempora eaque? Sed alias sequi pariatur non quidem fugit labore consequatur quam.</div>
                  </div>                
               </div>
            </div>
            <div>
            </div>
         </div>
         <EventWeOrganized selectedService={selectedService}/>
      </Container>
   </div>
)}
export default ServiceDetails;