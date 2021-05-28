import Step from "../atoms/Step";
import diagnosis from "../../assets/icons/seo/diagnosis.svg"
import discretia from "../../assets/icons/seo/dicretia.svg"
import receipt from "../../assets/icons/seo/e-receipt.svg"
import quickness from "../../assets/icons/seo/quickness.svg"
import reservation from "../../assets/icons/seo/reservation.svg"
import video from "../../assets/icons/seo/video.svg"
const Steps = () => {
    return (
        <section className="steps">
            <div className="steps__container container">
                <Step title={"Rezerwacja on-line"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem eum facere laborum maiores maxime nam pariatur ratione repudiandae tenetur?"}
                      image={reservation} alt={"reservation"}/>
                <Step title={"Pelna dyskrecja"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem eum facere laborum maiores maxime nam pariatur ratione repudiandae tenetur?"}
                      image={discretia} alt={"dicretia"}/>
                <Step title={"Konsultacja video"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem eum facere laborum maiores maxime nam pariatur ratione repudiandae tenetur?"}
                      image={video} alt={"video"}/>
                <Step title={"E-recepta"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem eum facere laborum maiores maxime nam pariatur ratione repudiandae tenetur?"}
                      image={receipt} alt={"receipt"}/>
                <Step title={"Szybkosc i prostota"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem eum facere laborum maiores maxime nam pariatur ratione repudiandae tenetur?"}
                      image={quickness} alt={"quickness"}/>
                <Step title={"Diagnoza"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem eum facere laborum maiores maxime nam pariatur ratione repudiandae tenetur?"}
                      image={diagnosis} alt={"diagnosis"}/>
            </div>
        </section>
    )
}

export default Steps