import * as DB from '.';
import RoutineRunModule from '../models/RoutineRun';
import Store from '../store';

import { Subscription } from '../types';
import { updateRoutineRuns } from '../store/actions';

export function start(): Subscription {
  console.log('starting');
  const subscriptions = [listenForRoutineRuns()];
  return { stop: () => subscriptions.forEach((s) => s.stop()) };
}

function listenForRoutineRuns(): Subscription {
  console.log('listening for routine runs');
  const query = DB.createQuery(RoutineRunModule, (_) =>
    _.where('isDeleted', '==', false),
  );

  return DB.listenQuery(query, (change) => {
    Store.dispatch(updateRoutineRuns(change));
  });
}
