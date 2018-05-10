import React, { Component } from 'react';
import { Row, Col } from 'antd';

import About from '../components/Aside/About';
import ButtonTopic from '../components/Aside/ButtonTopic';

import styles from './Home.module.scss';

import TopicList from './TopicList';

const Home = () => (
  <div className={styles.main}>
    <div className="container">
      <Row gutter={16}>
        <Col span={18}>
          <TopicList />
        </Col>
        <Col span={6}>
          <About />
          <ButtonTopic />
        </Col>
      </Row>
    </div>
  </div>
);

export default Home;
