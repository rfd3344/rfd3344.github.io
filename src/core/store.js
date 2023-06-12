import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

// import { isDev } from 'src/utils/devUtils';
import core from './coreSlice';

// import me from 'src/pages/auth/meSlice';
// import admin from 'src/pages/admin/adminSlice';
// import dealerTools from 'src/pages/dealerTools/dealertoolsSlice';

export const store = configureStore({
  reducer: {
    core,
  },
});
