import React, { Component } from "react";
import Moment from "react-moment";
import './TopicItem.less'

class TopicItem extends Component {
  render() {
    const author = this.props.author;
    const topic = this.props.topic;
    const reply = this.props.reply;
    return (
      <div id={topic._id} className="topicitem">
        <div className="avatar">
          <img src={author.avatar_url} />
        </div>
        <div className="topic-info">
          {topic.title}
        </div>
        <div className="badge-reply-count">
          123
        </div>
      </div>
    );
  }
}

export default TopicItem;
