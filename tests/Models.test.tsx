import {} from 'enzyme'

import Models, {capitalizeModelName} from '../src/Models'
import {PersonalizationModel} from '../src/types'

describe('Models', () => {
  let consoleSpy: jest.SpyInstance
  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'error')
    consoleSpy.mockReturnValue(null)
  })
  afterAll(() => {
    consoleSpy.mockClear()
  })
  it('should define a React Functional Component for each PersonalizationModel', () => {
    Object.values(PersonalizationModel).forEach((model) => {
      expect(Models[capitalizeModelName(model)]).toBeDefined()
    })
  })
})