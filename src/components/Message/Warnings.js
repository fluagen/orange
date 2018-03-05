import React, { Component } from 'react';
import { Alert } from 'antd';

import styles from './Warnings.module.scss';

class Warnings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }


  componentWillReceiveProps(nextProps) {
    // console.log('Warnings will receive props:' + nextProps.items);
    this.setState({
      items: nextProps.items
    });

    // console.log("Warings items:"+this.state.items);
    // this.props.items.map((item, i) => {
    //   console.log(i + '：' + item);
    // });
  }

  render() {
    return (
      <div>
        {this.state.items.map((item, i) => {
          return (
            <Alert
              className={styles.main}
              key={i}
              message={item}
              type="warning"
              closable
            />
          );
        })}
      </div>
    );
  }
}

export default Warnings;
