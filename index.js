// main index.js

import React, {useState, useEffect} from 'react'
import {View, Image, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'

import {getPersonalizationData} from './api'

const CarouselImage = (uri) => {
  return (
    <View>
      <Image source={{uri: uri}} />
    </View>
  )
}

const CarouselText = (text) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

const CarouselEntry = (image, text) => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <CarouselImage uri={image}/>
      <CarouselText text={text}/>
    </TouchableOpacity>
  )
}

const PersonalizationCarousel = (key, item_id, model, unique_id = '') => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const response = await getPersonalizationData(key, model, item_id, unique_id)
        setItems(response)
      } catch (err) {}
      setIsLoading(false)
    })()
  }, [key, item_id, unique_id, model])

  const renderItem = (image, text) => {
    return (
      <CarouselEntry image={image} text={text}/>
    )
  }

  return isLoading ? <ActivityIndicator size="large"/> : (
    <View>
      <Carousel
        data={items}
        renderItem={item => {
          return renderItem(item.standard_features.image_url_src, item.title)
        }}
        onSnapToItem={(index) => setActiveSlide(index)}
        loop={true}
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
      />
    </View>
  )
}

export default PersonalizationCarousel
