import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Pages/home/Home';
import List from './Pages/list/List';
import Hotel from './Pages/hotel/Hotel';
import Main from './Pages/Main/Main';
import Contact from './Pages/Contact/Contact';
import FlightBooking from './Pages/flightBooking/FlightBooking';
import Gallery from './Pages/gallery/Gallery';
import Login from './Pages/login/Login';
import Register from './Pages/register/register'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element = {<Main/>}/>
    <Route path="/home" element= {<Home/>}/>
    <Route path="/hotels" element= {<List/>}/>
    <Route path="/home/hotels/pack" element= {<Hotel/>}/>
    <Route path="/home/hotels/pack/con" element= {<Contact/>}/>
    <Route path="/home/hotels/pack/:id" element= {<FlightBooking/>}/>    
    <Route path="/login" element= {<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
};
 export default App;






