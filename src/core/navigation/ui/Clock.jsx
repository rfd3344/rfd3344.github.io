import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Chip,
  Avatar,
} from '@mui/material';

import {
  CalendarIcon,
  ClockIcon,
} from 'src/core/Icons';


export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = () => setCurrentTime(new Date());
    setInterval(timer, 1000);
    return clearInterval(timer);
  }, []);

  return (

    <Box textAlign="center">

      <Chip
        color="warning"
        size="small"
        icon={<CalendarIcon />}
        label={currentTime?.toDateString()}
      />

      <Typography variant="h6">
        {currentTime?.toLocaleTimeString()}
      </Typography>


    </Box>

  );
}
