import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { IntlProvider } from 'react-intl';

import App from './App';
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
    <IntlProvider locale={localLanguage} messages={applicationLanguage} >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
