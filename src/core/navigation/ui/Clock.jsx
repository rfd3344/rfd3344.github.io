import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import {
  Box,
  Typography,
  Chip,
  Menu,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


import {
  CalendarIcon,
} from 'src/core/Icons';


export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


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
        onClick={handleClick}
      />

      <Typography variant="h6">
        {currentTime?.toLocaleTimeString()}
      </Typography>

      <Menu
        id="basic-menu"
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </Menu>

    </Box>

  );
}
