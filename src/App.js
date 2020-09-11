import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
