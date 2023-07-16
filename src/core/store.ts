import { configureStore, combineReducers } from '@reduxjs/toolkit';


import core from './coreSlice';
import githubRepo from 'src/pages/githubRepo/githubRepoSlice';

export const store = configureStore({
  reducer: {
    core,
    githubRepo,
  },
});
