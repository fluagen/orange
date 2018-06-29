import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import styles from './ReplyEditor.module.scss';

const { TextArea } = Input;

class ReplyEditor extends Component {
  constructor(props) {
    super(props);
    this.addReply = this.addReply.bind(this);
  }
  addReply(e) {
    e.preventDefault();
    let r_content = this.replyContent.textAreaRef.value;
    if (!r_content || r_content === '') {
      return;
    }
    this.props.handleReply(r_content);
    // this.props.history.push("/");
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
            <Button type="primary" onClick={this.addReply}>
              回复
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

ReplyEditor.propTypes = {
  tid: PropTypes.string.isRequired,
  handleReply: PropTypes.func.isRequired
};

export default withRouter(ReplyEditor);
