export default {
  name: 'navigation',
  title: 'Navigation Menu',
  type: 'document',
  fields: [
    {
      name: 'items',
      title: 'Nav Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'labelAr', title: 'Arabic Label', type: 'string' },
          { name: 'labelEn', title: 'English Label', type: 'string' },
          { name: 'href', title: 'Link', type: 'string' },
          { name: 'isActive', title: 'Active', type: 'boolean', initialValue: true },
        ]
      }]
    }
  ]
}
