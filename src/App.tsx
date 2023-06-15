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
import { ModalContext } from "context/ModalContext";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false); // The getter & setter data for modal context's open/closed state
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false); // The getter & setter data for modal context's button state
  const [modalType, setModalType] = useState<string>("login"); // The getter & setter data for modal context's modal type

  return (
    <div className="App">
      <ModalContext.Provider
        value={{
          isOpen: isOpen,
          setIsOpen: setIsOpen,
          isButtonDisabled: isButtonDisabled,
          setIsButtonDisabled: setIsButtonDisabled,
          modalType: modalType,
          setModalType: setModalType,
        }}
      >
        <NavbarVM />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </ModalContext.Provider>
      <Spinner isLoading={isLoading} />
      <Patterns />
    </div>
  );
};

export default App;
