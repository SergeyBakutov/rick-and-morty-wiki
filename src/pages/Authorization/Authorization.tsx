import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Input, Space, Title } from '@mantine/core'

import { useAuth } from '@context/AuthProvider'
import { useLocationState } from '@hooks/useLocationState'

export const Authorization: React.FC = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const { from = '/' } = useLocationState<{ from?: string }>()
  const { signIn } = useAuth()

  const onChangeUsernameHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setUsername(event.target.value)
    },
    []
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    signIn(username, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <Container size="lg" py="md">
      <Title order={1}>Authorization</Title>
      <Space h="md" />
      <form onSubmit={handleSubmit}>
        <Input.Wrapper
          size="md"
          id="username"
          label="Username"
          maw={320}
          required
        >
          <Input
            id="username"
            size="md"
            type="text"
            name="username"
            onChange={onChangeUsernameHandler}
          />
        </Input.Wrapper>
        <Space h="md" />
        <Button color="dark" size="md" type="submit">
          Sign in
        </Button>
      </form>
    </Container>
  )
}

