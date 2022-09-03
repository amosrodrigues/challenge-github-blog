import { useContextSelector } from 'use-context-selector'
import { PostContext, PostContextData } from '../contexts/Post'

export function usePost(): PostContextData {
  const context = useContextSelector(PostContext, (context) => context)

  return context
}
