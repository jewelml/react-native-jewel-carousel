const API_BASE_URL = 'https://repersonalize.jewelml.io/c/p/';

export function getPersonalizationURL(key, model, item_id, unique_id) {
  return `${API_BASE_URL}${key}/l?integration_id=${key}&model=${model}&item_id=${item_id}&unique_id=${unique_id}`
}

export async function getPersonalizationData(key, model, item_id, unique_id) {
  return fetch(getPersonalizationURL(key, model, item_id, unique_id))
    .then((response) => response.json())
}