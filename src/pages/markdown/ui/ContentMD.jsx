import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// import markdownPath from './test.md';


export default function ContentMD({
  path = '',
}) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(path).then(resp => resp.text()).then(text => {
      console.warn(text);
      setContent(text);
      // this.setState({ terms: text });
    });
  });

  return (
    <div id="ContentMD">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div >
  );
}