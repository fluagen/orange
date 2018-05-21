import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import TopicEditor from '../components/Topic/TopicEditor';
import About from '../components/Aside/About';
import ButtonTopic from '../components/Aside/ButtonTopic';


const TopicEditorContainer = () => (
  <Row gutter={16}>
    <Col span={20}>
      <TopicEditor />
    </Col>
    <Col span={4}>
      <About />
      <ButtonTopic />
    </Col>
  </Row>
);

export default TopicEditorContainer;
