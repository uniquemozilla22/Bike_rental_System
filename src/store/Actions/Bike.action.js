import {
  deleteBikeById,
  getAllBikes,
  getBikeById,
  setBikesData,
  updateDocumentBike,
} from "../../Database/Bike/Bike.collection";
import { showSuccessMessage } from "./Alert.action";
import ErrorHandle from "./ErrorHandle.action";
import { hideLoading, showLoading } from "./Loading.action";
import { checkUserTypeByID } from "../../Database/Users/User.collection";
import {
  FETCH_BIKE_DATA_ALL,
  FETCH_BIKE_DATA_BY_ID,
  POST_BIKE_DATA,
} from "../constants";

export const addBikeData = (data) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const isManager = await checkUserTypeByID(getState().user.token);
      if (!isManager) throw new Error("Not a Manager ! Login as a Manager");
      const bike = await setBikesData({ ...data });
      dispatch({ type: POST_BIKE_DATA });
      dispatch(
        showSuccessMessage(
          "Added Bike Success",
          data.name + " has been added successfully"
        )
      );
      dispatch(hideLoading());
      return { ...data, id: bike.id };
    } catch (error) {
      ErrorHandle("Add Bike Data Error", error, dispatch);
      return false;
    }
  };
};

export const getAllBikeData = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const bike = await getAllBikes();
      let bikeData = [];
      dispatch({ type: FETCH_BIKE_DATA_ALL });

      bike.forEach((rentalBike, index) => {
        bikeData = [...bikeData, { ...rentalBike.data(), id: rentalBike.id }];
      });
      dispatch(hideLoading());
      return bikeData;
    } catch (e) {
      ErrorHandle("Fetch Bike Data Error", e, dispatch);
      return false;
    }
  };
};

export const getBikeByID = (id) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const bike = await getBikeById(id);
      dispatch({ type: FETCH_BIKE_DATA_BY_ID });
      dispatch(hideLoading());
      return bike;
    } catch (e) {
      ErrorHandle("Fetch Bike Data by ID Error", e, dispatch);
      return false;
    }
  };
};

export const deleteBike = (id) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await deleteBikeById(id);
      dispatch(hideLoading());
      dispatch(
        showSuccessMessage(
          "Deleted Bike! ",
          " The Item has been successfully removed from the system"
        )
      );
      return true;
    } catch (e) {
      ErrorHandle("Delete Bike Data Error", e, dispatch);
      return false;
    }
  };
};

export const updateBikeData = (id, data) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const isManager = await checkUserTypeByID(getState().user.token);
      if (!isManager) throw new Error("Not a Manager ! Login as a Manager");
      await updateDocumentBike(id, data);
      dispatch(
        showSuccessMessage(
          "Updated " + data.name,
          `${data.name} has been updated with your given parameters.`
        )
      );
      dispatch(hideLoading());
      return true;
    } catch (e) {
      ErrorHandle("Update Bike Data Error", e, dispatch);
      return false;
    }
  };
};
