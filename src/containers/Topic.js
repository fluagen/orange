import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { getTopic } from '../actions/topic';
import Topic from '../components/Topic/Topic';
import About from '../components/Aside/About';
import ButtonTopic from '../components/Aside/ButtonTopic';

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
        <div className="container">
          {fetching ? 'Loading' : (
            <Row gutter={16}>
              <Col span={18}>
                <Topic item={item} />
              </Col>
              <Col span={6}>
                <About />
                <ButtonTopic />
              </Col>
            </Row>
          )}
        </div>
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
