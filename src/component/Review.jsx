// Review.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import reviewData from "../layout/reviewData";
import ReviewCard from "../layout/ReviewCard";

const Review = () => {
  return (
    <div className="container py-5 text-center ">
      <h1 className="text-center fw-bolder p-5"><span className="text-danger">Valuable Reviews</span> By Students</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1} // 
        pagination={{ clickable: true }}
        grabCursor={true}
      >
        {reviewData.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewCard img={item.img} name={item.name} review={item.review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
