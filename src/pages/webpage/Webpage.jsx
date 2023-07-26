import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  TextField,
  Grid
} from '@mui/material';

import { updateWebpage } from 'src/pages/webpage/webpageSlice';


export default function Webpage() {
  const dispatch = useDispatch();
  const {
    size = 30,
    alignment = 'center',
    webUrl = ''
  } = useSelector(state => state.webpage);


  const handleBlur = (e) => {

    dispatch(updateWebpage({
      webUrl: e.target.value,
    }));
  };

  return (
    <Box id="Webpage" overflow="hidden"  >

      <Box textAlign={alignment}>
        <Box
          component="iframe"
          width={`${size}%`}
          sx={{
            aspectRatio: '16/9'
          }}
          border={0}
          allowFullScreen="1"
          // src="https://www.youtube.com/embed/e1nAThlU8yk"
          src={webUrl}
        />
      </Box>


      <Box display="flex" justifyContent={alignment}>
        <Box width={`${size}%`} minWidth={300}>
          <TextField
            size="small"
            fullWidth
            defaultValue={webUrl}
            onBlur={handleBlur}
          />
        </Box>
      </Box>

    </Box>
  );
}
