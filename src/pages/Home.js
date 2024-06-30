import React, { Component } from "react";

import Sidebar from "../components/Sidebar";
import Introduction from "../components/Introduction";
import About from "../components/About";
import TimeLine from "../components/TimeLine";
import MainMenu from "../components/MainMenu";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <MainMenu />
            <Introduction />
            <About />
            <Projects />
            {/* <Blog /> */}
            <TimeLine />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
