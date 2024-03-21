import { nApp, nDb } from "../db";

export const fetchServices = async () => {
  try {
    const snapshot = await nDb.collection("services").get();
    const servicesData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return servicesData;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error; // Rethrow the error to propagate it up to the caller
  }
};

export const fetchServiceById = async (id) => {
  try {
    const snapshot = await nDb.collection("services").doc(id).get();
    const serviceData = snapshot.data(); // Access data directly
    return serviceData;
  } catch (error) {
    throw error; // Re-throw error to be caught in the rejected case
  }
};

export const deleteService = async (id) => {
  try {
    nDb
      .collection("services")
      .doc(id)
      .delete()
      .then(() => {
        console.log("delete success");
      });
  } catch (error) {
    console.error(error);
  }
};

export const addService = async (payload) => {
  try {
    nDb
      .collection("services")
      .add({ ...payload })
      .then((docRef) => {
        console.log("success upload service", docRef.id);
      });
  } catch (error) {
    console.log(error);
  }
};

const createProfile = async (userProfile) => {
  try {
    nDb.collection("profiles").doc(userProfile.uid).set(userProfile);
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (emailHook, passwordHook, fullName) => {
  try {
    const userCredential = await nApp
      .auth()
      .createUserWithEmailAndPassword(emailHook.data, passwordHook.data);
    const user = userCredential.user;
    console.log("success", user);
    const userProfile = {
      uid: user.uid,
      fullName: fullName.data,
      email: emailHook.data,
    };
    const newProfile = await createProfile(userProfile);
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error("Error registering user:", errorCode, errorMessage);
  }
};
