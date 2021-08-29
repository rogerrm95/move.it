import { useChallenges } from '../hooks/useChallenges'

// CSS - module.css //
import styles from '../styles/components/ExperienceBar.module.scss'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useChallenges()

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>
                0 XP
            </span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} className={styles.progressBar}/>

                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} XP
                </span>
            </div>

            <span>
                {experienceToNextLevel} XP
            </span>

        </header>
    )
}