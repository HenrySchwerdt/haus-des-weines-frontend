import { CollectionConfig } from "payload";

export const NormalItem: CollectionConfig = {
    slug: 'normal-item',
    labels: {
        singular: {
            en: 'Small Menu Item',
            de: 'Kleiner Menüpunkt',
        },
        plural: {
            en: 'Small Menu Items',
            de: 'Kleine Menüpunkte',
        }
    },
    admin: {
        group: {
            en: 'Menu',
            de: 'Menü',
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
            required: false,
        },
        {
            name: 'price',
            type: 'array',
            label: {
                en: 'Price',
                de: 'Preis',
            },
            fields: [
                {
                    name: 'value',
                    type: 'number',
                    required: true,
                },
            ]
        },
        {
            name: 'type',
            type: 'text',
            label: {
                en: 'Type',
                de: 'Typ',
            },
            type: 'relationship',
            relationTo: 'menu-type',
            hasMany: false,
            localized: true,
        }
    ]
}