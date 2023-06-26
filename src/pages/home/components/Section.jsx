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

export default function Section({
  title = '',

  children,
  ...rest
}) {



  return (
    <Box {...rest} mt={2}>
      <Typography variant="h5"> {title} </Typography>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Box>
  );
}
