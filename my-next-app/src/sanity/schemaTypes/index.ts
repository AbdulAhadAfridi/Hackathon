import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import ContactFormSchema from './contact-form'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , ContactFormSchema],
}
