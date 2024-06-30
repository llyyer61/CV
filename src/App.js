import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HOME from "./pages/Home";
import Effect from "./pages/Effect";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HOME />}></Route>
          <Route path="/Effect" element={<Effect />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
