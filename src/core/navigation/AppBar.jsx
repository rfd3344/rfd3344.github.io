import React from 'react';
import _ from 'lodash';
import {
  AppBar as AppBarMui,
  IconButton,
  Toolbar,
  Container,
  Grid,
  Avatar,
} from '@mui/material';

import {
  SourceIcon,
  CalculateIcon,
  ColorIcon,
} from 'src/core/Icons';

import { openBlankLink } from 'src/utils/browserUtils';
import { LinkButton } from 'src/common/dataDisplay';

export default function AppBar({
  height = 90,
}) {


  return (
    <AppBarMui position="static">
      <Container disableGutters>
        <Toolbar>
          <Grid container flexGrow={1} >
            <LinkButton
              link="/calculator.html"
              children={<CalculateIcon />}
            />
            <LinkButton
              link="https://github.com/rfd3344/staticJH"
              children={<SourceIcon />}
            />
            <LinkButton
              link="/colorTable.html"
              children={<ColorIcon />}
            />


          </Grid>


          <IconButton
            color="inherit"
            onClick={() => openBlankLink('https://github.com/rfd3344/rfd3344.github.io')}
          >
            <Avatar alt="" src="/fish1.png" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBarMui >
  );
}

// const LinkIcon = ({ link, ...props }) => <IconButton
//   color="inherit"
//   mr={1}
//   onClick={() => openBlankLink(link)}
//   sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }}
//   {...props}
// />;