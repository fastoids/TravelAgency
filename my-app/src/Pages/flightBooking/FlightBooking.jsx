import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import Flight from "../../Components/flight/Flight";
import Footer from "../../Components/footer/Footer";
import FlightMiddle from "../../Components/flightMiddle/FlightMiddle";

const FlightBooking = () => {
    return(
        <div>
        <Navbar/>
        <Header type = "list"/>
        <FlightMiddle/>
        <Flight/>
        <Footer/>
        </div>
    )
}

export default FlightBooking;