import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteBike,
  getBikeByID,
  updateBikeData,
} from "../../store/Actions/Bike.action";
import Buttons from "../../UI/Buttons";
import { Headings, Paragraph, SubHeadings } from "../../UI/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@mui/material";
import AddBikeForm from "../AddBike/AddBike.comp";
import { showWarningMessage } from "../../store/Actions/Alert.action";

const SingleProductComp = () => {
  const { id } = useParams();
  const isManager = useSelector((state) => state.user.isManager);
  const dispatch = useDispatch();
  const [bikeData, setBikeData] = useState(null);
  const navigation = useNavigate();
  const [showEditBikeModal, setShowEditBikeModal] = useState(false);

  useEffect(() => fetchDataById, []);

  const fetchDataById = async () => {
    const data = await dispatch(getBikeByID(id));
    setBikeData({ ...data });
  };

  const handleDelete = async () => {
    const data = await dispatch(deleteBike(id));
    if (data) navigation("../");
  };

  const handleUpdate = async (data) => {
    const { id, created, ...rest } = data;
    if (isNotChanged) {
      dispatch(
        showWarningMessage(
          "No Data Changed",
          " Modify a Data to submit the data"
        )
      );
      return;
    }
    console.log(rest);
    const response = await dispatch(updateBikeData(id, rest));
    if (response) setBikeData({ ...rest });
  };

  const isNotChanged = (rest, data) =>
    rest.description === data.description &&
    rest.name === data.name &&
    rest.price === data.price &&
    rest.image === data.image;

  return (
    bikeData && (
      <>
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
            <Paragraph>Description: {bikeData.description}</Paragraph>

            {isManager ? (
              <ActionContainer>
                <Buttons primary onClick={(e) => setShowEditBikeModal(true)}>
                  Edit {bikeData.name}
                </Buttons>
                <Buttons onClick={(e) => handleDelete()}>
                  Remove {bikeData.name}
                </Buttons>
              </ActionContainer>
            ) : (
              <ActionContainer>
                <Buttons primary>Book {bikeData.name}</Buttons>
              </ActionContainer>
            )}
          </Content>
        </Wrapper>
        <Modal
          open={showEditBikeModal}
          onClose={() => setShowEditBikeModal(false)}
        >
          <AddBikeForm
            onClose={() => setShowEditBikeModal(false)}
            handleSubmition={handleUpdate}
            editingData={bikeData}
          />
        </Modal>
      </>
    )
  );
};

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  // flexWrap: "wrap",

  "@media (max-width:1510px)": {
    flexDirection: "column",
  },
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
  "@media (max-width:1510px)": {
    maxHeight: "500px",
  },
});

export default SingleProductComp;
