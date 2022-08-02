import React from "react";
import NavigationBarComponent from "./NavigationBar.comp";

const Layout = (props) => {
  return (
    <>
      <NavigationBarComponent />
      {props.children}
    </>
  );
};

export default Layout;
