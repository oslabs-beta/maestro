import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom'
import App from './App';

const root = createRoot(document.getElementById('app'))
root.render(
    <App />,
);
