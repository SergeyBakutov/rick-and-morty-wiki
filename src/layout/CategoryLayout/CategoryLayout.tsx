import { Outlet } from 'react-router-dom'

import { PrivateRoute } from '@components/PrivateRoute'

export const CategoryLayout: React.FC = () => {
  return (
    <PrivateRoute>
      <Outlet />
    </PrivateRoute>
  )
}
