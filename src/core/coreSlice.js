import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

// import { getCountryDetails } from 'src/api/commonApi';

// export const fetchCountryDetails = createAsyncThunk(
//   'currentUser/fetchCountryDetails',
//   async () => getCountryDetails()
// );

const initialState = {
  // navTitle: '',
  snackBar: {},

};
const slice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    // updateNavTitle: (state, action) => {
    //   const title = action.payload;
    //   state.navTitle = title;

    // },
  },
  extraReducers: ({ addCase }) => { },
});

export const {
  // updateNavTitle,
} = slice.actions;

export default slice.reducer;
