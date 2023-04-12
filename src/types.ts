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
