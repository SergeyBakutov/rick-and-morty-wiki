import { lazy } from 'react'

export const LocationLazy = lazy(() =>
  import('./Location').then((module) => ({ default: module.Location }))
)
