import React, { Component } from "react";
import { List } from "antd";

const data = ["bbb"];

const About = () => (
  <div style={{ marginBottom: 15 }}>
    <List
      itemLayout="horizontal"
      header="关于"
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  </div>
);

export default About;
