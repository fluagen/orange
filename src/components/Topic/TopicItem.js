import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import 'moment/locale/zh-cn';

const TopicItem = ({
  id,
  group_id,
  group_name,
  title,
  avatar,
  author_id,
  reply_author_id,
  last_reply_at
}) => (
  <div>
    <div className="avatar">{avatar}</div>
    <div>
      <div>
        <a href={'/topic/' + id}>{title}</a>
      </div>
      <div>
        <a href={'/go/' + group_id}>{group_name}</a>
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
    </div>
    <div className="badge-reply-count">123</div>
  </div>
);

TopicItem.propTypes = {
  id: PropTypes.string.isRequired,
  group_id: PropTypes.string,
  group_name: PropTypes.string,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  author_id: PropTypes.string,
  reply_author_id: PropTypes.string,
  last_reply_at: PropTypes.string
};

export default TopicItem;
