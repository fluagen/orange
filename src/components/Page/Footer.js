import React, { Component } from "react";

import { Row, Col } from "antd";

import "./Footer.less";

class Footer extends Component {
  render() {
    return (
      <div className="page-footer">
        <Row>
          <Col sm={6} md={4} lg={4} />
          <Col sm={12} md={16} lg={16}>
            <div className="page-footer-main">aaaa</div>
          </Col>
          <Col sm={6} md={4} lg={4} />
        </Row>
      </div>
    );
  }
}

export default Footer;
