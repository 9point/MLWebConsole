import React, { useState } from 'react';
import WorkerListItem from '../workers/WorkerListItem';
import WorkerModule, { Model as Worker } from '../models/Worker';

import { useCreateQuery, useListenQuery } from '../db/hooks';

import './WorkerPane.css';

export interface Props {}

export default function WorkerPane(props: Props) {
  const workers = useWorkers();

  console.log(workers.length);
  return (
    <div className="WorkerPane-Root">
      {workers.map((worker) => (
        <WorkerListItem key={worker.id} worker={worker} />
      ))}
    </div>
  );
}

function useWorkers(): Worker[] {
  const [workers, setWorkers] = useState([] as Worker[]);

  const query = useCreateQuery(WorkerModule, (_) =>
    _.where('isDeleted', '==', false).orderBy('createdAt', 'desc'),
  );

  useListenQuery(query, (changeSet) => {
    if (!changeSet || !changeSet.added || changeSet.added.length === 0) {
      return;
    }

    const { added } = changeSet;

    setWorkers((prevWorkers) => {
      const allRuns = prevWorkers.concat(added);
      allRuns.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      return allRuns;
    });
  });

  return workers;
}
