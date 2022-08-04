import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const NofoundScreen = () => {
  return (
    <Body>
      <Number>404</Number>
      <Text>
        <Span>Ooops...</Span>
        <br />
        page not found
      </Text>
    </Body>
  );
};

const Body = styled.div({
  display: "flex",
  flexFlow: "row wrap",
  alignContent: "center",
  justifyContent: "center",
  width: "100%",
  textAlign: "center",
});
const moving = keyframes`
    to {
        background-position: 100vmin 20vmin, -100vmin -25vmin;
      }
`;

const Number = styled.div({
  background: " #fff",
  position: "relative",
  fontWeight: "900",
  fontSize: "20rem",
  letterSpacing: "5vmin",
  textShadow:
    "2px -1px 0 #000, 4px -2px 0 #0a0a0a, 6px -3px 0 #0f0f0f, 8px -4px 0 #141414, 10px -5px 0 #1a1a1a, 12px -6px 0 #1f1f1f, 14px -7px 0 #242424, 16px -8px 0 #292929",
  width: "100%",
  textAlign: "center",
  ":before": {
    backgroundColor: "#673ab7",
    backgroundImage:
      "radial-gradient(closest-side at 50% 50%, #ffc107 100%, rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #e91e63 100%, rgba(0, 0, 0, 0))",
    backgroundRepeat: "repeat-x",
    backgroundSize: "40vmin 40vmin",
    backgroundPosition: "-100vmin 20vmin, 100vmin -25vmin",
    width: " 100%",
    height: "100%",
    mixBlendMode: "screen",
    animation: `${moving} 10s linear infinite both`,
    display: "block",
    position: "absolute",
    content: '""',
  },
});

const Text = styled.div({ fontWeight: "900", fontSize: "2rem" });
const Span = styled.div({ fontWeight: "900", fontSize: "2rem" });

export default NofoundScreen;
