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

export default function Images() {

  return (
    <Container>

      <Typography variant="h6">/images/bao</Typography>
      <Box my={2} width={100}>
        <img
          src={`${env().REACT_APP_STATICJH}/images/bao/bao3.jpg`}
          width="100%"
        />
      </Box>

    </Container>

  );
}
