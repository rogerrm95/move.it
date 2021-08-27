import '../styles/global.css'

// Contexto //
import { ChallengeProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp;