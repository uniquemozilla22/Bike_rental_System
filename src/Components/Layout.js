import styled from "@emotion/styled";
import React from "react";
import NavigationBarComponent from "./NavigationBar.comp";

const Layout = (props) => {
  return (
    <>
      <NavigationBarComponent />
      <LayoutWrapper>{props.children}</LayoutWrapper>
    </>
  );
};

const LayoutWrapper = styled.div({
  padding: "2rem",
});

export default Layout;
