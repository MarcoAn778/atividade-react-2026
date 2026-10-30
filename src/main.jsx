import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import { ProvedorJogos } from './context/ContextoJogos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProvedorJogos>
      <App />
    </ProvedorJogos>
  </BrowserRouter>,
)
