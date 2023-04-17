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

import { ILocation } from '@declarations/locations'
import { TCreated, sortByCreated } from '@helpers/sortByCreated'
import { useCategoryData } from '@hooks/useCategoryData'

export const LocationList: React.FC = () => {
  const [page, setPage] = useState(1)
  const [locations, setLocations] = useState<ILocation[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const observer = useRef<IntersectionObserver>()
  const [created, setCreated] = useState<TCreated>(
    () => (searchParams.get('created') as TCreated) || 'ASC'
  )

  const { data, loading, error, hasMore } = useCategoryData<ILocation>(
    'https://rickandmortyapi.com/api/location',
    page
  )

  useEffect(() => {
    const sorted = [...data]
    sorted.sort(sortByCreated(created))

    setLocations(sorted)
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
        <Title order={2}>Location list</Title>
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
        {locations.map((location, index) => {
          const { id, name } = location
          return (
            <List.Item
              ref={index + 1 === locations.length ? lastCharacterRef : null}
              key={id + name}
            >
              <Link to={`./${id}`} state={location}>
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
