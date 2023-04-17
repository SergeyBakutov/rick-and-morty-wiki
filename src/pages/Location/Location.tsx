import { Flex, Space, Title, Text } from '@mantine/core'

import { ILocation } from '@declarations/locations'
import { useLocationState } from '@hooks/useLocationState'

export const Location: React.FC = () => {
  const { name, type, dimension } = useLocationState<ILocation>()

  return (
    <Flex direction="column" align="center">
      <Title order={2}>{name}</Title>
      <Space h="xs" />
      <Flex direction="column" gap="md" p={20}>
        <Text size="xl">
          <Text fw={700} span>
            Name:
          </Text>{' '}
          {name}
        </Text>
        <Text size="xl">
          <Text fw={700} span>
            Type:
          </Text>{' '}
          {type}
        </Text>
        <Text size="xl">
          <Text fw={700} span>
            Dimension:
          </Text>{' '}
          {dimension}
        </Text>
      </Flex>
    </Flex>
  )
}
