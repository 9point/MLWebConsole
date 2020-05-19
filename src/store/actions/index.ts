import RoutineRunModule, { Model as RoutineRun } from '../../models/RoutineRun';

import { CanvasMode } from '../../types';
import { Change } from '../../db';

export type Action = Action$SetCanvasMode | Action$UpdateRoutineRuns;

export interface Action$SetCanvasMode {
  mode: CanvasMode | null;
  type: 'SET_CANVAS_MODE';
}

export function setCanvasMode(mode: CanvasMode | null): Action$SetCanvasMode {
  return { mode, type: 'SET_CANVAS_MODE' };
}

export interface Action$UpdateRoutineRuns {
  change: Change<typeof RoutineRunModule.MODEL_TYPE, RoutineRun>;
  type: 'UPDATE_ROUTINE_RUNS';
}

export function updateRoutineRuns(
  change: Change<typeof RoutineRunModule.MODEL_TYPE, RoutineRun>,
): Action$UpdateRoutineRuns {
  return { change, type: 'UPDATE_ROUTINE_RUNS' };
}
