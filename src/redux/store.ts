import { combineReducers, legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { loadingReducer } from './reducers/loadingReducer';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  loadingReducer,
  userReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
