import { Block } from "payload";

export const Translations: Block = {
    slug: 'translations',
    labels: {
        singular: {
            en: 'Translations',
            de: 'Übersetzungen',
        },
        plural: {
            en: 'Translations',
            de: 'Übersetzungen',
        }
    },
    fields: [
        {
            name: 'menu',
            type: 'text',
            label: {
                en: 'Menu',
                de: 'Menü',
            },
            required: true,
            localized: true,
        },
        {
            name: 'data-privacy',
            type: 'text',
            label: {
                en: 'Data Privacy',
                de: 'Datenschutz',
            },
            required: true,
            localized: true,
        },
        {
            name: 'imprint',
            type: 'text',
            label: {
                en: 'Imprint',
                de: 'Impressum',
            },
            required: true,
            localized: true,
        },
        {
            name: 'rights',
            type: 'text',
            label: {
                en: 'Rights Reserved',
                de: 'Rechte vorbehalten',
            },
            required: true,
            localized: true,
        },
        {
            name: 'events',
            type: 'text',
            label: {
                en: 'Events',
                de: 'Veranstaltungen',
            },
            required: true,
            localized: true,
        },
        {
            name: 'clothing',
            type: 'text',
            label: {
                en: 'Clothing',
                de: 'Mode',
            },
            required: true,
            localized: true,
        },

    ]
}