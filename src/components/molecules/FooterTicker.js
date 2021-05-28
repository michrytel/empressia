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
                <img src={doctor} alt="znanylekarz" className="doctor"/>
            </div>
            <div className="social">
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>

            </div>
        </div>
    )
}

export default FooterTicker