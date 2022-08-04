import styled from "@emotion/styled";
import { Close, FilterAltOutlined } from "@mui/icons-material";
import { Drawer, Modal, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCardComponent from "../Components/ProductCard/ProductCard.comp";
import Buttons from "../UI/Buttons";
import { Headings, SubHeadings } from "../UI/Typography";
import bikeData from "../__mock__/BikeData.json";

const Bikelist = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getBikes();
  }, []);
  const getBikes = () => {
    setData([...bikeData]);
  };
  return (
    <>
      <Container>
        <TitleContainer>
          <Headings>Bike Lists</Headings>
          <Tooltip title="Filter">
            <FilterAltOutlined onClick={() => setShowFilter(true)} />
          </Tooltip>
        </TitleContainer>
        <Wrapper>
          {data.map((bike, index) => (
            <ProductCardComponent key={index} {...bike} />
          ))}
        </Wrapper>
      </Container>
      <Drawer
        anchor={"right"}
        open={showFilter}
        onClose={() => setShowFilter(false)}
      >
        <TitleContainer>
          <Headings>Filter.</Headings>
          <Tooltip title="Close">
            <Close onClick={() => setShowFilter(false)} />
          </Tooltip>
        </TitleContainer>
      </Drawer>
    </>
  );
};

const Container = styled.div({});

const TitleContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 0",
  gap: "1rem",
  alignItems: "center",
});

const Wrapper = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gap: "1rem",
  justifyContent: "flex-start",
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

export default Bikelist;
