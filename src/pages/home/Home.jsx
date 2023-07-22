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

import { PagePath } from 'src/constants/routerConst';
import {
  LinkIcon,
  CalculateIcon,
  ColorIcon,
  GitHubIcon,
  NoteIcon,
  DriveIcon,
  ImageFolderIcon,
} from 'src/core/Icons';

import LinksSection from './ui/LinksSection';

import {
  ToolsLinks,
  CloudLinks,
  GithubLinks,
  WebLinks,
  GameLinks,
  OtherLinks,
} from './HomeConst';


export default function Home() {


  return (
    <Container >
      <LinksSection title="Tools" linkMap={ToolsLinks} />
      <LinksSection title="Cloud" linkMap={CloudLinks} />
      <LinksSection title="Github" linkMap={GithubLinks} />
      <LinksSection title="Web" linkMap={WebLinks} />
      <LinksSection title="Game" linkMap={GameLinks} />
      <LinksSection title="Other" linkMap={OtherLinks} />

    </Container >
  );
}
