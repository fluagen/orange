import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { getTopic } from '../actions/topic';
import Topic from '../components/Topic/Topic';
import Replies from '../components/Topic/Replies';
import ReplyEditor from '../components/Topic/ReplyEditor';
import ReplyAPI from '../api/reply';
import About from '../components/Aside/About';
import ButtonTopic from '../components/Aside/ButtonTopic';
import Auth from '../util/Auth';

class TopicContainer extends Component {
  constructor(props) {
    super(props);
    this.handleReply = this.handleReply.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const tid = this.props.match.params.tid;
    getTopic(tid, dispatch);
  }

  handleReply(r_content) {
    const tid = this.props.match.params.tid;
    const token = Auth.getToken();

    //TODO check token is null


    ReplyAPI.submitReply(token, tid, r_content, rst => {

      alert('aaa');

      this.props.history.push(this.props.match.url);

      alert('aaa2');

    });
  }

  render() {
    const { data } = this.props;
    const {
      id,
      title,
      t_content,
      create_at,
      visit_count,
      author,
      category,
      last_reply,
      replies
    } = data;
    return (
      <div>
        <div className="container">
          {Object.keys(data).length === 0 ? (
            <div />
          ) : (
            <Row gutter={16}>
              <Col span={18}>
                <Topic
                  id={id}
                  title={title}
                  t_content={t_content}
                  create_at={create_at}
                  visit_count={visit_count}
                  author={author}
                  category={category}
                  last_reply={last_reply}
                />
                <Replies items={replies} />
                {Auth.isAuthenticated ? <ReplyEditor handleReply= {this.handleReply} /> : <div />}
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
  data: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { topic } = state;
  return {
    data: topic.data
  };
};

export default connect(mapStateToProps)(TopicContainer);
