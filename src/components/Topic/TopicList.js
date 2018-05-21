import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import 'moment/locale/zh-cn';

import styles from './TopicList.module.scss';

class TopicList extends Component {
  render() {
    const { topics } = this.props;

    return (
      <div className={styles.topis_list}>

        <List
          itemLayout="horizontal"
          bordered
          dataSource={topics}
          renderItem={item => (
            <List.Item>
              <div className={styles.item}>
                <Avatar size="large" src={item.avatar_url} />
                <div className={styles.title}><a href="#">{item.title}</a></div>
                <div className={styles.badge}>
                  <span>121</span>
                  <span className={styles.count_seperator}>|</span>
                  <Moment locale="zh-cn" fromNow>
                    {item.last_reply_at}
                  </Moment>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
};

export default TopicList;
