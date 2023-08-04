import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
} from '@mui/material';
import ReactMarkdown from 'react-markdown';

export default function Markdown() {
  const {
    selectFile = '',
  } = useSelector(state => state.markdown);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!selectFile) return;
    const contentPath = `/markdown/${selectFile}`;
    fetch(contentPath)
      .then(resp => resp.text())
      .then(text => setContent(text));
  }, [selectFile]);

  return (
    <Container id="Markdown">
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  );
}