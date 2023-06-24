import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

import { getMasterTree } from 'src/api/gitStatic';

export const fetchMasterTree = createAsyncThunk(
  'staticRepo/fetchMasterTree',
  getMasterTree,
);

const initialState = {
  masterTree: {},
};

const slice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addUserList(state, action) {
      const { payload } = action;
      state.users.push(payload);
    },
    updateUserList(state, action) {
      const { payload } = action;
      state.users.push(payload);
    },





  },
  extraReducers: ({ addCase }) => {
    addCase(fetchMasterTree.fulfilled, (state, action) => {
      const {
        payload = {}
      } = action;
      state.masterTree = payload;
    });
  },
});

export const {
  // updateSubscriptionSetup,
  // updateVehicleInfo,
  // updatePlans,
  // updateSubscription,
  addUserList,
  updateUserList,
} = slice.actions;

export default slice.reducer;
