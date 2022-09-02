import { Profile } from './Profile'
import {
  BlogContainer,
  PostCard,
  PostCardDescription,
  PostCardHeader,
  PostInfo,
  PostListContainer,
  SearchFormContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { usePost } from '../../hooks/usePost'

import { formatDistanceToNowStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Blog() {
  const { register, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { posts } = usePost()

  const query = watch('query')

  console.log(posts)

  return (
    <BlogContainer>
      <Profile />

      <PostInfo>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </PostInfo>

      <SearchFormContainer>
        <input
          type="text"
          placeholder="Buscar conteúdos"
          {...register('query')}
        />
      </SearchFormContainer>

      <PostListContainer>
        {posts.map((post) => {
          return (
            <PostCard
              as={Link}
              key={post.number}
              to={`/post/${post.number}`}
              title={post.title}
            >
              <PostCardHeader>
                <strong>{post.title}</strong>
                <span>
                  {formatDistanceToNowStrict(new Date(post.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </PostCardHeader>

              <PostCardDescription>{post.body}</PostCardDescription>
            </PostCard>
          )
        })}
      </PostListContainer>
    </BlogContainer>
  )
}
