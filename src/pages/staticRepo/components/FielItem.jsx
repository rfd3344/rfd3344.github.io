import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Paper
} from '@mui/material';

import {
  DescriptionIcon,
} from 'src/core/Icons';
import {
  getResource,
} from 'src/api/gitStatic';
import {
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

    getResource(url).then(resp => {
      console.warn(resp);
      setBlobData(resp.content);
    });

  }, [filename]);

  const handleClick = () => {

  };
  console.warn(blobData)
  return (
    <Box onClick={handleClick} textAlign="center">
      {isImage &&
        <img
          src={blobToImage(blobData)}
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
