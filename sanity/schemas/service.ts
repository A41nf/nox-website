import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title (EN)', type: 'string' }),
    defineField({ name: 'titleAr', title: 'Title (AR)', type: 'string' }),
    defineField({ name: 'description', title: 'Description (EN)', type: 'text' }),
    defineField({ name: 'descriptionAr', title: 'Description (AR)', type: 'text' }),
    defineField({ name: 'benefits', title: 'Benefits (EN)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'benefitsAr', title: 'Benefits (AR)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'price', title: 'Price (EN)', type: 'string' }),
    defineField({ name: 'priceAr', title: 'Price (AR)', type: 'string' }),
    defineField({ name: 'icon', title: 'Icon name (lucide)', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
});
