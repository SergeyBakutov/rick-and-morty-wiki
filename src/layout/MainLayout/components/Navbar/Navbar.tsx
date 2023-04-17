import { Link } from 'react-router-dom'

import { Group, Text } from '@mantine/core'

export const Navbar: React.FC = () => {
  return (
    <Group spacing="md">
      <Link to="/">
        <Text size="xl" span>
          Home
        </Text>
      </Link>
      <Link to="/categories">
        <Text size="xl" span>
          Categories
        </Text>
      </Link>
    </Group>
  )
}
