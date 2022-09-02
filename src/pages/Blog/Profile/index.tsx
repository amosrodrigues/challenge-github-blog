import {
  faBuilding,
  faUser,
  faArrowUpRightFromSquare,
  faLocationDot,
  faCloudDownload,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  ErrorContainer,
  ProfileAvatar,
  ProfileBio,
  ProfileContainer,
  ProfileContent,
  ProfileGitHubLink,
  ProfileInfo,
  ProfileInfoItem,
} from './styles'
import { memo, useEffect, useState } from 'react'
import { api } from '../../../services/api'
import axios, { AxiosError } from 'axios'
import { Loader } from '../../../components/Loader'

interface ProfileGitHub {
  name: string
  login: string
  avatar_url: string
  html_url: string
  followers: number
  company: string
  bio: string
  location: string
}

function ProfileBase() {
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

  if (request.isLoading) {
    return (
      <ProfileContainer>
        <Loader />
      </ProfileContainer>
    )
  }

  return (
    <ProfileContainer>
      {profile.name ? (
        <>
          <ProfileAvatar src={profile.avatar_url} alt={profile.name} />

          <ProfileContent>
            <ProfileBio>
              <h2>{profile.name}</h2>
              <p>{profile.bio}</p>
            </ProfileBio>

            <ProfileInfo>
              <ProfileInfoItem>
                <FontAwesomeIcon icon={faGithub} fontSize={18} />
                <span>{profile.login}</span>
              </ProfileInfoItem>

              <ProfileInfoItem>
                {profile.company ? (
                  <>
                    <FontAwesomeIcon icon={faBuilding} fontSize={18} />
                    <span>{profile.company}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faLocationDot} fontSize={18} />
                    <span>{profile.location}</span>
                  </>
                )}
              </ProfileInfoItem>

              <ProfileInfoItem>
                <FontAwesomeIcon icon={faUser} fontSize={18} />
                <span>{profile.followers} segguidores</span>
              </ProfileInfoItem>
            </ProfileInfo>

            <ProfileGitHubLink
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <span>github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
            </ProfileGitHubLink>
          </ProfileContent>
        </>
      ) : (
        <ErrorContainer>
          <FontAwesomeIcon icon={faCloudDownload} fontSize={48} />
          <p>{request.error}</p>
        </ErrorContainer>
      )}
    </ProfileContainer>
  )
}

export const Profile = memo(ProfileBase)
