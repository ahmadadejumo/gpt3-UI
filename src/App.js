import "./App.css";
import React from "react";
import Cta from "./Component/cta/Cta";
import Brand from "./Component/brand/Brand";
import Navbar from "./Component/navbar/Navbar";
import Footer from "./Containers/footer/Footer";
import Blog from "./Containers/blog/Blog";
import Possibility from "./Containers/possibility/Possibility";
import Features from "./Containers/features/Features";
import WhatGPT3 from "./Containers/whatGPT3/WhatGPT3";
import Header from "./Containers/header/Header";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
