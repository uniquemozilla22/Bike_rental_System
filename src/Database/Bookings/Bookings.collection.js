import { addDoc, collection, getDocs } from "firebase/firestore";
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
