import React, { Component } from 'react';
import { Row, Col } from 'antd';
import About from '../Aside/About';
import Replies from '../Reply/Replies';

import styles from './Topic.module.scss';

class Topic extends Component {
  render() {
    return (
      <div className="container">
        <Row gutter={16}>
          <Col span={18}>
            <div className="list-group">
              <div className="list-group-item">
                <h1 className={styles.title}>话题标题</h1>
              </div>
              <div className="list-group-item">话题内容</div>
              <div className="list-group-item">工具栏</div>
            </div>
            <Replies />
          </Col>
          <Col span={6}>
            <About />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Topic;
