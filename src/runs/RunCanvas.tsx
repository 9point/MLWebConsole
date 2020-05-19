import React, { useMemo } from 'react';
import RunLog, { Props as Props$RunLog } from '../logs/RunLog';
import Text from '../components/Text';

import { useSelector } from 'react-redux';
import { State } from '../store';
import { State as State$RoutineRuns } from '../store/reducers/routineRuns';

import './RunCanvas.css';

export interface Props {}

export default function RunCanvas(props: Props) {
  const [runID, routineRuns] = useSelector((state: State) => {
    const { mode } = state.canvasView;
    const runID =
      mode?.type === 'DISPLAY_ROUTINE_RUN' ? mode.routineRunID : null;
    return [runID, state.routineRuns];
  });

  const runLogProps = useMemo(() => calculateRunLogProps(runID, routineRuns), [
    runID,
    routineRuns,
  ]);

  return (
    <div className="RunCanvas-Root">
      <div className="RunCanvas-Header">
        <Text displayStyle="Block" fontStyle="PrimaryNormal">
          {'simple_example.build'}
        </Text>
      </div>
      <div className="RunCanvas-Content">
        {runLogProps.map((props) => (
          <RunLog {...props} />
        ))}
      </div>
    </div>
  );
}

function calculateRunLogProps(
  runID: string | null,
  routineRuns: State$RoutineRuns,
): (Props$RunLog & { key: string })[] {
  if (runID === null) {
    return [];
  }

  const props: (Props$RunLog & { key: string })[] = [];

  const childRunIDs = routineRuns.tree[runID] || [];

  for (const childRunID of childRunIDs) {
    const run = routineRuns.routineRuns[childRunID];
    props.push({
      date: run.createdAt,
      domain: run.routineID,
      key: `CreateRun.${run.id}`,
      message: `Creating routine run`,
    });
  }

  return props.sort((a, b) => a.date.getTime() - b.date.getTime());
}
