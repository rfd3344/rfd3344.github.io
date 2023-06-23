import React, { useState } from 'react';
import {
  Box,
} from '@mui/material';


import {
  IconButton,
} from '@mui/material';

import { openBlankLink } from 'src/utils/browserUtils';

export default function LinkButton({
  link,
  text = '',
  children,
  ...props
}) {

  return null;
  // return (
  //   <IconButton
  //     color="inherit"
  //     mr={1}
  //     onClick={() => openBlankLink(link)}
  //     sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }}
  //     {...props}
  //   >
  //     {text && <Box> {text}</Box>}
  //     {children}
  //   </IconButton>
  // );
};