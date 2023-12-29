import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import Navbar from '../../Components/navbar/Navbar';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';

const Login = () => {
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
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("/auth/login", credentials);
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
  //     navigate("/")
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  //   }
  // };


  return (
    <>
    <Navbar/>
    <Header title = "Contact us" type="list"/>

    <div className="login">      
      <div className="lContainer">

      <h3 class="font-weight-700 m-t0 m-b20">Login Your Account</h3>
      <div className="contentContainer">
        <h4 class="font-weight-700">LOGIN</h4>
        <p class="font-weight-100">If you have an account with us, please log in.</p>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button /*disabled={loading} onClick={handleClick}*/ className="lButton">
            Login
          </button>
          {/* {error && <span>{error.message}</span>} */}
        </div>
      </div>
      </div>   

       <Footer/>
       </>
  );
};

export default Login;
