import React from 'react';
import _ from 'lodash';
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Container,
  Grid,
  Avatar,
} from '@mui/material';

import {
  SourceIcon,
  CalculateIcon,
  ColorIcon,
} from 'src/core/Icons';

import { openLink } from 'src/utils/browserUtils';
// import { LinkButton } from 'src/common/dataDisplay';

export default function Header({
  height = 90,
}) {


  return (
    <AppBar position="static">
      <Container disableGutters>
        <Toolbar>
          <Box >
            <IconButton
              color="inherit"
              onClick={() => openLink('/')}
            >
              <Avatar alt="" src="/workingDog.jpg" />
            </IconButton>
          </Box>

          <Grid container justifyContent="flex-end">
            <IconButton
              color="inherit"
              onClick={() => openLink('/calculator.html')}
              children={<CalculateIcon />}
            />
            <IconButton
              color="inherit"
              onClick={() => openLink("/colorTable.html")}
              children={<ColorIcon />}
            />

          </Grid>


        </Toolbar>
      </Container>
    </AppBar >
  );
}

// const LinkIcon = ({ link, ...props }) => <IconButton
//   color="inherit"
//   mr={1}
//   onClick={() => openBlankLink(link)}
//   sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }}
//   {...props}
// />;