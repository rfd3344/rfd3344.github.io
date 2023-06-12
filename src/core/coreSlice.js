import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

// import { getCountryDetails } from 'src/api/commonApi';

// export const fetchCountryDetails = createAsyncThunk(
//   'currentUser/fetchCountryDetails',
//   async () => getCountryDetails()
// );

const initialState = {
  country: {},
  snackBar: {},
};
const slice = createSlice({
  name: 'core',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {},
});

export const {} = slice.actions;

export default slice.reducer;
