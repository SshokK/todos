import React from 'react';
import ReactDOM from 'react-dom/client';

import * as views from 'views';
import * as contexts from 'contexts';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <contexts.SidebarsContextProvider>
      <views.App />
    </contexts.SidebarsContextProvider>
  </React.StrictMode>,
);
