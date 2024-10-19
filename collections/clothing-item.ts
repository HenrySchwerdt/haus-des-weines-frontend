import { CollectionConfig } from "payload";
export const ClothingItem: CollectionConfig = {
    slug: 'clothing',
    labels: {
        singular: {
            en: 'Clothing',
            de: 'Kleidung',
        },
        plural: {
            en: 'Clothing',
            de: 'Kleidung',
        }
    },
    admin: {
        group: {
            en: 'Clothing',
            de: 'Kleidung',
        }
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: {
                en: 'Title',
                de: 'Titel',
            },
            admin: {
                placeholder: {
                    en: 'Enter the title here',
                    de: 'Titel hier eingeben',
                }
            },
            required: true,
            localized: true,
        },
        {
            name: 'description',
            type: 'textarea',
            label: {
                en: 'Description',
                de: 'Beschreibung',
            },
            admin: {
                placeholder: {
                    en: 'Enter the description here',
                    de: 'Beschreibung hier eingeben',
                }
            },
            localized: true,
            required: true,
        },
        {
            name: 'price',
            type: 'number',
            label: {
                en: 'Price',
                de: 'Preis',
            },
            admin: {
                placeholder: {
                    en: 'Enter the price here',
                    de: 'Preis hier eingeben',
                }
            },
            required: true,
        },
        {
            name: 'salePrice',
            type: 'number',
            label: {
                en: 'Sale Price',
                de: 'Verkaufspreis',
            },
            admin: {
                placeholder: {
                    en: 'Enter the sale price here',
                    de: 'Verkaufspreis hier eingeben',
                }
            },
        },
        {
            name: 'image',
            type: 'upload',
            label: {
                en: 'Product Image',
                de: 'Produktbild',
            },
            relationTo: 'media',
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },
        {
            name: 'category',
            type: 'relationship',
            relationTo: 'clothing-categories',
            hasMany: false,
            required: true,
            localized: true,
        },
    ]

}