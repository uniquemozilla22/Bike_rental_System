import { collection, getDocs } from "firebase/firestore";
import firebase from "../firebase";

export const bookingsCollection = collection(firebase, "bookings");

export const getAllBikes = () => getDocs(bookingsCollection);
