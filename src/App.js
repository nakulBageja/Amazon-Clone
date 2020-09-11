import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
