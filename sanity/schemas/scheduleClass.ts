import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'scheduleClass',
  title: 'Group Schedule',
  type: 'document',
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
      options: { list: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'] },
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      options: { list: ['6:00 AM', '8:00 AM', '10:00 AM', '5:00 PM', '7:00 PM', '9:00 PM'] },
    }),
    defineField({ name: 'classType', title: 'Class Type (EN)', type: 'string' }),
    defineField({ name: 'classTypeAr', title: 'Class Type (AR)', type: 'string' }),
    defineField({ name: 'coach', title: 'Coach Name', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
  ],
});
