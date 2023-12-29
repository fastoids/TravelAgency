import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import Middle from "../../Components/Middle/Middle";
import Destination from "../../Components/Destination/Destination";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Faqs from "../../Components/Faqs/Faq";
import Reviews from "../../Components/Reviews/Reviews";
import Footer from "../../Components/footer/Footer";

const Main = () => {
    return(
        <div>
            <Navbar/>
            <Header type = "list"/>
            <Middle/>
            <Destination/>
            <Portfolio/>
            <Faqs/>
            <Reviews/>
            <Footer/>
            </div>
        
    )
}

export default Main;