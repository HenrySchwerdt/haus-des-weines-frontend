import { Block } from "payload";

export const OpeningHours: Block = {
    slug: 'opening-hours',
    labels: {
        singular: {
            en: 'Opening Hours',
            de: 'Öffnungszeiten',
        },
        plural: {
            en: 'Opening Hours',
            de: 'Öffnungszeiten',
        }
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: {
                en: 'Opening Hours',
                de: 'Öffnungszeiten',
            },
            required: true,
            localized: true,
        },
        {
            name: 'list',
            type: 'array',
            labels: {
                singular: {
                    en: 'Opening Hours',
                    de: 'Öffnungszeiten',
                },
                plural: {
                    en: 'Opening Hours',
                    de: 'Öffnungszeiten',
                }
            },
            fields: [
                {
                    name: 'timespan',
                    type: 'text',
                    label: {
                        en: 'Timespan',
                        de: 'Zeitspanne',
                    },
                    required: true,
                    localized: true,
                },
                {
                    name: 'hours',
                    type: 'text',
                    label: {
                        en: 'Hours',
                        de: 'Öffnungszeiten',
                    },
                    required: true,
                    localized: true,
                }
            ]
        },
    ]

}