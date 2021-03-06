import { useEffect, useState } from 'react'
import { FaPlay, FaTimes, FaCheckCircle } from 'react-icons/fa'
import { useChallenges } from '../hooks/useChallenges'

// CSS //
import styles from '../styles/components/Countdown.module.scss'
import { playNotification } from '../utils/playNotification'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
    const { startNewChallenge, activeChallenge, level, hasActiveChallange } = useChallenges()

    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.1 * 60)
    }

    useEffect(() => {
        resetCountdown()
    }, [activeChallenge])

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (isActive && time === 0) {
            if (time === 0) {
                playNotification()
            }
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>

                <span>:</span>

                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {
                (hasActiveChallange) ? (
                    <button
                        type='button'
                        disabled
                        className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`}>
                        Ciclo encerrado !
                        <FaCheckCircle />
                    </button>
                ) : (
                    <>
                        {
                            isActive ? (
                                <button
                                    type='button'
                                    className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`}
                                    onClick={resetCountdown}>
                                    Abandonar ciclo
                                    <FaTimes />

                                </button>
                            ) : (
                                <button
                                    type='button'
                                    className={styles.startCountdownButton}
                                    onClick={startCountdown}>
                                    Inicial um ciclo
                                    <FaPlay />
                                </button>)
                        }
                    </>
                )
            }
        </div>
    )
}