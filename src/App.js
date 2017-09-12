import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Page/Header";
import Footer from "./components/Page/Footer";
import Home from "./components/Page/Home";
import Topics from "./components/Topics/Topics";
import Login from "./components/Login/Login";

import './mock/Topic';

import './App.less';

const Page = () => (
  <div className="app-main">
    <div className="app-header">
      <Header />
    </div>
    <div className="app-content">
      <Route path="/" exact component={Home} />
      <Route path="/topics" component={Topics} />
      <Route path="/signin" component={Login} />
    </div>
    <div className="app-footer">
      <Footer />
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <Page />
      </Router>
    );
  }
}

export default App;
