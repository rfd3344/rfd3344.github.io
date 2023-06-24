import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

// import { isDev } from 'src/utils/devUtils';
import core from './coreSlice';
// GitHub/rfd3344.github.io/src/pages/staticRepo/staticRepoSlice.jsx
import staticRepo from 'src/pages/staticRepo/staticRepoSlice';

export const store = configureStore({
  reducer: {
    core,
    staticRepo,
  },
});
