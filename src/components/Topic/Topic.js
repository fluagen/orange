import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Topic = ({title, t_content}) => (
  <div className="list-group">
    <div className="list-group-item">{title}</div>
    <div className="list-group-item">{t_content}</div>
  </div>
);

Topic.propTypes = {
  title: PropTypes.string.isRequired,
  t_content: PropTypes.string.isRequired
};


export default Topic;
