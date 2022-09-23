import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoS6ou0wb-KB6rhKal78UYHldwDpIszyE",
  authDomain: "coderhouse-ecommerce-f9b6d.firebaseapp.com",
  projectId: "coderhouse-ecommerce-f9b6d",
  storageBucket: "coderhouse-ecommerce-f9b6d.appspot.com",
  messagingSenderId: "465770779912",
  appId: "1:465770779912:web:f4894d0f72b71ff7fbc8bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



