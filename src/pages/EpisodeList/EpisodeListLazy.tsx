import { lazy } from 'react'

export const EpisodeListLazy = lazy(() =>
  import('./EpisodeList').then((module) => ({ default: module.EpisodeList }))
)
