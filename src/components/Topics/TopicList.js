import React, { Component } from 'react';
import TopicItem from './TopicItem';



class TopicsList extends Component {
  render() {
    const { topics } = this.props;
    return (
      <div>
        {topics.map((topic, i) => {
          <div key={i}><TopicItem /></div>;
        })}
      </div>

      <div className="list-group">
        <Topics />
        <div className="list-group-item"><a href="/topic/aaa">aaa</a></div>
        <div className="list-group-item"><a href="/topic/bbb">bbb</a></div>
      </div>


    );
  }
}

TopicsList.propTypes = {
  topics: PropTypes.array.isRequired
};


export default TopicsList;
