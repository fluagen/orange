import React, { Component } from "react";
import Moment from "react-moment";
import "moment/locale/zh-cn";

import "./TopicItem.less";

class TopicItem extends Component {
  render() {
    const topic = this.props.topic;
    const lastReply = this.props.lastReply;
    return (
      <div id={topic._id} className="topicitem">
        <div className="avatar">
          <img src={topic.author.avatar} />
        </div>
        <div className="topic-info">
          <div className="topic-title">
            <a href="/topic/{topic._id}">{topic.title}</a>
          </div>
          <div className="topic-meta">
            <a className="node" href={"/go/" + topic.group.id}>
              {topic.group.name}
            </a>
            <span>&nbsp;•&nbsp;</span>
            <a href="#">{topic.author.loginId}</a>
            {lastReply && (
              <div>
                <span>&nbsp;•&nbsp;</span>
                最后由&nbsp;<a href="#">
                  {lastReply.author.loginId}
                </a>&nbsp;<Moment locale="zh-cn" fromNow>
                  {lastReply.create_at}
                </Moment>回复
              </div>
            )}
          </div>
        </div>
        <div className="badge-reply-count">123</div>
      </div>
    );
  }
}

export default TopicItem;
