import { useEffect, useState } from "react";


const useServicesData = () => {
   const [serviceData, setServiceData] = useState([])
   useEffect(() => {
      fetch('/eventData.json')
         .then(res => res.json())
         .then(data => setServiceData(data))
         .catch(error => console.log(error))
   }, [])
   return serviceData

}
export default useServicesData;