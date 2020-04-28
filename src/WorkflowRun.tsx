import React from 'react';

import { useParams } from 'react-router-dom';

import './WorkflowRun.css';

export interface Props {}

export default function WorkflowRun(props: Props) {
  const { workflowRunID } = useParams();
  return (
    <div className="WorkflowRun-Root">{`Displaying workflow run with id ${workflowRunID}`}</div>
  );
}
