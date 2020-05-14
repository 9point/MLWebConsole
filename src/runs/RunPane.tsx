import React, { useState } from 'react';
import RunListItem from './RunListItem';
import RoutineRunModule, { Model as RoutineRun } from '../models/RoutineRun';
import Text from '../components/Text';

import { useCreateQuery, useListenQuery } from '../db/hooks';

import './RunPane.css';

export interface Props {}

export default function RunPane(props: Props) {
  const runs = useRuns();

  return (
    <div className="RunPane-Root">
      <div className="RunPane-Header">
        <Text displayStyle="Block" fontStyle="SecondaryNormal">
          {'Runs'}
        </Text>
      </div>
      <div className="RunPane-List">
        {runs.map((run) => (
          <RunListItem run={run} />
        ))}
      </div>
    </div>
  );
}

function useRuns(): RoutineRun[] {
  const [runs, setRuns] = useState([] as RoutineRun[]);

  const query = useCreateQuery(RoutineRunModule, (_) =>
    _.where('isDeleted', '==', false)
      .where('parentRunRef', '==', null)
      .orderBy('createdAt', 'desc'),
  );

  useListenQuery(query, (changeSet) => {
    if (!changeSet || !changeSet.added || changeSet.added.length === 0) {
      return;
    }

    const { added } = changeSet;

    setRuns((prevRuns) => {
      const allRuns = prevRuns.concat(added);
      allRuns.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      return allRuns;
    });
  });

  return runs;
}
