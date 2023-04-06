import capitalize from 'capitalize'

import PersonalizationCarousel from './PersonalizationCarousel'

const MODELS = [
  'bert-model',
  'bpr-personalized-model',
  'bpr-product-model',
  'clicks-colabfilter-model',
  'colabfilter-personalized-long-model',
  'colabfilter-product-long-model',
  'consider-too',
  'content-enhanced-model',
  'content-filtered-model',
  'content-only-model',
  'deepfm-filtered-model',
  'deepfm-personalized-model',
  'deepfm-unfiltered-model',
  'department-bestseller-long-model',
  'department-bestseller-model',
  'fbt-colabfilter-long-model',
  'fbt-colabfilter-model',
  'full-colabfilter-model',
  'global-model-tps',
  'global-model-tsc',
  'global-similar-items',
  'logisticmf-personalized-model',
  'logisticmf-product-model',
  'personalized-colabfilter-model',
  'recently-viewed-items-local-storage',
  'retail',
  'retail-lmf',
  'revised-colabfilter-personalized-model',
  'revised-colabfilter-product-model',
  'similar-items',
  'similar-items-no-visuals',
  'simple-embedding-items',
  'top-selling-long-model',
  'top-selling-model'
].reduce((acc, model) => {
  acc[capitalize.words(model.replace(/-/g, ' ')).replace(/\s/g, '')] = (props) => {
    return (
      <PersonalizationCarousel
        model={model}
        {...props}
      />
    )
  }
  return acc
}, {})

export default MODELS
