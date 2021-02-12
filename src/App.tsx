import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Router> 
        <NavBar />
        <Route path="/" exact render={props => <Home {...props} />} /> 
{/* passing props from router, need to let TS know we are passing form "outside" from App.tsx */}
        <Route path="/details/:id"  render={props => <Details {...props} />} />
      </Router>
    </div>
  );
}

export default App;
