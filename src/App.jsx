import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRouting from "./app-routing";
import BackGroundImage from "./assets/back-ground-2.png";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <BackGroundStyle>
        <img src={BackGroundImage} alt="" />
      </BackGroundStyle>
      <div className="app_con">
        <div className="app">
          <AppRouting />
        </div>
      </div>
    </Container>
  );
}

const BackGroundStyle = styled.div`
  width: 100vw;
  height: 100vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: "center";
  position: absolute;
  img {
    max-height: 100vh;
  }
  z-index: -100;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  .app_con {
    width: 100vw;
    height: 100vh;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .app {
    /* border: 1px solid black; */
    max-width: 375px;
    height: 95vh;
    border-radius: 20px;
    overflow: hidden;
  }
`;

export default App;
