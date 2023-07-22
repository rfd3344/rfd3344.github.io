import React, { } from 'react';
import _ from 'lodash';
import {
  Box,
} from '@mui/material';


export default function ImgIcon({
  src = "",
  ...rest
}) {


  return (
    <Box
      component="img"
      src={src}
      height={20}
      {...rest}
    />
  );
}
