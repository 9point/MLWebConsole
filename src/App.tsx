import React, { useEffect } from 'react';
import RouteNotFoundPage from './page/RouteNotFoundPage';
import WorkflowRunPage from './page/WorkflowRunPage';

import configureDB from './db/configure';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

configureDB();

export default function App() {
  return (
    <div className="App">
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
