import React, { Component } from 'react';

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
} from 'antd';

import { RequestPost } from '../Util/Request';

import styles from './RegisterForm.module.scss';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, data) => {
      if (!err) {
        console.log('Received values of form: ', data);
        let json = JSON.stringify({
          loginid: data.loginid,
          passwd: data.password,
          repasswd: data.repasswd,
          email: data.email
        });
        let url = "http://localhost:3000/signup";
        RequestPost(url,json, cb => {
          console.log(cb);
        });
      }
    });
  };
  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['repasswd'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 18,
        offset: 6
      }
    };

    return (
      <Form onSubmit={this.handleSubmit} className={styles.main}>
        <FormItem {...formItemLayout} label="用户名" hasFeedback>
          {getFieldDecorator('loginid', {
            rules: [
              {
                type: 'string',
                message: '可使用字母、数字、下划线，需以字母开头',
                pattern: '^(?!_)(?!.*?_$)[a-zA-Z0-9_]+$'
              },
              {
                min: 6,
                max: 8,
                message: '6~18个字符'
              },
              {
                required: true,
                message: '用户名不能为空'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="邮箱" hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: '邮箱地址不合法'
              },
              {
                required: true,
                message: '邮箱不能为空'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="密码" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '密码不能为空'
              },
              {
                validator: this.checkConfirm
              }
            ]
          })(<Input type="password" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="确认密码" hasFeedback>
          {getFieldDecorator('repasswd', {
            rules: [
              {
                required: true,
                message: '请再次填写密码'
              },
              {
                validator: this.checkPassword
              }
            ]
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
