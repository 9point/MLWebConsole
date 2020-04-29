import createModel from './createModel';
import createRef from './createRef';

export const COLLECTION_NAME = 'Workflows';
export const MODEL_TYPE = 'Workflow';

/**
 *
 * @param {Object} fields
 *   name: Name of the workflow.
 *   projectID: ID of the parent project.
 */
export function create(fields) {
  return createModel(MODEL_TYPE, {
    name: fields.name,
    projectRef: createRef('Project', fields.projectID),
  });
}

export default {
  COLLECTION_NAME,
  MODEL_TYPE,
  create,
};
