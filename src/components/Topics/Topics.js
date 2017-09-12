import React, { Component } from "react";
import { Row, Col } from "antd";
import "whatwg-fetch";

import About from "../Aside/About";

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
          <Col sm={2} md={4} lg={4} />
          <Col sm={20} md={16} lg={16}>
            <div>
              <Row gutter={16}>
                <Col span={18}>
                  <div className="list-group">
                    <div className="list-group-item">topic</div>
                    {data.map(topic => {
                      return <div key={topic.id} className="list-group-item"> {topic.title} </div>;
                    })}
                  </div>
                </Col>
                <Col span={6}>
                  <About />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={2} md={4} lg={4} />
        </Row>
      </div>
    );
  }
}

export default Topics;
