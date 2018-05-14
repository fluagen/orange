import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import 'moment/locale/zh-cn';

import styles from './TopicMeta.module.scss';

const TopicMeta = ({
  group_id,
  group_name,
  author_id,
  reply_author_id,
  last_reply_at
}) => (
  <div className={styles.topicMeta}>
    <a className={styles.node} href={'/go/' + group_id}>
      {group_name}
    </a>
    <span>&nbsp;•&nbsp;</span>
    <a href="#">{author_id}</a>
    {reply_author_id && (
      <div>
        <span>&nbsp;•&nbsp;</span>
        最后由&nbsp;<a href="#">{reply_author_id}</a>&nbsp;<Moment
          locale="zh-cn"
          fromNow
        >
          {last_reply_at}
        </Moment>回复
      </div>
    )}
  </div>
);

TopicMeta.propTypes = {
  group_id: PropTypes.string,
  group_name: PropTypes.string,
  author_id: PropTypes.string,
  reply_author_id: PropTypes.string,
  last_reply_at: PropTypes.string
};

export default TopicMeta;
