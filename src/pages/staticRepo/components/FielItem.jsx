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

import { env } from 'src/core/envManager';
import {
  // openFile,
  isImageFile,
  // blobToImage,
} from 'src/utils/fileUtils';


export default function FielItem({
  filePath = "",
  // url = '',
}) {


  // const [blobData, setBlobData] = useState('');
  const isImage = isImageFile(filePath);
  const fileRaw = `${env().REACT_APP_STATICJH}/${filePath}`;
  useEffect(() => {
    // if (!isImage(filename)) return;

    // getResource(url).then(resp => {
    //   console.warn('resp', resp);
    //   setBlobData(resp.content);
    // });

  }, [filePath]);

  const handleClick = () => {
    // window.open("data:application/pdf," + encodeURI(blobData));

    window.open(fileRaw)

    // openFile(blobData);
  };
  // console.warn('filepath', filePath);

  return (
    <Box
      textAlign="center"
      sx={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      {isImage &&
        <img
          src={fileRaw}
          width="100%"
        />
      }
      {!isImage &&
        <DescriptionIcon
          fontSize='large'
        />
      }

      <Typography variant="body1">
        {filePath}
      </Typography>
    </Box>



  );
}
