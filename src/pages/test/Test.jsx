import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Slider,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';


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

    // dispatch(openSnackBar({ error: false }));
    dispatch(openSnackBar('test 1111'));
  };


  return (
    <Box>
      <Button
        onClick={handleClick}
      >
        click
      </Button>
    </Box>

  );
}