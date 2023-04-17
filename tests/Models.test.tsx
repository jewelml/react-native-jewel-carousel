import {} from 'enzyme'

import Models from '../src/Models'
import {PersonalizationModel} from '../src/types'

describe('Models', () => {
  it('should define a React Functional Component for each PersonalizationModel', () => {
    Object.values(PersonalizationModel).forEach((model) => {
      expect(Models[model]).toBeDefined()
    })
  })
})