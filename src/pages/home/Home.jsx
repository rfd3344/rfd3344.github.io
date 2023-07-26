import React, { useState, useEffect } from 'react';
import {
  Container,
} from '@mui/material';

import LinksSection from './ui/LinksSection';
import {
  ToolsLinks,
  CloudLinks,
  GithubLinks,
  WebLinks,
  WorkLinks,
  GameLinks,
  OtherLinks,

} from './homeConst';


export default function Home() {
  return (
    <Container >
      <LinksSection title="Tools" linkMap={ToolsLinks} />
      <LinksSection title="Cloud" linkMap={CloudLinks} />
      <LinksSection title="Github" linkMap={GithubLinks} />
      <LinksSection title="Web" linkMap={WebLinks} />
      <LinksSection title="Work" linkMap={WorkLinks} />
      <LinksSection title="Game" linkMap={GameLinks} />
      <LinksSection title="Other" linkMap={OtherLinks} />
    </Container >
  );
}
