# react-native-jewel-carousel

## Getting started

`$ npm install react-native-jewel-carousel --save`

## Usage
```javascript
import React from 'react'
import JewelCarousel from 'react-native-jewel-carousel';
import {Dimensions} from 'react-native';
import styles, {colors} from './styles/index.style';

const Carousel = () => {
  const windowWidth = Dimensions.get('window').width
  return (
    <JewelCarousel.Models.BertModel
      api_key="<API_KEY>"
      item_id="<ITEM_ID>"
      unique_id="<USER_UNIQUE_ID>"
      sliderWidth={windowWidth}
      itemWidth={windowWidth/2}
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
      }}
    />
  )
}
```

#### Available Models

* BertModel
* BprPersonalizedModel
* BprProductModel
* ClicksColabfilterModel
* ColabfilterPersonalizedLongModel
* ColabfilterProductLongModel
* ConsiderToo
* ContentEnhancedModel
* ContentFilteredModel
* ContentOnlyModel
* DeepfmFilteredModel
* DeepfmPersonalizedModel
* DeepfmUnfilteredModel
* DepartmentBestsellerLongModel
* DepartmentBestsellerModel
* FbtColabfilterLongModel
* FbtColabfilterModel
* FullColabfilterModel
* GlobalModelTps
* GlobalModelTsc
* GlobalSimilarItems
* LogisticmfPersonalizedModel
* LogisticmfProductModel
* PersonalizedColabfilterModel
* RecentlyViewedItemsLocalStorage
* Retail
* RetailLmf
* RevisedColabfilterPersonalizedModel
* RevisedColabfilterProductModel
* SimilarItems
* SimilarItemsNoVisuals
* SimpleEmbeddingItems
* TopSellingLongModel
* TopSellingModel

## [Docs](./docs/API.md)
