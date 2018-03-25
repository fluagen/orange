import React, { Component } from 'react';
import { Row, Col } from 'antd';

import About from '../Aside/About';
import ButtonTopic from '../Aside/ButtonTopic';
import Topics from '../Topics/Topics';

import styles from './Home.module.scss';

class Home extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className="container">
          <Row gutter={16}>
            <Col span={18}>
              <div className="list-group">
                <Topics />
                <div className="list-group-item"><a href="/topic/aaa">aaa</a></div>
                <div className="list-group-item"><a href="/topic/bbb">bbb</a></div>
              </div>
            </Col>
            <Col span={6}>
              <About />
              <ButtonTopic />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
