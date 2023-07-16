import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

import { updateNavTitle } from 'src/core/coreSlice';

import GitTree from './ui/GitTree';

export default function GithubRepo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateNavTitle('https://github.com/rfd3344/staticJH'));
  }, []);

  return (
    <Container sx={{ py: 1 }} >
      <GitTree />
    </ Container>

  );
}
