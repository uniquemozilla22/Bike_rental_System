import styled from "@emotion/styled";
import React from "react";
import AlertComponent from "./Alert.comp";
import LoaderComponent from "./Loader.comp";
import NavigationBarComponent from "./NavigationBar.comp";

const Layout = (props) => {
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
