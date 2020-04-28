import React from 'react';
import RouteNotFound from './RouteNotFound';
import WorkflowRun from './WorkflowRun';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={`/workflowRun/:workflowRunID`}>
            <WorkflowRun />
          </Route>
          <Route>
            <RouteNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
