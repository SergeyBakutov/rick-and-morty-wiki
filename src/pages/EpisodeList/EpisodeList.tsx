import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Center,
  Flex,
  List,
  Loader,
  Radio,
  Space,
  Title,
  Text,
} from '@mantine/core'

import { IEpisode } from '@declarations/episodes'
import { TCreated, sortByCreated } from '@helpers/sortByCreated'
import { useCategoryData } from '@hooks/useCategoryData'

export const EpisodeList: React.FC = () => {
  const [page, setPage] = useState(1)
  const [episodes, setEpisodes] = useState<IEpisode[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const observer = useRef<IntersectionObserver>()
  const [created, setCreated] = useState<TCreated>(
    () => (searchParams.get('created') as TCreated) || 'ASC'
  )

  const { data, loading, error, hasMore } = useCategoryData<IEpisode>(
    'https://rickandmortyapi.com/api/episode',
    page
  )

  useEffect(() => {
    const sorted = [...data]
    sorted.sort(sortByCreated(created))

    setEpisodes(sorted)
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
        <Title order={2}>Episode list</Title>
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
        {episodes.map((episode, index) => {
          const { id, name } = episode
          return (
            <List.Item
              ref={index + 1 === episodes.length ? lastCharacterRef : null}
              key={id + name}
            >
              <Link to={`./${id}`} state={episode}>
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
