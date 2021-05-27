import Headline from "../atoms/Headline";
import ReviewsSlider from "../molecules/ReviewsSlider";

const Reviews = () => {
    return (
        <section className="reviews">
            <div className="reviews__container container">
                <Headline title="Co mówia zadowoleni klienci"/>
                <ReviewsSlider/>
            </div>
        </section>
    )
}

export default Reviews