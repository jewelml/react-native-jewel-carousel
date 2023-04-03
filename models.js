import PersonalizationCarousel from "./PersonalizationCarousel"

export const BERT = (props) => {
  return (
    <PersonalizationCarousel
      model="bert-model"
      {...props}
    />
  )
}