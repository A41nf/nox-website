import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'address', title: 'Address (EN)', type: 'string' }),
    defineField({ name: 'addressAr', title: 'Address (AR)', type: 'string' }),
    defineField({ name: 'hours', title: 'Opening Hours (EN)', type: 'string' }),
    defineField({ name: 'hoursAr', title: 'Opening Hours (AR)', type: 'string' }),
    defineField({ name: 'freshaUrl', title: 'Fresha Booking URL', type: 'url' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'tiktokUrl', title: 'TikTok URL', type: 'url' }),
  ],
});
