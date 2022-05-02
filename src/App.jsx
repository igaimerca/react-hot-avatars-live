import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {

  return (
    <>
      <NavBar />
      <div className="mockup-window my-2 border w-11/12 m-auto">
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default App;
