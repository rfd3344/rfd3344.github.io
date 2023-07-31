import React from 'react';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
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

import { PagePath } from 'src/constants/routerConst';
import { openLink } from 'src/utils/browserUtils';
// import { LinkButton } from 'src/common/dataDisplay';

export default function Footer() {

  const { pathname } = useLocation();


  if (pathname === PagePath.test) return '';

  return (
    <Box py={1} bgcolor='primary.main'>

    </Box>
  );
}
