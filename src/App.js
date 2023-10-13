import React from "react";
import "./app.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Popular from "./Components/Popular/Popular";
import About from "./Components/About/About";
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Pricing />

      <About />
      <Footer />
    </>
  );
};

export default App;
