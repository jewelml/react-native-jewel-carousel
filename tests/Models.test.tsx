import React from 'react'

import Models, {capitalizeModelName} from '../src/Models'
import {PersonalizationModel} from '../src/types'

describe('Models', () => {
  it('should define a React Functional Component for each PersonalizationModel', () => {
    Object.values(PersonalizationModel).forEach((model) => {
      expect(Models[capitalizeModelName(model)]).toBeDefined()
    })
  })
})