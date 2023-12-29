import "./home.css";
import React from 'react';
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import Featured from "../../Components/featured/Featured";
import PropertyList from "../../Components/propertyList/PropertyList";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
const Home = () => {
    return (
        <div> 
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by Property</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes Guests Love </h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
            
            </div>
    )
}
export default Home;