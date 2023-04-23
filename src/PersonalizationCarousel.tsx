import React, {useState, useEffect} from 'react'
import {View, ActivityIndicator, Dimensions} from 'react-native'
import * as SnapCarousel from 'react-native-snap-carousel'

import {ICatalogItem, PersonalizationData, PersonalizationModel} from './types'
import {getPersonalizationData} from './api'
import SliderEntry from './SliderEntry'

const {Pagination, default: Carousel} = SnapCarousel

export type PersonalizationCarouselProps = {
  apiKey: string
  itemId: string
  model: PersonalizationModel
  uniqueId?: string
  pagination?: SnapCarousel.PaginationProperties
  onPressItem: (item: ICatalogItem) => void
  renderItem?: (item: ICatalogItem) => JSX.Element
} & Partial<SnapCarousel.CarouselProperties<ICatalogItem>>

/**
 * PersonalizationCarousel is a component that renders a carousel of items.
 * Also accepts all props for the Carousel component from react-native-snap-carousel.
 * @param {object} props Props for the JSX component.
 * @param {string} props.apiKey The API key for the integration.
 * @param {string} props.itemId The item ID for the item to get recommendations for.
 * @param {string} props.model The model to use for the recommendations.
 * @param {string} props.uniqueId The unique ID for the user.
 * @param {object} props.pagination The pagination options object.
 * @param {function} props.onPressItem The function to call when an item is pressed.
 * @returns {JSX.Element} The JSX for the component.
 */
const PersonalizationCarousel: React.FC<PersonalizationCarouselProps> = (props) => {
  const [items, setItems] = useState<PersonalizationData>([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const {
    apiKey: api_key,
    itemId: item_id,
    model,
    uniqueId: unique_id = '',
    pagination = {},
    onPressItem,
  } = props
  const windowWidth = Dimensions.get('window').width

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const response = await getPersonalizationData(api_key, model, item_id, unique_id)
        setItems(response)
      } catch (err) {}
      setIsLoading(false)
    })()
  }, [api_key, item_id, unique_id, model])

  const renderItem = (item: ICatalogItem) => {
    return (
      <SliderEntry
        data={item}
        onPressItem={onPressItem}
      />
    )
  }

  return isLoading ? <ActivityIndicator size="large"/> : (
    <View>
      <Carousel
        onSnapToItem={(index) => setActiveSlide(index)}
        loop={true}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        {...Object.assign({}, props, {currentItem: activeSlide, currentIndex: activeSlide})}
        data={items}
        renderItem={
          (
            props.renderItem
              ? ({item}: {item: ICatalogItem, index: number}) => (props.renderItem as any)(item)
              : ({item}: {item: ICatalogItem, index: number}) => renderItem(item)
            ) as any
        }
      />
      <Pagination
        dotsLength={items ? items.length : 0}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        {...pagination}
      />
    </View>
  )
}

export default PersonalizationCarousel
