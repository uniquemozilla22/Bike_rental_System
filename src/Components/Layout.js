import styled from "@emotion/styled";
import React, { useEffect } from "react";
import AlertComponent from "./Alert.comp";
import LoaderComponent from "./Loader.comp";
import NavigationBarComponent from "./NavigationBar.comp";
import useCookie from "../hooks/useCookie";
import { LOGIN } from "../store/constants";
import { useDispatch } from "react-redux";
const Layout = (props) => {
  const [cookie, setCookie, logout] = useCookie("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (cookie) dispatch({ type: LOGIN, payload: { ...cookie, logout } });
  }, [cookie, dispatch, logout]);
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
