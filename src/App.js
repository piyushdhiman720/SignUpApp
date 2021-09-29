import React from "react";
import { Switch, Route } from "react-router-dom";
import Forgot from "./components/Forgot";
import Facebook from "./components/FaceBook";
import Google from "./components/Google";
import Home from "./components/Home";
import './components/Home.css';

function App() {
  return (
    <div className="container-fluid">
    <h1 className="head-M">Welcome to Signup</h1>
    <Switch>  
      <Route exact path="/" component={Home} />  
      <Route exact path="/Facebook" component={Facebook} />  
      <Route path="/Google" component={Google} />
      <Route path="/Forgot" component={Forgot} />
    </Switch> 
    </div>
  );
}

export default App;
