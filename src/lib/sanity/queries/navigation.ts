import { client } from '../../../../lib/sanity'

export async function getNavigation() {
  return client.fetch(`*[_type == "navigation"][0]{ items }`)
}
