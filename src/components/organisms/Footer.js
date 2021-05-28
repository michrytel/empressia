import FooterTicker from "../molecules/FooterTicker";
import FooterContent from "../molecules/FooterContent";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
              <FooterTicker/>
                <FooterContent/>
            </div>
        </footer>
    )
}

export default Footer