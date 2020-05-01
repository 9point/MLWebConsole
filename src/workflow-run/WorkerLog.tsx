import React from 'react';
import WorkerLogMessage from './WorkerLogMessage';
import WorkerLogProgressBar from './WorkerLogProgressBar';

import { WorkerLogData } from './WorkerLogData';

export interface Props {
  data: WorkerLogData;
}

export default function WorkerLog(props: Props) {
  switch (props.data.type) {
    case 'Message':
      return (
        <WorkerLogMessage
          content={props.data.content}
          messageType={props.data.messageType}
        />
      );

    case 'ProgressBar':
      return (
        <WorkerLogProgressBar
          key={props.data.key}
          name={props.data.name}
          progress={props.data.progress}
        />
      );
  }
}
