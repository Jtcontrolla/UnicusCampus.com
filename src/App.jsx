import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Programs from './Components/Programs/Programs.jsx'
import Hero from './components/Hero.jsx'
import Header from './components/Header.jsx'
import Testimonial from './components/testimonial/Testimonial.jsx'


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Programs/>
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;

