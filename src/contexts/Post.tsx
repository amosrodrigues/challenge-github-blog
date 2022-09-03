import axios, { AxiosError } from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

export type Post = {
  body: string
  created_at: string
  number: number
  title: string
}

interface Posts {
  items: Post[]
  total_count: number
}

export type PostContextData = {
  posts: Posts
  request: { error: string; isLoading: boolean }
  fetchPostGitHub: (search: string) => Promise<void>
}

interface PostProviderProps {
  children: ReactNode
}
export const PostContext = createContext({} as PostContextData)

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Posts>({} as Posts)
  const [request, setRequest] = useState({ error: '', isLoading: false })

  async function fetchPostGitHub(search?: string) {
    try {
      setRequest((state) => ({ ...state, isLoading: true }))
      const queryString = encodeURIComponent(search ?? '')
      const response = await api.get<Posts>('search/issues', {
        params: {
          q: `repo:amosrodrigues/challenge-github-blog is:issue ${queryString} `,
        },
      })

      if (response.data) {
        setPosts(response.data)
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
  }

  useEffect(() => {
    fetchPostGitHub()
  }, [])

  return (
    <PostContext.Provider value={{ posts, request, fetchPostGitHub }}>
      {children}
    </PostContext.Provider>
  )
}
