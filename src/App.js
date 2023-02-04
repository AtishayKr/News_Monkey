import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      // <>
      //   <Navbar/>
      //   <News category="general" pageSize="20"/>
      // </>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News category="general" pageSize="20"/>} />
        </Routes>
        <Routes>
          <Route exact path="/general" element={<News category="general" pageSize="20"/>} />
        </Routes>
        <Routes>
          <Route exact path="/business" element={<News category="business" pageSize="20"/>} />
        </Routes>
        <Routes>
          <Route exact path="/entertainment" element={<News category="entertainment" pageSize="20"/>} />
        </Routes>
        <Routes>
          <Route exact path="/health" element={<News category="health" pageSize="20"/>} />
        </Routes>
        <Routes>
          <Route exact path="/science" element={<News category="science" pageSize="20"/>} />
        </Routes>
        <Routes>
          <Route exact path="/sports" element={<News category="sports" pageSize="20"/>} />
        </Routes>
        <Routes>
          <Route exact path="/technology" element={<News category="technology" pageSize="20"/>} />
        </Routes>
      </Router>

      // <div> THis is home page</div>
    );
  }
}
