import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';
import Draggable from "react-draggable";
import { Resizable, ResizableBox } from 'react-resizable';

import './webpage.css';

export default function Webpage() {

  const [size, setSize] = useState({
    width: 200,
    height: 100
  });

  const onResize = (e, { size }) => {
    console.warn('onResize', size);
    setSize({ width: size.width, height: size.height });
  };

  return (
    <Box height="100%" overflow="hidden" >

      <ResizableBox
        height={size.height}
        width={size.width}
        minConstraints={[200, 100]}
        lockAspectRatio
        maxConstraints={[1000, 500]}
        onResize={onResize}
      >
        <Box
          component="iframe"
          width='100%'
          height="100%"
          // width="100vw"
          // height="90vh"
          frameborder="0"
          allowfullscreen="1"
          src="https://www.youtube.com/embed/e1nAThlU8yk"
        />

      </ResizableBox>

    </Box>
  );
}
