import React from "react";
import SingleProductComp from "../Components/SingleProduct/SingleProduct.comp";

import styled from "@emotion/styled";
import { Modal } from "@mui/material";

const SingleBikeScreen = () => {
  return (
    <Wrapper>
      <SingleProductComp />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  position: "relative",
});
export default SingleBikeScreen;
