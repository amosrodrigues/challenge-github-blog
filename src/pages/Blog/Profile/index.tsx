import {
  faBuilding,
  faUser,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  ProfileAvatar,
  ProfileBio,
  ProfileContainer,
  ProfileContent,
  ProfileGitHubLink,
  ProfileInfo,
  ProfileInfoItem,
} from './styles'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar src="https://github.com/amosrodrigues.png" alt="" />

      <ProfileContent>
        <ProfileBio>
          <h2>Amós Rodrigues</h2>
          <p>Desenvolvedor de Software Web</p>
        </ProfileBio>

        <ProfileInfo>
          <ProfileInfoItem>
            <FontAwesomeIcon icon={faGithub} fontSize={18} />
            <span>amosrodrigues</span>
          </ProfileInfoItem>

          <ProfileInfoItem>
            <FontAwesomeIcon icon={faBuilding} fontSize={18} />
            <span>Empresa</span>
          </ProfileInfoItem>

          <ProfileInfoItem>
            <FontAwesomeIcon icon={faUser} fontSize={18} />
            <span>31 segguidores</span>
          </ProfileInfoItem>
        </ProfileInfo>

        <ProfileGitHubLink>
          <a
            href="https://github.com/amosrodrigues"
            target="_blank"
            rel="noreferrer"
          >
            <span>github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
          </a>
        </ProfileGitHubLink>
      </ProfileContent>
    </ProfileContainer>
  )
}
