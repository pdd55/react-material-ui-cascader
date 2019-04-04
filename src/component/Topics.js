import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Topic from './topic';

export default class Topics extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <h1>主题列表</h1>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
                使用 React 渲染
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>
                组件
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
                属性 v. 状态
            </Link>
          </li>
        </ul>

        <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
        <Route
          exact path={this.props.match.url} render={() => (
            <h3>请选择一个主题。</h3>
          )} />
      </div>
    );
  }
}
