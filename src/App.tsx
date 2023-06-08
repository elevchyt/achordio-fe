import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Spinner from "components/graphics/Spinner/Spinner";
import NavbarVM from "components/other/Navbar/NavbarVM";
import Home from "pages/home/Home";
import Songs from "pages/songs/Songs";
import Artists from "pages/artists/Artists";
import News from "pages/news/News";
import Patterns from "components/graphics/Patterns/Patterns";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="App">
      <NavbarVM />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Patterns />
      <Spinner isLoading={isLoading} />
    </div>
  );
};

export default App;
