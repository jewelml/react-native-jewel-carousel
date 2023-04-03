import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './styles/SliderEntry.style';

/**
 * This is a component that renders a single slide in the carousel.
 * @class SliderEntry
 * @param {object} props - Props for the JSX component.
 * @param {object} props.data - The data for the slide.
 * @param {string} props.data.title - The title of the slide.
 * @param {string} props.data.subtitle - The subtitle of the slide.
 * @param {string} props.data.illustration - The image for the slide.
 * @param {string} props.data.description - The description of the slide.
 * @param {boolean} props.even - Whether the slide is even.
 * @param {boolean} props.parallax - Whether the slide has parallax.
 * @param {object} props.parallaxProps - The parallax properties.
 * @param {function} props.onPressItem - The function to call when the slide is pressed.
 * @returns {JSX.Element} - The JSX for the component.
 */
export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object,
    onPressItem: PropTypes.func,
  };

  get image() {
    const {
      data: {illustration},
      parallax,
      parallaxProps,
      even,
    } = this.props;

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
      data: {title, subtitle},
      even,
      onPressItem,
    } = this.props;

    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}>
        {title.toUpperCase()}
      </Text>
    ) : (
      false
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={ onPressItem ? onPressItem : () => {
          alert(`You've clicked '${title}'`);
        }}>
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