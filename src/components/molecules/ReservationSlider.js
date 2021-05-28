import checkmark from "../../assets/icons/ui/check.svg"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper/core';
SwiperCore.use([Autoplay,Pagination,Navigation]);
const list = ["konsultacja bez zakadania konta", "pelna dyskrecja", "kontakt przez Skype lub WhatsApp", "rezerwacja terminu on-line", "szybkosc i prostota", "video konsultacja", "e-recepta i e-zwolnienie"]
const ReservationSlider = () => {
    return (
        <div className="reservation__slider">
            <Swiper direction={"vertical"} slidesPerView={7.2} spaceBetween={10} loop={true} centeredSlides={true} effect={"fade"} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true,
                el: '.swiper-pagination',
            }} fadeEffect={{
                crossFade:true
            }} navigation={true} className="mySwiper">
                {list.map((el, i) =>
                    <SwiperSlide>
                        <div className='slide' key={i}>
                            <div className="checkmark">
                                <img src={checkmark} alt="checkmark"/>
                            </div>
                            <p>{el}</p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default ReservationSlider