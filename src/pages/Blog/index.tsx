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

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Blog() {
  const {
    register,
    watch,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const query = watch('query')

  console.log(query)

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
        <PostCard as={Link} to="/post" title="Ver detalhes do post">
          <PostCardHeader>
            <strong>JavaScript data types and data structures </strong>
            <span>Há 1 dia</span>
          </PostCardHeader>

          <PostCardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            consequuntur quidem veritatis repellendus pariatur alias incidunt
            unde ea dolore iste sunt a, rem deleniti praesentium, qui
            consequatur. Nobis, magni adipisci?
          </PostCardDescription>
        </PostCard>

        <PostCard>
          <PostCardHeader>
            <strong>JavaScript data types and data structures </strong>
            <span>Há 1 dia</span>
          </PostCardHeader>

          <PostCardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            consequuntur quidem veritatis repellendus pariatur alias incidunt
            unde ea dolore iste sunt a, rem deleniti praesentium, qui
            consequatur. Nobis, magni adipisci?
          </PostCardDescription>
        </PostCard>

        <PostCard>
          <PostCardHeader>
            <strong>JavaScript data types and data structures </strong>
            <span>Há 1 dia</span>
          </PostCardHeader>

          <PostCardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            consequuntur quidem veritatis repellendus pariatur alias incidunt
            unde ea dolore iste sunt a, rem deleniti praesentium, qui
            consequatur. Nobis, magni adipisci?
          </PostCardDescription>
        </PostCard>

        <PostCard>
          <PostCardHeader>
            <strong>JavaScript data types and data structures </strong>
            <span>Há 1 dia</span>
          </PostCardHeader>

          <PostCardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            consequuntur quidem veritatis repellendus pariatur alias incidunt
            unde ea dolore iste sunt a, rem deleniti praesentium, qui
            consequatur. Nobis, magni adipisci?
          </PostCardDescription>
        </PostCard>
      </PostListContainer>
    </BlogContainer>
  )
}
