const FirebaseAdmin = require('firebase');

const assert = require('assert');

export default function setModel(model, fields) {
  assert(
    Object.keys(fields).length > 0,
    'Cannot set model with no new fields.',
  );

  const now = new Date();
  const nowTs = FirebaseAdmin.firestore.Timestamp.fromDate(now);

  return {
    ...model,
    ...fields,
    updatedAt: nowTs,
  };
};
