import React from "react";
import LoginImage from "../assets/login.png";
import WhiteLogo from "../assets/icons/white-logo.png";

import { styled } from "styled-components";
const LoginPage = () => {
  return (
    <LoginStyle>
      <img className="background" src={LoginImage} alt="" />
      <div>
        <p>En</p>
      </div>
      <img className="logo" src={WhiteLogo} />
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  background-color: white;
  height: 100%;
  width: 370px;
  position: relative;
  border: 1px solid black;

  .background {
    height: 400px;
    width: 370px;
    /* object-fit: cover; */
    position: absolute;
    z-index: 1;
  }
  .logo {
    position: relative;
    z-index: 10;
    text-align: center;
    width: 100px;
  }
  h1 {
    z-index: 100;
    position: relative;
    border: 3px solid red;
  }
`;

export default LoginPage;
