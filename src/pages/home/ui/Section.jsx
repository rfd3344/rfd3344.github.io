import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

import ButtonLink from './ButtonLink';

export default function LinksSection({
  title = '',
  linkMap = {},
  ...rest
}) {



  return (
    <Box {...rest} mt={2}>
      <Typography variant="h5"> {title} </Typography>
      <Grid container spacing={2}>
        {_.keys(linkMap).map(key => (
          <ButtonLink
            key={key}
            text={key}
            to={linkMap[key]}

          />
        ))}
      </Grid>
    </Box>
  );
}
