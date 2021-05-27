import './index.scss';
import Header from "./components/organisms/Header";
import Hero from "./components/organisms/Hero";
import Profits from "./components/organisms/Profits";
import Faq from "./components/organisms/Faq";
import Reviews from "./components/organisms/Reviews";
import Steps from "./components/organisms/Steps";
import Reservation from "./components/organisms/Reservation";

function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <Profits/>
            <Faq/>
            <Reviews/>
            <Steps/>
            <Reservation/>
        </>
    );
}

export default App;
