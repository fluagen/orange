import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Page/Header";
import Footer from "./components/Page/Footer";
import Home from "./components/Page/Home";

import Topics from "./components/Topics/Topics";

import "./Page.less";

const App = () => (
  <div className="page-home">
    <div className="page-home-header">
      <Header />
    </div>
    <div className="page-home-content">
      <Route path="/" exact component={Home} />
      <Route path="/topics" component={Topics} />
    </div>
    <div className="page-home-footer">
      <Footer />
    </div>
  </div>
);

const Page = () => (
  <Router>
    <App />
  </Router>
);

export default Page;
