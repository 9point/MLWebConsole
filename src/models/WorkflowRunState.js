import createModel from './createModel';
import createRef from './createRef';
import setModel from './setModel';

export const COLLECTION_NAME = 'WorkflowRunStates';
export const MODEL_TYPE = 'WorkflowRunState';

/**
 *
 * @param {Object} fields
 *   workflowRunID: ID of the workflow run this state is associated with.
 */
export function create(fields) {
  return createModel(MODEL_TYPE, {
    activeTaskRefs: [],
    completedTaskRefs: [],
    workflowRunRef: createRef('WorkflowRun', fields.workflowRunID),
  });
}

/**
 * @param {WorkflowRunState} model - The original model.
 *
 * @param {Object} fields
 *  activeTaskIDs?: Set of refs for active tasks.
 *  completedTaskIDs?: Set of refs for completed tasks.
 */
export function set(model, fields) {
  const finalFields = {};

  if (fields.activeTaskIDs) {
    finalFields.activeTaskRefs = fields.activeTaskIDs.map((id) =>
      createRef('Task', id),
    );
  }

  if (fields.completedTaskIDs) {
    finalFields.completedTaskRefs = fields.completedTaskIDs.map((id) =>
      createRef('Task', id),
    );
  }

  return setModel(model, finalFields);
}

export function addActiveTaskIDs(model, ids) {
  const completedTaskIDs = model.completedTaskRefs
    .filter((ref) => !ids.includes(ref.refID))
    .map((ref) => ref.refID);

  const newIDs = ids.filter(
    (id) => !model.activeTaskRefs.some((ref) => ref.refID === id),
  );

  const activeTaskIDs = model.activeTaskRefs
    .map((ref) => ref.refID)
    .concat(newIDs);

  return set(model, { activeTaskIDs, completedTaskIDs });
}

export function addCompletedTaskIDs(model, ids) {
  const activeTaskIDs = model.activeTaskRefs
    .filter((ref) => !ids.includes(ref.refID))
    .map((ref) => ref.refID);

  const newIDs = ids.filter(
    (id) => !model.completedTaskRefs.some((ref) => ref.refID === id),
  );

  const completedTaskIDs = model.completedTaskRefs
    .map((ref) => ref.refID)
    .concat(newIDs);

  return set(model, { activeTaskIDs, completedTaskIDs });
}

export default {
  COLLECTION_NAME,
  MODEL_TYPE,
  addActiveTaskIDs,
  addCompletedTaskIDs,
  create,
  set,
};
