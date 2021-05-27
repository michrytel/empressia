import userImage from "../../assets/icons/ui/eye.svg";
import star from "../../assets/icons/ui/star-filled.svg";
const Review = ({data, index}) => {
let stars = []
    for (let i=0; i<data.stars; i++) {
        stars.push("helper")
    }
    return (
        <div className="review__container" key={index}>
            <div className="review__info">
                <div className="rating">
                    {stars.map((el, i) => <img alt="star" src={star} key={i}/>)}
                </div>
                <div className="date">
                    {data.date}
                </div>
            </div>
            <div className="review">
                {data.review}
            </div>
            <div className="user">
                <div className="user__image">
                    <img src={userImage} alt="user"/>
                </div>
                <div className="user__name">
                    {data.user}
                </div>
            </div>
        </div>
    )
}
export default Review