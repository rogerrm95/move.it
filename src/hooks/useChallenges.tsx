import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

export const useChallenges = () => {
    return useContext(ChallengesContext)
}