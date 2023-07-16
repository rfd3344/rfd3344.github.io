import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PagePath } from 'src/constants/routerConst';

import Home from 'src/pages/home/Home';
import GithubRepo from 'src/pages/githubRepo/GithubRepo';
import Webpage from 'src/pages/webpage/Webpage';

import Test from 'src/pages/test/Test';

export default function Router() {
  return (
    <Routes>
      <Route path={PagePath.home} element={<Home />} />
      <Route path={PagePath.repo} element={<GithubRepo />} />
      <Route path={PagePath.webpage} element={<Webpage />} />

      <Route path={PagePath.test} element={<Test />} />

      <Route path="*" element={<Test />} />
    </Routes>
  );
}