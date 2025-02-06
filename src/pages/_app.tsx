import {GlobalStyle} from '@/GlobalStyle';
import theme from '@/theme';
import {Global, ThemeProvider} from '@emotion/react';
import type {AppProps} from 'next/app';

export default function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
