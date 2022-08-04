import styled from "@emotion/styled";
import { Login } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../UI/Buttons";

const NavigationBarComponent = () => {
  const navigation = useNavigate();

  const goToLogin = () => navigation("./login");
  const goToHome = () => navigation(".");

  return (
    <Wrapper>
      <Logo>
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Toptal_Logo.svg/1200px-Toptal_Logo.svg.png"
          }
          alt={"Logo"}
          onClick={goToHome}
        />
      </Logo>
      <Actions>
        <Buttons secondary onClick={() => goToLogin()}>
          <Tooltip title="Login">
            <Login />
          </Tooltip>
          Login
        </Buttons>
      </Actions>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 2rem",
  alignItems: "center",
  backgroundColor: "#fffff",
  boxShadow: "0 0 10px #2b2b2b50",
});

const Logo = styled.div({
  height: "50px",
});

const Actions = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
});

const Image = styled.img({
  height: "50px",
  cursor: "pointer",
});

export default NavigationBarComponent;
