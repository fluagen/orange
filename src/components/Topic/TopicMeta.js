import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import Moment from 'react-moment';
import 'moment/locale/zh-cn';

import styles from './TopicMeta.module.scss';

const TopicMeta = ({
  group_id,
  group_name,
  author_id,
  reply_author_id,
  last_reply_at,
  create_at,
  visit_count
}) => (
  <div className={styles.main}>
    <a href={'/go/' + group_id}><Icon type="folder" style={{ fontSize: 12, color: '#a9a7a7' }}/>&nbsp;{group_name}</a>
    <span>&nbsp;•&nbsp;</span>
    于<Moment locale="zh-cn" fromNow>
      {create_at}
    </Moment>
    <span>&nbsp;•&nbsp;</span>
    <a href={'/user/' + author_id}>{author_id}</a>
    {reply_author_id && (
      <div>
        最后回复由&nbsp;<a href={'/user/' + reply_author_id}>
          {reply_author_id}
        </a>&nbsp;
      </div>
    )}
    <span>&nbsp;•&nbsp;</span>
    <span>{visit_count} 阅读</span>
  </div>
);

TopicMeta.propTypes = {
  group_id: PropTypes.string.isRequired,
  group_name: PropTypes.string.isRequired,
  author_id: PropTypes.string.isRequired,
  reply_author_id: PropTypes.string,
  last_reply_at: PropTypes.string,
  create_at: PropTypes.string.isRequired,
  visit_count: PropTypes.number.isRequired
};

export default TopicMeta;
