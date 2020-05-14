import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducer from './root.reducer'

const middlewares = [logger]

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares
})

export const persistor = persistStore(store)

// const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default { store, persistor }