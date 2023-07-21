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

import Section from './ui/Section';
import LinkButton from './ui/LinkButton';
import ImgIcon from './ui/ImgIcon';


export default function Home() {


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

        <LinkButton text='Skype' to="https://web.skype.com" icon={<ImgIcon src="./icons/skype.svg" />} />

      </Section>

      <Section title="Github">
        <LinkButton text='staticFiles' to={PagePath.repo} icon={<ImageFolderIcon />} />
        <LinkButton
          text='pageCode'
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
        <LinkButton text='chatGPT' to=' https://chat.openai.com' />
        <LinkButton text='dbdiagram' to='https://dbdiagram.io/d/5e2790869e76504e0ef083ac' />
        <LinkButton text='aws-cheat-sheets' to='https://digitalcloud.training/aws-cheat-sheets/' />
        <LinkButton text='toolfk:devTools' to='https://www.toolfk.com' icon={<LinkIcon />} />
        <LinkButton text="算法总结" to='https://github.com/youngyangyang04/leetcode-master/tree/master/problems' />


      </Section>


      <Section title="Others">

        <LinkButton text='Genshin' to='https://wiki.biligame.com/ys' />
        <LinkButton text='StarRail' to='https://wiki.biligame.com/sr' />

      </Section>



      <Section title="Others">

        <LinkButton text='test' to={PagePath.test} color="secondary" />
        {/* <LinkButton to={PagePath.webpage} text='webpage' color="secondary" /> */}
      </Section>

    </Container >
  );
}
