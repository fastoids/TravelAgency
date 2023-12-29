import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import Navbar from '../../Components/navbar/Navbar';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  // const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "REGISTER_START" });
  //   try {
  //     const res = await axios.post("/auth/register", credentials);
  //     dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
  //     navigate("/")
  //   } catch (err) {
  //     dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
  //   }
  // };


  return (
    <>
    <Navbar/>
    <Header title = "Contact us" type="list"/>

    <div className="register">      
      <div className="RContainer">

      <h3 class="font-weight-700 m-t0 m-b20">Register Your Account</h3>
      <div className="contentContainer">
        <h4 class="font-weight-700">REGISTER</h4>
        <p class="font-weight-100">If you don't have an account, please register.</p>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="RInput"
          />  
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className="RInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="RInput"
          /><input
            type="password"
            placeholder="confirm password"
            id="confirmPassword"
            onChange={handleChange}
            className="RInput"
          />
          
          <button /*disabled={loading} onClick={handleClick}*/ className="RButton">
            Register
          </button>
          {/* {error && <span>{error.message}</span>} */}
        </div>
      </div>
      </div>   

       <Footer/>
       </>
  );
};

export default Register;
