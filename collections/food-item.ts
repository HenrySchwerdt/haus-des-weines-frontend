import { CollectionConfig } from "payload";

export const FoodItem: CollectionConfig = {
    slug: 'food',
    labels: {
        singular: {
            en: 'Food',
            de: 'Speise',
        },
        plural: {
            en: 'Foods',
            de: 'Speisen',
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
            name: 'number',
            type: 'number',
            label: {
                en: 'Number',
                de: 'Nummer',
            },
            admin: {
                placeholder: {
                    en: 'Enter the number here',
                    de: 'Nummer hier eingeben',
                }
            },
            required: true,
        },
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
    ]
}