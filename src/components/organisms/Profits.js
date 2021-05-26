import Headline from "../atoms/Headline";
import profitsBackground from "../../assets/mainpage/section-profit--background.svg"

const Profits = () => {
    return (
        <section className="profits">
            <div className="profits__container container">
                <img alt="profit section background" src={profitsBackground}/>
                <Headline text="Teleporada lekarska na naszym serwisie oznacza potwierdzoną skuteczność terapeutyczną, oszczędność czasu i pieniędzy" title="Skorzystaj z najszybciej rozwijajacej sie galezi medycyny."/>
            </div>
        </section>
    )
}

export default Profits