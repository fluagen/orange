import React, { Component } from 'react';
import { Avatar } from 'antd';
import Auth from '../../util/Auth';

import styles from './UserNav.module.scss';

class UserNav extends Component {
  constructor(props) {
    super(props);
    this.payload = Auth.getPayload();
    this.avatar_url = this.payload.avatar_url;
    this.userid = this.payload.userid;
  }

  render() {
    return (
      <div className={styles.main}>
        <Avatar style={{ marginRight: 5 }} src={this.avatar_url} />
        {this.userid}
      </div>
    );
  }
}

export default UserNav;
