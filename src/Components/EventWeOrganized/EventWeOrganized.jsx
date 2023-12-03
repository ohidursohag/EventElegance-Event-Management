import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const EventWeOrganized = ({ selectedService }) => {
   const [sliderImages, setSliderImages] = useState({})
   // console.log(selectedService);
   const categoryName = selectedService?.CategoryName;
   // console.log(categoryName);
   useEffect(() => {
      fetch('/imageSliderData.json')
         .then(res => res.json())
         .then(data => {
            const categoryImages = data?.filter(images => images?.CategoryName === categoryName)
            // console.log(categoryImages);
            setSliderImages(categoryImages[0])
            })
   }, [categoryName])

   // console.log(sliderImages?.images);
   return (
      <div className='my-10'>
         <Title>{categoryName} Event We Organized</Title>
         <div>
            <Swiper

               slidesPerView={1}
               spaceBetween={20}
               pagination={{
                  clickable: true,
               }}
               autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
               }}

               breakpoints={{
                  640: {
                     slidesPerView: 1,

                  },
                  768: {
                     slidesPerView: 2,

                  },
                  1024: {
                     slidesPerView: 2,

                  },
                  1280: {
                     slidesPerView: 3,
                  },

               }}
               modules={[Autoplay, Pagination]}
               className="mySwiper"
            >
               {
                  sliderImages?.images?.map((image, index) => <SwiperSlide key={index}>
                     <div className='mb-6 h-[300px]'>
                        <img className='object-cover object-center h-full w-full' src={image} alt="" />
                     </div>
                  </SwiperSlide>)
               }
            </Swiper>
         </div>
      </div>
   )
}
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Title from '../Utilities/Title';
EventWeOrganized.propTypes = {
   selectedService: PropTypes.object
}
export default EventWeOrganized;