import React, { Component } from "react";

import { Button } from "antd";

import styles from "./ButtonTopic.module.scss";

class ButtonTopic extends Component {
  render() {
    return (
      <div class="list-group">
        <div class="list-group-item">
          <a href="/topic/create" class="btn btn-success">
            发布话题
          </a>
        </div>
      </div>
    );
  }
}

export default ButtonTopic;
