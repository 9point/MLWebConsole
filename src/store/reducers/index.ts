import routineRuns, { State as State$RoutineRuns } from './routineRuns';

import { combineReducers } from 'redux';

export interface State {
  routineRuns: State$RoutineRuns;
}

export default combineReducers({ routineRuns });
