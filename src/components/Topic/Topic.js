import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopicInfo from './TopicInfo';
import Replies from './Replies';
import ReplyEditor from './ReplyEditor';
import styles from './Topic.module.scss';

const Topic = ({ item, replies, ups }) => (
  <div>
    <TopicInfo data={item} />
    <Replies data={replies} />
    <ReplyEditor />
  </div>
);

Topic.propTypes = {
  item: PropTypes.object.isRequired,
  replies: PropTypes.array.isRequired
};

export default Topic;
