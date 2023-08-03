import React from 'react';
import _ from 'lodash';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Container,
  Grid,
  Avatar,
  Typography,
} from '@mui/material';

import { PagePath } from 'src/constants/routerConst';

import Clock from './ui/Clock';
import NavTitle from './ui/NavTitle';

export default function Header() {
  const nav = useNavigate();
  const { pathname } = useLocation();


  if (pathname === PagePath.test) return '';

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center" flexWrap="nowrap">
          <Grid item>
            <Clock />
          </Grid>

          <Grid item>
            <NavTitle />

          </Grid>
          <Grid item sx={{ mr: { xs: 0, md: 10 } }}>
            <IconButton
              color="inherit"
              onClick={() => nav('/')}
            >
              <Avatar alt="" src="./image/zhongli3.png" />
              {/* <Avatar alt="" src="https://raw.githubusercontent.com/rfd3344/staticJH/master/starRail/qingque1.jpeg" /> */}

            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar >
  );
}
