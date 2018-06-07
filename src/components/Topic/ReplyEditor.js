import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import styles from './ReplyEditor.module.scss';

const { TextArea } = Input;

class ReplyEditor extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let title = this.topicTitle.input.value;
    let r_content = this.replyContent.textAreaRef.value;
    if (!r_content || r_content === '') {
      return;
    }
    const token = localStorage.getItem('token');
    if (token === null || token === '') {
      alert('token不合法！');
      return;
    }

    this.props.toReply(r_content, token);
  }
  render() {
    return (
      <div className="list-group">
        <div className="list-group-item">
          <TextArea
            rows={4}
            ref={input => {
              this.replyContent = input;
            }}
            placeholder="支持使用Markdown格式"
          />

          <div className={styles.operation}>
            <Button type="primary">回复</Button>
          </div>
        </div>
      </div>
    );
  }
}

ReplyEditor.propTypes = {
  toReply: PropTypes.func.isRequired
};

export default ReplyEditor;
