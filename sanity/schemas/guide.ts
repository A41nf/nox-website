import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'guide',
  title: 'Guides',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title (EN)', type: 'string' }),
    defineField({ name: 'titleAr', title: 'Title (AR)', type: 'string' }),
    defineField({ name: 'description', title: 'Description (EN)', type: 'text' }),
    defineField({ name: 'descriptionAr', title: 'Description (AR)', type: 'text' }),
    defineField({ name: 'category', title: 'Category (EN)', type: 'string' }),
    defineField({ name: 'categoryAr', title: 'Category (AR)', type: 'string' }),
    defineField({ name: 'file', title: 'PDF File', type: 'file' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
});
