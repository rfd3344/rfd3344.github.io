import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';


import Home from 'src/pages/home/Home';
import StaticRepo from 'src/pages/staticRepo/StaticRepo';
import Test from 'src/pages/test/Test';

export default function Router() {


  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/images/*" element={<StaticRepo />} />
      <Route path="/test" element={<Test />} />

      <Route path="*" element={<Test />} />


    </Routes>

  );

}