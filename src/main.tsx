import React from 'react';
import ReactDOM from 'react-dom/client';

import * as views from 'views';
import * as contexts from 'contexts';
import * as utils from './utils';

import './i18n/config.ts';
import './index.css';

ReactDOM.createRoot(utils.getRootElement()).render(
  <React.StrictMode>
    <contexts.QueryClientProvider>
      <contexts.ToastContextProvider>
        <contexts.SidebarsContextProvider>
          <contexts.HighlighterContextProvider>
            <views.App />
          </contexts.HighlighterContextProvider>
        </contexts.SidebarsContextProvider>
      </contexts.ToastContextProvider>
    </contexts.QueryClientProvider>
  </React.StrictMode>,
);
