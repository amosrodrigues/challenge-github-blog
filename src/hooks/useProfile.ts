import { useContextSelector } from 'use-context-selector'
import { ProfileContext, ProfileContextData } from '../contexts/Profile'

export function useProfile(): ProfileContextData {
  const profile = useContextSelector(ProfileContext, (context) => context)

  return profile
}
