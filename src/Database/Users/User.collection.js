import firebase from "../firebase";

export const getUserCollection = () => {};

export const setUserCollection = (data) => {
  return firebase
    .firestore()
    .collection("users")
    .add({
      ...data,
    });
};
