import React, { Component } from "react";
import { Row, Col, Input } from "antd";
import MarkdownIt from "markdown-it";
import About from "../Aside/About";

import classNames from "classnames";
import styles from "./TopicEditor.module.scss";

const { TextArea } = Input;
const md = new MarkdownIt();

class TopicEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { isPreview: false };

    // This binding is necessary to make `this` work in the callback
    this.previewToggle = this.previewToggle.bind(this);
    this.editToggle = this.editToggle.bind(this);
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

  render() {
    return (
      <div className={classNames("container", styles.main)}>
        <Row gutter={16}>
          <Col span={18}>
            <div className={styles.title} ref="Progress1">
              <Input placeholder="请填写标题" />
            </div>
            <div
              className={styles.editorBox}
              style={{ display: this.state.isPreview ? "none" : "" }}
            >
              <TextArea
                rows={10}
                placeholder="请填写话题内容"
                ref={input => {
                  this.textInput = input;
                }}
              />
            </div>
            <div
              className={styles.previewBox}
              style={{ display: this.state.isPreview ? "" : "none" }}
              ref={input => {
                this.previewInput = input;
              }}
            >
            </div>
            <div>
              <button className={classNames("btn btn-success")} type="button">
                保存
              </button>
              <button
                className={classNames("btn btn-success")}
                type="button"
                style={{ display: this.state.isPreview ? "" : "none" }}
                onClick={this.editToggle}
              >
                编辑
              </button>
              <button
                className={classNames("btn btn-success")}
                type="button"
                style={{ display: this.state.isPreview ? "none" : "" }}
                onClick={this.previewToggle}
              >
                预览
              </button>
            </div>
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
