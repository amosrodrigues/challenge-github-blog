import { useContext } from 'react'
import { PostContext, PostContextData } from '../contexts/Post'

export function usePost(): PostContextData {
  const context = useContext(PostContext)

  return context
}
