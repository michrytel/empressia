import Headline from "../atoms/Headline";
import Button from "../atoms/Button";
import checkmark from "../../assets/icons/ui/check.svg"

const list = ["konsultacja bez zakadania konta", "pelna dyskrecja", "kontakt przez Skype lub WhatsApp", "rezerwacja terminu on-line", "szybkosc i prostota", "video konsultacja", "e-recepta i e-zwolnienie"]
const Reservation = () => {
    return (
        <section className="reservation">
            <div className="reservation__container container">
                <div className="reservation__content">
                    <Headline title="Zapisz sie na wizyte on-line"/>
                    <Button text="Zarezerwuj termin już teraz" style="button__secondary"/>
                </div>
                <div className="reservation__slider">
                    {list.map((el, i) =>
                        <div className={`slide key${i}`} key={i}>
                            <div className="checkmark">
                                <img src={checkmark} alt="checkmark"/>
                            </div>
                            <p>{el}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Reservation