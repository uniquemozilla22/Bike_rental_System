import styled from "@emotion/styled";
import { Login, LogoutOutlined } from "@mui/icons-material";
import { Avatar, Tooltip } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../UI/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../store/Actions/Login.action";

const NavigationBarComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.token);
  const isManager = useSelector((state) => state.user.isManager);
  const goToLogin = () => navigation("./login");
  const Logoutfromapp = () => dispatch(Logout(navigation));
  const goToHome = () => (isManager ? navigation("/manager") : navigation("."));

  return (
    <Wrapper>
      <Logo>
        <Image
          src={
            "https://static.wixstatic.com/media/9acb16_ac17ca65a2144e06866b53dea516aa83~mv2.png"
          }
          alt={"Logo"}
          onClick={goToHome}
        />
      </Logo>
      <Navigation>
        <Link to="/">Home</Link>
        {<Link to={isManager ? "/manager/bikes" : "/bikes"}>Bikes</Link>}
        <Link to={isManager ? "/manager/users" : "/users"}>Users</Link>
      </Navigation>
      <Actions>
        {isLoggedIn === null ? (
          <Buttons secondary onClick={() => goToLogin()}>
            <Tooltip title="Login">
              <Login />
            </Tooltip>
            Login
          </Buttons>
        ) : (
          <Buttons secondary onClick={() => Logoutfromapp()}>
            <Tooltip title="Login">
              <LogoutOutlined />
            </Tooltip>
            Logout
          </Buttons>
        )}
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

const Navigation = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  "& a ": {
    textDecoration: "none",
    color: "#2b2b2b",
  },
});

export default NavigationBarComponent;
