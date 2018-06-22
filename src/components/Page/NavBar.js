import React, { Component } from 'react';

import { Menu, Button, Avatar } from 'antd';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss';

const BtnGroup = () => (
  <div className={styles.btn_group}>
    <Button size="large">
      <Link to="/signin">登录</Link>
    </Button>
    <Button size="large">
      <Link to="/signup">登录</Link>
    </Button>
  </div>
);

const UserMenu = ({ user }) => (
  <div>
    <Avatar size="large" src={user.avatar_url} />
  </div>
);

class NavBar extends Component {
  constructor(props) {
    super(props);
    const token = sessionStorage.getItem("token");
  }

  componentDidMount() {


  }

  render() {
    return (
      <div className="container">
        <div className={styles.main}>
          <div className={styles.logo}>Logo</div>
          <Menu mode="horizontal" style={{ lineHeight: '64px', flex: 1 }}>
            <Menu.Item>
              <Link to="/">社区</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/topics">话题</Link>
            </Menu.Item>
            <Menu.Item>投票</Menu.Item>
          </Menu>
          <BtnGroup />
        </div>
      </div>
    );
  }
}

export default NavBar;
