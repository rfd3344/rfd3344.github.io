import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';

import { updateMarkdown } from 'src/pages/markdown/markdownSlice';
import {
  getFolderFiles
} from 'src/core/nodeMethods';

// const paths = require.context('src/../public/markdown', true).keys();

export default function TitleFolder({
  folderName = ''
}) {
  const dispatch = useDispatch();
  const {
    selectFile = '',
    filePaths = [],
  } = useSelector(state => state.markdown);

  useEffect(() => {
    const paths = getFolderFiles('markdown');
    dispatch(updateMarkdown({
      selectFile: paths[0],
      filePaths: paths,
    }));
  }, []);

  const handleChange = (e) => {
    dispatch(updateMarkdown({
      selectFile: e.target.value
    }));
  };

  return (
    <Box>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={selectFile}
          onChange={handleChange}
        >
          {filePaths.map(item => (
            <MenuItem value={item} key={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>

    </Box>
  );
};