import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface ChallengeProviderProps {
    children: ReactNode; // Componente React //
}

interface ChallengesContextData {
    hasActiveChallange: boolean;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    gainExperience: (xp: number) => void;
    levelUp: () => void;
    resetChallenge: () => void;
    startNewChallenge: () => void;
}

interface Challenge {
    type: 'body' | 'eye';
    amount: number;
    description: string
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengeProvider({ children }: ChallengeProviderProps) {
    // Experience //
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleteded] = useState(0)

    // Challenges //
    const [activeChallenge, setActiveChallenge] = useState(null)
    const [hasActiveChallange, setHasActiveChallange] = useState(false)
    const experienceToNextLevel = Math.pow(((level + 1) * 4), 2)

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
        setHasActiveChallange(true)
    }

    function resetChallenge(){
        setActiveChallenge(null)
        setHasActiveChallange(false)
    }

    function gainExperience(xp: number){
        const newExperience = currentExperience + xp

        if(newExperience >= experienceToNextLevel) {
            levelUp()
            setCurrentExperience(newExperience - currentExperience)
        } else {
            setCurrentExperience(newExperience)
        }

        setActiveChallenge(null)
        setChallengesCompleteded(challengesCompleted + 1)
        setHasActiveChallange(false)
    }

    return (
        <ChallengesContext.Provider
            value={{
                hasActiveChallange,
                level,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                experienceToNextLevel,
                gainExperience,
                levelUp,
                resetChallenge,
                startNewChallenge
            }}>

            {children}

        </ChallengesContext.Provider>
    )

}

