import React, { Component } from "react";

import { List, Button } from "antd";

import styles from "./ButtonTopic.module.scss";

// class ButtonTopic extends Component {
//   render() {
//     return (
//       <div class="list-group">
//         <div class="list-group-item">
//           <a href="/topic/create" class="btn btn-success">
//             发布话题
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

const data = [""];
const ButtonTopic = () => (
  <div>
    <List
      itemLayout="horizontal"
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Button
            style={{ flex: 1 }}
            type="primary"
            ghost={true}
            href="/topic/create"
          >
            发布话题
          </Button>
        </List.Item>
      )}
    />
  </div>
);

export default ButtonTopic;
