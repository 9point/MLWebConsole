import createModel from './createModel';
import createRef from './createRef';
import setModel from './setModel';

export const COLLECTION_NAME = 'Workers';
export const MODEL_TYPE = 'Worker';

/**
 *
 * @param {Object} fields
 *   projectID: ID of the parent project.
 *   status: Status of the worker. Default is INITIALIZING.
 */
export function create(fields) {
  return createModel(MODEL_TYPE, {
    projectRef: createRef('Project', fields.projectID),
    status: fields.status || 'INITIALIZING',
  });
}

/**
 *
 * @param {Object} fields
 *   status: The status of the worker.
 */
export function set(model, fields) {
  return setModel(model, fields);
}

export default {
  COLLECTION_NAME,
  MODEL_TYPE,
  create,
  set,
};
