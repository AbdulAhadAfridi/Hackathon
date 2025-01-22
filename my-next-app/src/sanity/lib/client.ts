import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skMQrBOo4UwzRaYLniSTdkqBGgmsaTghVIdyPKOb1eTqGGOal82MNH8I2JsNZSySs3hNeBIheXnhoJrGX2jWBPLgK63HyoSr47NPWPNF2f5ZIfFi3xv4KY4qnQ2xZUw3YDkn1rU2cpjuEIjvqaEFD7FpgVPrlADW1vrR5AVJAgGVP17Iq9LX"
})
