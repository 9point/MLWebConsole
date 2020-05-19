import rootReducer, { State as State$Root } from './reducers';

import { Action } from './actions';
import { createStore } from 'redux';

export type State = State$Root;

export type Dispatch = (action: Action) => void;

const Store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default Store;
