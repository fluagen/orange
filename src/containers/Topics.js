import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTopics } from '../actions/topics';
import TopicList from '../components/Topic/TopicList';

class TopicsContainer extends Component {
  constructor(props) {
    super(props);
    console.log('Topics container construct');
  }
  componentDidMount() {
    const { dispatch } = this.props;
    getTopics(dispatch);
  }

  render() {
    const { fetching, data } = this.props;
    return (
      <div>
        <TopicList items={data} />
        {fetching && <h2>Loading...</h2>}
      </div>
    );
  }
}

TopicsContainer.propTypes = {
  data: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { topics } = state;
  const { data, fetching } = topics;
console.log('TopicsContainer mapStateToProps');
  return {
    fetching,
    data
  };
};

export default connect(mapStateToProps)(TopicsContainer);
