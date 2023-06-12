import React, { useState } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/system';
import {
  AppBar as AppBarMui,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Grid,
  MenuItem,
  Avatar,
  Box,
  Link,
} from '@mui/material';

import SourceIcon from '@mui/icons-material/Source';
import CalculateIcon from '@mui/icons-material/Calculate';

import { openBlankLink } from 'src/utils/browserUtils';


export default function AppBar({
  height = 90,
}) {

  const handleAvatar = () => {
    openBlankLink('https://github.com/rfd3344w/rfd3344w.github.io');
  };

  return (
    <AppBarMui position="static">
      <Container disableGutters>
        <Toolbar>
          <Grid container flexGrow={1} >
            <LinkIcon
              link="/calculator.html"
              children={<CalculateIcon />}
            />


          </Grid>


          <IconButton
            color="inherit"
            onClick={() => openBlankLink('https://github.com/rfd3344/staticJH')}
          >
            <Avatar alt="" src="/fish1.png" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBarMui >
  );
}

const LinkIcon = ({ link, ...props }) => <IconButton
  color="inherit"
  mr={1}
  onClick={() => openBlankLink(link)}
  sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }}
  {...props}
/>;;;