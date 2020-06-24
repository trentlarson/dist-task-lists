import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import cacheReducer from './features/settings/cacheSlice';
// eslint-disable-next-line import/no-cycle
import counterReducer from './features/counter/counterSlice';
// eslint-disable-next-line import/no-cycle
import settingsReducer from './features/settings/settingsSlice';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    cache: cacheReducer,
    counter: counterReducer,
    distnet: settingsReducer,
  });
}
