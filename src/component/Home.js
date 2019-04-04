import React from 'react';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <a>回到home</a>
        <p>{process.env.NODE_ENV}</p>
        <p>{process.env.REACT_APP_SECRET_CODE}</p>
        <p>%REACT_APP_WEBSITE_NAME%</p>
      </div>
    );
  }
}
