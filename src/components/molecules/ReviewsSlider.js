import Review from "../atoms/Review";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {Pagination} from 'swiper/core';
import reviewsData from "../../assets/Reviews.json"
SwiperCore.use([Pagination]);

const ReviewsSlider = () => {
    return (
        <Swiper slidesPerView={3.2} centeredSlides={false} spaceBetween={30} grabCursor={true} pagination={{
            "clickable": true,
            el: '.swiper-pagination',
        }} className="mySwiper">
            {reviewsData.map((review, i) =>
                <SwiperSlide>
                    <Review data={review} index={i}/>
                </SwiperSlide>
            )}
        </Swiper>
    )
}
export default ReviewsSlider