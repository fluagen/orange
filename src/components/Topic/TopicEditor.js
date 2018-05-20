import React, { Component } from "react";
import { Row, Col, Input, Select, Button } from "antd";
import styles from './TopicEditor.module.scss';

const { TextArea } = Input;

const Option = Select.Option;

const TopicEditor = () => (
  <div className={styles.main}>
    <Row gutter={16} className={styles.row}>
      <Col span={6}>
        <Select defaultValue="qna" className={styles.select}>
          <Option value="qna">问与答</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Col>
      <Col span={18}>
        <Input placeholder="Basic usage" />
      </Col>
    </Row>
    <Row className={styles.row}>
      <Col>
        <TextArea rows={6} autosize={{ minRows: 6 }} />
      </Col>
    </Row>
    <Row className={styles.row}>
      <Col>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
      </Col>
    </Row>
  </div>
);

export default TopicEditor;
