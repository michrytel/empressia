import Headline from "../atoms/Headline";
import Button from "../atoms/Button";
import ReservationSlider from "../molecules/ReservationSlider";

const Reservation = () => {
    return (
        <section className="reservation">
            <div className="reservation__container container">
                <div className="reservation__content">
                    <Headline title="Zapisz sie na wizyte on-line"/>
                    <Button text="Zarezerwuj termin już teraz" style="button__secondary"/>
                </div>
                  <ReservationSlider/>
            </div>
        </section>
    )
}

export default Reservation