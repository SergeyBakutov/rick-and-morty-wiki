import { Link, Outlet } from 'react-router-dom'
import { Container, Title, Text, Space, Group } from '@mantine/core'

import { useAuth } from '@context/AuthProvider'

export const Categories: React.FC = () => {
  const auth = useAuth()

  return (
    <Container size="lg" py="md">
      <Title order={1}>Categories</Title>
      <Space h="md" />
      {auth.user ? (
        <Text size="xl">Select the category you want to view</Text>
      ) : (
        <Text size="xl">To view categories, you need to log in</Text>
      )}
      <Group spacing="md" py="md">
        <Link to="./characters">
          <Text size="xl" span>
            Characters
          </Text>
        </Link>
        <Link to="./episodes">
          <Text size="xl" span>
            Episodes
          </Text>
        </Link>
        <Link to="./locations">
          <Text size="xl" span>
            Locations
          </Text>
        </Link>
      </Group>
      <Outlet />
    </Container>
  )
}
