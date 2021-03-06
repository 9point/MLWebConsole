import React from 'react';
import WorkerLog from './WorkerLog';

import classnames from 'classnames';

import { PageWithToolbar } from '../pages/utils/Page';
import { useParams } from 'react-router-dom';
import { useLogData } from './hooks';

import './WorkflowRunPage.css';

export interface Props {}

export default function WorkflowRunPage(props: Props) {
  const { workflowRunID } = useParams();
  const logs = useLogData(workflowRunID);

  const canvas = (
    <>
      {logs.map((log) => (
        <WorkerLog data={log} key={log.reactKey} />
      ))}
    </>
  );

  return (
    <PageWithToolbar
      canvas={canvas}
      className={classnames('margin-all-16px', 'Page', 'WorkflowRunPage-Root')}
    />
  );
}
