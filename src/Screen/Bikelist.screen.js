import styled from "@emotion/styled";
import React from "react";
import ProductCardComponent from "../Components/ProductCard/ProductCard.comp";

const Bikelist = () => {
  return (
    <Wrapper>
      <ProductCardComponent />
      <ProductCardComponent />
      <ProductCardComponent />
      <ProductCardComponent />
      <ProductCardComponent />
    </Wrapper>
  );
};

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
