import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'coach',
  title: 'Coaches',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name (EN)', type: 'string' }),
    defineField({ name: 'nameAr', title: 'Name (AR)', type: 'string' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio (EN)', type: 'text' }),
    defineField({ name: 'bioAr', title: 'Bio (AR)', type: 'text' }),
    defineField({ name: 'credentials', title: 'Credentials', type: 'string' }),
    defineField({ name: 'specialties', title: 'Specialties (EN)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'specialtiesAr', title: 'Specialties (AR)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
