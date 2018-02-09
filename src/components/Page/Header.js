import React, { Component } from 'react';

import { Row, Col, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';

import classNames from 'classnames';
import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className="container">
          <nav className={classNames("navbar navbar-expand-lg navbar-light", styles.navbar)}>
            <a className="navbar-brand" href="#">
              OC
            </a>
            <Menu mode="horizontal" style={{ lineHeight: '49px', flex: 1 }}>
              <Menu.Item>
                <Link to="/">社区</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/topics">话题</Link>
              </Menu.Item>
              <Menu.Item>投票</Menu.Item>
            </Menu>
            <div className={styles.navbar_right}>
              <Button size="large">
                <Link to="/signup">注册</Link>
              </Button>
              <Button size="large">
                <Link to="/signin">登录</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    );
    // return (
    //   <div className="page-header">
    //     <div className="container">
    //       <Row>
    //         <Col>
    //           <div className="page-header-main">
    //             <div className="page-header-brand">OC</div>
    //             <div className="page-header-menu">
    //               <Menu mode="horizontal">
    //                 <Menu.Item>
    //                   <Link to="/">社区</Link>
    //                 </Menu.Item>
    //                 <Menu.Item>
    //                   <Link to="/topics">话题</Link>
    //                 </Menu.Item>
    //                 <Menu.Item>投票</Menu.Item>
    //               </Menu>
    //             </div>
    //             <div className="page-header-btn">
    //               <Button size="large">
    //                 <Link to="/signup">注册</Link>
    //               </Button>
    //               <Button size="large">
    //                 <Link to="/signin">登录</Link>
    //               </Button>
    //             </div>
    //           </div>
    //         </Col>
    //       </Row>
    //     </div>
    //   </div>
    // );
  }
}

export default Header;
