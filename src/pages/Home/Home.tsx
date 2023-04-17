import { Container, Title, Text, Space } from '@mantine/core'

import { ErrorBoundary } from '@components/ErrorBoundary'

export const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <Container size="lg" py="md">
        <Title order={1}>Home</Title>
        <Space h="md" />
        <Text size="xl">
          Welcome to the Universe of Rick and Morty. Here you can find
          information about characters, locations and episodes
        </Text>
      </Container>
    </ErrorBoundary>
  )
}
