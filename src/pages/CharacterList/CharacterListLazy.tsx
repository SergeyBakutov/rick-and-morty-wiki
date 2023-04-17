import { lazy } from 'react'

export const CharacterListLazy = lazy(() =>
  import('./СharacterList').then((module) => ({
    default: module.CharacterList,
  }))
)
