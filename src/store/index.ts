import rootReducer, { State as State$Root } from './reducers';

import { createStore } from 'redux';
import { useSelector as useSelectorUNTYPED } from 'react-redux';

export type State = State$Root;

const Store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// @ts-ignore
export const useSelector = useSelectorUNTYPED as <T>(
  state: State,
  equalityFn?: (left: T, right: T) => boolean,
) => T;

export default Store;
