import userImage from "../../assets/icons/ui/eye.svg";
const Review = ({data, index}) => {
    return (
        <div className="review__container" key={index}>
            <div className="review__info">
                <div className="rating">
                    {data.stars}
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
                    <img src={userImage}/>
                </div>
                <div className="user__name">
                    {data.user}
                </div>
            </div>
        </div>
    )
}
export default Review