NOTE: 
*ONLY RELEASE THROUGH CI/CD FOR ALL JEWEL SERVICES AND ONLY FROM MAIN / MASTER BRANCH. DO NOT BUILD AND RELEASE FROM A NON MASTER / MAIN BRANCH. ALL CHANGES IN OTHER BRANCHES MUST BE MERGED BACK TO MASTER AND MUST HAVE A PR. DO NOT --FORCE OR --DELETE TO MERGE. MAKE SURE YOU ALWAYS PULL THE LATEST MASTER BEFORE SUBMITTING A PR. YOU ARE RESPONSIBLE FOR GETTING YOUR CODE REVIEWED AND INTO PRODUCTION WITHIN 24 HOURS OR LESS. DON'T LET YOUR PR SIT FOR MORE THAN 24 HOURS.*

# react-native-jewel-carousel

## Getting started

`$ npm install @jewel_ml/react-native-jewel-carousel --save`

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
