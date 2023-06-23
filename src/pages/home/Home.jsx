import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

import { openLink } from 'src/utils/browserUtils';

export default function Home() {
  const nav = useNavigate();


  return (
    <Container>
      <Typography variant="h5"> home page </Typography>
      <Grid container spacing={2}>


        <Grid item>
          <Button
            variant="contained"
            onClick={() => openLink('/calculator.html')}
          >
            Calculator
          </Button>
        </Grid>


        <Grid item>
          <Button
            variant="contained"
            onClick={() => openLink('/colorTable.html')}
          >ColorTable</Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            onClick={() => nav('/images')}
          >Images</Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            onClick={() => openLink('https://github.com/rfd3344/staticJH')}
          > Git: staticJH</Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            onClick={() => openLink('https://github.com/rfd3344/rfd3344.github.io')}
          >Git: rfd3344.github.io</Button>
        </Grid>

        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => nav('/test')}
          >
            test
          </Button>
        </Grid>

      </Grid>



    </Container>

  );
}
