import { lazy } from 'react'

export const HomeLazy = lazy(() =>
  import('./Home').then((module) => ({ default: module.Home }))
)
