
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Title from "../../Utilities/Title";
const sliderImages = [
   "https://static.showit.co/1600/remWtv0ORYKd9CdXZENCcw/101908/glenstone-gardens-editorial-134.jpg",
   "https://www.rafanellievents.com/wp-content/uploads/2023/03/colorado-married-flower-arch-2048x1366.jpg",
   "https://static.livebooks.com/ffeda280b1b1488485b7d98414578c62/i/c7ceeedebcff47dbae66e2f49eb48058/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS/Kiran_Kyle_La_Caille_Sandy_Utah_Panigrahana_Couple_Holding_Hands_Ceremony.jpg",
   "https://static.livebooks.com/ffeda280b1b1488485b7d98414578c62/i/c410cbae7c2246cba4410b16ddec683a/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS/Evermore_Park_Pleasant_Grove_Bride_Groom_On_Steps.jpg",
   "https://static.livebooks.com/ffeda280b1b1488485b7d98414578c62/i/cfaa3b7b940b4e4db0c61edb911a86d8/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS/Josie_Jordan_River_Bottoms_Ranch_Midway_Utah_Couple_by_Pond.jpg",
   "https://static.livebooks.com/ffeda280b1b1488485b7d98414578c62/i/d1a9e6f454ba4cc18ca0c568d30bcf13/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS/Julia_Mark_Silver_Lake_Lodge_Deer_Valley_Resort_Park_City_Utah_Husband_and_Wife.jpg",
   "https://epiceventsbybooth.com/wp-content/uploads/Birch-Jr.-Birchwood-arch-beach.jpg",
   "https://epiceventsbybooth.com/wp-content/uploads/Trey-IRB.jpg",
   "https://epiceventsbybooth.com/wp-content/uploads/Moongate-Arch-June-1-With-Wedding-Couple.jpg",
   "https://www.liveabout.com/thmb/DTI89HCLXt1sMtMiJUeGYl9aoVQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/182939112-56b0941d3df78cf772cfce6f.jpg",
   "https://images.squarespace-cdn.com/content/v1/57290ce39f72666203de6b32/1551816426612-SDEGQMWXGEQA9EM6ENBY/10062018-Ann-Jason-Wedding-392-2-L+%281%29.jpg",
   "https://www.7eventzz.com/blog/wp-content/uploads/2022/01/1321265723-1024x1020.jpg",
   "https://birthdaypartyplannerudaipur.com/wp-content/uploads/2018/04/BalloonDecoration-BalloonEntry-Gate-CartoonCharacter-CutOut-TatooArtist-MerigoRound-Udaipur-Dungarpur.jpg",
   "https://www.anantabd.net/wp-content/uploads/2020/03/Birthday-Party-Organisers.jpg",
   "https://i.pinimg.com/736x/4c/55/41/4c5541974547242b4d9d3e99718c444b.jpg",
   "https://images.ctfassets.net/3dar4x4x74wk/6kYRct4wjOcY1btCIJoUSq/e45d830768e4ff174b9006717809c393/ME_PMax_Search_Unicorn_v1_1200x628.jpg",
   "https://images.squarespace-cdn.com/content/v1/5f2b97bb5859e03ca4bcef6e/1602878701727-J09BVPY9KZZ3OHXJ2MXR/Kids+birthday+parties%2C+and+events+by+Party+Planners+LA105.jpg",
   "https://spceventmgt.com/wp-content/uploads/2022/11/CkWoxhyD.jpg",
   "https://s3-media0.fl.yelpcdn.com/bphoto/fHhpdk3a53RgZmA7Y9GGNQ/1000s.jpg",
   "https://www.sheknows.com/wp-content/uploads/2018/08/fbtbabmmiuhbu3ows6cf.jpeg?w=2121",
   "https://loverly.com/api/v1/attachments/4a7f300e-3036-4a4c-9f46-e7ac5b5f6d91",
   "https://www.happywedding.app/blog/wp-content/uploads/2019/05/List-of-ideas-for-your-Engagement-party.jpg",
   "https://image.wedmegood.com/wp-content/uploads/2018/09/PRJA9793.jpg",
   "https://www.theknot.com/tk-media/images/afae88ca-dbcb-4a5f-af6c-2cd407541272",
   "https://offwhiteeventsthrissur.files.wordpress.com/2022/08/pexels-paola-vasquez-3593437-1.jpg",
   "https://c8.alamy.com/comp/2K81HYM/were-all-so-happy-for-you-a-pregnant-mother-to-be-receiving-gifts-from-her-friends-at-her-baby-shower-2K81HYM.jpg",
   "https://internationalopenacademy.com/cdn/shop/products/Baby_Shower_Party_Planner_50776674-e937-432b-a9c7-2162f453ff70_1200x1200.png?v=1609750643",
   "https://webbabyshower.com/wp-content/uploads/2021/04/wbs-instagram-image-godhbhrai-parents-to-be-912x1024.webp",
   "https://flo.health/uploads/media/sulu-1000x-inset/09/1229-Pregnant%20woman%20is%20opening%20a%20new%20gift%20at%20baby%20shower.jpg",
   "https://akns-images.eonline.com/eol_images/Entire_Site/2022523/rs_1200x1200-220623184438-1080-julia-ertz-mv-62322.jpg"
]

const OurPastEvents = () => {

// console.log(sliderImages);
return(
   <div className='my-10'>
      <Title> Past Events We Organized</Title>
      <div>
         <Swiper
            slidesPerView={1}
            spaceBetween={20}
            // pagination={{
            //    clickable: true,
            // }}
            autoplay={{
               delay: 1000,
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
            modules={[Autoplay]}
            className="mySwiper rounded-xl"
         >
            {
               sliderImages?.map((image, index) => <SwiperSlide key={index}>
                  <div className='mb-6 h-[300px]'>
                     <img className='object-cover rounded-xl object-center h-full w-full' src={image} alt="" />
                  </div>
               </SwiperSlide>)
            }
         </Swiper>
      </div>
   </div>
)}
export default OurPastEvents;