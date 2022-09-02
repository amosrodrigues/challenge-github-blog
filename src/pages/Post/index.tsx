import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import {
  BackLink,
  DescriptionMarkdown,
  GitHubLink,
  PostContainer,
  PostHeader,
  PostInfo,
  PostInfoItem,
  PostNav,
} from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <PostNav>
          <BackLink as={Link} to="/" title="Voltar para o Blog">
            <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
            <span>VOLTAR</span>
          </BackLink>

          <GitHubLink
            href="https://github.com/amosrodrigues"
            target="_blank"
            rel="noreferrer"
          >
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
          </GitHubLink>
        </PostNav>

        <PostInfo>
          <h2>JavaScript data types and data structures</h2>

          <div>
            <PostInfoItem>
              <FontAwesomeIcon icon={faGithub} fontSize={18} />
              <span>amosrodrigues</span>
            </PostInfoItem>

            <PostInfoItem>
              <FontAwesomeIcon icon={faCalendarDay} fontSize={18} />
              <span>Empresa</span>
            </PostInfoItem>

            <PostInfoItem>
              <FontAwesomeIcon icon={faComment} fontSize={18} />
              <span>31 segguidores</span>
            </PostInfoItem>
          </div>
        </PostInfo>
      </PostHeader>

      <DescriptionMarkdown>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam
        iure magnam fugit consequuntur ab odio rerum, dolores, delectus quia
        eveniet debitis quas quod corrupti enim amet, obcaecati eos expedita?
      </DescriptionMarkdown>
    </PostContainer>
  )
}
