import { useState } from "react";
import "./index.scss"
import "./components/Header.scss";
import "./components/Footer.scss";
import "./components/pages/Home/Home.scss";
import "./components/pages/Home/WatchAll.scss";
import "./components/pages/Home/AboutGSL.scss";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Contacts from "./components/pages/Contact/Contacts";
import About from "./components/pages/About/About";
import Catalog from "./components/pages/Catalog/Catalog";
import Productions from "./components/pages/Home/Productions";
import Footer from "./components/Footer";
import Register from "./components/pages/Register/register";
import UserProvider from "./context/UserProvider";
import Favorites from "./components/Favorite/Favorites";

function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/productions/:id" element={<Productions />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Favorites" element={<Favorites />} />{" "}
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
