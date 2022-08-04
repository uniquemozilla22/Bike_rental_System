import styled from "@emotion/styled";
import { Close } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBikeData } from "../../store/Actions/Bike.action";
import Buttons from "../../UI/Buttons";
import Input from "../../UI/Input";
import { SubHeadings } from "../../UI/Typography";
import ProductCardComponent from "../ProductCard/ProductCard.comp";

const AddBikeForm = ({ onClose }) => {
  const [data, setData] = useState({
    name: null,
    image: null,
    price: null,
    description: null,
  });

  const dispatch = useDispatch();
  const submitHandler = async () => {
    console.log("being called");
    const bike = await dispatch(addBikeData({ ...data }));
    console.log(bike);
  };
  return (
    <Box>
      <Title>
        <SubHeadings>Add Bike</SubHeadings>
        <Tooltip title="Close">
          <Close onClick={onClose} />
        </Tooltip>
      </Title>
      <Form onSubmit={() => submitHandler}>
        <ProductCardComponent
          name={data.name || "<name here>"}
          image={data.image || "<image here>"}
          price={data.price || 0}
          description={data.description || "<description part goes here>"}
        />
        <Input
          type="text"
          placeholder="Bike Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Price"
          onChange={(e) => setData({ ...data, price: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Image URL"
          onChange={(e) => setData({ ...data, image: e.target.value })}
          required
        />
        <Input
          type="textarea"
          placeholder="Description"
          columns={2}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          required
        />
        <Buttons primary onClick={(e) => submitHandler(e)}>
          Submit
        </Buttons>
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

export default AddBikeForm;
