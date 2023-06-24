import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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

import GitFolder from './components/GitFolder';

export default function StaticRepo() {
  const dispatch = useDispatch();

  const {
    tree = [],
  } = useSelector(state => state.staticRepo.masterTree);

  useEffect(() => {
    if (!_.isEmpty(tree)) return;

    dispatch(fetchMasterTree());
  }, []);

  return (
    <Container>
      <Box my={1} textAlign="center">
        <Typography variant="h6">https://github.com/rfd3344/staticJH</Typography>
      </Box>

      <GitFolder
        parentPath=""
        tree={tree}
      />



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
