import { useContext } from 'react'
import { PostContext } from '../contexts/Post'

export function usePost() {
  const context = useContext(PostContext)

  return context
}
