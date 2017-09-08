import React, { Component } from "react";

import { Row, Col, Menu, Button } from "antd";
import { Link } from 'react-router-dom';

import "./Header.less";

class Header extends Component {
  render() {
    return (
      <div className="page-header">
        <Row>
          <Col sm={6} md={4} lg={4} />
          <Col sm={12} md={16} lg={16}>
            <div className="page-header-main">
              <div className="page-header-brand">OC</div>
              <div className="page-header-menu">
                <Menu mode="horizontal">
                  <Menu.Item><Link to="/">社区</Link></Menu.Item>
                  <Menu.Item><Link to="/topics">话题</Link></Menu.Item>
                  <Menu.Item>投票</Menu.Item>
                </Menu>
              </div>
              <div className="page-header-btn">
                <Button size="large">注册</Button>
                <Button size="large"><Link to="/signin">登录</Link></Button>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={4} />
        </Row>
      </div>
    );
  }
}

export default Header;
