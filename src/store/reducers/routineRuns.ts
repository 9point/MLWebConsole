import { Action } from '../actions';
import { Model as RoutineRun } from '../../models/RoutineRun';

export interface RoutineRunTree {
  [parentID: string]: string[];
}

export interface RoutineRunCollection {
  [id: string]: RoutineRun;
}

export interface State {
  routineRuns: RoutineRunCollection;
  tree: RoutineRunTree;
}

const DEFAULT_STATE: State = {
  routineRuns: {},
  tree: {},
};

export default function routineRuns(
  state: State = DEFAULT_STATE,
  action: Action,
): State {
  switch (action.type) {
    case 'UPDATE_ROUTINE_RUNS': {
      // TODO: For now, only looking at routine runs that have been added.
      if (action.change.added.length === 0) {
        return state;
      }

      const newRuns: { [id: string]: RoutineRun } = {};
      for (const run of action.change.added) {
        newRuns[run.id] = run;
      }

      const routineRuns = { ...state.routineRuns, ...newRuns };
      const tree = calculateTree(routineRuns);
      return { ...state, routineRuns, tree };
    }

    default:
      return state;
  }
}

function calculateTree(routineRuns: RoutineRunCollection): RoutineRunTree {
  const tree: RoutineRunTree = {};

  for (const run of Object.values(routineRuns)) {
    if (!run.parentRunRef) {
      continue;
    }

    const childIDs = tree[run.parentRunRef.refID] || [];
    childIDs.push(run.id);
    tree[run.parentRunRef.refID] = childIDs;
  }

  return tree;
}
