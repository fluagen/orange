import React, { Component } from "react";
import { Row, Col } from "antd";
import Moment from 'react-moment';
import "whatwg-fetch";
import 'moment/locale/zh-cn';

import About from "../Aside/About";
import TopicItem from "./TopicItem";

import "../style/list-group.less";

const data = () => {
  return fetch("http://www.baidu.com").then(r => "bbb").then(rst => {
    return rst;
  });
};

const column = "ddd";

// topics.push({
//   title: '关于安卓抓包',
//   author: {
//     avatar_url: '',
//     name: 'zhangsan'
//   }
// });
// topics.push({
//   title: 'js 党可以吐槽一下 Python 吗',
//   author: {
//     avatar_url: '',
//     name: 'zhangsan'
//   }
// });

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("/api/topics").then(r => r.json()).then(rst => {
      this.setState({ data: rst });
      console.log(new Date() + rst);
    });
  }
  render() {
    var data = this.state.data;
    return (
      <div>
        <Row>
          <Col sm={2} md={2} lg={2} />
          <Col sm={20} md={20} lg={20}>
            <div>
              <Row gutter={16}>
                <Col span={18}>
                  <div className="list-group">
                    <div className="list-group-item">aaa</div>
                    {data.map(item => {
                      return <div className="list-group-item"><TopicItem key={item.topic._id} author={item.author} reply={item.reply} topic={item.topic} /></div>;
                    })}

                  </div>

                </Col>
                <Col span={6}>
                  <About />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={2} md={2} lg={2} />
        </Row>
      </div>
    );
  }
}

export default Topics;
