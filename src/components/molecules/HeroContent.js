import Headline from "../atoms/Headline";
import Button from "../atoms/Button";

const HeroContent = () => {
    return (
        <div className="hero__content">
            <Headline title="Konsultacje z lekarzem on-line" text="Jeśli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub natury intymnej, jesteś we właściwym miejscu. Dzięki naszej pomocy zadbasz o zdrowie i piękno swego ciała"/>
            <div className="hero__buttons">
                <Button text="Zarezerwuj termin" style="button__primary"/>
                <Button text="Jak to działa?" style="button__secondary"/>
            </div>
        </div>
    )
}

export default HeroContent