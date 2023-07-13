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

import { updateNavTitle } from 'src/core/coreSlice';
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

import Section from './ui/Section';
import LinkButton from './ui/LinkButton';
import ImgIcon from './ui/ImgIcon';


export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateNavTitle(''));
  }, []);

  return (
    <Container >
      <Section title="Tools">
        <LinkButton text='Calculator' to={PagePath.calculator} icon={<CalculateIcon />} />
        <LinkButton text='ColorTable' to={PagePath.colorTable} icon={<ColorIcon />} />
        <LinkButton text="Photoshop Online" to='https://photoshop.adobe.com' icon={<LinkIcon />} />

        <LinkButton text='File Convert' to='https://www.online-convert.com' icon={<LinkIcon />} />
      </Section>


      <Section title="Cloud">
        <LinkButton
          text='GoogleKeep'
          to='https://keep.google.com/'
          icon={<NoteIcon />}
        />
        <LinkButton
          text='DriveNotes'
          to='https://drive.google.com/drive/folders/1XA8VemDb4wW-kstLImPOuOEW9Qi6g02J'
          icon={<DriveIcon />}
        />
        <LinkButton text='staticFiles' to={PagePath.repo} icon={<ImageFolderIcon />} />
        <LinkButton text='Skype' to="https://web.skype.com" icon={<ImgIcon src="./icons/skype.svg" />} />
        <LinkButton
          text='GitPage'
          to='https://github.com/rfd3344/rfd3344.github.io'
          icon={<GitHubIcon />}
        />
        <LinkButton
          text='staticJH'
          to='https://github.com/rfd3344/staticJH'
          icon={<GitHubIcon />}
        />

        <LinkButton
          text='Storybook'
          to='https://rfd3344w.github.io'
          icon={<ImgIcon src="./icons/storybook.png" />}
        />
      </Section>


      <Section title="Web">
        <LinkButton text='dbdiagram' to='https://dbdiagram.io/d/5e2790869e76504e0ef083ac' />
        <LinkButton text='toolfk:devTools' to='https://www.toolfk.com' icon={<LinkIcon />} />
        <LinkButton text="算法总结" to='https://github.com/youngyangyang04/leetcode-master/tree/master/problems' />
        <LinkButton to='https://digitalcloud.training/aws-cheat-sheets/' text='aws-cheat-sheets' />

      </Section>


      <Section title="Others">

        <LinkButton to={PagePath.test} text='test' color="secondary" />
        {/* <LinkButton to={PagePath.webpage} text='webpage' color="secondary" /> */}
      </Section>

    </Container >
  );
}
