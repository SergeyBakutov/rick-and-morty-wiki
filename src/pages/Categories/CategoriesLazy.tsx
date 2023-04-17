import { lazy } from 'react'

export const CategoriesLazy = lazy(() =>
  import('./Categories').then((module) => ({ default: module.Categories }))
)
