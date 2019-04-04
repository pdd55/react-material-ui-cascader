import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import { ReactComponent as Logo } from './logo.svg';
import girl from './timg.jpg'; // ts-disable-line
import {Switch, Route, Router, HashHistory, Link} from 'react-router-dom';
import './App.scss';

interface Props {
  name: string,
}

class App extends Component<Props,{}> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    name: 'scottDefault',
  }

  tsTest(data:string) {
    return `hello ${data}`;
  }

  render() {
    console.log(this.props);
    const { name } = this.props;
    const global = window.test;
    global('linhai');
    return (
      <div className="App">
        <header className="AppHeader">
          <img className="App__img--small" src={girl} />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Logo className="App-logo" alt="logo" />
          <p className="App_p">
            Hi:{name}
          </p>
          <p className="App_p">
            {this.tsTest('linhai')}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
