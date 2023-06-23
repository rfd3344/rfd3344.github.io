import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

import { env } from 'src/core/envManager';

export default function Home() {
  const nav = useNavigate();


  return (
    <Container>
      <Typography variant="h5"> home page </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => nav('/test')}
          >
            test
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            onClick={() => nav('/calculator.html')}
          >
            Calculator
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            onClick={() => window.location.replace('https://github.com/rfd3344/staticJH')}
          >staticJH</Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            onClick={() => nav('/calculator.html')}
          >Calculator</Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            onClick={() => nav('/colorTable.html')}
          >ColorTable</Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            onClick={() => nav('/images')}
          >Images</Button>
        </Grid>
      </Grid>




    </Container>

  );
}