import { useChallenges } from '../hooks/useChallenges'

// CSS //
import styles from '../styles/components/CompletedChallenges.module.scss'

export function CompletedChallenges() {

    const { challengesCompleted } = useChallenges()
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}