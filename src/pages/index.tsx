// NEXT //
import Head from 'next/head'

// CSS //
import styles from '../styles/pages/Home.module.css'

// Componentes //
import { ExperienceBar } from "../components/ExperienceBar";
import { Perfil } from '../components/Perfil';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Início | Move.It</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Perfil />

          <CompletedChallenges />

          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
