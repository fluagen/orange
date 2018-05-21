import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from "antd";
import Moment from "react-moment";
import "moment/locale/zh-cn";

import styles from './TopicItem.module.scss';

const TopicItem = ({
  id,
  group_id,
  group_name,
  title,
  avatar_url,
  last_reply_at
}) => (
  <div className={styles.item}>
    <Avatar size="large" src={avatar_url} />
    <div className={styles.title}>
      <a href={'/topic/'+id}>{title}</a>
    </div>
    <div className={styles.badge}>
      <span>121</span>
      <span className={styles.count_seperator}>|</span>
      <Moment locale="zh-cn" fromNow>
        {last_reply_at}
      </Moment>
    </div>
  </div>
);

TopicItem.propTypes = {
  id: PropTypes.string.isRequired,
  group_id: PropTypes.string,
  group_name: PropTypes.string,
  title: PropTypes.string.isRequired,
  avatar_url: PropTypes.string,
  author_id: PropTypes.string,
  last_reply_at: PropTypes.string
};

export default TopicItem;
