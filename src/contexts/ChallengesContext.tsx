import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface ChallengeProviderProps {
    children: ReactNode; // Componente React //
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    startNewChallenge: () => void;
    levelUp: () => void;
    resetChallenge: () => void;
}

interface Challenge {
    type: 'body' | 'eye';
    amount: number;
    description: string
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengeProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleteded] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow(((level + 1) * 4), 2)

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                experienceToNextLevel,
                startNewChallenge,
                resetChallenge,
                levelUp
            }}>

            {children}

        </ChallengesContext.Provider>
    )

}

