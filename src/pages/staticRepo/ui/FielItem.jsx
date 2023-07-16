import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import { getFileTyle } from 'src/utils/fileUtils';
import { FileTypeEnum } from 'src/constants/fileConst';

import {
  omitRoot,
  getFileRawUrl,
} from '../staticRepoUtils';

export default function FielItem({
  file = {},
}) {


  const {
    repoPath = '',
  } = useSelector(state => state.staticRepo);

  const fileRawUrl = getFileRawUrl(repoPath, file.path);
  const fileType = getFileTyle(file.path);


  return (
    <Grid container textAlign="center" flexDirection="column" height="100%" >
      <Grid item width="100%">
        <Link
          target="_blank"
          href={fileRawUrl}
        >

          {fileType === FileTypeEnum.image &&
            <img
              src={fileRawUrl}
              width="100%"
            />
          }
          {fileType === FileTypeEnum.pdf &&
            <img src="./fileType/pdfIcon.png" height="50" />
          }
          {fileType === FileTypeEnum.md &&
            <img src="./fileType/markdownIcon.jpg" height="50" />
          }
          {fileType === FileTypeEnum.others &&
            <DescriptionIcon sx={{ fontSize: 50 }} />
          }
        </Link>
      </Grid>

      <Grid item width="100%">
        <Typography variant="body1" sx={{ wordWrap: 'break-word' }} >
          {omitRoot(file.path)}
        </Typography>
      </Grid>

    </Grid>



  );
}
