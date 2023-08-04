import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
} from '@mui/material';


import markdownPath from './contents/test.md';
import ContentMD from './ui/ContentMD';

export default function Markdown({

}) {
  const [content, setContent] = useState('');

  useEffect(() => {
    console.warn('markdownPath', markdownPath);
    // fetch(markdownPath).then(resp => resp.text()).then(text => {
    //   console.warn(text);
    //   setContent(text);
    //   // this.setState({ terms: text });
    // });
  });

  return (
    <Grid id="Markdown" container>
      <Grid item>

      </Grid>
      <Grid item>
        <ContentMD path={markdownPath} />
      </Grid>
    </Grid>
  );
}