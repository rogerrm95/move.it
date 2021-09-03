import styles from './../../styles/pages/LandingPage.module.scss'

export default function LandingPage() {
    return (
        <main className={styles.container}>
            <section className={styles.description}>
                <img src="./logo-full.svg" alt="Logo" />

                <h1>
                    O lugar ideal para você, exercitar seu corpo enquanto trabalha.
                </h1>

                <p>
                    Venha participar de nosso jogo. Basta clicar no botão abaixo para conhecer nossa plataforma.
                </p>
            </section>

            <img src="./assets/hero-image.svg" alt="Pessoas Exercitando" />
        </main>
    )
}