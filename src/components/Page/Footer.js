import React, { Component } from "react";

import { Row, Col } from "antd";

import "./Footer.less";
import "../style/container.less";

class Footer extends Component {
  render() {
    return (
      <div className="page-footer">
        <div className="container">
          <Row>
            <Col sm={12} md={16} lg={16}>
              <div className="page-footer-main">aaaa</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
