export interface ICatalogItem {
  _id: string
  name?: string
  title: string
  display_title?: string
  description?: string
  catalog_type?: string
  active?: boolean
  hidden?: boolean
  invalid?: boolean
  manually_disabled?: boolean
  manually_enabled?: boolean
  standard_features?: any
  product_features?: any
  hotel_features?: any
  destination_features?: any
  content_features?: any
  flight_features?: any
  vehicle_features?: any
  translation_features?: any
  raw_data?: any
  raw_data_link?: string
  associated_integration?: string
  associated_organization?: string
}

export type PersonalizationData = ICatalogItem[]

export enum PersonalizationModel {
  BERT_MODEL = 'bert-model',
  BPR_PERSONALIZED_MODEL = 'bpr-personalized-model',
  BPR_PRODUCT_MODEL = 'bpr-product-model',
  CLICKS_COLABFILTER_MODEL = 'clicks-colabfilter-model',
  COLABFILTER_PERSONALIZED_LONG_MODEL = 'colabfilter-personalized-long-model',
  COLABFILTER_PRODUCT_LONG_MODEL = 'colabfilter-product-long-model',
  CONSIDER_TOO = 'consider-too',
  CONTENT_ENHANCED_MODEL = 'content-enhanced-model',
  CONTENT_FILTERED_MODEL = 'content-filtered-model',
  CONTENT_ONLY_MODEL = 'content-only-model',
  DEEPFM_FILTERED_MODEL = 'deepfm-filtered-model',
  DEEPFM_PERSONALIZED_MODEL = 'deepfm-personalized-model',
  DEEPFM_UNFILTERED_MODEL = 'deepfm-unfiltered-model',
  DEPARTMENT_BESTSELLER_LONG_MODEL = 'department-bestseller-long-model',
  DEPARTMENT_BESTSELLER_MODEL = 'department-bestseller-model',
  FBT_COLABFILTER_LONG_MODEL = 'fbt-colabfilter-long-model',
  FBT_COLABFILTER_MODEL = 'fbt-colabfilter-model',
  FULL_COLABFILTER_MODEL = 'full-colabfilter-model',
  GLOBAL_MODEL_TPS = 'global-model-tps',
  GLOBAL_MODEL_TSC = 'global-model-tsc',
  GLOBAL_SIMILAR_ITEMS = 'global-similar-items',
  LOGISTICMF_PERSONALIZED_MODEL = 'logisticmf-personalized-model',
  LOGISTICMF_PRODUCT_MODEL = 'logisticmf-product-model',
  PERSONALIZED_COLABFILTER_MODEL = 'personalized-colabfilter-model',
  RECENTLY_VIEWED_ITEMS_LOCAL_STORAGE = 'recently-viewed-items-local-storage',
  RETAIL = 'retail',
  RETAIL_LMF = 'retail-lmf',
  REVISED_COLABFILTER_PERSONALIZED_MODEL = 'revised-colabfilter-personalized-model',
  REVISED_COLABFILTER_PRODUCT_MODEL = 'revised-colabfilter-product-model',
  SIMILAR_ITEMS = 'similar-items',
  SIMILAR_ITEMS_NO_VISUALS = 'similar-items-no-visuals',
  SIMPLE_EMBEDDING_ITEMS = 'simple-embedding-items',
  TOP_SELLING_LONG_MODEL = 'top-selling-long-model',
  TOP_SELLING_MODEL = 'top-selling-model',
}
