import { useChallenges } from '../hooks/useChallenges';

// CSS //
import styles from '../styles/components/ChallengeBox.module.scss'

export function ChallengeBox() {

    const { activeChallenge, gainExperience, resetChallenge } = useChallenges()

    return (
        <div className={styles.challengeBoxContainer}>

            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Tipo" />
                        <strong>Novo Desafio</strong>
                        <p>
                            {activeChallenge.description}
                        </p>
                    </main>

                    <footer>
                        <button
                            type='button'
                            className={styles.challengeFailedButton}
                            onClick={resetChallenge}>
                            Falhei
                        </button>

                        <button
                            type='button'
                            className={styles.challengeSucceceedButton}
                            onClick={() => gainExperience(activeChallenge.amount)}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>
                        Finalize um ciclo
                        para receber desafios a
                        serem completados!
                    </strong>

                    <p>
                        <img src="icons/level-up.svg" alt="level up" />
                        Complete-os e ganhe experiência para avançar de level.
                    </p>
                </div>
            )
            }

        </div >
    )
}