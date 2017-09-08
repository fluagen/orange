import React, { Component } from "react";

import { Row, Col } from "antd";

import "./Content.less";

class Content extends Component {
  render() {
    return (
      <div className="page-content">
        <Row>
          <Col sm={6} md={4} lg={4} />
          <Col sm={12} md={16} lg={16}>
            <div className="page-content-main">aaaa</div>
          </Col>
          <Col sm={6} md={4} lg={4} />
        </Row>
      </div>
    );
  }
}

export default Content;
