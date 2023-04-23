import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Space, Title, Text, Container } from '@mantine/core'

export const NotFound: React.FC = () => {
  const [timer, setTimer] = useState(3)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)
    if (timer === 0) {
      navigate('/')
    }
    return (): void => clearInterval(interval)
  }, [navigate, timer])

  return (
    <Container size="lg" py="md">
      <Title order={1}>Page not found</Title>
      <Space h="md" />
      <Text size="xl">Return to Home in {timer} sec</Text>
    </Container>
  )
}
