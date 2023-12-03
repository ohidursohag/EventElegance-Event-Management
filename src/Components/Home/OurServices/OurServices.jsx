import useServicesData from "../../../Hooks/useServicesData";
import ServiceCard from "../../Cards/ServiceCard";
import Title from "../../Utilities/Title";


const OurServices = () => {
   const serviceData = useServicesData()
   // console.log(serviceData);
return(
   <div className="my-16 px-2">
      <Title>Our Services</Title>
      
      <div className="grid grid-cols-1 xl:grid-cols-2  gap-5  mt-4"> 
         {
            serviceData?.map(service => <ServiceCard key={service?.id} service={service} />)
         }         
      </div>
   </div>
)}
export default OurServices;