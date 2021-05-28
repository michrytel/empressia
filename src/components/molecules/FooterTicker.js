import logo from "../../assets/logos/mark_empressiaColor.svg";
import stars from "../../assets/icons/ui/star-full-5.svg";
import doctor from "../../assets/logos/logo_znanylekarzColor.png";
import facebook from "../../assets/icons/social/facebook.svg";
import instagram from "../../assets/icons/social/instagram.svg";
const FooterTicker = () => {
    return (
        <div className="footer__ticker">
            <img src={logo} alt="logo"/>
            <div className="doctor">
                <img src={stars} alt="starts-rating" className="stars"/>
                <p>5.0 (163 opinie) na </p>
                <a href="https://www.znanylekarz.pl"><img src={doctor} alt="znanylekarz" className="doctor__logo"/></a>
            </div>
            <div className="social">
                <a href="https://www.facebook.com"><img src={facebook} alt="facebook"/></a>
                <a href="https://www.instagram.com"><img src={instagram} alt="instagram"/></a>
            </div>
        </div>
    )
}

export default FooterTicker