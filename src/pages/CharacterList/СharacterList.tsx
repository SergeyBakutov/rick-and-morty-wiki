import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Center,
  Flex,
  List,
  Loader,
  Radio,
  Space,
  Text,
  Title,
} from '@mantine/core'

import { ICharacter } from '@declarations/characters'
import { TCreated, sortByCreated } from '@helpers/sortByCreated'
import { useCategoryData } from '@hooks/useCategoryData'

export const CharacterList: React.FC = () => {
  const [page, setPage] = useState(1)
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const observer = useRef<IntersectionObserver>()
  const [created, setCreated] = useState<TCreated>(
    () => (searchParams.get('created') as TCreated) || 'ASC'
  )

  const { data, loading, error, hasMore } = useCategoryData<ICharacter>(
    'https://rickandmortyapi.com/api/character',
    page
  )

  useEffect(() => {
    const sorted = [...data]
    sorted.sort(sortByCreated(created))

    setCharacters(sorted)
  }, [data, created])

  const lastCharacterRef = useCallback(
    (node: HTMLLIElement) => {
      if (loading) return

      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1)
        }
      })

      if (node) {
        observer.current.observe(node)
      }
    },
    [hasMore, loading]
  )

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCreated(e.target.value as TCreated)
      setSearchParams({ created: e.target.value })
    },
    [setSearchParams]
  )

  return (
    <>
      <Flex align="center" gap="md">
        <Title order={2}>Character list</Title>
        <Radio
          color="dark"
          label="ASC"
          value="ASC"
          checked={created === 'ASC'}
          onChange={onChangeHandler}
        />
        <Radio
          color="dark"
          label="DESC"
          value="DESC"
          checked={created === 'DESC'}
          onChange={onChangeHandler}
        />
      </Flex>
      <Space h="md" />
      <List type="ordered" spacing="lg" size="lg">
        {characters.map((character, index) => {
          const { id, name } = character
          return (
            <List.Item
              ref={index + 1 === characters.length ? lastCharacterRef : null}
              key={id + name}
            >
              <Link to={`./${id}`} state={character}>
                {name}
              </Link>
            </List.Item>
          )
        })}
      </List>
      {loading && (
        <Center>
          <Loader color="dark" size="lg" />
        </Center>
      )}
      {error && (
        <Center>
          <Text color="red" size="xl">
            Something went wrong!
          </Text>
        </Center>
      )}
    </>
  )
}
