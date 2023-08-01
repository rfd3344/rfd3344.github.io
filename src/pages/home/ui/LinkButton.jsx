import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Button,
} from '@mui/material';

import { PagePath } from 'src/constants/routerConst';
import { openLink } from 'src/utils/browserUtils';
import {
  CalculateIcon,
  ColorIcon,
  GitHubIcon,
  NoteIcon,
  DriveIcon,
  ImageFolderIcon,
  OpenInNewIcon,
} from 'src/core/Icons';

import ImgIcon from './ImgIcon';

const LinkTypes = {
  html: 'html',
  singlePage: 'singlePage',
  external: 'external',
};

const getLinkType = (to) => {
  if (_.startsWith(to, '/')) {
    if (_.endsWith(to, '.html')) return LinkTypes.html;
    return LinkTypes.singlePage;
  }
  return LinkTypes.external;
};



export default function LinkButton({
  to = '',
  text = '',
  ...rest
}) {
  const nav = useNavigate();

  const linkType = getLinkType(to);
  const getStartIcon = () => {
    if (_.includes(to, 'keep.google.com')) return <NoteIcon />;
    if (_.includes(to, 'drive.google.com')) return <DriveIcon />;
    if (_.includes(to, 'github.com')) return <GitHubIcon />;
    if (_.includes(to, 'aws')) return <ImgIcon src="./icons/aws.png" />;
    if (_.includes(to, 'skype.com')) return <ImgIcon src="./icons/skype.svg" />;
    if (_.includes(to, 'rfd3344w.github.io')) return <ImgIcon src="./icons/storybook.png" />;
    if (linkType === LinkTypes.external) return <OpenInNewIcon />;
    if (to === PagePath.calculator) return <CalculateIcon />;
    if (to === PagePath.colorTable) return <ColorIcon />;
    if (to === PagePath.repo) return <ImageFolderIcon />;
    return null;
  };


  const handleClick = () => {
    if (linkType === LinkTypes.html) openLink(to);
    else if (linkType === LinkTypes.singlePage) nav(to);
    else openLink(to, true);
  };


  return (
    <Grid item>
      <Button
        color={linkType === LinkTypes.external ? 'primary' : 'secondary'}
        variant="contained"
        onClick={handleClick}
        startIcon={getStartIcon()}
        {...rest}
      >{text}</Button>
    </Grid>
  );
}
