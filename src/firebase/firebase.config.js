// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk0ZH12w83U2fasKbVz5EbTLoW2ZciBJ8",
  authDomain: "a4-doict-pro-course-server.firebaseapp.com",
  projectId: "a4-doict-pro-course-server",
  storageBucket: "a4-doict-pro-course-server.appspot.com",
  messagingSenderId: "659602587507",
  appId: "1:659602587507:web:cc9e685cdfbbd45f0f8f06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
