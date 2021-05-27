import Headline from "../atoms/Headline";
import Button from "../atoms/Button";
import faqImg from "../../assets/mainpage/illustration-faq.png"
import Accordion from "../molecules/Accordion";

const Faq = () => {

    return (
        <section className="faq">
            <div className="faq__container container">
                <div className="faq__content">
                    <Headline title="Najczczesciej zadawane pytania"/>
                    <Button text="Sprawdż całe FAQ" style="button__secondary"/>
                    <img src={faqImg} alt="FAQ image"/>
                </div>
                <Accordion/>
            </div>
        </section>
    )
}

export default Faq
