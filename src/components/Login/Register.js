import React, { Component } from "react";
import { Row, Col } from "antd";

import RegisterForm from "./RegisterForm";
import About from "../Aside/About";

import "../style/container.less";
import "../style/list-group.less";
import "./Register.less";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <Row gutter={16}>
          <Col span={2} />
          <Col span={16}>
            <div className="list-group">
              <div className="list-group-item">注册</div>
              <div className="list-group-item">
                <div className="register">
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
