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
  external = false,
  ...rest
}) {
  const nav = useNavigate();

  const handleClick = () => {
    if (external || !_.startsWith(to, '/')) {
      openLink(to);
      return;
    }

    nav(to);
  };


  return (
    <Grid item>
      <Button
        variant="contained"
        onClick={handleClick}
        {...rest}
      >{text}</Button>
    </Grid>
  );
}
