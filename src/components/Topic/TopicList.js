import React, { Component } from "react";
import PropTypes from "prop-types";
import TopicItem from "./TopicItem";
import Moment from "react-moment";
import "moment/locale/zh-cn";

// class TopicList extends Component {
//   render() {
//     const { topics } = this.props;
//
//     return (
//       <div className={styles.topis_list}>
//
//         <List
//           itemLayout="horizontal"
//           bordered
//           dataSource={topics}
//           renderItem={item => (
//             <List.Item>
//               <div className={styles.item}>
//                 <Avatar size="large" src={item.avatar_url} />
//                 <div className={styles.title}><a href="#">{item.title}</a></div>
//                 <div className={styles.badge}>
//                   <span>121</span>
//                   <span className={styles.count_seperator}>|</span>
//                   <Moment locale="zh-cn" fromNow>
//                     {item.last_reply_at}
//                   </Moment>
//                 </div>
//               </div>
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

class TopicList extends Component {
  render() {
    const { topics } = this.props;

    return (
      <div className="list-group">
        {topics.map((item, i) => (
          <div key={i} className="list-group-item">
            <TopicItem
              avatar_url={item.avatar_url}
              title={item.title}
              id={item._id}
              last_reply_at={item.last_reply_at}
            />
          </div>
        ))}
      </div>
    );
  }
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
};

export default TopicList;
