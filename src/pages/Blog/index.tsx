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
import { useDebounce } from '../../hooks/useDebounce'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Blog() {
  const { register, handleSubmit, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { posts, request, fetchPostGitHub } = usePost()

  const search = watch('query')

  const valueSearch = search && search.trim().replace(' ', '-')

  const debouncedSearch = useDebounce(valueSearch, 1000)

  const getPosts = useCallback(async () => {
    if (debouncedSearch && debouncedSearch.length > 0) {
      await fetchPostGitHub(debouncedSearch)
    }
    if (!debouncedSearch.length) {
      await fetchPostGitHub('')
    }
  }, [debouncedSearch, fetchPostGitHub])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <BlogContainer onSubmit={handleSubmit((data, e) => e?.preventDefault())}>
      <Profile />

      <PostInfo>
        <h3>Publicações</h3>
        <span>{posts.total_count} publicações</span>
      </PostInfo>

      <SearchFormContainer>
        <input
          type="text"
          placeholder="Buscar conteúdos"
          {...register('query')}
        />
      </SearchFormContainer>

      <PostListContainer>
        {request.isLoading ? (
          <PostCardNotFound>
            <Loader />
          </PostCardNotFound>
        ) : posts.items && posts.items.length > 0 ? (
          posts.items.map((post) => {
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
