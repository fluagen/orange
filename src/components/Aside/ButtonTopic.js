import React, { Component } from "react";

import { Button } from "antd";

import styles from './ButtonTopic.module.scss';

class ButtonTopic extends Component {
  render() {
    return (
      <div className="list-group">
        <Button>发布</Button>
      </div>
    );
  }
}

export default ButtonTopic;
