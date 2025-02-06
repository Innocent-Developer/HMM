import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

export const Login = () => {
  const [signin, setSignin] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const id=signin.email;

  // Check if user is already logged in
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      navigate("/Book-Now");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignin((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Form Submitted:", signin);
      setLoading(false);

      // Store user data in localStorage
      localStorage.setItem("userData", JSON.stringify(signin));

      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setSignin({ email: "", password: "" });
      navigate(`/Book-Now/${id}`);
    }, 2000);
  };

  return (
    <StyledWrapper>
      <ToastContainer />
      <div className="container" data-aos="fade-up">
        <div className="heading">Sign in</div>
        <form className="form" onSubmit={handleSignup}>
          <input
            required
            className="input"
            type="email"
            name="email"
            placeholder="E-mail"
            value={signin.email}
            onChange={handleChange}
            disabled={loading}
          />

          <input
            required
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={signin.password}
            onChange={handleChange}
            disabled={loading}
          />

          <input
            className="login-button"
            type="submit"
            value={loading ? "Signing in..." : "Sign in"}
            disabled={loading}
          />
        </form>

        {loading && <div className="loader"></div>}

        <span className="agreement">
          Don’t have an account? <NavLink to="/account/signup">Sign up</NavLink>
        </span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww') no-repeat center center fixed;
  background-size: cover;

  .container {
    max-width: 350px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 40px;
    padding: 25px 35px;
    border: 5px solid #fff;
    box-shadow: rgba(133, 189, 215, 0.88) 0px 30px 30px -20px;
    margin: 20px;
  }

  .heading {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: #1089d3;
  }

  .form {
    margin-top: 20px;
  }

  .form .input {
    width: 100%;
    background: white;
    border: none;
    padding: 15px 20px;
    border-radius: 20px;
    margin-top: 15px;
    box-shadow: #cff0ff 0px 10px 10px -5px;
    border-inline: 2px solid transparent;
  }

  .form .input:focus {
    outline: none;
    border-inline: 2px solid #12b1d1;
  }

  .form .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(45deg, #1089d3 0%, #12b1d1 100%);
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.88) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .form .login-button:hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.88) 0px 23px 10px -20px;
  }

  .form .login-button:active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.88) 0px 15px 10px -10px;
  }

  .loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    margin: 20px auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .agreement {
    display: block;
    text-align: center;
    margin-top: 15px;
  }

  .agreement a {
    text-decoration: none;
    color: #0099ff;
    font-size: 16px;
  }
`;