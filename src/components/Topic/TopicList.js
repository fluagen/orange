import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopicItem from './TopicItem';

class TopicList extends Component {
  render() {
    const { topics } = this.props;
    return (
      <div className="list-group">
        {topics.map((topic, i) => (
          <div key={i} className="list-group-item">
            <TopicItem id={topic._id} title={topic.title} />
          </div>
        ))}
      </div>
    );
  }
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
};

export default TopicList;
