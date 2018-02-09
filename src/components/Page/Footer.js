import React, { Component } from "react";

import { Row, Col } from "antd";

import styles from './Footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className="container">
          <Row>
            <Col sm={12} md={16} lg={16}>
              <div>aaaa</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
