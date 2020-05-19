import canvasView, { State as State$CanvasView } from './canvasView';
import routineRuns, { State as State$RoutineRuns } from './routineRuns';

import { combineReducers } from 'redux';

export interface State {
  canvasView: State$CanvasView;
  routineRuns: State$RoutineRuns;
}

export default combineReducers({ canvasView, routineRuns });
