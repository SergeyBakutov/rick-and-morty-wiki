import { Flex, Space, Title, Text } from '@mantine/core'

import { IEpisode } from '@declarations/episodes'
import { useLocationState } from '@hooks/useLocationState'

export const Episode: React.FC = () => {
  const { name, air_date, episode } = useLocationState<IEpisode>()

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
            Air date:
          </Text>{' '}
          {air_date}
        </Text>
        <Text size="xl">
          <Text fw={700} span>
            Episode:
          </Text>{' '}
          {episode}
        </Text>
      </Flex>
    </Flex>
  )
}
