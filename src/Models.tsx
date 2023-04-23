import React from 'react'
import capitalize from 'capitalize'

import PersonalizationCarousel, {PersonalizationCarouselProps} from './PersonalizationCarousel'
import {PersonalizationModel} from './types'

export function capitalizeModelName(name: string) {
  return capitalize.words(name.replace(/-/g, ' ')).replace(/\s/g, '')
}

export type PersonalizationCarouselModelProps = Partial<PersonalizationCarouselProps> & Pick<PersonalizationCarouselProps, 'apiKey' | 'itemId' | 'onPressItem'>

const MODELS = Object.values(PersonalizationModel)
  .reduce<{[key: string]: React.FC<PersonalizationCarouselModelProps>}>((acc, model) => {
    acc[capitalizeModelName(model)] = (props) => {
      return (
        <PersonalizationCarousel
        {...props}
        model={model}
        />
      )
    }
    return acc
  }, {})

export default MODELS
