import styled from "@emotion/styled";
import { Close } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import Buttons from "../../UI/Buttons";
import Input from "../../UI/Input";
import { SubHeadings } from "../../UI/Typography";
import ProductCardComponent from "../ProductCard/ProductCard.comp";
const AddBikeForm = ({ onClose, handleSubmition, editingData }) => {
  const [data, setData] = useState(
    editingData
      ? { ...editingData }
      : {
          name: null,
          image: null,
          price: null,
          description: null,
        }
  );

  return (
    <Box>
      <Title>
        <SubHeadings>Add Bike</SubHeadings>
        <Tooltip title="Close">
          <Close onClick={onClose} />
        </Tooltip>
      </Title>
      <Form>
        <ProductDisplay>
          <ProductCardComponent
            name={data.name || "<name here>"}
            image={data.image || "<image here>"}
            price={data.price || 0}
            description={data.description || "<description part goes here>"}
            showModal
          />
        </ProductDisplay>

        <Forms>
          <Input
            type="text"
            placeholder="Bike Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
            value={data.name}
          />
          <Input
            type="number"
            placeholder="Price"
            onChange={(e) => setData({ ...data, price: e.target.value })}
            required
            value={data.price}
          />
          <Input
            type="text"
            placeholder="Image URL"
            onChange={(e) => setData({ ...data, image: e.target.value })}
            required
            value={data.image}
          />
          <Input
            type="textarea"
            placeholder="Description"
            row={5}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            required
            value={data.description}
          />
          <Buttons primary onClick={(e) => handleSubmition(data)}>
            Submit
          </Buttons>
        </Forms>
      </Form>
    </Box>
  );
};
const Title = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem 0",
});

const Box = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#f8f8f8",
  padding: "1rem 2rem",
  width: "60vw",
  " @media(max-width: 768px) ": {
    width: "80vw",
  },
});

const Form = styled.div({
  display: "flex",
  gap: "5rem",
  alignContent: "center",
  justifyContent: "center",
  flexWrap: "wrap",
});

const Forms = styled.div({
  flex: "1",
  width: "100%",
  display: "flex",
  gap: "1rem",
  alignContent: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
});

const ProductDisplay = styled.div({
  flex: "1",
});

export default AddBikeForm;
