import React, { Component } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

class TopicEditor extends Component {
  render() {
    return (
      <div>
        <Input placeholder="Basic usage" />
        <TextArea rows={4} />
      </div>
    );
  }
}

export default TopicEditor;
