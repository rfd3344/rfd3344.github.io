import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  Box,
  Select,
  MenuItem,
} from '@mui/material';


// import markdownPath from './contents/test.md';
import ContentMD from './ui/ContentMD';

import { fetchMarkdownFiles } from './markdownSlice';

export default function Markdown() {
  const dispatch = useDispatch();

  // const [content, setContent] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const {
    files = []
  } = useSelector(state => state.markdown);
  useEffect(() => {
    // console.warn('markdownPath', markdownPath);
    // fetch(markdownPath).then(resp => resp.text()).then(text => {
    //   console.warn(text);
    //   setContent(text);
    //   // this.setState({ terms: text });
    // });
    dispatch(fetchMarkdownFiles());
  }, []);

  const handleChange = (e) => {
    setFileUrl(e.target.value);
  };

  return (
    <Grid id="Markdown" container>
      <Grid item>

        <Select
          value={fileUrl}
          onChange={handleChange}
        >
          {files.map(item => (
            <MenuItem value={item.url} key={item.path}>{item.path}</MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item>
        {/* <ContentMD path={fileUrl} /> */}
      </Grid>
    </Grid>
  );
}