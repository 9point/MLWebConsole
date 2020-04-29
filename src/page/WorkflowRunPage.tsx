import React, { useState } from 'react';
import WorkerDirective from '../models/WorkerDirective';
import WorkerLog from '../components/WorkerLog';

import classnames from 'classnames';

import { PageWithToolbar } from './utils/Page';
import { useParams } from 'react-router-dom';
import { useCreateQuery, useListenQuery } from '../db/hooks';

import './WorkflowRunPage.css';

export interface Props {}

export default function WorkflowRunPage(props: Props) {
  const { workflowRunID } = useParams();
  const logs = useWorkerLogs(workflowRunID);

  return (
    <PageWithToolbar
      className={classnames(
        'WorkflowRunPage-Root',
        'Page',
        'margin-bottom-16px',
      )}
    >
      {logs.map((log: any) => (
        <WorkerLog key={log.id} log={log} />
      ))}
    </PageWithToolbar>
  );
}

function useWorkerLogs(workflowRunID: string) {
  const [logs, setLogs] = useState([]);

  const query = useCreateQuery(WorkerDirective, (_: any) =>
    _.where('isDeleted', '==', false)
      .where('payloadKey', '==', 'v1.log')
      .where('payload.workflowRunID', '==', workflowRunID)
      .orderBy('payload.order'),
  );

  useListenQuery(query, (changeSet) => {
    if (!changeSet) {
      return;
    }

    const { added } = changeSet;
    console.log('added:', added && added.length);
    const newLogs = added ? logs.concat(added) : logs;
    setLogs(newLogs);
  });

  return logs;
}
