// NEXT //
import Head from 'next/head'

// Componentes //
import { CompletedChallenges } from '../../components/CompletedChallenges';
import { Countdown } from '../../components/Countdown';
import { ChallengeBox } from '../../components/ChallengeBox';
import { ExperienceBar } from "../../components/ExperienceBar";
import { LevelUpModal } from '../../components/LevelUpModal';
import { Perfil } from '../../components/Perfil';

// CSS //
import styles from './../../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Move.It</title>
      </Head>

      <LevelUpModal/>

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