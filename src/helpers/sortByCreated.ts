import { ILocation } from './../declarations/locations'
import { IEpisode } from './../declarations/episodes'
import { ICharacter } from '@declarations/characters'

type TCategory = ICharacter | IEpisode | ILocation

export type TCreated = 'ASC' | 'DESC'

export const sortByCreated =
  <CategoryItem extends TCategory>(created: TCreated) =>
  (current: CategoryItem, next: CategoryItem) => {
    const currentDateCreated = new Date(current.created).getTime()
    const nextDateCreated = new Date(next.created).getTime()

    if (created === 'DESC') {
      return nextDateCreated - currentDateCreated
    } else {
      return currentDateCreated - nextDateCreated
    }
  }
