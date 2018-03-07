import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

import classNames from 'classnames';

const { TextArea } = Input;

class Replies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleReply = this.handleReply.bind(this);
  }
  componentDidMount() {
    //TODO 根据 话题id 加载 reply 列表
    let nitems = [];
    nitems.push({
      id: 'sadfsa',
      topic_id: 'aaaa',
      author_id: 'ddddd',
      content: 'reply to you',
      create_date: new Date()
    });

    this.setState({
      items: nitems
    });
  }

  handleReply() {
    let r_content = this.replyContent.textAreaRef.value;
    let items = this.state.items;
    items.push({
      id: 'sadfsa',
      topic_id: 'aaaa',
      author_id: 'ddddd',
      content: r_content,
      create_date: new Date()
    });
    this.setState({
      items: items
    });
  }

  render() {
    let items = this.state.items;
    return (
      <div>
        <div className="list-group">
          <div className="list-group-item">工具栏</div>
          <div className="list-group-item">回复</div>
          {items.map((item, i) => {
            return (
              <div key={i} className="list-group-item">
                {item.content}
              </div>
            );
          })}

        </div>
        <div className="form-group">
          <TextArea
            rows={6}
            placeholder="请填写回复内容"
            ref={input => {
              this.replyContent = input;
            }}
          />
        </div>
        <div className="form-group">
          <button
            className={classNames('btn btn-success')}
            type="button"
            onClick={this.handleReply}
          >
            回复
          </button>
        </div>
      </div>
    );
  }
}

export default Replies;
