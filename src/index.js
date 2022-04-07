import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import App from './App';
import theme from './styles/theme';
import './styles/global.css';
import English from './locales/en.json';
import Portuguese from './locales/pt.json';

const localLanguage = navigator.language;
let applicationLanguage;
if (localLanguage.startsWith('en')) {
  applicationLanguage = English;
} else if (localLanguage.startsWith('pt')) {
  applicationLanguage = Portuguese;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider locale={localLanguage} messages={applicationLanguage}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
