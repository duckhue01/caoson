import firebase from "firebase/app"
import 'firebase/firestore'
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// pages
import Home from "./pages/home/Home";   
import Service from "./pages/service/Service";
import Store from "./pages/store/Store";
import Project from "./pages/projects/Project";



// firebase init
firebase.initializeApp({
  apiKey: "AIzaSyAx-hUqn661JV7QBLSVVazGOeeqLNDNrm0",
  authDomain: "caosonn.firebaseapp.com",
  projectId: "caosonn"
});
const db  = firebase.firestore();


function App() {
  


  return (
   
    <div className="font-extend01">
      <Router>        
          <Switch>
          <Route path="/" exact component={Home}>              
          </Route>
          <Route path="/service" exact component={Service}>            
          </Route>
          <Route path="/projects" exact component={Project}>          
          </Route>
          <Route path="/store" exact component={Store}>          
          </Route>
        </Switch>
      </Router>                  
    </div>
  );
}

export default App;
