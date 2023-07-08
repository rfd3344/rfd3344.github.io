import React, { useState, useEffect, useMemo } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Grid,
  Paper
} from '@mui/material';

import { Accordion } from 'src/common/dataDisplay';

import FielItem from './FielItem';
import { GitFileType } from '../staticRepoConst';
import { fetchMasterTree } from '../staticRepoSlice';

export default function GitTree() {
  const dispatch = useDispatch();

  const {
    tree = [],
  } = useSelector(state => state.staticRepo.masterTree);

  const files = tree.filter(item => item.type !== GitFileType.tree);

  const accordionFiles = files.reduce((acc, item) => {
    const pathArr = _.split(item.path, '/');
    const rootFolder = pathArr.length > 1 ? pathArr[0] : '/';

    if (!acc[rootFolder]) acc[rootFolder] = [];
    acc[rootFolder] = [
      ...acc[rootFolder],
      item.path,
    ];

    return acc;
  }, {});


  useEffect(() => {
    if (!_.isEmpty(tree)) return;
    dispatch(fetchMasterTree());
  }, []);


  return (
    <Box>
      <Accordion
        defaultExpandIndex={0}
        data={_.keys(accordionFiles).map(key => ({
          summary: key,
          details: <Grid container spacing={2}>
            {accordionFiles[key].map(path =>
              <Grid key={path} item xs={4} md={2} >
                <FielItem
                  filePath={path}
                />
              </Grid>
            )}
          </Grid>
        }))}
      />

    </Box>
  );
}
