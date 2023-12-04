import { Helmet } from "react-helmet-async";
import BannerSlider from "../../../Components/Home/BannerSlider/BannerSlider";
import OurServices from "../../../Components/Home/OurServices/OurServices";
import Container from "../../../Shared/Container";
import OurPastEvents from "../../../Components/Home/OurPastEvents/OurPastEvents";
import Testimonial from "../../../Components/Home/Testimonial/Testimonial";


const HomePage = () => {

   
   return (
      <div className="overflow-hidden">
         <Helmet>
            <title>Event Elegance | Home</title>
         </Helmet>
         <BannerSlider></BannerSlider>
         <Testimonial/>
         <Container >
            <OurServices/>
            <OurPastEvents/>
         </Container>
      </div>
   );
};

export default HomePage;