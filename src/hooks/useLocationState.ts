import { useLocation } from 'react-router-dom'

export function useLocationState<T>(): T {
  const location = useLocation()

  return location.state as T
}
