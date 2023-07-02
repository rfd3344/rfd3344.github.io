import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Link,
  CardMedia
} from '@mui/material';

import {
  DescriptionIcon,
} from 'src/core/Icons';

import { env } from 'src/core/envManager';
import { getFileTyle } from 'src/utils/fileUtils';
import { FileTypeEnum } from 'src/constants/fileConst';

export default function FielItem({
  filePath = "",
  // url = '',
}) {

  const fileRawUrl = `${env().REACT_APP_STATICJH}/${filePath}`;
  const fileType = getFileTyle(filePath);
  const isImage = fileType === FileTypeEnum.image;


  return (
    <Grid container textAlign="center" flexDirection="column" height="100%" >
      <Grid item width="100%">
        <Link
          target="_blank"
          href={fileRawUrl}
        >

          {isImage &&
            <img
              src={fileRawUrl}
              width="100%"
            />
          }
          {!isImage &&
            <DescriptionIcon fontSize="large" />

          }
        </Link>

      </Grid>

      {/* <Grid item flexGrow={1} /> */}

      <Grid item width="100%">
        <Typography variant="body1" sx={{ wordWrap: 'break-word' }} >
          {filePath}
        </Typography>
      </Grid>

    </Grid>



  );
}
