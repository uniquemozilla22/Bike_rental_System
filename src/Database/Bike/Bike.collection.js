import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import firebase from "../firebase";

export const bikeCollection = collection(firebase, "bikes");

export const setBikesData = (data) =>
  addDoc(bikeCollection, {
    ...data,
    created: Timestamp.now(),
  });

export const getAllBikes = () => getDocs(bikeCollection);

export const getBikeById = async (id) => {
  const bike = await getDoc(doc(firebase, "bikes", id));
  return { ...bike.data(), id: bike.id };
};

export const deleteBikeById = (id) => deleteDoc(doc(firebase, "bikes", id));
