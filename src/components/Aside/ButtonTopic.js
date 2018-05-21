import React, { Component } from 'react';

import { List, Button } from 'antd';

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

const data = [''];
const ButtonTopic = () => (
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <Button
          style={{ flex: 1 }}
          type="primary"
          ghost={true}
          href="/topic/create"
        >
          发布话题
        </Button>
      </li>
    </ul>
  </div>
);

export default ButtonTopic;
