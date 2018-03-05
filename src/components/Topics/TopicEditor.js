import React, { Component } from 'react';
import { Row, Col, Input, Alert } from 'antd';
import MarkdownIt from 'markdown-it';
import About from '../Aside/About';
import Warnings from '../Message/Warnings';

import classNames from 'classnames';
import styles from './TopicEditor.module.scss';

const { TextArea } = Input;
const md = new MarkdownIt();

class TopicEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { isPreview: false, messages: [] };

    // This binding is necessary to make `this` work in the callback
    this.previewToggle = this.previewToggle.bind(this);
    this.editToggle = this.editToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  previewToggle() {
    this.setState({
      isPreview: true
    });

    let t_content = this.textInput.textAreaRef.value;
    this.previewInput.innerHTML = md.render(t_content);
  }

  editToggle() {
    this.setState({
      isPreview: false
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.topicTitle.input.value;
    if (!title || title === '') {
      // this.state.messages.push('标题不能为空！');
      this.setState({
        messages: ['标题不能为空！']
      });
    } else if (title.length > 140) {
      // this.state.messages.push('标题不能大于140个字符!');
      this.setState({
        messages: ['标题不能大于140个字符！']
      });
    }
    //TODO 提交
  }

  render() {
    return (
      <div className={classNames('container', styles.main)}>
        <Row>
          <Col span={24}>
            <Warnings items={this.state.messages} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={18}>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <Input
                  placeholder="请填写标题"
                  ref={input => {
                    this.topicTitle = input;
                  }}
                />
              </div>
              <div className="form-group">
                <div style={{ display: this.state.isPreview ? 'none' : '' }}>
                  <TextArea
                    rows={10}
                    placeholder="请填写话题内容"
                    ref={input => {
                      this.topicContent = input;
                    }}
                  />
                </div>
                <div
                  className={styles.previewBox}
                  style={{ display: this.state.isPreview ? '' : 'none' }}
                  ref={input => {
                    this.previewInput = input;
                  }}
                />
              </div>
              <div className="form-group">
                <button className={classNames('btn btn-success')} type="submit">
                  发布
                </button>
                <button
                  className={classNames('btn btn-success')}
                  type="button"
                  style={{ display: this.state.isPreview ? '' : 'none' }}
                  onClick={this.editToggle}
                >
                  编辑
                </button>
                <button
                  className={classNames('btn btn-success')}
                  type="button"
                  style={{ display: this.state.isPreview ? 'none' : '' }}
                  onClick={this.previewToggle}
                >
                  预览
                </button>
              </div>
            </form>
          </Col>
          <Col span={6}>
            <About />
          </Col>
        </Row>
      </div>
    );
  }
}

export default TopicEditor;
