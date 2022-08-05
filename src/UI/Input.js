import styled from "@emotion/styled";
import React from "react";

const Input = (props) => {
  const { primary, secondary, type } = props;
  if (type === "textarea") {
    if (primary) return <PrimaryTextArea {...props} />;
    else if (secondary) return <SecondaryTextArea {...props} />;
    else return <DefaultTextArea {...props} />;
  } else {
    if (primary) return <Primary {...props} />;
    else if (secondary) return <Secondary {...props} />;
    else return <Default {...props} />;
  }
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

const PrimaryTextArea = styled.textarea({
  color: "#2b2b2b",
  borderRadius: "0.3rem",
  padding: "1rem",
  border: "1px solid #2b2b2b",
});

const DefaultTextArea = styled.textarea({
  color: "#2b2b2b",
  borderRadius: "0.3rem",
  padding: "1rem",
  border: "1px solid #2b2b2b",
});

const SecondaryTextArea = styled.textarea({
  color: "#2b2b2b",
  borderRadius: "0.3rem",
  padding: "1rem",
  border: "1px solid #2b2b2b",
});

export default Input;
