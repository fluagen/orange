import React, { Component } from "react";
import { Row, Col } from "antd";

import RegisterForm from "./RegisterForm";
import About from "../Aside/About";

import "../style/container.less";
import "../style/list-group.less";
import "./Register.less";

import styles from './Register.module.scss';

class Register extends Component {
  render() {
    return (
      <div className="container">
        <Row gutter={16}>
          <Col span={18}>
            <div className="list-group">
              <div className="list-group-item">注册</div>
              <div className="list-group-item">
                <div className={styles.register}>
                  <RegisterForm />
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

export default Register;
