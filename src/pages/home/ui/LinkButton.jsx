import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

import { openLink } from 'src/utils/browserUtils';

export default function LinkButton({
  to = '',
  text = '',
  // external = false,
  icon = null,
  ...rest
}) {
  const nav = useNavigate();

  const handleClick = () => {
    if (_.endsWith(to, '.html')) {
      openLink(to);
    } else if (_.startsWith(to, '/')) {
      nav(to);
    } else {
      openLink(to, true);
    }

  };


  return (
    <Grid item>
      <Button
        variant="contained"
        onClick={handleClick}
        startIcon={icon}
        {...rest}
      >{text}</Button>
    </Grid>
  );
}
