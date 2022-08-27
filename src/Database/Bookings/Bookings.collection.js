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
  console.log(
    "🚀 ~ file: Bookings.collection.js ~ line 24 ~ verifyBooking ~ user, bike",
    user,
    bike
  );

  try {
    const bookedDate = await getDocs(
      query(
        bookingsCollection,
        where("bookingFor", "==", `${bike}`),
        where("bookedBy", "==", `${user}`)
      )
    );

    let data;
    bookedDate.forEach((booking, index) => {
      if (booking.exists()) {
        data = booking.data();
      }
    });
    return data;
  } catch (e) {
    return false;
  }
};
