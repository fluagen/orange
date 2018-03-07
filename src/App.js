import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Page/Header";
import Footer from "./components/Page/Footer";
import Home from "./components/Page/Home";
import Topics from "./components/Topics/Topics";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import TopicEditor from "./components/Topics/TopicEditor";
import Topic from "./components/Topics/Topic";

import './mock/Topic';

import "./components/style/main.less";
import './App.less';

import styles from "./App.module.scss";

const Page = () => (
  <div className={styles.main}>
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.home}>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={Register} />
      <Route path="/topics" component={Topics} />
      <Route path="/topic/create" component={TopicEditor} />
      <Route path="/topic/:tid" component={Topic} />
    </div>
    <div className={styles.footer}>
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
