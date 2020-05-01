import WorkerDirective from '../models/WorkerDirective';

import nullthrows from 'nullthrows';

import { MessageType, WorkerLogData } from './WorkerLogData';
import { useCreateQuery, useListenQuery } from '../db/hooks';
import { useState, useMemo, useEffect } from 'react';

// TODO: Should reload when workflowRunID changes.
// TODO: Should rename.
export function useWorkerLogs(workflowRunID: string) {
  const [logs, setLogs] = useState([] as any[]);

  const query = useCreateQuery(WorkerDirective, (_: any) => {
    return _.where('isDeleted', '==', false)
      .where('payloadKey', '==', 'v1.log')
      .where('payload.workflowRunID', '==', workflowRunID)
      .orderBy('payload.order');
  });

  useListenQuery(query, (changeSet) => {
    if (!changeSet || !changeSet.added || changeSet.added.length === 0) {
      return;
    }

    const { added } = changeSet;

    setLogs((prevLogs) => {
      const allLogs = prevLogs.concat(added);
      allLogs.sort((a, b) => a.payload.order - b.payload.order);
      return allLogs;
    });
  });

  return logs;
}

// TODO: Should clean this up.
// TODO: Should rename.
export function useLogData(workflowRunID: string) {
  const logs = useWorkerLogs(workflowRunID);
  return useMemo(() => calculateLogData(logs), [logs]);
}

function calculateLogData(logs: any[]) {
  // A progress bar stub is a key / name / progress of progress bar.
  const progressBarStubs: { [key: string]: any } = {};
  const progressBarKeyToIndices: { [key: string]: number[] } = {};

  const data: WorkerLogData[] = [];

  for (const log of logs) {
    if (log.payload.i.includes('describable')) {
      const messages = log.payload.descriptor.split('\n');
      for (const [idx, message] of messages.entries()) {
        let content;
        let messageType: MessageType;

        if (message.startsWith('# ')) {
          content = message.slice('# '.length).trim();
          messageType = 'H1';
        } else if (message.startsWith('## ')) {
          content = message.slice('## '.length).trim();
          messageType = 'H2';
        } else if (message.startsWith('### ')) {
          content = message.slice('### '.length).trim();
          messageType = 'H3';
        } else {
          content = message;
          messageType = 'P';
        }

        data.push({
          content,
          messageType,
          reactKey: `${log.id}-${idx}`,
          type: 'Message',
        });
      }
    } else if (log.payload.i.includes('progressbar')) {
      const { command, key, name } = log.payload;

      if (!progressBarStubs[key]) {
        progressBarStubs[key] = { key, name, progress: 0 };
      }

      switch (command) {
        case 'setProgress': {
          // Set the progress of all instances of this progress bar in
          // the logs.

          const { progress } = log.payload;
          const stub = progressBarStubs[key];

          stub.progress = progress;

          // Go through all the indices where the progress bar is showing,
          // and override the value with the update values from the stub.
          // Want to make sure that all instances of the progress bar are
          // in sync.
          for (const idx of progressBarKeyToIndices[key] || []) {
            data[idx] = {
              ...stub,
              reactKey: `${key}-${idx}`,
              type: 'ProgressBar',
            };
          }

          break;
        }

        case 'show': {
          // Show the progress bar at this particular spot in the data.

          const stub = nullthrows(progressBarStubs[key]);
          const idx = data.length;

          const progressBar = {
            ...stub,
            reactKey: `${key}-${idx}`,
            type: 'ProgressBar',
          };

          const indices = progressBarKeyToIndices[key] || [];
          indices.push(idx);

          data.push(progressBar);
          progressBarKeyToIndices[key] = indices;

          break;
        }
      }
    }
  }

  return data;
}
