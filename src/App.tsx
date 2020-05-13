import MainPage from './pages/MainPage';
import React from 'react';

import classnames from 'classnames';
import configureDB from './db/configure';
import useTheme, { getThemeClassName } from './useTheme';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

configureDB();

export default function App() {
  const theme = useTheme()[0];

  return (
    <div className={classnames('App', getThemeClassName(theme))}>
      <Router>
        <Switch>
          <Route>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
