# react-native-jewel-carousel

## Getting started

`$ npm install react-native-jewel-carousel --save`

## Usage
```javascript
import JewelCarousel from 'react-native-jewel-carousel';
import styles, {colors} from './styles/index.style';

const Carousel = () => {
  return (
    <JewelCarousel.BERT
      api_key="<API_KEY>"
      item_id="<ITEM_ID>"
      unique_id="<USER_UNIQUE_ID>"
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      inactiveSlideScale={0.95}
      inactiveSlideOpacity={1}
      enableMomentum={true}
      activeSlideAlignment={'start'}
      containerCustomStyle={styles.slider}
      contentContainerCustomStyle={styles.sliderContentContainer}
      activeAnimationType={'spring'}
      activeAnimationOptions={{
        friction: 4,
        tension: 40,
      }}
      pagination={{
        containerStyle: styles.paginationContainer,
        dotColor: 'rgba(255, 255, 255, 0.92)',
        dotStyle: styles.paginationDot,
        inactiveDotColor: colors.black,
        inactiveDotOpacity: 0.4,
        inactiveDotScale: 0.6,
        carouselRef: this._slider1Ref,
        tappableDots: !!this._slider1Ref,
      }}
    />
  )
}
```

## Docs[./docs/index.html]
