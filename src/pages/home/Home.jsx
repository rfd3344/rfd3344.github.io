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


      <Button
        variant="contained"
        onClick={() => openBlankLink('')}
      >
        test
      </Button>

      <LinkButton
        link="/calculator.html"
        text="calculator"
      />
      <LinkButton
        link="https://github.com/rfd3344/staticJH"
        text="staticJH"
      />
      <LinkButton
        link="/colorTable.html"
        text="ColorTable"
      />


      <Box my={2}>
        <img src="https://github.com/rfd3344/staticJH/blob/master/images/bao/bao3.jpg?raw=true" width="100%" />
      </Box>

    </Container>

  );
}
