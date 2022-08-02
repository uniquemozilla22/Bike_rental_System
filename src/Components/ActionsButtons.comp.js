import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import Buttons from "../UI/Buttons";
import { SubHeadings } from "../UI/Typography";

const ActionButtonComponent = ({ title, action, image }) => {
  return (
    <Wrapper onClick={() => action()}>
      <Imagecontainer>
        <Image src={image} alt={title} />
      </Imagecontainer>
      <Typography>{title}</Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",
  padding: "1rem",
  borderRadius: "5px",
  transition: "all 0.2s ease-in",
  cursor: "pointer",
  ":hover": {
    boxShadow: "0 0 10px #2b2b2b50",
  },
});
const Imagecontainer = styled.div({
  height: "100px",
});

const Image = styled.img({
  height: "100%",
});

export default ActionButtonComponent;
