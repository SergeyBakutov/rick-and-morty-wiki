import { lazy } from 'react'

export const LocationListLazy = lazy(() =>
  import('./LocationList').then((module) => ({ default: module.LocationList }))
)
