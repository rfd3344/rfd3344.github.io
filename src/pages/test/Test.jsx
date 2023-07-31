import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Slider,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import {
  getDevInfo
} from 'src/utils/devUtils';


export default function Test() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});


  useEffect(() => {
    // loaded API
    setData({
      test: 'bbbb',
      test2: 'test2',
    });
  }, []);



  const handleClick = () => {

  };


  return (
    <Box>
      <Typography variant='h6'>{getDevInfo()}</Typography>

      <Button
        onClick={handleClick}

      >
        click
      </Button>

      <Button
        onClick={handleClick}

      >
        click
      </Button>

      <Button
        onClick={handleClick}

      >
        click
      </Button>
    </Box>

  );
}