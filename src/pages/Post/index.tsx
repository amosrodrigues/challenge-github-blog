import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios, { AxiosError } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import { Loader } from '../../components/Loader'
import { api } from '../../services/api'
import { dateFormatter } from '../../utils/formatter'

import {
  DescriptionMarkdown,
  NavLink,
  PostContainer,
  PostHeader,
  PostInfo,
  PostInfoItem,
  PostNav,
} from './styles'

interface PostData {
  body: string
  created_at: string
  number: number
  title: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}

export function Post() {
  const [postInfo, setPostInfo] = useState<PostData>({} as PostData)
  const [request, setRequest] = useState({ error: '', isLoading: false })

  const { issueNumber } = useParams()

  const fetchPostGitHub = useCallback(async () => {
    try {
      setRequest((state) => ({ ...state, isLoading: true }))
      const url = `repos/amosrodrigues/challenge-github-blog/issues/${issueNumber}`
      const response = await api.get<PostData>(url)

      if (response.data) {
        setPostInfo(response.data)
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
  }, [issueNumber])

  useEffect(() => {
    fetchPostGitHub()
  }, [fetchPostGitHub])

  if (request.isLoading && !!postInfo.title) {
    return (
      <PostContainer>
        <Loader />
      </PostContainer>
    )
  }

  return (
    <PostContainer>
      <PostHeader>
        <PostNav>
          <NavLink as={Link} to="/" title="Voltar para o Blog">
            <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
            <span>VOLTAR</span>
          </NavLink>

          <NavLink href={postInfo.html_url} target="_blank" rel="noreferrer">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
          </NavLink>
        </PostNav>

        <PostInfo>
          <h2>{postInfo.title}</h2>

          <div>
            <PostInfoItem>
              <FontAwesomeIcon icon={faGithub} fontSize={18} />
              <span>{postInfo.user.login}</span>
            </PostInfoItem>

            <PostInfoItem>
              <FontAwesomeIcon icon={faCalendarDay} fontSize={18} />
              <span>{dateFormatter(postInfo.created_at)}</span>
            </PostInfoItem>

            <PostInfoItem>
              <FontAwesomeIcon icon={faComment} fontSize={18} />
              <span>{postInfo.comments} comentários</span>
            </PostInfoItem>
          </div>
        </PostInfo>
      </PostHeader>

      <DescriptionMarkdown>
        {/* <ReactMarkdown>{postInfo.body}</ReactMarkdown> */}
      </DescriptionMarkdown>
    </PostContainer>
  )
}
