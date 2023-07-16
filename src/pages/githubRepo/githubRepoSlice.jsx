import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

import { getMasterTree } from 'src/api/githubRepo';

export const fetchMasterTree = createAsyncThunk(
  'githubRepo/fetchMasterTree',
  (data) => getMasterTree(data)
);

const initialState = {
  repoPath: 'rfd3344/frontendJH',
  isValidRepo: false,
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

      state.isValidRepo = true;
      state.masterTree = payload;
    });
    addCase(fetchMasterTree.rejected, (state, action) => {
      state.isValidRepo = false;
    });
  },
});

export const {
  updateGithubRepo,
} = slice.actions;

export default slice.reducer;
