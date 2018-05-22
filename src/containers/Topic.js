import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTopic } from '../actions/topic';
import Topic from '../components/Topic/Topic';

class TopicContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const tid = this.props.match.params.tid;
    getTopic(tid, dispatch);
  }

  render() {
    const { item, fetching } = this.props;
    return (
      <div>
        <Topic title={item.title} t_content={item.t_content} />
      </div>
    );
  }
}

TopicContainer.propTypes = {
  item: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { topic } = state;
  return {
    fetching: topic.fetching,
    item: topic.item
  };
};

export default connect(mapStateToProps)(TopicContainer);
