import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';


import Home from 'src/pages/home/Home';
import Test from 'src/pages/test/Test';

export default function Router() {


  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />


    </Routes>

  );

}