import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import ContactFormSchema from './contact-form'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , ContactFormSchema, order ],
}
