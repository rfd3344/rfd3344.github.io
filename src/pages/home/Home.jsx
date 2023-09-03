import React, { useState, useEffect } from 'react';
import {
  Container,
} from '@mui/material';

import Section from './ui/Section';
import {
  ToolsLinks,
  CloudLinks,
  GithubLinks,
  WebLinks,
  WorkLinks,
  HomeLinks,
  GameLinks,
  OtherLinks,
} from './homeConst';


export default function Home() {
  return (
    <Container >
      <Section title="Tools" linkMap={ToolsLinks} />
      <Section title="Cloud" linkMap={CloudLinks} />
      <Section title="Github" linkMap={GithubLinks} />
      <Section title="Web" linkMap={WebLinks} />
      <Section title="Work" linkMap={WorkLinks} />
      <Section title="Home" linkMap={HomeLinks} />
      <Section title="Game" linkMap={GameLinks} />
      <Section title="Other" linkMap={OtherLinks} />
    </Container >
  );
}
