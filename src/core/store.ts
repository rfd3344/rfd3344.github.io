import { configureStore, combineReducers } from '@reduxjs/toolkit';

import core from './coreSlice';
import githubRepo from 'src/pages/githubRepo/githubRepoSlice';
import markdown from 'src/pages/markdown/markdownSlice';
import webpage from 'src/pages/webpage/webpageSlice';

export const store = configureStore({
  reducer: {
    core,
    githubRepo,
    markdown,
    webpage,
  },
});
