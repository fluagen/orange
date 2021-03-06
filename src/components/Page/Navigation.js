import React, { Component } from 'react';

import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => (
  <div className="container">
    <div className={styles.main}>
      <div className={styles.logo} >Logo</div>
      <Menu mode="horizontal" style={{ lineHeight: '64px', flex: 1 }}>
        <Menu.Item>
          <Link to="/">社区</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/topics">话题</Link>
        </Menu.Item>
        <Menu.Item>投票</Menu.Item>
      </Menu>
      <Button size="large">
        <Link to="/signin">登录</Link>
      </Button>
      <Button size="large">
        <Link to="/signin">登录</Link>
      </Button>
    </div>
  </div>
);

export default Navigation;
