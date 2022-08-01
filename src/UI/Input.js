import styled from "@emotion/styled";
import React from "react";

const Input = (props) => {
  const { primary, secondary } = props;
  if (primary) return <Primary {...props} />;
  else if (secondary) return <Secondary {...props} />;
  else return <Default {...props} />;
};

const Primary = styled.input({
  color: "#2b2b2b",
  borderRadius: "0.3rem",
  padding: "1rem",
  border: "1px solid #2b2b2b",
});

const Default = styled.input({
  color: "#2b2b2b",
  borderRadius: "0.3rem",
  padding: "1rem",
  border: "1px solid #2b2b2b",
});

const Secondary = styled.input({
  color: "#2b2b2b",
  borderRadius: "0.3rem",
  padding: "1rem",
  border: "1px solid #2b2b2b",
});

export default Input;
