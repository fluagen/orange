import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopicMeta from './TopicMeta';

const Topic = ({
  item
}) => (
  <div className="list-group">
    <div className="list-group-item">
      {item.title}
      <TopicMeta
      group_id={item.group_id}
      group_name={item.group_name}
      author_id={item.author_id}
      visit_count={item.visit_count}/>
    </div>
    <div className="list-group-item">{item.t_content}</div>
  </div>
);

Topic.propTypes = {
  item: PropTypes.object.isRequired
};

export default Topic;
