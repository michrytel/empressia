import Button from "../atoms/Button";
import Navigation from "../molecules/Navigation";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <Navigation/>
                <div className="navi__button">
                    <Button text="Zapisz się na wizytę on-line" style="button__primary"/>
                </div>
            </div>
        </header>
    )
}

export default Header