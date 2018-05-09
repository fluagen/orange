import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTopicList } from '../actions/topic';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getTopicList(dispatch);
  }

  render() {
    const { fetching, topics } = this.props;
    return (
      <div>
        {fetching && <h2>Loading...</h2>}
        {topics &&
          topics.length > 0 &&
          topics.map((topic, i) => <div key={i}>{topic.title}</div>)}
      </div>
    );
  }
}

App.propTypes = {
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

export default connect(mapStateToProps)(App);
