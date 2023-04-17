import { lazy } from 'react'

export const CharacterLazy = lazy(() =>
  import('./Character').then((module) => ({ default: module.Character }))
)
