import React from 'react';
import RouteNotFoundPage from './pages/RouteNotFoundPage';
import WorkflowRunPage from './workflow-run/WorkflowRunPage';

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
