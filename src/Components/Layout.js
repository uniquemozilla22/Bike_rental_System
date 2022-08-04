import styled from "@emotion/styled";
import React from "react";
import AlertComponent from "./Alert.comp";
import NavigationBarComponent from "./NavigationBar.comp";

const Layout = (props) => {
  return (
    <>
      <NavigationBarComponent />
      <LayoutWrapper>{props.children}</LayoutWrapper>
      <AlertComponent />
    </>
  );
};

const LayoutWrapper = styled.div({
  padding: "2rem",
});

export default Layout;
