import React, { Component } from 'react';
import { Row, Col } from 'antd';
import About from '../Aside/About';
import Replies from '../Reply/Replies';
import { RequestGet } from '../Util/Request';

import styles from './Topic.module.scss';

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic:{}
    };
  }
  componentDidMount() {
    console.log('Topic componentDidMount');
    let tid = this.props.match.params.tid;
    let url = 'http://localhost:3000/public/topic/' + tid;
    RequestGet(url, rst => {
      let topic = rst.data.topic;
      this.topic;
      this.setState({
        topic: topic
      });
    });
    console.log(tid);
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
              <div className="list-group-item">{this.state.topic.t_content}</div>
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
