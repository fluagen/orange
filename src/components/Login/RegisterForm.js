import React, { Component } from "react";

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";

import './RegisterForm.less';


const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;



class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        span: 10
      },
      wrapperCol: {
        span: 14
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 14,
          offset: 6
        }
      }
    };

    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <FormItem {...formItemLayout} label="用户名" hasFeedback>
          {getFieldDecorator("loginid", {
            rules: [
              {
                type:"string",
                message:"可使用字母、数字、下划线，需以字母开头",
                pattern:"^(?!_)(?!.*?_$)[a-zA-Z0-9_]+$"
              },
              {

                min: 6,
                max: 8,
                message: "6~18个字符"
              },
              {
                required: true,
                message: "用户名不能为空"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="邮箱" hasFeedback>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "邮箱地址不合法"
              },
              {
                required: true,
                message: "邮箱不能为空"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="密码" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "密码不能为空"
              },
              {
                validator: this.checkConfirm
              }
            ]
          })(<Input type="password" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="确认密码" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "请再次填写密码"
              },
              {
                validator: this.checkPassword
              }
            ]
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
