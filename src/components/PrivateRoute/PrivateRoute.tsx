import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '@context/AuthProvider'

export const PrivateRoute: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return <>{children}</>
}
