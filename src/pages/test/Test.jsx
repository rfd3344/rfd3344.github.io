import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';

import markdownPath from './test.md';

const input = `<div class="note">

Some *emphasis* and <strong>strong</strong>!

</div>`;



export default function Test() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(markdownPath).then(resp => resp.text()).then(text => {
      console.warn(text);
      setContent(text);
      // this.setState({ terms: text });
    });
  });

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>

    </div >

  );
}