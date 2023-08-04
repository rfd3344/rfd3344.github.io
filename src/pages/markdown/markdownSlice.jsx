import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

import { getMarkdownFiles } from 'src/api/githubRepo';

export const fetchMarkdownFiles = createAsyncThunk(
  'githubRepo/fetchMarkdownFiles',
  getMarkdownFiles
);

const initialState = {
  isValidRepo: false,
  files: [],
};

const slice = createSlice({
  name: 'markdownSlice',
  initialState,
  reducers: {

  },
  extraReducers: ({ addCase }) => {
    addCase(fetchMarkdownFiles.fulfilled, (state, action) => {
      state.isValidRepo = true;
      state.files = action?.payload?.tree || [];
    });
    addCase(fetchMarkdownFiles.rejected, (state, action) => {
      state.isValidRepo = false;
      state.files = [];
    });
  },
});

// export const {
//   updateGithubRepo,
// } = slice.actions;

export default slice.reducer;
