import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBikeByID } from "../../store/Actions/Bike.action";
import Buttons from "../../UI/Buttons";
import { Headings, Paragraph, SubHeadings } from "../../UI/Typography";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../store/Actions/Loading.action";

const SingleProductComp = () => {
  const { id } = useParams();
  const isManager = useSelector((state) => state.user.isManager);
  const dispatch = useDispatch();
  const [bikeData, setBikeData] = useState(null);

  console.log(id);

  useEffect(() => fetchDataById, []);

  useEffect(() => {
    if (!bikeData) dispatch(showLoading());
    else dispatch(hideLoading());
  }, [bikeData]);

  const fetchDataById = async () => {
    const data = await dispatch(getBikeByID(id));
    setBikeData({ ...data });
  };
  return (
    bikeData && (
      <Wrapper>
        <ImageContainer>
          <Image src={bikeData.image} alt={bikeData.name} />
        </ImageContainer>
        <Content>
          <Headings>{bikeData.name}</Headings>
          <SubHeadings>
            {parseInt(bikeData.price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </SubHeadings>
          <Paragraph>Model: {bikeData.model}</Paragraph>
          <Paragraph>Color:{bikeData.color}</Paragraph>
          <Paragraph>Rating:{bikeData.rating}out of 5</Paragraph>

          {isManager ? (
            <ActionContainer>
              <Buttons primary>Edit {bikeData.name}</Buttons>
              <Buttons>Remove {bikeData.name}</Buttons>
            </ActionContainer>
          ) : (
            <ActionContainer>
              <Buttons primary>Book {bikeData.name}</Buttons>
            </ActionContainer>
          )}
        </Content>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
});
const ImageContainer = styled.div({
  flex: "1",
});
const Content = styled.div({
  flex: "2",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: "2rem",
});
const ActionContainer = styled.div({
  display: "flex",
  gap: "2rem",
  justifyContent: "flex-start",
});

const Image = styled.img({
  border: "1px solid #2b2b2b",
  borderRadius: "5px",
});

export default SingleProductComp;
