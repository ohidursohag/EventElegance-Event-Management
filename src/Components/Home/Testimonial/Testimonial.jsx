import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Title from "../../Utilities/Title";
import Container from "../../../Shared/Container";
import ReviewCard from "./ReviewCard";
const Testimonial = () => {
   const [reviews, setReviews] = useState([])
   useEffect(() => {
      fetch('/reviewData.json')
         .then(response => response.json())
         .then(data => setReviews(data))
   }, [])

   // console.log(reviews);
   return (
      <Container className='mb-[100px]'>
         <Title >What Our Client Say</Title>
         <div className="my-5">

            <div>
               <Swiper
                  navigation={true}
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
                     1280: {
                        slidesPerView: 3,
                     },

                  }}
                  modules={[Navigation, Autoplay]}
                  className="mySwiper">
                  {
                     reviews.map((review) =>
                        <SwiperSlide key={review?.id} >
                           <ReviewCard review={review} />
                        </SwiperSlide>)
                  }
               </Swiper>
            </div>
            {/* <ReviewCard /> */}
         </div>
      </Container>
   )
}
export default Testimonial;