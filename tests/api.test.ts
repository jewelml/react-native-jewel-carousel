import Chance from 'chance'

import {getPersonalizationURL, getPersonalizationData} from '../src/api'
import {ICatalogItem} from '../src/types'

describe('api', () => {
  const chance = new Chance()

  describe('getPersonalizationURL', () => {
    it('should return a valid URL', () => {
      const key = chance.string()
      const model = chance.string()
      const item_id = chance.string()
      const unique_id = chance.string()
      const url = getPersonalizationURL(key, model, item_id, unique_id)
      expect(url).toEqual('https://repersonalize.jewelml.io/c/p/' + key + '/l?integration_id=' + key + '&model=' + model + '&item_id=' + item_id + '&unique_id=' + unique_id)
    })
  })
  describe('getPersonalizationData', () => {
    let mockCatalogItem: Partial<ICatalogItem>
    beforeEach(() => {
      mockCatalogItem = {
        _id: chance.string(),
        name: chance.string(),
      }
      jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve([mockCatalogItem]),
        } as Response),
      )
    })
    afterEach(() => {
      jest.clearAllMocks()
    })
    it('should return a valid response', async () => {
      const key = chance.string()
      const model = chance.string()
      const item_id = chance.string()
      const unique_id = chance.string()
      const response = await getPersonalizationData(key, model, item_id, unique_id)
      expect(response[0]._id).toEqual(mockCatalogItem._id)
    })
  })
})