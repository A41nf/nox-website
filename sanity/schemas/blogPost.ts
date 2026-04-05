import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title (EN)', type: 'string' }),
    defineField({ name: 'titleAr', title: 'Title (AR)', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'excerpt', title: 'Excerpt (EN)', type: 'text' }),
    defineField({ name: 'excerptAr', title: 'Excerpt (AR)', type: 'text' }),
    defineField({ name: 'body', title: 'Body (EN)', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'bodyAr', title: 'Body (AR)', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Training', 'Nutrition', 'Recovery', 'Mindset'] },
    }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'readTimeMinutes', title: 'Read Time (minutes)', type: 'number' }),
  ],
});
