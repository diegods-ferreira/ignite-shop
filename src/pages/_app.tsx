import { AppProps } from 'next/app';

import { globalStyles } from '../styles/global';

import { Container, Header } from '../styles/pages/app';

import logoImg from '../assets/logo.svg';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="Ignite Shop" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
