import BannerSlider from "../../../Components/Home/BannerSlider/BannerSlider";
import OurServices from "../../../Components/Home/OurServices/OurServices";


const HomePage = () => {
   return (
      <div>
         <BannerSlider></BannerSlider>
         <div className="container mx-auto px-3">
            <OurServices/>
         </div>
      </div>
   );
};

export default HomePage;