import styled from "@emotion/styled";
import { Close } from "@mui/icons-material";
import { Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";
import AddBikeForm from "../../Components/AddBike/AddBike.comp";
import ProductCardComponent from "../../Components/ProductCard/ProductCard.comp";
import Buttons from "../../UI/Buttons";
import Input from "../../UI/Input";
import { Headings, Paragraph, SubHeadings } from "../../UI/Typography";

const ManagerBikeScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Wrapper>
        <Header>
          <Title>
            <Headings>Bike Lists</Headings>
          </Title>
          <Buttons primary onClick={() => setShowModal(true)}>
            Add Bike
          </Buttons>
        </Header>
        <Body></Body>
      </Wrapper>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <AddBikeForm onClose={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

const Wrapper = styled.div({});
const Title = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem 0",
});
const Header = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Body = styled.div({});

const Box = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#f8f8f8",
  padding: "1rem 2rem",
  width: "40vw",
  " @media(max-width: 768px) ": {
    width: "80vw",
  },
});

const Form = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export default ManagerBikeScreen;
