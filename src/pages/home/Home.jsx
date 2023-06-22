import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

import { LinkButton } from 'src/common/dataDisplay';

import { openBlankLink } from 'src/utils/browserUtils';


export default function Test() {
  const nav = useNavigate();
  // const dispatch = useDispatch();
  // const [data, setData] = useState({});





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
      </Grid>



      <Box my={2} width={200}>
        <img
          src="https://github.com/rfd3344/staticJH/blob/master/images/bao/bao3.jpg?raw=true"
          width="100%"
        />
      </Box>

    </Container>

  );
}
