import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBlJVnmqA6-cmXhxAolP3i67xtkNblHT0",
  authDomain: "dietflow-13664.firebaseapp.com",
  projectId: "dietflow-13664",
  storageBucket: "dietflow-13664.appspot.com",
  messagingSenderId: "882720445844",
  appId: "1:882720445844:web:eb97dacda26ec939582b81",
  measurementId: "G-T9BQBZE4PX"
};

// Initialize Firebase

const app = createApp(initializeApp(firebaseConfig));

app.use(createPinia());
app.use(router);

app.mount("#app");
