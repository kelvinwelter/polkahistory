import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import English from '../locales/en.json';
import theme from '../styles/theme';

const localLanguage = navigator.language;
const applicationLanguage = English;

export default function TestWrapper(props) {
  return (
    <BrowserRouter>
      <IntlProvider locale={localLanguage} messages={applicationLanguage}>
        <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
      </IntlProvider>
    </BrowserRouter>
  );
}
