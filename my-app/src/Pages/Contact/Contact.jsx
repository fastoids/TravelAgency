
import Navbar from '../../Components/navbar/Navbar';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import Contactus from '../../Components/contactus/Contactus'
const Contact = () =>{
    return(
        <div>
            <Navbar/>
            <Header title = "Contact us" type="list"/>
            <Contactus />
            <Footer/>

        </div>
    )
}

export default Contact;