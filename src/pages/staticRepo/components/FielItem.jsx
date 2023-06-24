import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Paper,
  CardMedia
} from '@mui/material';

import {
  DescriptionIcon,
} from 'src/core/Icons';
import {
  getResource,
} from 'src/api/gitStatic';
import {
  openFile,
  isImageFile,
  blobToImage,
} from 'src/utils/fileUtils';


export default function FielItem({
  filename = "",
  url = '',
}) {


  const [blobData, setBlobData] = useState('');
  const isImage = isImageFile(filename);
  useEffect(() => {
    // if (!isImage(filename)) return;

    // getResource(url).then(resp => {
    //   console.warn('resp', resp);
    //   setBlobData(resp.content);
    // });

  }, [filename]);

  const handleClick = () => {
    // window.open("data:application/pdf," + encodeURI(blobData));



    openFile(blobData);
  };
  console.warn(blobData);

  return (
    <Box
      textAlign="center"
      sx={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      {isImage &&
        <img
          src={blobToImage(blobData)}
          width="100%"
        />
      }
      {!isImage &&
        <DescriptionIcon
          fontSize='large'
        />
      }

      <Typography variant="body1">
        {filename}
      </Typography>
    </Box>



  );
}
