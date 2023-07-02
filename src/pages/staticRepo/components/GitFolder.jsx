import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper
} from '@mui/material';



import FolderItem from './FolderItem';
import FielItem from './FielItem';
import { GitFileType } from '../staticRepoConst';


export default function GitFolder({
  parentPath = "",
  tree = [],
}) {


  const folders = tree.filter(item => item.type === GitFileType.tree);
  const files = tree.filter(item => item.type !== GitFileType.tree);

  return (
    <Box>
      <Box>
        {folders.map(item =>
          <FolderItem
            parentPath={parentPath}
            path={item.path}
            type={item.type}
            url={item.url}
          />
        )}
      </Box>
      {!_.isEmpty(files) && (
        <Paper elevation={3} sx={{ py: 2, pl: 2 }} >
          <Grid container spacing={2}>
            {files.map(item =>
              <Grid item xs={4} md={2}>
                <FielItem

                  filePath={item.path}
                  // url={item.url}
                />
              </Grid>
            )}
          </Grid>
        </Paper>
      )}

    </Box>
  );
}
