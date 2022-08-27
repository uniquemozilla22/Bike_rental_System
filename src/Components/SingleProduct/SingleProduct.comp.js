import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteBike,
  getBikeByID,
  updateBikeData,
} from "../../store/Actions/Bike.action";
import Buttons from "../../UI/Buttons";
import { Headings, Paragraph, SubHeadings } from "../../UI/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Tooltip } from "@mui/material";
import AddBikeForm from "../AddBike/AddBike.comp";
import {
  showInfoMessage,
  showWarningMessage,
} from "../../store/Actions/Alert.action";
import Input from "../../UI/Input";
import { Close } from "@mui/icons-material";
import {
  bookaBike,
  verifyBookedBike,
} from "../../store/Actions/Bookings.action";
import { verifyBooking } from "../../Database/Bookings/Bookings.collection";

const SingleProductComp = () => {
  const { id } = useParams();
  const isManager = useSelector((state) => state.user.isManager);
  const user = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [bikeData, setBikeData] = useState(null);
  const [showEditBikeModal, setShowEditBikeModal] = useState(false);
  const [showBookingsBikeModal, setShowBookingsBikeModal] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [isAlreadyBooked, setIsAlreadyBooked] = useState(null);

  const fetchDataById = useCallback(async () => {
    const data = await dispatch(getBikeByID(id));
    if (data) setBikeData({ ...data });
  }, [dispatch, id]);

  const verifyUserBooking = useCallback(async () => {
    console.log("called verify user booking");
    const verify = await dispatch(verifyBookedBike(user, id));
    if (!verify) return;
    setIsAlreadyBooked({ ...verify });
  }, [dispatch, id, user]);

  useEffect(() => verifyUserBooking[verifyUserBooking]);
  useEffect(() => fetchDataById, [fetchDataById]);

  const handleDelete = () => {
    const data = dispatch(deleteBike(id));
    if (data) navigation("../");
  };

  const handleUpdate = async (data) => {
    const { id, created, ...rest } = data;
    if (isNotChanged(rest, bikeData)) {
      dispatch(
        showWarningMessage(
          "No Data Changed",
          " Modify a Data to submit the data"
        )
      );
      return;
    }
    const response = await dispatch(updateBikeData(id, rest));
    if (response) {
      setBikeData({ ...rest });
      setShowEditBikeModal(false);
    }
  };

  const isNotChanged = (rest, data) =>
    rest.description === data.description &&
    rest.name === data.name &&
    rest.price === data.price &&
    rest.image === data.image;

  const handleBookings = async (e) => {
    e.preventDefault();
    console.log(user, id, "Handle Bookings");
    if (bookingDate === "") {
      dispatch(
        showInfoMessage(
          "Date Validation Error",
          "You must enter a date for booking the bike"
        )
      );
      return;
    }
    const booked = await dispatch(bookaBike(user, id, bookingDate));
    if (!booked) return;
  };

  const handleShowBookings = () => setShowBookingsBikeModal(true);
  const handleHideBookings = () => setShowBookingsBikeModal(false);

  return bikeData ? (
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
              <Buttons primary onClick={() => setShowEditBikeModal(true)}>
                Edit {bikeData.name}
              </Buttons>
              <Buttons onClick={() => handleDelete()}>
                Remove {bikeData.name}
              </Buttons>
            </ActionContainer>
          ) : (
            <ActionContainer>
              {!!isAlreadyBooked ? (
                <Buttons primary disabled>
                  Already Booked
                </Buttons>
              ) : (
                <Buttons primary onClick={handleShowBookings}>
                  Book {bikeData.name}
                </Buttons>
              )}
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
      <Modal open={showBookingsBikeModal} onClose={handleHideBookings}>
        <BookingsWrapper>
          <ContentWrapperBookingsModal>
            <SubHeadings>Choose a Date</SubHeadings>
            <Tooltip title="Close">
              <Close onClick={handleHideBookings} />
            </Tooltip>
          </ContentWrapperBookingsModal>
          <FormBookings onSubmit={handleBookings}>
            <Input
              id="date_for_bookings"
              type="date"
              onChange={(e) => setBookingDate(e.target.value)}
            />
            <Buttons primary type="submit">
              Submit
            </Buttons>
          </FormBookings>
        </BookingsWrapper>
      </Modal>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

const FormBookings = styled.form({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const ContentWrapperBookingsModal = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

const BookingsWrapper = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  background: "#fff",
  padding: "1rem 2rem",
  borderRadius: "5px",
  minWidth: "20vw",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",

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
