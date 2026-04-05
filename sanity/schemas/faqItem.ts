import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faqItem',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question (EN)', type: 'string' }),
    defineField({ name: 'questionAr', title: 'Question (AR)', type: 'string' }),
    defineField({ name: 'answer', title: 'Answer (EN)', type: 'text' }),
    defineField({ name: 'answerAr', title: 'Answer (AR)', type: 'text' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['gettingStarted', 'services', 'pricing', 'results'] },
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
});
