import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import firebase from "../firebase";

export const userCollection = collection(firebase, "users");

export const checkUser = async (email) => {
  let exists = false;
  const users = await getDocs(
    query(userCollection, where("email", "==", `${email}`))
  );
  users.forEach((user) => {
    exists = user.exists();
  });

  return exists;
};
export const getUserCollection = () => {};

export const setUserCollection = (data) =>
  addDoc(userCollection, {
    ...data,
    type: "user",
    isManager: false,
    created: Timestamp.now(),
  });

export const checkPassword = async (email, password) => {
  const users = await getDocs(
    query(
      userCollection,
      where("email", "==", `${email}`),
      where("password", "==", password)
    )
  );

  let id = null;
  let isManager;
  users.forEach((user) => {
    id = user.id;
    isManager = user.data().isManager;
  });

  return { id, isManager };
};
