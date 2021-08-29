import { FormEvent, FormEventHandler, useState } from 'react'
import { useContext, useEffect } from 'react'
import Image from 'next/image'

import { useChallenges } from '../hooks/useChallenges' // Hook //
import styles from '../styles/components/LevelUpModal.module.scss' // CSS - module.css //

export function LevelUpModal() {
    const { level } = useChallenges()

    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false)

    useEffect(() => {
        setIsModalOpen(true)
    }, [level])

    function closeModal() {
        setIsModalOpen(false)
    }

    return (
        <>
            {
                isModalOpen ? (
                    <main className={styles.modalOverlay}>
                        <div className={styles.modalContainer}>
                            <section className={styles.levelUp}>
                                <h1>{level}</h1>
                            </section>

                            <h2>Parabéns</h2>
                            <span>Você alcançou um novo level</span>

                            <button className={styles.twitterButton}>
                                <span>Compartilhar no Twitter</span>
                                <Image src='/icons/twitter.svg' width={24} height={24} alt='Twitter' />
                            </button>

                            <button className={styles.closeButton} onClick={closeModal}>
                                <Image src='/icons/close.svg' width={20} height={20} alt='Fechar' />
                            </button>
                        </div>
                    </main>
                ) : (
                    null
                )
            }
        </>
    )
}