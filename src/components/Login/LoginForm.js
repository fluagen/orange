import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { withRouter } from "react-router-dom";
import { requestLogin } from "../../api/login";

import "./Login.less";

import styles from "./LoginForm.module.scss";

const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }

      requestLogin(values.userName, values.password, res => {
        let data = res.data;
        sessionStorage.setItem("token", data.token);
        this.props.history.push("/");
      });
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.main}>
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "用户名不能为空!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="用户名"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "密码不能为空!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>记住我</Checkbox>)}
          <a className={styles.forgot} href="">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className={styles.btn}>
            登录
          </Button>
        </FormItem>
        <FormItem />
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default withRouter(WrappedLoginForm);
