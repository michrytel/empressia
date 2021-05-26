import imageHero from "../../assets/mainpage/illustration-hero.png"
import HeroContent from "../molecules/HeroContent";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container container">
                <HeroContent/>
                <img src={imageHero} alt="online meeting"/>
            </div>
        </section>
    )
}

export default Hero