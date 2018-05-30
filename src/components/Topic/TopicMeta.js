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
  last_reply_at,
  visit_count
}) => (
  <div className={styles.topicMeta}>
    <a href={'/go/' + group_id}>{group_name}</a>
    <span>&nbsp;•&nbsp;</span>
    <a href={'/user/' + author_id}>{author_id}</a>
    {reply_author_id && (
      <div>
        最后回复由&nbsp;<a href={'/user/' + reply_author_id}>
          {reply_author_id}
        </a>&nbsp;
        <span>&nbsp;•&nbsp;</span>
      </div>
    )}
    <span>{visit_count} 阅读</span>
  </div>
);

TopicMeta.propTypes = {
  group_id: PropTypes.string.isRequired,
  group_name: PropTypes.string.isRequired,
  author_id: PropTypes.string.isRequired,
  reply_author_id: PropTypes.string,
  last_reply_at: PropTypes.string,
  visit_count: PropTypes.number.isRequired
};

export default TopicMeta;
