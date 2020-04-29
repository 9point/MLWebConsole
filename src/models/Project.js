const createModel = require('./createModel');

export const COLLECTION_NAME = 'Projects';
export const MODEL_TYPE = 'Project';

/**
 *
 * @param {Object} fields
 *   imageName - name of the docker image.
 *   name - Name of the project.
 */
export function create(fields) {
  return createModel(MODEL_TYPE, fields);
}

export default {
  COLLECTION_NAME,
  MODEL_TYPE,
  create,
};
