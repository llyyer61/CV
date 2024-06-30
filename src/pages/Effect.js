import React, { Component } from "react";

import Slider from "../components/Slider";
import ContactForm from "../components/ContactForm";
import Card1 from "../components/Card1";
import CitiesSlider from "../components/CitiesSlider";
import Product from "../components/Product";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";

class Effect extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <MainMenu />
        <Slider />
        {/* <Card /> */}
        <Product />
        <CitiesSlider />
        <Card1 />
        <div style={{ backgroundColor: "black" }}>
          <ContactForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Effect;
