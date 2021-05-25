import Logo from "../atoms/Logo";

const Navigation = () => {
    return (
        <div className="navi">
            <Logo style="navi__logo"/>
            <ul className="navi__menu">
                <li><a href="#">O mnie</a></li>
                <li><a href="/">Opinie</a></li>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Galeria</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Kontakt</a></li>
            </ul>
        </div>

    )
}

export default Navigation