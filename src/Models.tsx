import React from 'react'
import capitalize from 'capitalize'

import PersonalizationCarousel, {PersonalizationCarouselProps} from './PersonalizationCarousel'
import {PersonalizationModel} from './types'

const MODELS = Object.values(PersonalizationModel).reduce<{[key: string]: React.FC<PersonalizationCarouselProps>}>((acc, model) => {
  acc[capitalize.words(model.replace(/-/g, ' ')).replace(/\s/g, '')] = (props: PersonalizationCarouselProps) => {
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
