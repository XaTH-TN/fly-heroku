import React from "react";

import Routes from "./routers";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

const App = () => {

  return (
    <Router>
      <Routes />
    </Router>
  );
  
}

export default App;
