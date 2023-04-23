import React from 'react'
import Chance from 'chance'
import {render, waitFor, act} from '@testing-library/react-native'

import Models, {PersonalizationCarouselModelProps} from '../src/Models'
import {getPersonalizationData} from '../src/api'
import {PersonalizationModel, ICatalogItem} from '../src/types'

jest.mock('../src/api', () => {
  return {
    getPersonalizationData: jest.fn().mockResolvedValue([
      {
        title: 'title',
        description: 'description',
        standard_features: {
          image_url_src: 'image_url_src',
        },
      } as Partial<ICatalogItem>,
    ]),
  }
})

describe('PersonalizationCarousel', () => {
  const chance = new Chance()
  let props:  PersonalizationCarouselModelProps
  beforeEach(() => {
    props = {
      apiKey: chance.string(),
      itemId: chance.string(),
      onPressItem: jest.fn(),
    }
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should render and load personalization data using correct apiKey and itemId', async () => {
    await waitFor(() => {
      render(<Models.BertModel {...props} />)
    })
    expect(getPersonalizationData).toBeCalledWith(props.apiKey, PersonalizationModel.BERT_MODEL, props.itemId, '')
  })
})
