import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

import { getMasterTree } from 'src/api/gitStatic';

export const fetchMasterTree = createAsyncThunk(
  'staticRepo/fetchMasterTree',
  (data) => getMasterTree(data)
);

const initialState = {
  repoPath: 'rfd3344/frontendJH',
  // repoPath: 'rfd3344/staticJH',
  masterTree: {},
};

const slice = createSlice({
  name: 'githubRepo',
  initialState,
  reducers: {
    updateGithubRepo: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
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
  updateGithubRepo,
} = slice.actions;

export default slice.reducer;
