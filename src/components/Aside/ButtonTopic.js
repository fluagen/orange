import React, { Component } from "react";

import { List } from "antd";

import styles from './ButtonTopic.module.scss';

class ButtonTopic extends Component {
  render() {
    return (
      <div className={styles.main} >
        <List bordered={true}>
          <List.Item>aaawq</List.Item>
        </List>
      </div>
    );
  }
}

export default ButtonTopic;
