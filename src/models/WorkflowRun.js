import createModel from './createModel';
import createRef from './createRef';

export const COLLECTION_NAME = 'WorkflowRuns';
export const MODEL_TYPE = 'WorkflowRun';

/**
 *
 * @param {Object} fields
 *   workflowID: ID of the workflow this run is associated with.
 */
export function create(fields) {
  return createModel(MODEL_TYPE, {
    workflowRef: createRef('Workflow', fields.workflowID),
  });
}

export default {
  COLLECTION_NAME,
  MODEL_TYPE,
  create,
};
