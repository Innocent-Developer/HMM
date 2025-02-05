import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <StyledWrapper>
      <form className="form">
        <h2>Contact Us</h2>
        <div className="flex">
          <label>
            <input required type="text" className="input" />
            <span>First Name</span>
          </label>
          <label>
            <input required type="text" className="input" />
            <span>Last Name</span>
          </label>
        </div>
        <label>
          <input required type="email" className="input" />
          <span>Email</span>
        </label>
        <label>
          <input required type="tel" className="input" />
          <span>Contact Number</span>
        </label>
        <label>
          <textarea required rows={4} className="textarea" defaultValue={""} />
          <span>Message</span>
        </label>
        <button type="submit" className="button-gradient">
          Submit
        </button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ece9e6, #ffffff);
  padding: 20px;
  height: 100vh;
  background: url("https://plus.unsplash.com/premium_photo-1661322641020-a691d8722839?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvdGVsJTIwZmVtYWxlfGVufDB8fDB8fHww")
    no-repeat center center fixed;
  background-size: cover;

  .form {
    background: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
    backdrop-filter: blur(15px); /* Blur effect */
    -webkit-backdrop-filter: blur(15px); /* Safari support */
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid rgba(255, 255, 255, 0.3); /* Light border for better separation */
  }

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 10px;
  }

  .flex {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .flex label {
    flex: 1 1 calc(50% - 10px);
    min-width: 140px;
  }

  label {
    position: relative;
    width: 100%;
  }

  .input,
  .textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
    transition: all 0.3s;
  }

  .input:focus,
  .textarea:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 8px rgba(108, 99, 255, 0.5);
  }

  span {
    position: absolute;
    left: 15px;
    top: 14px;
    background: white;
    padding: 0 4px;
    transition: 0.3s;
    color: #888;
    pointer-events: none;
  }

  .input:focus + span,
  .textarea:focus + span,
  .input:not(:placeholder-shown) + span,
  .textarea:not(:placeholder-shown) + span {
    top: -8px;
    left: 10px;
    font-size: 0.8em;
    color: #6c63ff;
  }

  .button-gradient {
    padding: 12px;
    background: linear-gradient(90deg, #6c63ff, #8e44ad);
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.4s;
  }

  .button-gradient:hover {
    background: linear-gradient(90deg, #8e44ad, #6c63ff);
  }

  @media (max-width: 480px) {
    .form {
      padding: 20px;
    }

    .flex {
      flex-direction: column;
    }

    .flex label {
      flex: 1 1 100%;
    }
  }
`;

export default Contact;
