import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Replies = ({data}) => (
  <div className="list-group">

    <div className="list-group-item">回复数 {data.length}</div>
    {data.map((reply, i) => (
      <div key={i} className="list-group-item">{reply.r_content}</div>
    ))}

  </div>
);

Replies.propTypes = {
  replies: PropTypes.object.isRequired
};


export default Replies;
