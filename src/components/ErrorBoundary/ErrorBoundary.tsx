import { Component, PropsWithChildren } from 'react'
import { Center, Container, Title } from '@mantine/core'

interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<PropsWithChildren, IErrorBoundaryState> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container size="lg" w="100%">
          <Center>
            <Title order={1}>Что-то пошло не так.</Title>
          </Center>
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
