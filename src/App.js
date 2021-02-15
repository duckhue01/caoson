import firebase from "firebase/app"
import 'firebase/firestore'
import React, { useState, useEffect } from "react";


// template
import Menu from "./templates/Menu";


// pages 
import Home from "./pages/home/Home";


// firebase init
firebase.initializeApp({
  apiKey: "AIzaSyAx-hUqn661JV7QBLSVVazGOeeqLNDNrm0",
  authDomain: "caosonn.firebaseapp.com",
  
  projectId: "caosonn"
});
const db  = firebase.firestore();


function App() {
  


  return (
    <div className="App">
      <Home/>
      
      
    </div>
  );
}

export default App;
