import {
  bookBike,
  verifyBooking,
} from "../../Database/Bookings/Bookings.collection";
import { checkUserTypeByID } from "../../Database/Users/User.collection";
import { POST_BOOK_BIKE_DATA } from "../constants";
import { showInfoMessage, showSuccessMessage } from "./Alert.action";
import ErrorHandle from "./ErrorHandle.action";
import { hideLoading, showLoading } from "./Loading.action";

export const bookaBike = (bookedby, bookingfor, bookedupTo) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const isManager = await checkUserTypeByID(getState().user.token);
      if (isManager) {
        throw new Error("Managers are not allowed to book a vechicle");
      }
      await bookBike(bookedby, bookingfor, bookedupTo);
      dispatch({ type: POST_BOOK_BIKE_DATA });
      dispatch(
        showSuccessMessage(
          "Booked the bike",
          "Bike has been booked for you successfully"
        )
      );
      dispatch(hideLoading());
    } catch (error) {
      ErrorHandle("Add Bike Data Error", error, dispatch);
      return false;
    }
  };
};

export const verifyBookedBike = (user, bike) => {
  console.log("called verifyBookedBike", user, bike);
  return async (dispatch, getState) => {
    dispatch(showLoading());

    try {
      const isManager = await checkUserTypeByID(getState().user.token);
      if (isManager) {
        throw new Error("Managers are not allowed to book a vechicle");
      }
      const data = await verifyBooking(user, bike);
      if (!!data) {
        dispatch(
          showInfoMessage(
            "Already Booked Bike",
            "This bike has already been booked for you for the date :" +
              data.upTo
          )
        );
        return data;
      } else {
        return false;
      }
    } catch (error) {
      ErrorHandle("verify Bike Error", error, dispatch);
      return false;
    }
  };
};
