import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@mantine/core'

import { useAuth } from '@context/AuthProvider'

export const AuthButton: React.FC = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSignOut = () => {
    signOut(() => {
      navigate('/')
    })
  }

  if (!user) {
    return (
      <Button
        size="md"
        color="dark"
        onClick={(): void =>
          navigate('/login', { state: { from: location.pathname } })
        }
      >
        Sign in
      </Button>
    )
  }

  return (
    <Button size="md" color="dark" onClick={handleSignOut}>
      Sign out
    </Button>
  )
}
