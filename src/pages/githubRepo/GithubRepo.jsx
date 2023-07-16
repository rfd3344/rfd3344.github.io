import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';


import GitTree from './ui/GitTree';

export default function GithubRepo() {



  return (
    <Container sx={{ py: 1 }} >
      <GitTree />
    </ Container>

  );
}
