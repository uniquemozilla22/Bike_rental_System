import styled from "@emotion/styled";
import React, { useState } from "react";
import Buttons from "../UI/Buttons";
import Input from "../UI/Input";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Headings, Paragraph } from "../UI/Typography";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import firebase from "../Database/firebase";
import UserCollection, {
  setUserCollection,
} from "../Database/Users/User.collection";

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

  return (
    <>
      <Headings>Login</Headings>
      <Paragraph>
        Login to the application with the credentials provided
      </Paragraph>
      <Form>
        <Input type={"email"} placeholder="Email" />
        <Input type={"password"} placeholder="Password" />
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

  const createAccount = (email, password) => {
    const datas = firebase.database().ref("users");
    console.log(datas);
  };
  console.log(firebase);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await createAccount(data.email, data.password);
    console.log(res);
  };
  return (
    <>
      <Headings>Register</Headings>
      <Paragraph>Register with email to the application</Paragraph>
      <Form onSubmit={onSubmitHandler}>
        <Input type={"email"} placeholder="Email" />
        <Input
          type={seePassword ? "text" : "password"}
          placeholder="Password"
        />
        <Input
          type={seePassword ? "text" : "password"}
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
  ":hover": {},
});

const Wrapper = styled.div({
  position: "relative",
  height: "100vh",
  width: "100vw",
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