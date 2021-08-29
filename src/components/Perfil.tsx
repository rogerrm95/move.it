import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

// CSS - module.css //
import styles from '../styles/components/Perfil.module.scss'

export function Perfil() {

    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.perfilContainer}>
            <img
                src='https://avatars.githubusercontent.com/u/56278484?s=460&u=b3f5860f8bf67c25da19ef37b7c6fb0f6f4b7815&v=4'
                alt="Foto de Perfil" />
            <div>
                <strong>
                    Rogério Marques Fernandes
                </strong>

                <p>
                    <img src='/icons/level.svg' alt='Level'/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}