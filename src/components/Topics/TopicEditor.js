import React, { Component } from "react";
import { Row, Col, Input, Alert } from "antd";
import { withRouter } from "react-router-dom";
import MarkdownIt from "markdown-it";
import About from "../Aside/About";
import Warnings from "../Message/Warnings";

import classNames from "classnames";
import styles from "./TopicEditor.module.scss";

import "whatwg-fetch";

const { TextArea } = Input;
const md = new MarkdownIt();

const addTopicCB = function(){
  withRouter(({ history }) => history.push("/"));
}

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
    let t_content = this.topicContent.textAreaRef.value;
    if (!title || title === "") {
      // this.state.messages.push('标题不能为空！');
      this.setState({
        messages: ["标题不能为空！"]
      });
    } else if (title.length > 140) {
      // this.state.messages.push('标题不能大于140个字符!');
      this.setState({
        messages: ["标题不能大于140个字符！"]
      });
    }
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJ6aGFuZ3NhbiIsImlhdCI6MTUxNzMyOTkxMX0.raLfL9XTIpJ9gkyabQ5PSWjsQeEwV4R9oENQ9_B841E";

    //submit
    fetch("http://localhost:3000/topic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        title: title,
        t_content: t_content
      })
    })
      .then(response => {
        if (response.status === 401) {
          alert("token不合法，或已过期！");
          return;
        }
        if (response.ok) {
          return response.json();
        } else {
          console.log("Some server error:" + response.statusText);
        }
      })
      .then(rst => {
        // TODO redirect
        let data = rst.data;
        this.props.history.push("/topic/"+data.tid);
      })
      .catch(e => {
        console.log("parsing failed", e);
      });
  }

  render() {
    return (
      <div className={classNames("container", styles.main)}>
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
                <div style={{ display: this.state.isPreview ? "none" : "" }}>
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
                  style={{ display: this.state.isPreview ? "" : "none" }}
                  ref={input => {
                    this.previewInput = input;
                  }}
                />
              </div>
              <div className="form-group">
                <button className={classNames("btn btn-success")} type="submit">
                  发布
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

export default withRouter(TopicEditor);
