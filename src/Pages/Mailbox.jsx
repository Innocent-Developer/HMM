import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StyledWrapper>
      <div className="subscribe" data-aos="fade-up" data-aos-duration="3000">
        <p>SUBSCRIBE</p>
        <input
          placeholder="Your e-mail"
          className="subscribe-input"
          name="email"
          type="email"
        />
        <br />
        <div className="submit-btn">SUBMIT</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .subscribe {
    position: relative;
    height: 200px;
    width: 300px;
    padding: 40px;
    background-color: #fff;
    border-radius: 4px;
    color: #333;
    box-shadow: 0px 0px 60px 5px rgba(0, 0, 0, 0.4);
  }

  .subscribe:after {
    position: absolute;
    content: "";
    right: -10px;
    bottom: 18px;
    width: 0;
    height: 0;
    border-left: 0px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #1a044e;
  }

  .subscribe p {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 4px;
    line-height: 24px;
  }

  .subscribe input {
    position: absolute;
    bottom: 30px;
    border: none;
    border-bottom: 1px solid #d4d4d4;
    padding: 10px;
    width: 82%;
    background: transparent;
    transition: all 0.25s ease;
  }

  .subscribe input:focus {
    outline: none;
    border-bottom: 1px solid #0d095e;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      "sans-serif";
  }

  .subscribe .submit-btn {
    position: absolute;
    border-radius: 30px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    background-color: #0f0092;
    color: #fff;
    padding: 12px 25px;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 5px;
    right: -10px;
    bottom: -20px;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: -5px 6px 20px 0px rgba(26, 26, 26, 0.4);
  }

  .subscribe .submit-btn:hover {
    background-color: #07013d;
    box-shadow: -5px 6px 20px 0px rgba(88, 88, 88, 0.569);
  }
`;

export default Form;
