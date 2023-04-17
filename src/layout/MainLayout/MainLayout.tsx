import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Center, Container, Flex, Header, Loader } from '@mantine/core'

import { AuthButton, Navbar } from './components'

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header height={100}>
        <Flex align="center" h="100%">
          <Container size="lg" w="100%">
            <Flex justify="space-between" align="center">
              <Navbar />
              <AuthButton />
            </Flex>
          </Container>
        </Flex>
      </Header>
      <Suspense
        fallback={
          <Container size="lg" py="xl">
            <Center>
              <Loader color="dark" />
            </Center>
          </Container>
        }
      >
        <Outlet />
      </Suspense>
    </>
  )
}
