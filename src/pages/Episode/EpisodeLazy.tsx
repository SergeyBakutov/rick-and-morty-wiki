import { lazy } from 'react'

export const EpisodeLazy = lazy(() =>
  import('./Episode').then((module) => ({ default: module.Episode }))
)
