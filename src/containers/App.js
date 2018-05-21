import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
import Navigation from '../components/Page/Navigation';
import Home from './Home';
// import '../stylesheets/main.scss';
import styles from './App.module.scss';

const { Header, Footer, Sider, Content } = Layout;

const Page = () => (
  <Layout className={styles.main}>
    <Header className={styles.header}>
      <Navigation />
    </Header>
    <Content className={styles.home}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Content>
    <Footer className={styles.footer}>
      <div className="container">Footer</div>
    </Footer>
  </Layout>
);

const App = () => (
  <Router>
    <Page />
  </Router>
);

export default App;
