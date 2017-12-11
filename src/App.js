import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Page/Header";
import Footer from "./components/Page/Footer";
import Home from "./components/Page/Home";
import Topics from "./components/Topics/Topics";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

import './mock/Topic';

import "./components/style/main.less";
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
      <Route path="/signup" component={Register} />
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
