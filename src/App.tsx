import React, { useEffect } from 'react';
import RouteNotFoundPage from './page/RouteNotFoundPage';
import WorkflowRunPage from './page/WorkflowRunPage';

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
          <Route path={`/workflowRun/:workflowRunID`}>
            <WorkflowRunPage />
          </Route>
          <Route>
            <RouteNotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
