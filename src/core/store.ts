import { configureStore, combineReducers } from '@reduxjs/toolkit';


import core from './coreSlice';
// GitHub/rfd3344.github.io/src/pages/staticRepo/staticRepoSlice.jsx
import staticRepo from 'src/pages/staticRepo/staticRepoSlice';

export const store = configureStore({
  reducer: {
    core,
    staticRepo,
  },
});
