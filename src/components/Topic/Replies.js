import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Replies = ({ items }) => {
  if (!items) {
    items = [];
  }
  return (
    <div className="list-group">
      <div className="list-group-item">回复数 {items.length}</div>
      {items.map((reply, i) => (
        <div key={i} className="list-group-item">
          {reply.r_content}
        </div>
      ))}
    </div>
  );
};

Replies.propTypes = {
  items: PropTypes.object.isRequired
};

export default Replies;
