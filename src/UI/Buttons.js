import styled from "@emotion/styled";
import React from "react";

const Buttons = (props) => {
  const { children, primary, secondary } = props;
  if (primary) return <Primary {...props}>{children}</Primary>;
  else if (secondary) return <Secondary {...props}>{children}</Secondary>;
  else return <Default {...props}>{children}</Default>;
};

const Primary = styled.button({
  color: "#f8f8f8",
  background: "#2b2b2b",
  border: "1px solid transparent",
  borderRadius: "0.3rem",
});

const Secondary = styled.button({
  color: "#f8f8f8",
  background: "#2b2b2b",
  borderRadius: "0.3rem",
  border: "1px solid #2b2b2b",
});

const Default = styled.button({
  color: "#f8f8f8",
  background: "transparent",
  borderRadius: "0.3rem",
  border: "1px solid transparent",
});

export default Buttons;
