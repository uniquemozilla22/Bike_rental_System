import styled from "@emotion/styled";
import React, { useState } from "react";
import Buttons from "../UI/Buttons";
import Input from "../UI/Input";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Headings, Paragraph } from "../UI/Typography";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useDispatch } from "react-redux";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../store/Actions/Alert.action";
import RegisterUser from "../store/Actions/Register.action";
import LoginAction from "../store/Actions/Login.action";
import useCookie from "../hooks/useCookie";
const LoginScreen = () => {
  return (
    <Wrapper>
      <Container>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </Wrapper>
  );
};

const Login = () => {
  const navigation = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [seePassword, setSeePassword] = useState(false);
  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookie("token");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const logged = await dispatch(
      LoginAction(data.email, data.password, setCookie)
    );
    if (logged) {
      if (logged.isManager) navigation("/manager");
      else {
        navigation("/");
      }
    }
  };

  return (
    <>
      <Headings>Login</Headings>
      <Paragraph>
        Login to the application with the credentials provided
      </Paragraph>
      <Form onSubmit={onSubmitHandler}>
        <Input
          type={"email"}
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          type={seePassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <SeePassword onClick={() => setSeePassword(!seePassword)}>
          {!seePassword ? <VisibilityOff /> : <Visibility />}
          Show Password
        </SeePassword>
        <Buttons primary>Submit</Buttons>
      </Form>
      <Buttons secondary onClick={() => navigation("../register")}>
        Create an Account
      </Buttons>
    </>
  );
};

const Register = () => {
  const navigation = useNavigate();
  const [seePassword, setSeePassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmation_password: "",
  });

  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmation_password) {
      const isLoggedIn = await dispatch(
        RegisterUser(data.email, data.password)
      );
      if (isLoggedIn) navigation("/");
    } else {
      dispatch(
        showErrorMessage(
          "Validation Error",
          "Password and Confirm Password are not matching"
        )
      );
    }
  };
  return (
    <>
      <Headings>Register</Headings>
      <Paragraph>Register with email to the application</Paragraph>
      <Form onSubmit={onSubmitHandler}>
        <Input
          type={"email"}
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          type={seePassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Input
          type={seePassword ? "text" : "password"}
          onChange={(e) =>
            setData({ ...data, confirmation_password: e.target.value })
          }
          placeholder="Confirm Password"
        />
        <SeePassword onClick={() => setSeePassword(!seePassword)}>
          {!seePassword ? <VisibilityOff /> : <Visibility />}
          Show Password
        </SeePassword>
        <Buttons type={"submit"} primary>
          Submit
        </Buttons>
      </Form>
      <Buttons secondary onClick={() => navigation("../")}>
        I have an Account
      </Buttons>
    </>
  );
};

const SeePassword = styled.div({
  display: "flex",
  gap: "1rem",
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  },
});

const Wrapper = styled.div({
  position: "relative",
  minHeight: "80vh",
});

const Container = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#2b2b2b20",
  padding: " 2rem",
  borderRadius: "5px",
});

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  margin: "1rem 0",
});

export default LoginScreen;
