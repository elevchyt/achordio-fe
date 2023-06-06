import React from "react";
import "./App.scss";
import Navbar from "components/other/Navbar/Navbar";
import Home from "pages/home/Home";
import Spinner from "components/graphics/Spinner/Spinner";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Spinner />
    </div>
  );
};

export default App;
