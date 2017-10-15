import React, { Component } from "react";
import { Row, Col, Form, Input } from "antd";

import "../style/container.less";
import "./Register.less";

const FormItem = Form.Item;

class Register extends Component {
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        md: { span: 10 }
      },
      wrapperCol: {
        xs: { span: 24 },
        md: { span: 6 }
      }
    };
    return (
      <div className="container">
        <Row gutter={16}>
          <Col span={18}>
            <div className="register">
              <Form>
                <FormItem {...formItemLayout} label="登录名">
                  <Input />
                </FormItem>
              </Form>
            </div>
          </Col>
          <Col span={6}>aaa</Col>
        </Row>
      </div>
    );
  }
}

export default Register;
