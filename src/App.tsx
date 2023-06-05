import React from "react";
import "./App.scss";
import Navbar from "components/other/Navbar/Navbar";
import Home from "pages/home/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
