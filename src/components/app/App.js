import { Route, Routes, useLocation } from "react-router-dom";
import "../app/App.css";
import "../header/Header";
import Main from "../main/Main";
import AboutMe from "../aboutMe/AboutMe";
import Hobby from "../hobby/Hobby";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className="page">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/hobby" element={<Hobby />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
