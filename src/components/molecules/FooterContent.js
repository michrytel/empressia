import Navbar from "../atoms/Navbar";
import HelpTicker from "../atoms/HelpTicker";
import BlogTicker from "../atoms/BlogTicker";

const FooterContent = () => {
    return (
        <div className="footer__content">
            <div className="navi">
                <p>Jezeli potrzebujesz pomocy zwiazanej ze skora, wlosami, paznokciami lub natury intymnej,
                    jestes we wlasciwym miejscu</p>
                <Navbar/>
            </div>
            <HelpTicker/>
            <BlogTicker/>
        </div>
    )
}
export default FooterContent