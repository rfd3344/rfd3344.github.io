import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Grid,
  Menu,
  InputBase,
  TextField,
  InputAdornment
} from '@mui/material';

import { updateGithubRepo } from 'src/pages/githubRepo/githubRepoSlice';


export default function TitleGithubRepo() {
  const dispatch = useDispatch();
  const {
    repoPath = ''
  } = useSelector(state => state.githubRepo);

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (repoPath === value) return;
    dispatch(updateGithubRepo({ repoPath: value }));
  };


  return (
    <Grid container alignItems="center">
      <Grid item>https://github.com/</Grid>
      <Grid item>
        <TextField
          hiddenLabel
          size="small"
          color="warning"
          sx={{
            '& input': {
              color: 'white',
              px: 0.5
            }
          }}
          defaultValue={repoPath}
          onKeyUp={handleKeyUp}
          onBlur={handleChange}
        />
      </Grid>

    </Grid>
  );
};
