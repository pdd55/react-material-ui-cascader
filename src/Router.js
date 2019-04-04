import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counter from './reducers';
import Home from './component/Home';
import Detail from './component/Detail';
import Topics from './component/Topics';
import App from './App.tsx';

const store = createStore(counter);


const BasicRoute = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/home">home-cascader</Link>
          </li>
          <li>
            <Link to="/detail">detail-redux</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Home" component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="/topics" component={Topics} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);


export default BasicRoute;
