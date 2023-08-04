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
} from '../githubRepoUtils';

import {
  getGithubFileUrl,
} from 'src/utils/fileUtils';

export default function FielItem({
  file = {},
}) {

  const {
    repoPath = '',
  } = useSelector(state => state.githubRepo);

  const fileRawUrl = getGithubFileUrl(repoPath, file.path);
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
            <img src="./icons/pdf.png" height="50" />
          }
          {fileType === FileTypeEnum.md &&
            <img src="./icons/markdown.jpg" height="50" />
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
