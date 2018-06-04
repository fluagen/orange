import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import styles from './ReplyEditor.module.scss';

const { TextArea } = Input;

const ReplyEditor = () => (
  <div className="list-group">
    <div className="list-group-item">
      <TextArea rows={4} placeholder="支持使用Markdown格式" />

      <div className={styles.operation}><Button type="primary">回复</Button></div>
    </div>
  </div>
);

export default ReplyEditor;
