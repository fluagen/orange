import React, { Component } from "react";
import { Row, Col } from "antd";
import About from "../Aside/About";
import Replies from "../Reply/Replies";
import { RequestGet } from "../Util/Request";

import styles from "./Topic.module.scss";

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tid: props.match.params.tid,
      topic: {}
    };
    this.load = this.load.bind(this);
  }
  load(url) {
    RequestGet(url, rst => {
      let topic = rst.data.topic;
      this.setState({
        tid: topic._id,
        topic: topic
      });
      // console.log(this.state.topic)
    });
  }
  componentDidMount() {
    let tid = this.props.match.params.tid;
    let url = "http://localhost:3000/public/topic/" + tid;
    this.load(url);
  }

  componentWillReceiveProps(nextProps) {
    let tid = this.state.tid;
    if (tid != nextProps.match.params.tid) {
      tid = nextProps.match.params.tid;
      let url = "http://localhost:3000/public/topic/" + tid;
      this.load(url);
    }
  }

  render() {
    return (
      <div className="container">
        <Row gutter={16}>
          <Col span={18}>
            <div className="list-group">
              <div className="list-group-item">
                <h1 className={styles.title}>{this.state.topic.title}</h1>
              </div>
              <div className="list-group-item">
                {this.state.topic.t_content}
              </div>
              <div className="list-group-item">工具栏</div>
            </div>
            <Replies />
          </Col>
          <Col span={6}>
            <About />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Topic;
