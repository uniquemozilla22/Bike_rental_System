import { addDoc, collection, Timestamp } from "firebase/firestore";
import firebase from "../firebase";

export const bikeCollection = collection(firebase, "bikes");

export const setBikesData = (data) =>
  addDoc(bikeCollection, {
    ...data,
    created: Timestamp.now(),
  });
