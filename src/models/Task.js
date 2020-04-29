import createModel from './createModel';
import createRef from './createRef';
import semver from './semver';

export const COLLECTION_NAME = 'Tasks';
export const MODEL_TYPE = 'Task';

/**
 *
 * @param {Object} fields
 *   name: Name of the workflow.
 *   projectID: ID of the parent project.
 *   version: Version of the task.
 */
export function create(fields) {
  console.log('create', fields);

  const sv = semver.parse(fields.version);

  return createModel(MODEL_TYPE, {
    isMutable: sv.dev,
    name: fields.name,
    projectRef: createRef('Project', fields.projectID),
    version: fields.version,
  });
}

/**
 *
 * @param {*} model - A task.
 *
 * @param {*} fields
 *   version: New version of the task.
 */
export function set(model, fields) {
  const fromSemver = semver(model.version);
  const toSemver = semver(fields.version);

  if (!semver.isValidTransition(fromSemver, toSemver)) {
    throw Error(
      `Invalid version transition: ${model.version} -> ${fields.version}`,
    );
  }

  return setModel(model, { ...fields, isMutable: toSemver.dev });
}

export default {
  COLLECTION_NAME,
  MODEL_TYPE,
  create,
  set,
};
