import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'careerOpening',
  title: 'Career Openings',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Internal ID / Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({ name: 'title', title: 'Title (AR)', type: 'string' }),
    defineField({ name: 'titleEn', title: 'Title (EN)', type: 'string' }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full Time', value: 'full' },
          { title: 'Part Time', value: 'part' },
        ],
        layout: 'radio',
      },
      initialValue: 'full',
    }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'description', title: 'Description (AR)', type: 'text', rows: 5 }),
    defineField({
      name: 'requirements',
      title: 'Requirements (AR)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'isOpen', title: 'Open for Applications', type: 'boolean', initialValue: true }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'location',
      isOpen: 'isOpen',
    },
    prepare({ title, subtitle, isOpen }) {
      return {
        title: title || 'Untitled career opening',
        subtitle: `${isOpen === false ? 'Closed' : 'Open'}${subtitle ? ` • ${subtitle}` : ''}`,
      };
    },
  },
});
