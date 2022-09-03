import { useCallback, useEffect } from 'react'
import { Profile } from './Profile'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { usePost } from '../../hooks/usePost'

import { Loader } from '../../components/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'
import { dateFormatter } from '../../utils/formatter'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import {
  BlogContainer,
  PostCard,
  PostCardDescription,
  PostCardHeader,
  PostCardNotFound,
  PostInfo,
  PostListContainer,
  SearchFormContainer,
} from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Blog() {
  const { register, watch, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { posts, request, fetchPostGitHub } = usePost()

  const query = watch('query')

  const getPost: SubmitHandler<SearchFormInputs> = async (
    data: SearchFormInputs,
    event,
  ) => {
    event?.preventDefault()
    await fetchPostGitHub(data.query)
  }

  return (
    <BlogContainer onSubmit={handleSubmit(getPost)}>
      <Profile />

      <PostInfo>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </PostInfo>

      <SearchFormContainer>
        <input
          type="text"
          placeholder="Buscar conteúdos (enter)"
          {...register('query')}
        />
      </SearchFormContainer>

      <PostListContainer>
        {request.isLoading ? (
          <PostCardNotFound>
            <Loader />
          </PostCardNotFound>
        ) : posts.length > 0 ? (
          posts?.map((post) => {
            return (
              <PostCard
                as={Link}
                key={post.number}
                to={`/post/${post.number}`}
                title={post.title}
              >
                <PostCardHeader>
                  <strong>{post.title}</strong>
                  <span>{dateFormatter(post.created_at)}</span>
                </PostCardHeader>

                <PostCardDescription>{post.body}</PostCardDescription>
              </PostCard>
            )
          })
        ) : (
          <PostCardNotFound>
            <FontAwesomeIcon icon={faMagnifyingGlassChart} fontSize={48} />
            <p>Ops! Post não localizado...</p>
          </PostCardNotFound>
        )}
      </PostListContainer>
    </BlogContainer>
  )
}
