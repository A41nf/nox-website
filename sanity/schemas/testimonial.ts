import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Client Name', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote (EN)', type: 'text' }),
    defineField({ name: 'quoteAr', title: 'Quote (AR)', type: 'text' }),
    defineField({ name: 'result', title: 'Result (EN)', type: 'string' }),
    defineField({ name: 'resultAr', title: 'Result (AR)', type: 'string' }),
    defineField({ name: 'duration', title: 'Duration (EN)', type: 'string' }),
    defineField({ name: 'durationAr', title: 'Duration (AR)', type: 'string' }),
    defineField({ name: 'featured', title: 'Show on Home Page', type: 'boolean' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
});
