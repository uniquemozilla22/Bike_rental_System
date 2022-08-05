import styled from "@emotion/styled";
import { Close } from "@mui/icons-material";
import { Modal, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AddBikeForm from "../../Components/AddBike/AddBike.comp";
import ProductCardComponent from "../../Components/ProductCard/ProductCard.comp";
import { addBikeData, getAllBikeData } from "../../store/Actions/Bike.action";
import Buttons from "../../UI/Buttons";
import Input from "../../UI/Input";
import { Headings, Paragraph, SubHeadings } from "../../UI/Typography";
import SingleBikeScreen from "../SingleBike.screen";

const BikeScreen = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ManagerBikeScreen />} />
        <Route path="/:id" element={<SingleBikeScreen />} />
      </Routes>
    </>
  );
};
const ManagerBikeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => fetchData, []);

  const submitHandler = async (data) => {
    const bike = await dispatch(addBikeData({ ...data }));
    console.log(bike.data());
  };

  const fetchData = async () => {
    const bikes = await dispatch(getAllBikeData());
    console.log(bikes);
    setData([...bikes]);
  };
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
        <Body>
          {data.map((bikes, index) => (
            <ProductCardComponent key={index} {...bikes} />
          ))}
        </Body>
      </Wrapper>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <AddBikeForm
          onClose={() => setShowModal(false)}
          handleSubmition={submitHandler}
        />
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

const Body = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gap: "1rem",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexWrap: "wrap",
  "@media (max-width: 1168px)": {
    gridTemplateColumns: "repeat(3,1fr)",
  },
  "@media (max-width: 768px)": {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  "@media (max-width: 420px)": {
    gridTemplateColumns: "repeat(1,1fr)",
  },
});

export default BikeScreen;
