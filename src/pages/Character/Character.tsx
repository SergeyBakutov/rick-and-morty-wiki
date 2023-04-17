import { Flex, Image, Space, Text, Title } from '@mantine/core'

import { ICharacter } from '@declarations/characters'
import { useLocationState } from '@hooks/useLocationState'

export const Character: React.FC = () => {
  const { name, status, species, type, gender, image } =
    useLocationState<ICharacter>()

  return (
    <Flex direction="column" align="center">
      <Title order={2}>{name}</Title>
      <Space h="xs" />
      <Flex direction="column" gap="md" p={20}>
        <Image src={image} alt={name} width={250} />
        <Text size="xl">
          <Text fw={700} span>
            Name:
          </Text>{' '}
          {name}
        </Text>
        <Text size="xl">
          <Text fw={700} span>
            Status:
          </Text>{' '}
          {status}
        </Text>
        <Text size="xl">
          <Text fw={700} span>
            Species:
          </Text>{' '}
          {species}
        </Text>
        <Text size="xl">
          <Text fw={700} span>
            Type:
          </Text>{' '}
          {type}
        </Text>
        <Text size="xl">
          <Text fw={700} span>
            Gender:
          </Text>{' '}
          {gender}
        </Text>
      </Flex>
    </Flex>
  )
}
