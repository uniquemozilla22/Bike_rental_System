import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import firebase from "../firebase";

export const bookingsCollection = collection(firebase, "bookings");

export const getAllBikesBookings = () => getDocs(bookingsCollection);

export const bookBike = (bookedBy, bookingFor, upTo) => {
  addDoc(bookingsCollection, {
    bookedBy,
    bookingFor,
    upTo,
  });
};

export const verifyBooking = async (user, bike) => {
  const bookedDate = await getDoc(
    query(
      bookingsCollection,
      where("bookingFor", "==", `${bike}`),
      where("bookedBy", "==", `${user}`)
    )
  );

  if (bookedDate.exists()) {
    return bookedDate.data();
  }
  return false;
};
