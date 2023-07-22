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

import { PagePath } from 'src/constants/routerConst';
import { updateGithubRepo } from 'src/pages/githubRepo/githubRepoSlice';

import { WarningIcon } from 'src/core/Icons';


export default function NavTitle() {
  const { pathname } = useLocation();


  const getTitle = () => {

    if (pathname === PagePath.home) return '';
    if (pathname === PagePath.repo) return <GithubRepoTitle />;

  };


  return (
    <Box sx={{ wordBreak: "break-all" }}>

      <Typography variant="subtitle1">
        {getTitle()}
      </Typography>

    </Box>

  );
}


const GithubRepoTitle = () => {
  const dispatch = useDispatch();
  const {
    isValidRepo = false,
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