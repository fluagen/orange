import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import Moment from 'react-moment';
import TopicInfo from './TopicInfo';
import Replies from './Replies';
import ReplyEditor from './ReplyEditor';

import styles from './Topic.module.scss';

const Topic = ({
  id,
  title,
  t_content,
  create_at,
  visit_count,
  author,
  category,
  last_reply
}) => (
  <div>
    <div className="list-group">
      <div className="list-group-item">
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.meta}>
          <a href={'/go/' + category.code}>
            <Icon type="folder" style={{ fontSize: 12, color: '#a9a7a7' }} />&nbsp;{
              category.name
            }
          </a>
          <span>&nbsp;•&nbsp;</span>
          于<Moment locale="zh-cn" fromNow>
            {create_at}
          </Moment>
          <span>&nbsp;•&nbsp;</span>
          <a href={'/user/' + author.id}>{author.id}</a>
          {last_reply && (
            <div>
              最后回复由&nbsp;<a href={'/user/' + last_reply.author_id}>
                {last_reply.author_id}
              </a>&nbsp;
            </div>
          )}
          <span>&nbsp;•&nbsp;</span>
          <span>{visit_count} 阅读</span>
        </div>
      </div>
      <div className="list-group-item">
        <div className={styles.content}>{t_content}</div>
      </div>
    </div>
  </div>
);

Topic.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  t_content: PropTypes.string.isRequired,
  create_at: PropTypes.instanceOf(Date),
  visit_count: PropTypes.number.isRequired,
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired
  }).isRequired,
  category: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  last_reply: PropTypes.shape({
    author_id: PropTypes.string.isRequired,
    author_avatar_url: PropTypes.string.isRequired,
    reply_at: PropTypes.instanceOf(Date)
  })
};

export default Topic;
