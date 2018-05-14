import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import PropTypes from 'prop-types';
import TopicMeta from './TopicMeta';

class TopicList extends Component {
  render() {
    const { topics } = this.props;

    return (
      <div>
        <List
          itemLayout="horizontal"
          bordered
          size="middle"
          dataSource={topics}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar_url} />}
                title={<a href="https://ant.design">{item.title}</a>}
                description={
                  <TopicMeta
                    group_id={item.group_id}
                    group_name={item.group_name}
                    author_id={item.author_id}
                  />
                }
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
};

export default TopicList;
