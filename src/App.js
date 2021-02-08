import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./assets/prifina.svg";
import Image from "./assets/fingerpori.png";

const StyledBox = styled.div`
  height: 100vh;

  padding: 50px;
  background-color: ${(props) =>
    props.colors ? props.colors.baseWhite : "#F5F8F7"};
`;
const StyledImg = styled.img`
  border-radius: 50%;
`;

//28w 23h
const svgWidth = "60px";
const StyledSVG = styled(Logo)`
  width: ${svgWidth};
  height: calc(${svgWidth} * 23 / 28);
`;

export const App = () => {
  return (
    <StyledBox>
      <div style={{ textAlign: "center" }}>
        <StyledSVG />
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <StyledImg src={Image} width={"200px"} />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontSize: "36px",
          fontWeight: "bold",
          fontFamily: "Open Sans",
        }}
      >
        Hello!
      </div>
    </StyledBox>
  );
};
