import {PersonalizationData} from './types'

const API_BASE_URL = 'https://repersonalize.jewelml.io/c/p/';

export function getPersonalizationURL(key: string, model: string, item_id: string, unique_id: string) {
  return `${API_BASE_URL}${key}/l?integration_id=${key}&model=${model}&item_id=${item_id}&unique_id=${unique_id}`
}

export async function getPersonalizationData(
  key: string,
  model: string,
  item_id: string,
  unique_id: string,
): Promise<PersonalizationData> {
  const response = await fetch(getPersonalizationURL(key, model, item_id, unique_id))
  return response.json()
}