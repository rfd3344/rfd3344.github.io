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

import TitleGithubRepo from './TitleGithubRepo';
import TitleWebpage from './TitleWebpage';

export default function NavTitle() {
  const { pathname } = useLocation();
  const getTitle = () => {
    if (pathname === PagePath.home) return '';
    if (pathname === PagePath.repo) return <TitleGithubRepo />;
    if (pathname === PagePath.webpage) return <TitleWebpage />;
  };

  return (
    <Box sx={{ wordBreak: "break-all" }}>
      <Typography variant="subtitle1">
        {getTitle()}
      </Typography>

    </Box>

  );
}
