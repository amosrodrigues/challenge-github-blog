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
import { memo } from 'react'
import { Loader } from '../../../components/Loader'
import { useProfile } from '../../../hooks/useProfile'

function ProfileBase() {
  const { profile, request } = useProfile()

  return (
    <ProfileContainer>
      {request.isLoading ? (
        <Loader />
      ) : profile.login ? (
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
