import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

import styles from './TopicEditor.module.scss';

const TopicEditorContainer = () => (
  <Row gutter={16}>
    <Col span={20}>
      <TopicList />
    </Col>
    <Col span={4}>
      <About />
      <ButtonTopic />
    </Col>
  </Row>
)


export default TopicEditorContainer;
