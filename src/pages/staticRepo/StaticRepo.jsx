import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

import { env } from 'src/core/envManager';


import GitTree from './ui/GitTree';

export default function StaticRepo() {



  return (
    <Container>
      <Box my={2} textAlign="center">
        <Typography variant="h6">https://github.com/rfd3344/staticJH</Typography>
      </Box>

      <GitTree />


    </Container>

  );
}
