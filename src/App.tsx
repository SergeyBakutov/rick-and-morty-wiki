import { MantineProvider } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'

import { AuthProvider } from '@context/AuthProvider'
import { MainLayout } from '@layout/MainLayout'
import { CategoryLayout } from '@layout/CategoryLayout'
import { Home } from '@pages/Home'
import { Categories } from '@pages/Categories'
import { CharacterList } from '@pages/CharacterList'
import { Authorization } from '@pages/Authorization'
import { Character } from '@pages/Character'
import { NotFound } from '@pages/NotFound'
import { EpisodeList } from '@pages/EpisodeList'
import { Episode } from '@pages/Episode'
import { LocationList } from '@pages/LocationList'
import { Location } from '@pages/Location'

export function App() {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />}>
              <Route path="characters" element={<CategoryLayout />}>
                <Route index element={<CharacterList />} />
                <Route path=":id" element={<Character />} />
              </Route>
              <Route path="episodes" element={<CategoryLayout />}>
                <Route index element={<EpisodeList />} />
                <Route path=":id" element={<Episode />} />
              </Route>
              <Route path="locations" element={<CategoryLayout />}>
                <Route index element={<LocationList />} />
                <Route path=":id" element={<Location />} />
              </Route>
            </Route>
          </Route>
          <Route path="/login" element={<Authorization />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </MantineProvider>
  )
}
