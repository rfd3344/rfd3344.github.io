import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

import { env } from 'src/core/envManager';
import {
  fetchMasterTree,
} from './staticRepoSlice';



export default function StaticRepo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMasterTree());
  }, []);

  return (
    <Container>

      <Typography variant="h6">/images/bao</Typography>
      <Box my={2} width={100}>
        <img
          src={`${env().REACT_APP_STATICJH}/images/bao/bao3.jpg`}
          width="100%"
        />
      </Box>

      get folder structure
      https://api.github.com/repos/rfd3344/staticJH/git/trees/master?recursive=1
    </Container>

  );
}
