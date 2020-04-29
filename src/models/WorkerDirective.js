import createModel from './createModel';
import createRef from './createRef';

import { v4 as uuidv4 } from 'uuid';

export const COLLECTION_NAME = 'WorkerDirectives';
export const MODEL_TYPE = 'WorkerDirective';

/**
 *
 * @param {Object} fields
 *   directiveType: Indicates direction of communication.
 *   payload: Payload of the directive.
 *   payloadKey: The key associated with the payload.
 *   workerID: ID of the worker this directive is associated with.
 */
export function create(fields) {
  return createModel(MODEL_TYPE, {
    directiveType: fields.directiveType,
    payload: fields.payload,
    payloadKey: fields.payloadKey,
    workerRef: createRef('Worker', fields.workerID),
  });
}

create.heartbeat = {
  checkPulse(config) {
    const { workerID } = config;

    return create({
      directiveType: 'TO_WORKER',
      payload: { id: uuidv4() },
      payloadKey: 'v1.heartbeat.check_pulse',
      workerID,
    });
  },
};

create.info = {
  requestStatus(config) {
    const { workerID } = config;

    return create({
      directiveType: 'TO_WORKER',
      payload: {},
      payloadKey: 'v1.info.check_status',
      workerID,
    });
  },
};

create.task = {
  requestStart(config) {
    const { projectID, taskName, workerID } = config;

    return create({
      directiveType: 'TO_WORKER',
      payload: { project_id: projectID, task_name: taskName },
      payloadKey: 'v1.task.request_start',
      workerID,
    });
  },
};

export default {
  COLLECTION_NAME,
  MODEL_TYPE,
  create,
};
