import React, { Component } from "react";
import { Row, Col } from "antd";

import LoginForm from "./LoginForm";
import About from "../Aside/About";

import "../style/list-group.less";
import "./Login.less";

class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={6} md={4} lg={4} />
          <Col sm={12} md={16} lg={16}>
            <div>
              <Row gutter={16}>
                <Col span={18}>
                  <div className="list-group">
                    <div className="list-group-item">登录</div>
                    <div className="list-group-item">
                      <div className="login">
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
          </Col>
          <Col sm={6} md={4} lg={4} />
        </Row>
      </div>
    );
  }
}

export default Home;
