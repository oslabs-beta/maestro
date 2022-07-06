import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './state/store';

const root = createRoot(document.getElementById('app'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


