import React, { Component } from "react";
import Moment from "react-moment";

class TopicItem extends Component {
  render() {
    const author = this.props.author;
    const topic = this.props.topic;
    const reply = this.props.reply;
    return (
      <div id={topic._id}>
        <div>
          <img src={author.avatar_url} />
        </div>
        <div>
          {topic.title}
        </div>
      </div>
    );
  }
}

export default TopicItem;
