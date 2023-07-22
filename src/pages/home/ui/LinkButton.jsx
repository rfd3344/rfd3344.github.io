import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

import { PagePath } from 'src/constants/routerConst';
import { openLink } from 'src/utils/browserUtils';
import {
  LinkIcon,
  CalculateIcon,
  ColorIcon,
  GitHubIcon,
  NoteIcon,
  DriveIcon,
  ImageFolderIcon,
} from 'src/core/Icons';

import ImgIcon from './ImgIcon';

const LinkTypes = {
  'html': 'html',
  'singlePage': 'singlePage',
  'external': 'external',
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

  const startIcon = (() => {
    if (_.includes(to, 'google.com')) return <DriveIcon />;
    if (_.includes(to, 'skype.com')) return <ImgIcon src="./icons/skype.svg" />;
    if (_.includes(to, 'github.com')) return <GitHubIcon />;
    if (_.includes(to, 'rfd3344w.github.io')) return <ImgIcon src="./icons/storybook.png" />;
    if (linkType === 'external') return <LinkIcon />;
    if (to === PagePath.calculator) return <CalculateIcon />;
    if (to === PagePath.colorTable) return <ColorIcon />;
    if (to === PagePath.repo) return <ImageFolderIcon />;
    return null;
  })();


  const handleClick = () => {
    if (linkType === LinkTypes.html) openLink(to);
    else if (linkType === LinkTypes.singlePage) nav(to);
    else openLink(to, true);
  };


  return (
    <Grid item>
      <Button
        color={linkType === LinkTypes.singlePage ? 'secondary' : 'primary'}
        variant="contained"
        onClick={handleClick}
        startIcon={startIcon}
        {...rest}
      >{text}</Button>
    </Grid>
  );
}
