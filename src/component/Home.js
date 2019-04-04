import React from 'react';
import Cascader from './Cascader';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <a>回到home</a>
        <p>{process.env.NODE_ENV}</p>
        <p>{process.env.REACT_APP_SECRET_CODE}</p>
        <p>%REACT_APP_WEBSITE_NAME%</p>
        <Cascader />
      </div>
    );
  }
}
