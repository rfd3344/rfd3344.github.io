import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';


import Home from 'src/pages/home/Home';
import Images from 'src/pages/images/Images';
import Test from 'src/pages/test/Test';

export default function Router() {


  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/images" element={<Images />} />
      <Route path="/test" element={<Test />} />


    </Routes>

  );

}