## Classes

<dl>
<dt><a href="#SliderEntry">SliderEntry</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#PersonalizationCarousel">PersonalizationCarousel(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>PersonalizationCarousel is a component that renders a carousel of items.
Also accepts all props for the Carousel component from react-native-snap-carousel.</p>
</dd>
</dl>

<a name="SliderEntry"></a>

## SliderEntry
**Kind**: global class  
<a name="new_SliderEntry_new"></a>

### new SliderEntry(props)
This is a component that renders a single slide in the carousel.

**Returns**: <code>JSX.Element</code> - - The JSX for the component.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | Props for the JSX component. |
| props.data | <code>object</code> | The catalog item data for the slide. |
| props.even | <code>boolean</code> | Whether the slide is even. |
| props.parallax | <code>boolean</code> | Whether the slide has parallax. |
| props.parallaxProps | <code>object</code> | The parallax properties. |
| props.onPressItem | <code>function</code> | The function to call when the slide is pressed. |
| [props.renderTitle] | <code>function</code> | Custom render function to generate JSX element for title. |
| [props.renderSubtitle] | <code>function</code> | Custom render function to generate JSX element for subtitle. |

<a name="PersonalizationCarousel"></a>

## PersonalizationCarousel(props) ⇒ <code>JSX.Element</code>
PersonalizationCarousel is a component that renders a carousel of items.
Also accepts all props for the Carousel component from react-native-snap-carousel.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The JSX for the component.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | Props for the JSX component. |
| props.apiKey | <code>string</code> | The API key for the integration. |
| props.itemId | <code>string</code> | The item ID for the item to get recommendations for. |
| props.model | <code>string</code> | The model to use for the recommendations. |
| props.uniqueId | <code>string</code> | The unique ID for the user. |
| props.pagination | <code>object</code> | The pagination options object. |
| props.onPressItem | <code>function</code> | The function to call when an item is pressed. |

