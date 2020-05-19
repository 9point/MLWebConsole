import React, { useMemo } from 'react';
import RunListItem from './RunListItem';

import { useSelector } from 'react-redux';
import { State } from '../store';

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

  return (
    <div className="RunPane-Root">
      <div className="RunPane-List">
        {parentRuns.map((run) => (
          <RunListItem key={run.id} run={run} />
        ))}
      </div>
    </div>
  );
}
