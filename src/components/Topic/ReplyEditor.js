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
  handleSubmit(e){
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

    let body = JSON.stringify({
      token: token,
      r_content: r_content
    });
  }
  render(){
    return(

    );
  }
}

const handleSubmit = e => {
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

  let body = JSON.stringify({
    tid: title,
    r_content: r_content
  });
  //submit
  ReqPost('http://localhost:3000/topic', token, body, rst => {
    let data = rst.data;
    this.props.history.push('/topic/' + data.tid);
  });
};

const ReplyEditor = () => (
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

export default ReplyEditor;
