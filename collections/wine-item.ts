import { CollectionConfig } from "payload";

export const WineItem: CollectionConfig = {
    slug: 'wine',
    labels: {
        singular: {
            en: 'Wine',
            de: 'Wein',
        },
        plural: {
            en: 'Wines',
            de: 'Weine',
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
            name: 'priceBottle',
            type: 'number',
            label: {
                en: 'Bottle Price',
                de: 'Flaschenpreis',
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
            name: 'harvest',
            type: 'text',
            label: {
                en: 'Harvest',
                de: 'Ernte',
            },
            admin: {
                placeholder: {
                    en: 'Enter the harvest here',
                    de: 'Ernte hier eingeben',
                }
            },
            required: false,
            localized: true,
        },
        {
            name: 'taste',
            type: 'text',
            label: {
                en: 'Taste',
                de: 'Geschmack',
            },
            admin: {
                placeholder: {
                    en: 'Enter the taste here',
                    de: 'Geschmack hier eingeben',
                }
            },
            required: true,
            localized: true,
        },
        {
            name: 'producer',
            label: {
                en: 'Producer',
                de: 'Produzent',
            },
            type: 'relationship',
            relationTo: 'producer',
            hasMany: false,
            required: true,
        },
        {
            name: 'type',
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