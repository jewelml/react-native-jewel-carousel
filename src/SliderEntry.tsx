import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import {ParallaxImage} from 'react-native-snap-carousel'

import styles from './styles/SliderEntry.style'
import {ICatalogItem} from './types'

export interface SliderEntryProps {
  data: ICatalogItem
  even?: boolean
  parallax?: boolean
  parallaxProps?: any
  onPressItem?: (item: ICatalogItem) => void
  renderTitle?: (item: ICatalogItem) => JSX.Element
  renderSubtitle?: (item: ICatalogItem) => JSX.Element
}

/**
 * This is a component that renders a single slide in the carousel.
 * @class SliderEntry
 * @param {object} props - Props for the JSX component.
 * @param {object} props.data - The catalog item data for the slide.
 * @param {boolean} props.even - Whether the slide is even.
 * @param {boolean} props.parallax - Whether the slide has parallax.
 * @param {object} props.parallaxProps - The parallax properties.
 * @param {function} [props.onPressItem]- The function to call when the slide is pressed.
 * @param {function} [props.renderTitle] - Custom render function to generate JSX element for title.
 * @param {function} [props.renderSubtitle] - Custom render function to generate JSX element for subtitle.
 * @returns {JSX.Element} - The JSX for the component.
 */
export default class SliderEntry extends Component<SliderEntryProps> {
  get image() {
    const {
      data,
      parallax,
      parallaxProps,
      even,
    } = this.props;

    const illustration = data.standard_features.image_url_src

    return parallax ? (
      <ParallaxImage
        source={{uri: illustration}}
        containerStyle={[
          styles.imageContainer,
          even ? styles.imageContainerEven : {},
        ]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
      <Image source={{uri: illustration}} style={styles.image} />
    );
  }

  render() {
    const {
      data,
      even,
      onPressItem,
    } = this.props;

    const title = typeof this.props.renderTitle === 'function' ? this.props.renderTitle(data) : data.title
    const subtitle = typeof this.props.renderSubtitle === 'function' ? this.props.renderSubtitle(data) : data.description

    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}>
        {typeof title === 'string' ? title.toUpperCase() : title}
      </Text>
    ) : (
      false
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={ 
          (onPressItem ? onPressItem : () => {
            alert(`You've clicked '${title}'`);
          }) as any
        }>
        <View style={styles.shadow} />
        <View
          style={[
            styles.imageContainer,
            even ? styles.imageContainerEven : {},
          ]}>
          {this.image}
          <View
            style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}
          />
        </View>
        <View
          style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
          {uppercaseTitle}
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}>
            {subtitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
