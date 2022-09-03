import axios, { AxiosError } from 'axios'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { createContext } from 'use-context-selector'
import { Profile } from '../pages/Blog/Profile'
import { api } from '../services/api'

export interface ProfileGitHub {
  name: string
  login: string
  avatar_url: string
  html_url: string
  followers: number
  company: string
  bio: string
  location: string
}

export interface ProfileContextData {
  profile: ProfileGitHub
  request: { error: string; isLoading: boolean }
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextData)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<ProfileGitHub>({} as ProfileGitHub)
  const [request, setRequest] = useState({ error: '', isLoading: false })

  useEffect(() => {
    ;(async () => {
      try {
        setRequest((state) => ({ ...state, isLoading: true }))
        const response = await api.get<ProfileGitHub>('users/amosrodrigues')

        if (response.data) {
          setProfile(response.data)
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const { response } = error as AxiosError
          if (response) {
            setRequest((state) => ({
              ...state,
              error: 'Ops! algo errado ao obter os dados do Github.',
            }))
            return
          }
        }
      } finally {
        setRequest((state) => ({ ...state, isLoading: false }))
      }
    })()
  }, [])

  const value = useMemo(() => {
    return {
      request,
      profile,
    }
  }, [profile, request])

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  )
}
