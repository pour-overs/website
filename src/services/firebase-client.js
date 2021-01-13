import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "@config/firebase.config.js";

export { firebase };
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();


