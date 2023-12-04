/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const ReviewCard = ({ review }) => {
// console.log(review);
   const { reviewerName, reviewerImage, reviewText, rating } = review || {};
   // console.log(review);
   return(
      <div className=" text-center flex flex-col gap-5 justify-center items-center max-w-[70%] mx-auto">
         <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <img className="w-full h-full object-cover object-center " src={reviewerImage} alt="" />
         </div>
         <div className="flex gap-3">
            <Rating
               style={{ maxWidth: 180 }}
               value={rating}
               readOnly
            />

            <div className="text-3xl text-[#CD9003]">{rating}</div>
         </div>
         
         <p className="text-gray-500">{reviewText}</p>

         <h3 className="text-3xl text-[#CD9003] uppercase">{reviewerName}</h3>
         
      </div>
   )}
export default ReviewCard;