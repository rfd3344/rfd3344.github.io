import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Button,
  Link as LinkMui,
} from '@mui/material';

import { PagePath } from 'src/constants/routerConst';
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


  return (
    <Grid item>
      <Button
        variant="contained"
        startIcon={getStartIcon()}
        component={linkType === LinkTypes.singlePage ? Link : LinkMui}
        to={to}
        href={to}
        target={linkType === LinkTypes.external ? '_blank' : '_self'}
        color={linkType === LinkTypes.external ? 'primary' : 'secondary'}
        {...rest}
      >{text}</Button>
    </Grid>
  );
}
