import styled from "@emotion/styled";
import React, { useCallback, useEffect } from "react";
import AlertComponent from "./Alert.comp";
import LoaderComponent from "./Loader.comp";
import NavigationBarComponent from "./NavigationBar.comp";
import useCookie from "../hooks/useCookie";
import { LOGIN } from "../store/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
  const [cookie, setCookie, logout] = useCookie("token");
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { id, isManager } = cookie;

  const updateCookie = useCallback(() => {
    if (!!id) {
      if (!token) {
        console.log("cookie but no user");
        console.log(id, token);
        dispatch({ type: LOGIN, payload: { id, isManager, logout } });
        isManager ? navigation("/manager") : navigation("/");
      } else {
        console.log("there is user");
      }
    } else {
      console.log("no User");
      navigation("/login");
    }
  }, [id, isManager]);

  useEffect(() => updateCookie, [updateCookie]);

  return (
    <>
      <NavigationBarComponent />
      <LayoutWrapper>{props.children}</LayoutWrapper>
      <AlertComponent />
      <LoaderComponent />
    </>
  );
};

const LayoutWrapper = styled.div({
  padding: "2rem",
});

export default Layout;
