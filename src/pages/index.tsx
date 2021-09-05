// NEXT //
import Head from 'next/head'
import { useRouter } from 'next/router'

import { FiLogIn } from 'react-icons/fi'
import styles from './../styles/pages/LandingPage.module.scss'

export default function LandingPage() {
  const { push } = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.It</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.description}>
          <img src="./logo-full.svg" alt="Logo" />

          <h1>
            O lugar ideal para você, <br />
            exercitar seu corpo enquanto trabalha.
          </h1>

          <p>
            Venha participar de nosso jogo.<br />
            Basta clicar no botão abaixo para conhecer nossa plataforma.
          </p>

          <button className={styles.beginButton} onClick={() => push('/login')}>
            Entrar
            <FiLogIn size={24} color='#FFF' />
          </button>
        </section>

        <img src="./assets/hero-image.svg" alt="Pessoas Exercitando" />
      </main>
    </div>
  )
}