import React, { Component } from "react";
import { Row, Col } from "antd";

import LoginForm from "./LoginForm";
import About from "../Aside/About";

import "../style/container.less";
import "../style/list-group.less";
import "./Login.less";

import styles from './Login.module.scss'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Row gutter={16}>
          <Col span={18}>
            <div className="list-group">
              <div className="list-group-item">登录</div>
              <div className="list-group-item">
                <div className={styles.login}>
                  <LoginForm />
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <About />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
