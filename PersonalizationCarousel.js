// main index.js

import React, {useState, useEffect} from 'react'
import {View, ActivityIndicator} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'

import {getPersonalizationData} from './api'
import SliderEntry from './SliderEntry'

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
const PersonalizationCarousel = (props) => {
  const [items, setItems] = useState([])
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

  const renderItem = (item) => {
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
        currentItem={activeSlide}
        data={items}
        renderItem={({item}) => {
          return renderItem(item)
        }}
        onSnapToItem={(index) => setActiveSlide(index)}
        loop={true}
        sliderWidth={400}
        itemWidth={400}
        {...props}
      />
      <Pagination
        dotsLength={items.length}
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
