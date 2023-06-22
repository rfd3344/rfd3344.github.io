import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './core/App';

import { addDevFunctions } from './utils/devUtils';
addDevFunctions();


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
