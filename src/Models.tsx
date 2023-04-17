import React from 'react'
import capitalize from 'capitalize'

import PersonalizationCarousel, {PersonalizationCarouselProps} from './PersonalizationCarousel'
import {PersonalizationModel} from './types'

export function capitalizeModelName(name: string) {
  return capitalize.words(name.replace(/-/g, ' ')).replace(/\s/g, '')
}

const MODELS = Object.values(PersonalizationModel).reduce<{[key: string]: React.FC<PersonalizationCarouselProps>}>((acc, model) => {
  acc[capitalizeModelName(model)] = (props: PersonalizationCarouselProps) => {
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
