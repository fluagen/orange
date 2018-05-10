import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTopicList } from '../actions/topic';
import TopicList from '../components/Topic/TopicList';

class TopicListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getTopicList(dispatch);
  }

  render() {
    const { fetching, topics } = this.props;
    return (
      <div>
        <TopicList topics={topics} />
        {fetching && <h2>Loading...</h2>}
      </div>
    );
  }
}

TopicListContainer.propTypes = {
  topics: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { getTopicList } = state;
  const { fetching, topics } = getTopicList;

  return {
    fetching,
    topics
  };
};

export default connect(mapStateToProps)(TopicListContainer);
