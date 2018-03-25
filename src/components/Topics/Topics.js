import React, { Component } from "react";
import { Row, Col } from "antd";
import Moment from "react-moment";
import "whatwg-fetch";
import "moment/locale/zh-cn";

import About from "../Aside/About";
import TopicItem from "./TopicItem";
import {RequestGet} from '../Util/Request';

import "../style/main.less";
import "../style/container.less";
import "../style/list-group.less";

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    let url = "http://localhost:3000/public/topics";
    RequestGet(url, rst => {
      let topics = rst.data.topics;
      this.setState({
        data: topics
      });
    });
  }
  render() {
    var data = this.state.data;
    return (
      <div className="list-group">
        <div className="list-group-item">aaadd</div>
        {data.map(item => {
          return (
            <div className="list-group-item">
              <TopicItem
                key={item._id}
                lastReply={item.lastReply}
                topic={item}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Topics;
