import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../components/Login/LoginForm";
import { fetchLogin } from "../actions/user";
import styles from "./Login.module.scss";

const FormItem = Form.Item;

class LoginContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.main}>
          <div className="list-group">
            <div className="list-group-item">请登录</div>
            <div className="list-group-item">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(LoginContainer);
