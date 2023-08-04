import React, { useState, useEffect, useMemo } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Grid,
  Paper,
  Container,
} from '@mui/material';

import { Accordion } from 'src/components/dataDisplay';

import FielItem from './ui/FielItem';
import { groupByRoot } from './githubRepoUtils';
import { GitFileType } from './githubRepoConst';
import { fetchMasterTree } from './githubRepoSlice';

export default function GitTree() {
  const dispatch = useDispatch();

  const {
    repoPath,
    masterFiles = [],
  } = useSelector(state => state.githubRepo);

  const files = masterFiles.filter(item => item.type !== GitFileType.tree);
  const groupFiles = groupByRoot(files);

  useEffect(() => {
    if (!repoPath) return;
    dispatch(fetchMasterTree(repoPath));
  }, [repoPath]);


  return (
    <Container sx={{ py: 1 }} >
      <Accordion
        defaultExpandIndex={0}
        data={_.keys(groupFiles).map(key => ({
          summary: key,
          details: <Grid container spacing={2}>
            {groupFiles[key].map(file =>
              <Grid key={file.path} item xs={4} md={2} >
                <FielItem
                  file={file}
                />
              </Grid>
            )}
          </Grid>
        }))}
      />
    </Container>
  );
}
