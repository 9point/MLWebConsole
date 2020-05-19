import { Action } from '../actions';
import { CanvasMode } from '../../types';

export interface State {
  mode: CanvasMode | null;
}

const DEFAULT_STATE: State = {
  mode: null,
};

export default function canvasView(
  state: State = DEFAULT_STATE,
  action: Action,
): State {
  switch (action.type) {
    case 'SET_CANVAS_MODE': {
      return { ...state, mode: action.mode };
    }

    default:
      return state;
  }
}
