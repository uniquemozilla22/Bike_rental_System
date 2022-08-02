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
  cursor: "pointer",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
});

const Secondary = styled.button({
  background: "transparent",
  borderRadius: "0.3rem",
  padding: "1rem",
  border: "1px solid #2b2b2b",
  width: "100%",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
});

const Default = styled.button({
  background: "transparent",
  padding: "1rem",
  cursor: "pointer",
  borderRadius: "0.3rem",
  border: "1px solid transparent",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  justifyContent: "center",
});

export default Buttons;
