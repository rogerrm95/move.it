import { AppProps } from 'next/app'
// Contexto //
import { Provider as NextAuthProvider } from 'next-auth/client'
import { ChallengeProvider } from '../contexts/ChallengesContext'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChallengeProvider>
        <Component {...pageProps} />
      </ChallengeProvider>
    </NextAuthProvider>
  )
}

export default MyApp;