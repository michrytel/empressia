import Logo from "../atoms/Logo";
import Navbar from "../atoms/Navbar";

const Navigation = () => {
    return (
        <div className="navi">
            <Logo style={"navi__logo"}/>
            <Navbar/>
        </div>

    )
}

export default Navigation