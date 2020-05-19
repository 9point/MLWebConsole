import RoutineRunModule, { Model as RoutineRun } from '../../models/RoutineRun';

import { Change } from '../../db';

export type Action = Action$UpdateRoutineRuns;

export interface Action$UpdateRoutineRuns {
  change: Change<typeof RoutineRunModule.MODEL_TYPE, RoutineRun>;
  type: 'UPDATE_ROUTINE_RUNS';
}

export function updateRoutineRuns(
  change: Change<typeof RoutineRunModule.MODEL_TYPE, RoutineRun>,
): Action$UpdateRoutineRuns {
  return { change, type: 'UPDATE_ROUTINE_RUNS' };
}
