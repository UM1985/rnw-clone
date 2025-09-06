import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CityCard from "../layout/CityCard";

const TrendingCard = ({ data }) => {
  return (
    <div className="container py-5">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 }, 
          992: { slidesPerView: 3 }, 
          1200: { slidesPerView: 4 }, 
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card shadow-sm border-0 h-100 text-center">
              <CityCard
                image={item.image}
                title={item.title}
                location={item.location}
              />
              <div className="p-3">
                <button className="btn btn-outline-primary ">
                  View More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingCard;
