import { Profile } from './Profile'
import {
  BlogContainer,
  PostInfo,
  PostListContainer,
  SearchFormContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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

      <PostListContainer></PostListContainer>
    </BlogContainer>
  )
}
