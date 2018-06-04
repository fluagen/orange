import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import Moment from 'react-moment';
import 'moment/locale/zh-cn';

import styles from './TopicInfo.module.scss';

const TopicInfo = ({data}) => (
  <div className="list-group">
    <div className="list-group-item">
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.meta}>
        <a href={'/go/' + data.group_id}>
          <Icon type="folder" style={{ fontSize: 12, color: '#a9a7a7' }} />&nbsp;{
            data.group_name
          }
        </a>
        <span>&nbsp;•&nbsp;</span>
        于<Moment locale="zh-cn" fromNow>
          {data.create_at}
        </Moment>
        <span>&nbsp;•&nbsp;</span>
        <a href={'/user/' + data.author_id}>{data.author_id}</a>
        {data.reply_author_id && (
          <div>
            最后回复由&nbsp;<a href={'/user/' + data.reply_author_id}>
              {data.reply_author_id}
            </a>&nbsp;
          </div>
        )}
        <span>&nbsp;•&nbsp;</span>
        <span>{data.visit_count} 阅读</span>
      </div>
    </div>
    <div className="list-group-item">
      <div className={styles.content}>{data.t_content}</div>
    </div>
  </div>
);

TopicInfo.propTypes = {
  data: PropTypes.object.isRequired
};

export default TopicInfo;
