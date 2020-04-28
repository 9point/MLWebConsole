import Firebase from 'firebase';

import 'firebase/firestore';

export async function genFetchModel(module, id) {
  const ref = Firebase.firestore().collection(module.COLLECTION_NAME).doc(id);

  const doc = await ref.get();
  return doc.exists ? doc.data() : null;
}

export async function genSetModel(module, model) {
  const ref = Firebase.firestore()
    .collection(module.COLLECTION_NAME)
    .doc(model.id);

  await ref.set(model);
  return model;
}

export async function genDeleteModel(module, model) {
  await genSetModel(module, { ...model, isDeleted: true });
}

export function createQuery(module, cb) {
  return cb(Firebase.firestore().collection(module.COLLECTION_NAME));
}

export async function genRunQuery(query) {
  const snapshot = await query.get();
  const models = [];
  snapshot.forEach((doc) => {
    if (doc.exists) {
      models.push(doc.data());
    }
  });

  return models;
}

export async function genRunQueryOne(query) {
  const models = await genRunQuery(query);
  if (models.length === 0) {
    return null;
  }
  return models[0];
}

export function listenQuery(query, cb) {
  const stop = query.onSnapshot((snapshot) => {
    const changePartitions = {};
    snapshot.docChanges().forEach((change) => {
      const changeType = change.type;
      if (!changePartitions[changeType]) {
        changePartitions[changeType] = [];
      }

      changePartitions[changeType].push(change.doc.data());
    });

    cb(changePartitions);
  });

  return { stop };
}
