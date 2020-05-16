import { Action } from '../actions';

export interface State {}

const DEFAULT_STATE: State = {};

export default function routineRuns(
  state: State = DEFAULT_STATE,
  action: Action,
): State {
  return DEFAULT_STATE;
}
