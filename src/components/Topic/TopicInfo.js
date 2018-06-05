import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import Moment from 'react-moment';
import 'moment/locale/zh-cn';

import styles from './TopicInfo.module.scss';

const TopicInfo = ({topic, group}) => (
  <div className="list-group">
    <div className="list-group-item">
      <h1 className={styles.title}>{topic.title}</h1>
      <div className={styles.meta}>
        <a href={'/go/' + group.code}>
          <Icon type="folder" style={{ fontSize: 12, color: '#a9a7a7' }} />&nbsp;{
            group.name
          }
        </a>
        <span>&nbsp;•&nbsp;</span>
        于<Moment locale="zh-cn" fromNow>
          {topic.create_at}
        </Moment>
        <span>&nbsp;•&nbsp;</span>
        <a href={'/user/' + topic.author_id}>{topic.author_id}</a>
        {topic.reply_author_id && (
          <div>
            最后回复由&nbsp;<a href={'/user/' + topic.reply_author_id}>
              {topic.reply_author_id}
            </a>&nbsp;
          </div>
        )}
        <span>&nbsp;•&nbsp;</span>
        <span>{topic.visit_count} 阅读</span>
      </div>
    </div>
    <div className="list-group-item">
      <div className={styles.content}>{topic.t_content}</div>
    </div>
  </div>
);

TopicInfo.propTypes = {
  topic: PropTypes.object.isRequired,
  group: PropTypes.object.isRequired
};

export default TopicInfo;
