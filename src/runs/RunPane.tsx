import React, { useMemo } from 'react';
import RunListItem from './RunListItem';

import { Dispatch, State } from '../store';
import { setCanvasMode } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import './RunPane.css';

export interface Props {}

export default function RunPane(props: Props) {
  const [runs, tree] = useSelector((state: State) => [
    state.routineRuns.routineRuns,
    state.routineRuns.tree,
  ]);

  // Display any runs that don't have children.
  const parentRuns = useMemo(() => {
    const parentRuns = Object.values(runs).filter((r) => !r.parentRunRef);
    return parentRuns.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
  }, [runs, tree]);

  const dispatch = useDispatch<Dispatch>();

  return (
    <div className="RunPane-Root">
      <div className="RunPane-List">
        {parentRuns.map((run) => (
          <RunListItem
            key={run.id}
            onClick={() =>
              dispatch(
                setCanvasMode({
                  routineRunID: run.id,
                  type: 'DISPLAY_ROUTINE_RUN',
                }),
              )
            }
            run={run}
          />
        ))}
      </div>
    </div>
  );
}
