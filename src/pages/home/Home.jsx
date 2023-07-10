import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

import {
  LinkIcon,
  CalculateIcon,
  ColorIcon,
  GitHubIcon,
  NoteIcon,
  DriveIcon,
  ImageFolderIcon,
} from 'src/core/Icons';

import Section from './ui/Section';
import LinkButton from './ui/LinkButton';


export default function Home() {
  return (
    <Container >

      <Section title="Tools">
        <LinkButton icon={<CalculateIcon />} to='/calculator.html' text='Calculator' external />
        <LinkButton icon={<ColorIcon />} to='/colorTable.html' text='ColorTable' external />
        <LinkButton icon={<LinkIcon />} to='https://photoshop.adobe.com' text="Photoshop Online" />

        <LinkButton icon={<LinkIcon />} to='https://www.online-convert.com' text='File Convert' />
      </Section>


      <Section title="Cloud">
        <LinkButton
          icon={<NoteIcon />}
          to='https://keep.google.com/'
          text='GoogleKeep'
        />
        <LinkButton
          icon={<DriveIcon />}
          to='https://drive.google.com/drive/folders/1XA8VemDb4wW-kstLImPOuOEW9Qi6g02J'
          text='DriveNotes'
        />
        <LinkButton
          icon={<GitHubIcon />}
          to='https://github.com/rfd3344/rfd3344.github.io'
          text='GitPage'
        />
        <LinkButton
          icon={<GitHubIcon />}
          to='https://github.com/rfd3344/staticJH'
          text='staticJH'
        />
        <LinkButton icon={<ImageFolderIcon />} to='/images' text='staticFiles' />
        <LinkButton
          icon={<img src="./image/storybook.png" height="20" />}
          to='https://rfd3344w.github.io'
          text='Storybook'
        />
      </Section>


      <Section title="Web">
        <LinkButton icon={<LinkIcon />} to='https://www.toolfk.com' text='toolfk:devTools' />
        <LinkButton
          to='https://github.com/youngyangyang04/leetcode-master/tree/master/problems'
          text="算法总结"
        />
      </Section>


      <Section title="Others">
        <LinkButton to='/test' text='test' color="secondary" />
      </Section>

    </Container >
  );
}
