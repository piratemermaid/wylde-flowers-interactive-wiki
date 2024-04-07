import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, theme } from '@chakra-ui/react';

import App from './App.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
