import MainPage from './pages/MainPage';
import React from 'react';
import Store from './store';

import classnames from 'classnames';
import configureDB from './db/configure';
import useTheme, { getThemeClassName } from './useTheme';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

configureDB();

export default function App() {
  const theme = useTheme()[0];

  return (
    <Provider store={Store}>
      <div className={classnames('App', getThemeClassName(theme))}>
        <Router>
          <Switch>
            <Route path="/workers">
              <MainPage leftPaneState={{ mode: 'WORKERS' }} />
            </Route>
            <Route>
              <MainPage leftPaneState={{ mode: 'RUNS' }} />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
