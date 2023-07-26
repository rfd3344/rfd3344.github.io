import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Grid,
  Typography,
  Slider,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

import { updateWebpage } from 'src/pages/webpage/webpageSlice';


export default function TitleWebpage() {
  const dispatch = useDispatch();
  const {
    size = 30,
    alignment = 'center',
  } = useSelector(state => state.webpage);

  const handleChange = (name, value) => {
    if (!value) return;
    dispatch(updateWebpage({
      [name]: value
    }));
  };

  return (
    <Grid container justifyContent="space-around" columnSpacing={2}>
      <Grid item display="flex">

        <Box width={300} maxWidth="50vw">
          <Slider
            value={size}
            step={10}
            min={10}
            max={100}
            color="secondary"
            onChange={(e, value) => handleChange('size', value)}
          />
        </Box>
        <Typography variant='h6' ml={2}>
          {size / 10 - 1}
        </Typography>
      </Grid>
      <Grid item display="flex">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          size="small"
          color="secondary"
          onChange={(e, value) => handleChange('alignment', value)}
        >
          <ToggleButton value="left" >
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRightIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};