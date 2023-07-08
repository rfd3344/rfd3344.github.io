import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@mui/material';

import Section from './ui/Section';
import LinkButton from './ui/LinkButton';


export default function Home() {



  return (
    <Container>
      <Section title="Tools">
        <LinkButton to='/calculator.html' text='Calculator' external />
        <LinkButton to='/colorTable.html' text='ColorTable' external />
        <LinkButton to='/images' text='Images' />
        <LinkButton to='https://rfd3344w.github.io' text='Storybook' />

      </Section>

      <Section title="Exterior Tools">
        <LinkButton to='https://photoshop.adobe.com' text="Photoshop Online" />

        <LinkButton to='https://www.toolfk.com' text='toolfk:devTools' />
        <LinkButton to='https://www.online-convert.com' text='File Convert' />

      </Section>


      <Section title="Others">
        <LinkButton to='https://keep.google.com/' text='GoogleKeep' />
        <LinkButton
          to='https://drive.google.com/drive/folders/1XA8VemDb4wW-kstLImPOuOEW9Qi6g02J'
          text='DriveNotes'
        />
        <LinkButton
          to='https://github.com/rfd3344/staticJH'
          text='staticJHGit'
        />
        <LinkButton
          to='https://github.com/rfd3344/rfd3344.github.io'
          text='GitPage'
        />
        <LinkButton to='/test' text='test' color="secondary" />

      </Section>


    </Container >

  );
}
